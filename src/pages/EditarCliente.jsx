import { Form, useLoaderData, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/Formulario';
import ErrorMsj from '../components/ErrorMsj';
import { recuperarCliente, editarCliente } from '../data/Requests';

export async function action({ params, request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email');
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  const errores = [];

  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios');
  }

  if (!regex.test(email)) {
    errores.push('Email invalido');
  }

  if (errores.length > 0) {
    return errores;
  }

  await editarCliente(datos, params.clienteId);

  return redirect('/');
}

export async function loader({ params }) {
  const clienteId = params.clienteId;
  const cliente = await recuperarCliente(clienteId);

  return cliente;
}

const EditarCliente = () => {
  const errores = useActionData();
  const clienteAEditar = useLoaderData();

  return (
    <>
      <header>
        <h2 className="font-black text-blue-800 text-3xl">Editar Cliente</h2>
        <p className="text-sm mt-4">Editar informacion cliente</p>
      </header>
      <div className="mt-10 bg-white shadow-sm">
        <Form method="post" className="w-2/4  mx-auto py-5">
          {errores?.length > 0 &&
            errores.map((error, i) => {
              return <ErrorMsj key={i}>{error}</ErrorMsj>;
            })}
          <Formulario clienteAEditar={clienteAEditar} />
          <button
            type="submit"
            className="bg-blue-800 rounded hover:bg-blue-600 py-2 px-3 text-white font-black w-full mt-5"
          >
            Editar Cliente
          </button>
        </Form>
      </div>
    </>
  );
};

export default EditarCliente;

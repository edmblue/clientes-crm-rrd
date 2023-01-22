import { Form, useActionData, redirect } from 'react-router-dom';
import { agregarCliente } from '../data/Requests';
import Formulario from '../components/Formulario';
import ErrorMsj from '../components/ErrorMsj';

export async function action({ request }) {
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

  agregarCliente(datos);

  return redirect('/');
}

const AgregarCliente = () => {
  const errores = useActionData();

  return (
    <>
      <header>
        <h2 className="font-black text-blue-800 text-3xl">Agregar Cliente</h2>
        <p className="text-sm mt-4">Agrega un nuevo Cliente</p>
      </header>
      <div className="mt-10 bg-white shadow-sm">
        <Form method="post" className="w-2/4  mx-auto py-5" noValidate>
          {errores?.length > 0 &&
            errores.map((error, i) => {
              return <ErrorMsj key={i}>{error}</ErrorMsj>;
            })}
          <Formulario />
          <button
            type="submit"
            className="bg-blue-800 rounded hover:bg-blue-600 py-2 px-3 text-white font-black w-full mt-5"
          >
            Agregar Cliente
          </button>
        </Form>
      </div>
    </>
  );
};

export default AgregarCliente;

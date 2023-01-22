import { useNavigate, Form, redirect, useActionData } from 'react-router-dom';

import { eliminarCliente } from '../data/Requests';

export async function action({ params }) {
  await eliminarCliente(params.clienteId);
  return redirect('/');
}

const ItemCliente = ({ cliente }) => {
  const { nombre, telefono, email, empresa, id } = cliente;

  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>
          <p className="text-2xl">{nombre} </p>
          <p>{empresa}</p>
        </td>
        <td>
          <p>
            <span className="font-bold uppercase">Email: </span>
            {email}
          </p>
          <p>
            <span className="font-bold uppercase">Tel: </span>
            {telefono}
          </p>
        </td>
        <td className="flex justify-around p-5">
          <button
            onClick={() => navigate(`/clientes/${id}/editar`)}
            className="bg-blue-800 font-bold text-white py-2 px-6 rounded hover:bg-blue-500"
          >
            Editar
          </button>
          <Form
            method="post"
            onSubmit={(e) => {
              if (!confirm('Desea Eliminar este Cliente?')) {
                e.preventDefault();
              }
            }}
            action={`/cliente/${id}/destroy`}
          >
            <button
              type="submit"
              className="bg-red-800 font-bold text-white py-2 px-6 rounded hover:bg-red-500"
            >
              Borrar
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
};

export default ItemCliente;

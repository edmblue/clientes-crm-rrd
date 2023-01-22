import { useLoaderData } from 'react-router-dom';
import ItemCliente from '../components/ItemCliente';
import { obtenerClientes } from '../data/Requests';

export async function loader() {
  const resultado = await obtenerClientes();

  return resultado;
}

const Clientes = () => {
  const clientes = useLoaderData();

  return (
    <>
      <header>
        <h2 className="font-black text-blue-800 text-3xl">Clientes</h2>
        <p className="text-sm mt-4">Administra Tus Clientes</p>
      </header>
      <div className="mt-10">
        <table className="w-full table-fixed">
          <thead className="bg-blue-800">
            <tr>
              <th className="font-bold text-white">Cliente</th>
              <th className="font-bold text-white">Contacto</th>
              <th className="font-bold text-white">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 ? (
              clientes.map((cliente) => {
                return <ItemCliente key={cliente.id} cliente={cliente} />;
              })
            ) : (
              <tr>
                <td>
                  <p className="py-3 text-2xl font-black">
                    No hay clientes en su lista
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Clientes;

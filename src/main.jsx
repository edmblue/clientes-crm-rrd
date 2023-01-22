import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Clientes, { loader as loaderCliente } from './pages/Clientes';
import AgregarCliente, {
  action as actionAgregarCliente,
} from './pages/AgregarCliente';
import Error from './components/Error';
import EditarCliente, {
  action as actionEditarCliente,
  loader as loaderEditarCliente,
} from './pages/EditarCliente';
import { action as actionEliminarCliente } from './components/ItemCliente';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Clientes />,
        loader: loaderCliente,
        errorElement: <Error />,
      },
      {
        path: '/clientes/nuevo',
        element: <AgregarCliente />,
        action: actionAgregarCliente,
        errorElement: <Error />,
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: loaderEditarCliente,
        errorElement: <Error />,
        action: actionEditarCliente,
      },
      {
        path: '/cliente/:clienteId/destroy',
        action: actionEliminarCliente,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

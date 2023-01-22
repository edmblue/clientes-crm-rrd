import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="md:flex min-h-screen">
      <aside className="md:w-1/4 bg-blue-800 p-6">
        <h1 className="text-3xl md:text-4xl font-black text-white text-center">
          CRM - Clientes
        </h1>
        <nav className="mt-8 space-y-3">
          <Link
            to="/"
            className={`${
              location.pathname === '/' ? 'text-white' : 'text-slate-300'
            } block font-bold text-xl hover:text-slate-300`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              location.pathname === '/clientes/nuevo'
                ? 'text-white'
                : 'text-slate-300'
            } block font-bold text-xl hover:text-slate-300`}
          >
            Agregar Cliente
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 bg-gray-100 p-10 h-screen overflow-scroll scrollbar">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

const Formulario = ({ clienteAEditar }) => {
  return (
    <div className="space-y-3">
      <div className="">
        <label className="block font-black text-xl">Nombre</label>
        <input
          type="text"
          placeholder="Ingrese el nombre del cliente"
          className="mt-2 w-full px-4 py-2 border-4"
          name="nombre"
          defaultValue={clienteAEditar?.nombre}
        />
      </div>
      <div className="">
        <label className="block font-bold text-xl">Telefono</label>
        <input
          type="tel"
          placeholder="Ingrese el numero telefónico del Cliente"
          className="mt-2 w-full px-4 py-2 border-4"
          name="telefono"
          defaultValue={clienteAEditar?.telefono}
        />
      </div>
      <div className="">
        <label className="block font-bold text-xl">Empresa</label>
        <input
          type="text"
          placeholder="Ingrese la empresa del cliente"
          className="mt-2 w-full px-4 py-2 border-4"
          name="empresa"
          defaultValue={clienteAEditar?.empresa}
        />
      </div>
      <div className="">
        <label className="block font-bold text-xl">Email</label>
        <input
          type="email"
          placeholder="Ingrese el email del cliente"
          className="mt-2 w-full px-4 py-2 border-4"
          name="email"
          defaultValue={clienteAEditar?.email}
        />
      </div>
    </div>
  );
};

export default Formulario;

export const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const agregarCliente = async (datos) => {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resultado = respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const recuperarCliente = async (id) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const editarCliente = async (datos, id) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async (id) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
    });
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

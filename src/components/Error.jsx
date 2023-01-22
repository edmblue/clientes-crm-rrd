import { useRouteError } from 'react-router-dom';

const Error = () => {
  const errorMensaje = useRouteError().message;
  return (
    <>
      <header>
        <h2 className="font-black text-blue-800 text-3xl">Error</h2>
        <p className="text-sm mt-4">
          Solucione los errores mostrados y vuelva a intentar
        </p>
      </header>
      <div className="flex justify-center items-center h-full font-black text-center text-red-700 text-3xl">
        <p className="bg-black">{errorMensaje} </p>
      </div>
    </>
  );
};

export default Error;

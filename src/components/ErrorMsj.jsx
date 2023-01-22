const ErrorMsj = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center text-xl font-bold py-2 mb-2 rounded shadow-sm">
      <p>{children}</p>
    </div>
  );
};

export default ErrorMsj;

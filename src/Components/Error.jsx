import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-xl text-gray-700 mb-2">Something Went Wrong</h2>
        <h3 className="text-gray-500">
          {err.status} : {err.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;

const Grocery = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          🛒 Grocery Section
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Our <span className="font-semibold text-green-700">Grocery</span>{" "}
          service is <span className="italic">coming soon</span>.  
          Stay tuned for fresh fruits, vegetables, and daily essentials
          delivered to your doorstep.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default Grocery;

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center">
      {Array(16)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-48 h-72 bg-gray-200 rounded-xl shadow-md animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;

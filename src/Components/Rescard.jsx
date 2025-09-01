const Rescard = ({ resInfo }) => {
  const { name, cuisines, areaName, avgRating, costForTwo, cloudinaryImageId } =
    resInfo;

  return (
    <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
      <div className="p-2">
        <img
          className="h-40 w-full object-cover rounded-xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="resImg"
        />
      </div>
      <div className="px-4 pb-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">{name}</h2>
        <h3 className="text-sm text-gray-600 truncate">
          {cuisines.join(", ")}
        </h3>
        <h4 className="text-sm text-gray-500">{areaName}</h4>
        <div className="flex justify-between items-center mt-2 text-sm">
          <h5
            className={`px-2 py-1 rounded-lg text-white ${
              avgRating >= 4 ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            ⭐ {avgRating}
          </h5>
          <h5 className="text-gray-700 font-medium">{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export default Rescard;

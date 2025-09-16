const Rescard = ({ resInfo }) => {
  const { name, cuisines, areaName, avgRating, costForTwo, cloudinaryImageId } =
    resInfo;

  return (
    <div className="w-60 bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="p-2">
        <img
          className="h-36 w-full object-cover rounded-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="resImg"
        />
      </div>
      <div className="px-3 pb-3">
        <h2 className="text-base font-semibold text-gray-700 truncate">
          {name}
        </h2>
        <h3 className="text-xs text-gray-500 truncate">
          {cuisines.join(", ")}
        </h3>
        <h4 className="text-xs text-gray-400">{areaName}</h4>
        <div className="flex justify-between items-center mt-2 text-xs">
          <h5
            className={`px-2 py-1 rounded-md text-white ${
              avgRating >= 4 ? "bg-green-400" : "bg-yellow-400"
            }`}
          >
            ⭐ {avgRating}
          </h5>
          <h5 className="text-gray-600 font-medium">{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export default Rescard;

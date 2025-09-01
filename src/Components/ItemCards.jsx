const ItemCards = ({ items = [] }) => {
  return (
    <div className="p-4 space-y-6">
      {items.map((item) => {
        const info = item?.card?.info || {};
        const price =
          (typeof info?.price === "number" && info.price / 100) ||
          (typeof info?.defaultPrice === "number" && info.defaultPrice / 100) ||
          "";

        return (
          <div
            key={info?.id}
            className="flex flex-col sm:flex-row justify-between gap-5 pb-5 last:pb-0"
          >
            {/* Left Section */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg">
                {info?.name}
              </h3>
              <p className="text-green-700 font-medium">
                {price !== "" ? `₹${price}` : ""}
              </p>
              {info?.description && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {info.description}
                </p>
              )}
            </div>

            {/* Right Section */}
            {info?.imageId && (
              <div className="relative h-28 w-28 shrink-0">
                <img
                  className="h-full w-full object-cover rounded-xl shadow-md"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${info.imageId}`}
                  alt={info?.name || "item"}
                />
                <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md hover:bg-green-700 transition">
                  Add +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemCards;

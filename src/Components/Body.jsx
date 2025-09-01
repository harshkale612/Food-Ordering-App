import Rescard from "./Rescard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import VegRescard from "./VegRescard";

const Body = () => {
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  const [resList, setResList] = useState([]);
  const [value, setValue] = useState("");
  const VegRestaurent = VegRescard(Rescard);

  useEffect(() => {
    dataFetcher();
  }, []);

  const dataFetcher = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();

    const apiRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResList(apiRestaurants);
    setTotalRestaurants(apiRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          🚫 You are offline
        </h1>
        <h2 className="text-lg text-gray-600">
          Please check your internet connection
        </h2>
      </div>
    );
  }

  return (
    <div className="body max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Search Restaurant"
          />
          <button
            onClick={() => {
              setResList(() =>
                totalRestaurants.filter((res) =>
                  res.info.name
                    .toLocaleLowerCase()
                    .includes(value.toLocaleLowerCase())
                )
              );
            }}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setResList(() =>
                totalRestaurants.filter((res) => res.info.avgRating > 4.2)
              );
            }}
            className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition"
          >
            Top Restaurants
          </button>
        </div>
      </div>

      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resList.map((res) => (
            <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
              {res.info.veg ? (
                <VegRestaurent resInfo={res.info} />
              ) : (
                <Rescard resInfo={res.info} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCatogory from "./ResCatogory";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-gray-900">{info?.name}</h1>
      <h2 className="text-gray-600 mt-2 text-sm">
        {Array.isArray(info?.cuisines) ? info.cuisines.join(", ") : ""}
        {info?.costForTwoMessage ? ` • ${info.costForTwoMessage}` : ""}
      </h2>

      <div className="mt-8 space-y-6">
        {categories.map((cat, i) => (
          <ResCatogory key={i} data={cat?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;

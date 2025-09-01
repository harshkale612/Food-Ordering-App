import { useState } from "react";
import ItemCards from "./ItemCards";

const ResCatogory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const count = Array.isArray(data?.itemCards) ? data.itemCards.length : 0;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <button
        onClick={() => setShowItems((prev) => !prev)}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-50 hover:bg-gray-100 transition"
      >
        <span className="font-semibold text-lg text-gray-800">
          {data?.title} <span className="text-gray-500">({count})</span>
        </span>
        <span className="text-gray-600 text-xl">{showItems ? "▲" : "▼"}</span>
      </button>

      {showItems && (
        <div className="divide-y divide-gray-200">
          <ItemCards items={data?.itemCards || []} />
        </div>
      )}
    </div>
  );
};

export default ResCatogory;

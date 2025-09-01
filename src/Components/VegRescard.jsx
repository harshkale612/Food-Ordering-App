import Rescard from "./Rescard";

const VegRescard = (Rescard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
          🟢 Veg
        </span>
        <Rescard {...props} />
      </div>
    );
  };
};

export default VegRescard;

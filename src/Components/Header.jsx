import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center h-24 w-full max-w-7xl mx-auto px-8 bg-white shadow-md rounded-xl mt-4 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-xl object-contain"
          src={logo}
          alt="logo"
        />
        <h1 className="text-3xl font-extrabold text-orange-600 tracking-wide"></h1>
      </div>

      <div>
        <ul className="flex flex-wrap items-center gap-6 text-gray-700 text-lg font-semibold">
          <li className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100">
            <div
              className={`w-3 h-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span>{onlineStatus ? "Online" : "Offline"}</span>
          </li>

          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-lg hover:bg-orange-100 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg hover:bg-blue-100 transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg hover:bg-purple-100 transition"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="px-4 py-2 rounded-lg hover:bg-green-100 transition"
            >
              Grocery
            </Link>
          </li>
          {/* <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-lg hover:bg-yellow-100 transition"
            >
              Cart
            </Link>
          </li> */}

          <li>
            <button
              onClick={() =>
                setLogBtn((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
              className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              {logBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

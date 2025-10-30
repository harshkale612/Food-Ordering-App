import { useState, useEffect } from "react";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.520430&lng=73.856743&restaurantId=${resId}&isMenuUx4=true&submitAction=ENTER`;

      const res = await fetch(url);

      if (!res.ok) {
        console.log("⚠️ Response failed:", res.status);
        return;
      }

      const text = await res.text();
      if (!text) {
        console.log("⚠️ Empty response (CORS issue despite extension)");
        return;
      }

      const json = JSON.parse(text);
      setResInfo(json?.data);
    } catch (error) {
      console.log("❌ Fetch Error:", error.message);
    }
  };

  return resInfo;
};

export default useResMenu;

// import { useState, useEffect } from "react";

// const useResMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);
//   useEffect(() => {
//     fetchResMenu();
//   }, []);

//   const fetchResMenu = async () => {
//     const data = await fetch(
//       `
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5246091&lng=73.8786239&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
//     );

//     const json = await data.json();

//     setResInfo(json.data);
//   };

//   return resInfo;
// };

// export default useResMenu;

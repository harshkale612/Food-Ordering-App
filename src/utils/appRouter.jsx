import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Error from "../Components/Error";
import Body from "../Components/Body";
import ResMenu from "../Components/ResMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("../Components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1 className="m-2 text-4xl">Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default appRouter;

import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Main from "../Components/Main/Main";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Main />,
        index: true,
      },
      {
        element: <About />,
        path: "about",
      },
    ],
  },
]);

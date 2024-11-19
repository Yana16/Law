import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Main from "../Components/Main/Main";
// import Main2 from "../Components/Main2/Main2";
import About from "../Pages/About";
import Practice from "../Pages/Practice";

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
      {
        element: <Practice />,
        path: "practice",
      },
    ],
  },
]);

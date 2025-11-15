import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Movie from "../pages/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/movie/:movieId",
    element: <Movie />,
  },
]);

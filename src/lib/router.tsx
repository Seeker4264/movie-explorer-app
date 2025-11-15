import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Search from "../pages/Search";
import SearchResult from "../pages/SeachResult";
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
    path: "/search/:query",
    element: <SearchResult />,
  },
  {
    path: "/movie/:movieId",
    element: <Movie />,
  },
]);

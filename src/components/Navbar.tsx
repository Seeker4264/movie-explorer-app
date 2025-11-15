import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const currentPath = useLocation().pathname;

  return (
    <nav className="top-0 flex flex-row justify-center items-center w-full p-3">
      <ul className="relative flex flex-row justify-center items-center w-full gap-8">
        <h1 className="max-sm:hidden absolute top-0 left-8 text-2xl font-bold text-[#ddd]">
          MovieFinder
        </h1>
        <NavLink to={"/"} end>
          <div className="group relative m-0 p-0 w-fit h-fit">
            <li className="text-xl font-bold text-[#ccc] group-hover:text-white duration-100">
              Home
            </li>
            <div
              className={`${
                currentPath === "/" ? "" : "hidden"
              } absolute h-1 w-full mt-0.5 rounded-full bg-[#ccc] group-hover:bg-white duration-100`}
            />
          </div>
        </NavLink>
        <NavLink to={"/search"} end>
          <div className="group relative m-0 p-0 w-fit h-fit">
            <li className="text-xl font-bold text-[#ccc] group-hover:text-white duration-100">
              Search
            </li>
            <div
              className={`${
                currentPath === "/search" ? "" : "hidden"
              } absolute h-1 w-full mt-0.5 rounded-full bg-[#ccc] group-hover:bg-white duration-100`}
            />
          </div>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

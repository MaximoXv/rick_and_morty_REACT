import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { clx } from "../../utils/clx";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const showNavbar = () => {
    setNavbarState(true);
  };

  const unShowNavbar = () => {
    setNavbarState(false);
  };
  return (
    <>
      <div className="flex w-full items-center p-2 justify-between">
        <Link to={"/"} className="text-center font-semibold text-2xl">
          Rick & Morty{" "}
          <span className="font-extrabold text-blue-500">WiKi</span>
        </Link>
        <button
          onClick={showNavbar}
          className={clx(
            "px-2 py-1 self-end rounded-md border-2 bg-blue-200 border-blue-500 md:hidden hover:bg-blue-50 transition-all duration-300"
          )}
        >
          <i className={clx("font-bold text-blue-500 fa-solid fa-bars")}></i>
        </button>
        <div className="flex gap-2 items-center max-md:hidden ">
          <NavLink to="/" className={({ isActive }) =>
    isActive ? "text-blue-600 font-bold border-blue-600 border-b-2" : "text-slate-400"
  }>
           
              Home
            
          </NavLink>
          <NavLink to="/episodes" className={({ isActive }) =>
    isActive ? "text-blue-600 font-bold border-blue-600 border-b-2" : "text-slate-400"}>
            
              Episodes
            
          </NavLink>
          <NavLink to="/locations" className={({ isActive }) =>
    isActive ? "text-blue-600 font-bold border-blue-600 border-b-2" : "text-slate-400"}>
            
              Locations
            
          </NavLink>
        </div>
      </div>

      <div
        className={clx(
          "hidden flex-col items-center w-full h-screen bg-white fixed top-0 left-0 transition-all duration-300 z-10 max-md:flex",
          navbarState ? "left-[0%]" : "left-[-100%]"
        )}
      >
        <div className="flex w-full justify-end p-2">

        <button
          onClick={unShowNavbar}
          className={clx(
              "px-2 py-1 self-end rounded-md border-2 bg-red-100 border-red-500 md:hidden hover:bg-red-50 transition-all duration-300"
            )}
            >
          <i
            className={clx("font-bold text-red-500 fa-solid fa-x")}
            ></i>
        </button>
            </div>
        <NavLink
          className={clx(
            "w-full border-[1px] border-slate-100 py-1 px-3 hover:bg-slate-200 transition-all duration-300 flex justify-center"
          )}
          to="/"
          onClick={() => unShowNavbar()}
        >
          <span className="font-bold text-blue-600">Home</span>
        </NavLink>
        <NavLink
          className={clx(
            "w-full border-[1px] border-slate-100 py-1 px-3 hover:bg-slate-200 transition-all duration-300 flex justify-center"
          )}
          to="/episodes"
          onClick={() => unShowNavbar()}
        >
          <span className="font-bold text-blue-600">Episodes</span>
        </NavLink>
        <NavLink
          className={clx(
            "w-full border-[1px] border-slate-100 py-1 px-3 hover:bg-slate-200 transition-all duration-300 flex justify-center"
          )}
          to="/locations"
          onClick={() => unShowNavbar()}
        >
          <span className="font-bold text-blue-600">Locations</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;

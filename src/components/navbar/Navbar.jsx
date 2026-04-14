import { IoIosTimer } from "react-icons/io";
import { RxHome } from "react-icons/rx";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";

const navItem = [
  { id: 1, name: "Home", path: "/", navIcon: <RxHome /> },
  { id: 2, name: "Timeline", path: "/timeline", navIcon: <IoIosTimer /> },
  { id: 3, name: "Stats", path: "/stats", navIcon: <TfiStatsUp /> },
];

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div
        className="navbar relative
       w-full max-w-360 mx-auto "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItem.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    `${isActive && "font-semibold  bg-[#244D3F] text-white"} px-4 rounded-sm py-2.5 
                 `
                  }
                  key={item.id}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>
          <a className="font-extrabold absolute right-5 lg:hidden  lg: text-2xl">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </a>
          <a className="font-extrabold hidden lg:block text-2xl">
            Keen<span className="font-semibold text-[#244D3F]">Keeper</span>
          </a>
        </div>

        <div className="navbar-end">
          <ul className=" hidden lg:flex items-center">
            {navItem.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "font-semibold px-4 bg-[#244D3F] text-white"}
                      text-[#64748B]  rounded-sm py-2.5 px-4
                 `
                }
                key={item.id}
                to={item.path}
              >
                <p className="flex items-center gap-1">
                  <span className="text-xl">{item.navIcon}</span> {item.name}
                </p>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

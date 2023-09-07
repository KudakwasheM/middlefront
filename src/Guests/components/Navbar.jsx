import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ route }) => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full bg-white z-10 sticky top-0 shadow-md">
      <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-4">
        {/* <div className="flex justify-between items-center h-24 max-w-[1500px] mx-auto px-4 shadow-lg z-50 fixed w-full top-0"> */}
        <Link to="/">
          <h1 className="w-full text-3xl font-bold text-[rgb(0,223,154)]">
            Middle.
          </h1>
        </Link>
        <ul className="hidden md:flex items-center justify-between">
          <li className="hover:text-[rgb(0,223,154)] mr-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          {/* <li className="p-4">Resources</li> */}
          <li className="hover:text-[rgb(0,223,154)] mr-5">
            <NavLink
              to="/proposals"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                  : ""
              }
            >
              Proposals
            </NavLink>
          </li>
          <li className="hover:text-[rgb(0,223,154)] mr-5">
            <NavLink
              to="/investors"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                  : ""
              }
            >
              Investors
            </NavLink>
          </li>
          <li className="hover:text-[rgb(0,223,154)] mr-5">
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                  : ""
              }
            >
              Testimonials
            </NavLink>
          </li>

          <Link to="/login" className="ml-5">
            <li className="py-2 px-3 bg-[rgba(0,223,154,0.08)] hover:text-[rgba(0,223,154,0.59)] rounded-full">
              Account
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={20} className="text-[rgb(0,223,154)]" />
          ) : (
            <AiOutlineMenu size={20} className="text-[rgb(0,223,154)]" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-[rgba(0,223,154,0.1)] bg-white ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex items-center h-24">
            <h1 className="w-full text-3xl font-bold text-[rgb(0,223,154)] m-4">
              Middle.
            </h1>
          </div>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-[rgba(0,223,154,0.1)] hover:text-[rgb(0,223,154)]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="p-4 border-b border-[rgba(0,223,154,0.1)] hover:text-[rgb(0,223,154)]">
              <NavLink
                to="/proposals"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                    : ""
                }
              >
                Proposals
              </NavLink>
            </li>
            <li className="p-4 border-b border-[rgba(0,223,154,0.1)] hover:text-[rgb(0,223,154)]">
              <NavLink
                to="/investors"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                    : ""
                }
              >
                Investors
              </NavLink>
            </li>
            <li className="p-4 border-b border-[rgba(0,223,154,0.1)] hover:text-[rgb(0,223,154)]">
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[rgb(0,223,154)] pb-2 text-[rgb(0,223,154)]"
                    : ""
                }
              >
                Testimonials
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

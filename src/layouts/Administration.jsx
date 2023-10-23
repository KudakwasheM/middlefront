import React, { useEffect, useState } from "react";
import {
  AiOutlineAccountBook,
  AiOutlineDashboard,
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineProject,
  AiOutlineTeam,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/authApiSlice";
import { logout } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Administration = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      const role = userInfo.role;
      switch (role) {
        case "Enterprenuer":
          navigate("/enterpreneur/dashboard");
          break;
        case "Investor":
          navigate("/investor/dashboard");
          break;
        default:
          break;
      }
    }
  }, [userInfo]);
  return (
    <div className="h-screen max-w-screen grid grid-cols-6 bg-[rgb(240,240,240)]">
      <aside className="flex flex-col bg-white p-5 col-span-1 h-screen max-h-full">
        <h1 className="text-3xl font-bold text-[rgb(0,223,154)]">Capidea.</h1>
        <div className="flex flex-col flex-1 text-black pt-10">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "p-3 mb-1 w-full flex items-center bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-black"
                : "p-3 mb-1 w-full flex items-center hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:text-black"
            }
          >
            <span className="mr-2">
              <AiOutlineDashboard size={25} />
            </span>
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/projects"
            className={({ isActive }) =>
              isActive
                ? "p-3 mb-1 w-full flex items-center bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-black"
                : "p-3 mb-1 w-full flex items-center hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:text-black"
            }
          >
            <span className="mr-2">
              <AiOutlineProject size={25} />
            </span>
            Projects
          </NavLink>
          <NavLink
            to="/admin/investors"
            className={({ isActive }) =>
              isActive
                ? "p-3 mb-1 w-full flex items-center bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-black"
                : "p-3 mb-1 w-full flex items-center hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:text-black"
            }
          >
            <span className="mr-2">
              <AiOutlineProject size={25} />
            </span>
            Investors
          </NavLink>
          <NavLink
            to="/admin/funds"
            className={({ isActive }) =>
              isActive
                ? "p-3 mb-1 w-full flex items-center bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-black"
                : "p-3 mb-1 w-full flex items-center hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:text-black"
            }
          >
            <span className="mr-2">
              <AiOutlineDollar size={25} />
            </span>
            Funds
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "p-3 mb-1 w-full flex items-center bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-black"
                : "p-3 mb-1 w-full flex items-center hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:text-black"
            }
          >
            <span className="mr-2">
              <AiOutlineTeam size={25} />
            </span>
            Users
          </NavLink>
        </div>
        <div className="mt-2">
          <NavLink
            to="/"
            onClick={logoutHandler}
            className="text-red-500 p-3 mb-1 w-full flex items-center border border-red-500 hover:bg-red-500 hover:text-white shadow-[rgba(239,68,68,0.25)_0px_6px_12px_-2px,_rgba(239,68,68,0.5)_0px_3px_7px_-3px]"
          >
            <span className="mr-2">
              <AiOutlineLogout size={25} />
            </span>
            Logout
          </NavLink>
        </div>
      </aside>
      <div className="flex flex-col h-screen max-h-screen col-span-5">
        <div className="flex border-b h-14 items-center justify-end p-5 bg-white">
          {userInfo ? (
            <p className="flex items-center p-2  hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-full">
              {userInfo?.name}
              <span>
                <AiOutlineUser size={20} className="ml-2" />
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="flex-1 bg-white m-5 h-full max-h-full overflow-y-auto">
          <ToastContainer />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Administration;

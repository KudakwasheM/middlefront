import React from "react";
import "../Guests/css/Guest.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Guests/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Guests/components/Footer";

const Guests = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Guests;

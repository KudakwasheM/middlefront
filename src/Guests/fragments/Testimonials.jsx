import React, { useEffect, useState } from "react";
import Testimonial from "../components/Testimonial";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../../axiosClient";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const getTestimonials = async () => {
    setLoading(true);
    await axiosClient
      .get("/testimonials")
      .then((res) => {
        setLoading(false);
        console.log(res?.data?.testimonials);
        setTestimonials(res?.data?.testimonials);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.message);
      });
  };

  // const slideTestimonial = () => {
  //   setTimeout(() => {
  //     const isLast = currentIndex === testimonials.length - 1;
  //     const index = isLast ? 0 : currentIndex + 1;
  //     setCurrentIndex(index);
  //   }, 5000);
  // };

  useEffect(() => {
    getTestimonials();
    // refreshPage();
    return;
  }, []);
  return (
    <div className="bg-[rgba(0,223,154,0.05)] py-10">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col">
        <h2 className="text-3xl font-semibold mb-3">What Our Customers Say</h2>
        <p className="text-center mb-5">
          Read on what our investors and enterpreneurs say abuot us
        </p>
        <div className="flex-1">
          {testimonials > 0 ? (
            <>
              <Testimonial slides={testimonials} />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="">
          <Link className="py-2 px-3 bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] text-white rounded">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

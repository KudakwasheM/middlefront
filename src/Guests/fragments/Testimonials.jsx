import React, { useEffect, useState } from "react";
import Testimonial from "../components/Testimonial";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../../axiosClient";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTestimonials = async () => {
    setLoading(true);
    await axiosClient
      .get("/testimonials")
      .then((res) => {
        setLoading(false);
        setTestimonials(res?.data?.testimonials);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <div className="bg-[rgba(0,223,154,0.05)] py-10">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col">
        <h2 className="text-3xl font-semibold mb-3">What Our Customers Say</h2>
        <p className="text-center mb-5">
          Read on what our investors and enterpreneurs say abuot us
        </p>
        <div className="flex-1">
          {testimonials.length > 0 ? (
            <>
              <Testimonial slides={testimonials} />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="">
          <Link
            to="/testimonials"
            className="py-2 px-3 bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] text-white rounded"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

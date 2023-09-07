import React from "react";

const Hero = () => {
  return (
    <div className="hero w-full">
      <div className="h-full bg-[rgba(0,0,0,0.7)]">
        <div className="flex flex-col items-center justify-around h-full lg:w-[800px] mx-auto text-white text-center py-14 px-5">
          <h2 className="text-4xl">
            Connecting Great Minds and Awesome Investors
          </h2>
          <h1 className="text-8xl text-[rgb(0,223,154)] font-bold">
            The Middle.
          </h1>
          <p className="text-xl">
            Where great businesses and great people meet. We bring together
            businesses looking for investment and investors with the capital,
            contacts and knowledge to help them succeed.
          </p>
          <button className="bg-[rgb(0,223,154)] px-5 py-2 text-black hover:scale-105 hover:bg-black hover:text-[rgb(0,223,154)]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

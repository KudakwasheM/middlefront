import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <InfinitySpin width="200" color="#4fa94d" />
      <p className="text-[#4fa94d] text-lg">Loading...</p>
    </div>
  );
};

export default Loader;

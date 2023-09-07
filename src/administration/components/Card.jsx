import React from "react";
import { AiOutlinePercentage } from "react-icons/ai";

const Card = ({ title, value }) => {
  return (
    <div className="flex bg-gray-100 p-3">
      <div className="flex-1">
        <h2 className="font-bold">{value}</h2>
        <p className="text-sm">{title}</p>
      </div>
      <div className="p-3 bg-[rgb(0,223,154)] text-white">
        <AiOutlinePercentage size={20} />
      </div>
    </div>
  );
};

export default Card;

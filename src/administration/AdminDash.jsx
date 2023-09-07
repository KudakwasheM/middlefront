import React from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import Card from "./components/Card";

const AdminDash = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-4">
        <Card title="Projects" value={50} />
        <Card title="Investors" value={50} />
        <Card title="Enterprenuers" value={50} />
        <Card title="Funds" value={50} />
      </div>
    </div>
  );
};

export default AdminDash;

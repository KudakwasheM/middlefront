import React, { useEffect, useState } from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import Card from "./components/Card";
import axiosClient from "../axiosClient";

const AdminDash = () => {
  const [projects, setProjects] = useState(0);
  const [users, setUsers] = useState(0);
  const [funds, setFunds] = useState(0);
  const [investors, setInvestors] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    await axiosClient.get("/projects").then((res) => {
      let projectsCount = res.data.projects.length;
      setProjects(projectsCount);
    });

    await axiosClient.get("/users").then((res) => {
      let usersCount = res.data.users.length;
      setUsers(usersCount);
    });

    await axiosClient.get("/funds").then((res) => {
      let fundsAmount = 0;
      for (let i = 0; i < res.data.funds.length; i++) {
        fundsAmount += res.data.funds[i].amount;
      }
      setFunds(fundsAmount);
    });

    await axiosClient.get("/users/investors").then((res) => {
      let usersCount = res.data.users.length;
      setInvestors(usersCount);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-4">
        <Card title="Projects" value={projects} />
        <Card title="Investors" value={investors} />
        <Card title="Funds Raised" value={funds} />
        <Card title="Users" value={users} />
      </div>
      <div className="border my-5 p-3"></div>
    </div>
  );
};

export default AdminDash;

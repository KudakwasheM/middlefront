import React, { useEffect, useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlinePercentage,
} from "react-icons/ai";
import Card from "./components/Card";
import axiosClient from "../axiosClient";
import { Link } from "react-router-dom";
import moment from "moment";
import CustomLoader from "../Guests/components/CustomLoader";

const AdminDash = () => {
  const [projects, setProjects] = useState(0);
  const [users, setUsers] = useState(0);
  const [funds, setFunds] = useState([]);
  const [fundsAmount, setFundsAmount] = useState(0);
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
      setFunds(res.data.funds);
      let fundsAmounts = 0;
      for (let i = 0; i < res.data.funds.length; i++) {
        fundsAmounts += res.data.funds[i].amount;
      }
      setFundsAmount(fundsAmounts);
    });

    await axiosClient.get("/users/investors").then((res) => {
      let usersCount = res.data.users.length;
      setInvestors(usersCount);
    });

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="p-5">
          <div className="grid grid-cols-4 gap-4">
            <Card title="Projects" value={projects} />
            <Card title="Investors" value={investors} />
            <Card title="Funds Raised" value={fundsAmount} />
            <Card title="Users" value={users} />
          </div>
          <div className="my-5 p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <table className="w-full p-5">
              <thead className="px-5">
                <th className="text-start py-2 ">Amount</th>
                <th className="text-start py-2 ">Project</th>
                <th className="text-start py-2 ">Investor</th>
                <th className="text-start py-2 ">Created On</th>
                <th className="text-start py-2 ">Actions</th>
              </thead>
              <tbody>
                {funds.length > 0 ? (
                  <>
                    {funds.map((fund) => {
                      return (
                        <tr className="border-t">
                          <td className="py-3">{fund.amount}</td>
                          <td className="py-3">{fund.investor.name}</td>
                          <td className="py-3">{fund.project.name}</td>
                          <td className="py-3">
                            {moment(fund.createdAt).format("LL")}
                          </td>
                          <td className="py-3 flex justify-around items-center">
                            <Link to="">
                              <AiOutlineEye
                                size={22}
                                title="View"
                                className="text-green-500"
                              />
                            </Link>
                            <Link to={`/admin/funds/edit/${fund._id}`}>
                              <AiOutlineEdit
                                size={22}
                                title="Edit"
                                className="text-sky-500"
                              />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <tr cols={4} className="text-center">
                    No Funds Found
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDash;

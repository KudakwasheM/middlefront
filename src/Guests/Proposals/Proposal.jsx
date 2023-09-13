import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axiosClient from "../../axiosClient";
import CustomLoader from "../components/CustomLoader";

const Proposal = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useState(localStorage.getItem("userInfo"));

  const getProject = async () => {
    setLoading(true);
    await axiosClient
      .get(`/projects/${id}`)
      .then((res) => {
        setLoading(false);
        console.log(res?.data?.project);
        setProject(res?.data?.project);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.message);
      });
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <div className="banner h-[50vh]">
            <div className=" flex flex-col h-full px-5 lg:w-[1200px] mx-auto">
              <div className="flex-1"></div>
              <div className="py-5 text-white">
                <h1 className="text-2xl mb-2">{project.name}</h1>
                <p className="mb-2 flex items-center text-sm">
                  <GoLocation size={18} className="text-blue-500" />
                  <span className="ml-1">{project.location}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[1200px] mx-auto px-5 pt-5 pb-10">
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Details</Tab>
                <Tab>Documents</Tab>
              </TabList>

              <TabPanel>
                <div className="py-10 px-0 sm:px-5  grid grid-col-1 lg:grid-cols-3 gap-5">
                  <div className="col-span-1 lg:col-span-2">
                    <h1 className="text-2xl">Short Description</h1>
                    <p>{project.details.short_summary}</p>
                  </div>
                  <div className="">
                    <h1 className="text-2xl">Overview</h1>
                    <table className="w-full mt-2">
                      <tbody>
                        <tr className="border-t">
                          <td className="py-2">Target</td>
                          <td className="py-2 font-semibold">
                            US$ {project.expected_fund}
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2">Investor's Percentage</td>
                          <td className="py-2 font-semibold">
                            {project.investor_percentage}%
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2">Raised Investments</td>
                          <td className="py-2 font-semibold">
                            US$ {project.raised_fund}
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2">Stage</td>
                          <td className="py-2 font-semibold">
                            {project.stage}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                {user ? (
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="col-span-3">
                      <div className="mb-3">
                        <h1 className="text-2xl">The Business</h1>
                        <p className="text-gray-700">
                          {project.details.description}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h1 className="text-2xl">Project Advantages</h1>
                        {project.details.advantages ? (
                          <>
                            {project.details.advantages.map((a) => {
                              return <p className="text-gray-700">{a}</p>;
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="mb-3">
                        <h1 className="text-2xl">The Deal</h1>
                        <p className="text-gray-700">{project.details.deal}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[250px] w-full lg:w-[1200px]">
                    <div className="md:w-[300px] mx-auto flex flex-col h-full justify-center text-center">
                      <p>Sign up to view full details</p>
                      <p className="text-gray-500 py-3">
                        Discover the next big thing and invest
                      </p>
                      <Link
                        to="/register"
                        className="py-3 px-5 bg-[rgb(0,223,154)] text-white mb-2"
                      >
                        Create Account
                      </Link>
                      <p>
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="text-[rgb(0,223,154)] hover:underline"
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </TabPanel>
              <TabPanel>
                {user ? (
                  <h2>Any content 4</h2>
                ) : (
                  <div className="h-[250px] w-full lg:w-[1200px]">
                    <div className="md:w-[300px] mx-auto flex flex-col h-full justify-center text-center">
                      <p>Sign up to view full details</p>
                      <p className="text-gray-500 py-3">
                        Discover the next big thing and invest
                      </p>
                      <Link
                        to="/register"
                        className="py-3 px-5 bg-[rgb(0,223,154)] text-white mb-2"
                      >
                        Create Account
                      </Link>
                      <p>
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="text-[rgb(0,223,154)] hover:underline"
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </TabPanel>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
};

export default Proposal;

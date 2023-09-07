import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axiosClient from "../../axiosClient";
import { InfinitySpin } from "react-loader-spinner";

const Proposal = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

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
        <div className="flex flex-col justify-center items-center my-10">
          <InfinitySpin width="200" color="#4fa94d" />
          <p className="text-[#4fa94d] text-lg">Loading...</p>
        </div>
      ) : (
        <>
          <div className="banner h-[50vh]">
            <div className=" flex flex-col h-full w-[1200px] mx-auto">
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
          <div className="w-[1200px] mx-auto pt-5 pb-10">
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Details</Tab>
                <Tab>Documents</Tab>
              </TabList>

              <TabPanel>
                <div className="py-10 px-5 grid grid-cols-3 gap-5">
                  <div className="col-span-2">
                    <h1 className="text-2xl">Short Description</h1>
                    <p>{project.details.short_summary}</p>
                  </div>
                  <div className="col-span-1">
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
                <div className="grid grid-cols-4">
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
              </TabPanel>
              <TabPanel>
                <h2>Any content 4</h2>
              </TabPanel>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
};

export default Proposal;

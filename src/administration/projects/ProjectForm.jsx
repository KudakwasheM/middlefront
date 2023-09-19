import React, { useEffect, useState } from "react";
import { AiOutlineBackward, AiOutlineStepBackward } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSetProjectMutation } from "../../slices/projectsApiSlice";
import { addProject } from "../../slices/projectsSlice";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { industries } from "../../layouts/constants/Industries";
import { toast } from "react-toastify";
import { useGetEnterpreneursQuery } from "../../slices/usersApiSlice";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import axiosClient from "../../axiosClient";
import CustomLoader from "../../Guests/components/CustomLoader";

const ProjectForm = () => {
  const { id } = useParams();
  const [detailsId, setDetailsId] = useState("");
  const [memberIds, setMemberIds] = useState();
  const [loading, setLoading] = useState(false);
  const [proj, setProj] = useState({
    name: "",
    website: "",
    location: "",
    mobile: "",
    industry: [],
    expected_fund: null,
    raised_fund: 0,
    investor_percentage: 0,
    stage: "",
    enterpreneur: "",
  });

  const [details, setDetails] = useState({
    short_summary: "",
    description: "",
    progress: "",
    advantages: [],
    deal: "",
    project_id: "",
  });

  const [teamMember, setTeamMember] = useState([
    {
      name: "",
      position: "",
      description: "",
      project_id: "",
    },
  ]);

  const [loadProject, setLoadProject] = useState(false);
  const [loadDetails, setLoadDetails] = useState(false);
  const [loadMember, setLoadMember] = useState(false);
  const [loadDoc, setLoadDoc] = useState(false);
  const [enterpreneurs, setEnterpreneurs] = useState([]);
  const [data, setData] = useState([]);
  // const [name, setName] = useState("");
  // const [website, setWebsite] = useState("");
  // const [location, setLocation] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [industry, setIndustry] = useState([]);
  // const [expectedFund, setExpectedFund] = useState(0);
  // const [raisedFund, setRaisedFund] = useState(0);
  // const [percentage, setPercentage] = useState(0);
  // const [stage, setStage] = useState("");
  // const [enter, setEnter] = useState("");

  const navigate = useNavigate();

  // const [project, setProject] = useState([]);
  const getData = async () => {
    setLoading(true);
    await axiosClient
      .get(`/projects/${id}`)
      .then((res) => {
        setLoading(false);
        setProj(res?.data?.project);
        const retrievedProject = res?.data?.project;
        const details = retrievedProject.details;
        setDetails(details);
        setDetails({ project_id: retrievedProject._id });
        setDetailsId(details._id);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.message);
      });
    await axiosClient.get(`/details/project/${id}`).then((res) => {
      console.log(res?.data);
    });
    await axiosClient
      .get(`/members/project/${id}`)
      .then((res) => {
        setLoading(false);
        setTeamMember(res?.data?.members);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.message);
      });
  };

  const dataz = [];
  const getEnterpreneurs = async () => {
    setLoading(true);
    await axiosClient
      .get("/users/enterpreneur")
      .then((res) => {
        setLoading(false);
        setEnterpreneurs(res?.data?.users);
        const users = res?.data?.users;
        for (let i = 0; i < users.length; i++) {
          const nigga = { value: users[i]._id, label: users[i].name };
          dataz.push(nigga);
        }

        setData(dataz);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.message);
      });
  };

  // const setLoad = () => {
  //   let users = enterpreneurs;
  //   console.log(users);
  //   for (let i = 0; i <= users.length; i++) {
  //     console.log(users[i]);
  //   }
  //   // users.forEach((u) => {
  //   //   const nigga = { value: u._id, label: u.name };
  //   //   setData((data) => [...data, nigga]);
  //   //   console.log(data);
  //   // });
  // };

  const saveProject = async (e) => {
    e.preventDefault();
    if (id) {
      setLoadProject(true);
      await axiosClient
        .put(`/projects/${id}`, proj)
        .then((res) => {
          setLoadProject(false);
          toast.success(res?.data?.message);
        })
        .catch((err) => {
          setLoadProject(false);
          toast.error(err?.response?.data?.message);
        });
    } else {
      setLoadProject(true);
      await axiosClient
        .post("/projects", proj)
        .then((res) => {
          setLoadProject(false);
          setDetails({ project_id: res?.data?.project?._id });
          toast.success(res?.data?.message);
        })
        .catch((err) => {
          setLoadProject(false);
          toast.error(err?.response?.data?.message);
        });
    }
  };

  const saveDetails = async (e) => {
    e.preventDefault();
    if (detailsId) {
      setLoadDetails(true);
      await axiosClient
        .put(`/details/${detailsId}`, details)
        .then((res) => {
          setLoadDetails(false);
          toast.success(res?.data?.message);
        })
        .catch((err) => {
          setLoadDetails(false);
          toast.error(err?.response?.data?.message);
        });
    } else {
      setLoadDetails(true);
      console.log(details);
      await axiosClient
        .post(`/details`, details)
        .then((res) => {
          setLoadDetails(false);
          toast.success(res?.data?.message);
        })
        .catch((err) => {
          setLoadDetails(false);
          toast.error(err?.response?.data?.message);
        });
    }
  };

  const saveMember = async (e) => {
    e.preventDefault();
    setLoadMember(true);
    await axiosClient
      .post("/members", teamMember)
      .then((res) => {
        setLoadMember(false);
      })
      .catch((err) => {
        setLoadMember(false);
        toast.error(err?.response?.data?.message);
      });
  };

  const changeEnter = (e) => {
    const enter = e.value;
    setProj({ ...proj, enterpreneur: enter });
  };

  const changeIndustry = (e) => {
    const inds = e.map(({ value }) => value);
    setProj({ ...proj, industry: inds });
  };

  if (id) {
    useEffect(() => {
      console.log(id);
      getData();
      getEnterpreneurs();
    }, []);
  }

  useEffect(() => {
    getEnterpreneurs();
    // setLoad();
  }, []);

  return (
    <div className="p-3 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-3 text-[rgba(0,223,154,0.65)]">
          Add Project
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-red-500 p-1 border-2 rounded-full border-red-500"
        >
          <BiArrowBack size={20} className="" />
        </button>
      </div>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="m-5 p-4 w-[500px] mx-auto border">
          <Tabs>
            <TabList>
              <Tab>Project</Tab>
              <Tab>Details</Tab>
              <Tab>The Team</Tab>
              <Tab>Documents</Tab>
            </TabList>

            <TabPanel>
              <h2 className="font-semibold mb-3">Project</h2>
              <div className="">
                <form>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Project Name</label>
                    <input
                      type="text"
                      className="border p-2"
                      value={proj.name}
                      placeholder="Enter your project name"
                      onChange={(e) =>
                        setProj({ ...proj, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Website (optional)</label>
                    <input
                      type="text"
                      value={proj.website}
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setProj({ ...proj, website: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      value={proj.location}
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setProj({ ...proj, location: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Mobile</label>
                    <input
                      type="text"
                      value={proj.mobile}
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setProj({ ...proj, mobile: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Industry</label>
                    <Select
                      // defaultValue={[colourOptions[2], colourOptions[3]]
                      // value={proj.industry.map(i=>{})}
                      isMulti
                      options={industries}
                      onChange={changeIndustry}
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Expected Fund</label>
                    <input
                      type="number"
                      value={proj.expected_fund}
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setProj({ ...proj, expected_fund: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Stage</label>
                    <input
                      type="text"
                      value={proj.stage}
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setProj({ ...proj, stage: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Raised Fund</label>
                    <input
                      type="number"
                      value={proj.raised_fund}
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setProj({ ...proj, raised_fund: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Investors Percentage</label>
                    <input
                      type="number"
                      value={proj.investor_percentage}
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setProj({
                          ...proj,
                          investor_percentage: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Enterpreneur</label>
                    <Select
                      options={data}
                      isClearable={true}
                      isSearchable={true}
                      onChange={changeEnter}
                    />
                  </div>
                  {/* {usersSelect} */}
                  <div className="">
                    <button
                      type="submit"
                      className="bg-[rgb(0,223,154)] py-2 w-full text-white"
                      onClick={saveProject}
                    >
                      {loadProject ? "...Loading" : "Save Project"}
                    </button>
                  </div>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="font-semibold mb-3">Details</h2>
              <div className="">
                <form>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Short Description</label>
                    <textarea
                      className="border p-2"
                      value={details ? details.short_summary : ""}
                      placeholder="Enter your project name"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          short_summary: e.target.value,
                        })
                      }
                      id=""
                      // cols="30"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Full Description</label>
                    <textarea
                      className="border p-2"
                      value={details ? details.description : ""}
                      placeholder="Enter your project name"
                      onChange={(e) =>
                        setDetails({ ...details, description: e.target.value })
                      }
                      id=""
                      // cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Progress</label>
                    <textarea
                      className="border p-2"
                      value={details ? details.progress : ""}
                      placeholder="Enter your project name"
                      onChange={(e) =>
                        setDetails({ ...details, progress: e.target.value })
                      }
                      id=""
                      // cols="30"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Deal</label>
                    <textarea
                      className="border p-2"
                      value={details ? details.deal : ""}
                      placeholder="Enter your deal"
                      onChange={(e) =>
                        setDetails({ ...details, deal: e.target.value })
                      }
                      id=""
                      // cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Advantage</label>
                    <input
                      className="border p-2"
                      placeholder="Enter your deal"
                      onChange={(e) =>
                        setDetails({ ...details, advantages: e.target.value })
                      }
                    />
                  </div>

                  <div className="">
                    <button
                      type="submit"
                      className="bg-[rgb(0,223,154)] py-2 w-full text-white"
                      onClick={saveDetails}
                    >
                      {loadDetails ? "...Loading" : "Save Details"}
                    </button>
                  </div>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="font-semibold mb-3">Team Member</h2>
              <div className="">
                <form>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="border p-2"
                      placeholder="Enter your project name"
                      onChange={(e) => setTeamMember({ name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Position</label>
                    <input
                      type="text"
                      className="border p-2"
                      placeholder="Enter your text"
                      onChange={(e) =>
                        setTeamMember({ position: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Description</label>
                    <textarea
                      className="border p-2"
                      placeholder="Enter your project name"
                      onChange={(e) =>
                        setTeamMember({ description: e.target.value })
                      }
                      id=""
                      // cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  {/* {usersSelect} */}
                  <div className="">
                    <button
                      type="submit"
                      className="bg-[rgb(0,223,154)] py-2 w-full text-white"
                      onClick={saveMember}
                    >
                      {loadMember ? "...Loading" : "Save Member"}
                    </button>
                  </div>
                </form>

                {teamMember.length > 0 ? (
                  <div className="mt-3">
                    {teamMember.map((member) => {
                      return (
                        <div className="w-full mb-2 border-b">
                          <div className="flex">
                            <p className="w-[25%]">Name</p>
                            <p className="font-semibold">{member.name}</p>
                          </div>
                          <div className="flex">
                            <p className="w-[25%]">Position</p>
                            <p className="font-semibold">{member.position}</p>
                          </div>
                          <div className="flex">
                            <p className="w-[25%]">Description</p>
                            <p className="font-semibold">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="font-semibold mb-3">Documents</h2>
              <div className="">
                <form>
                  <div className="flex flex-col mb-2">
                    <label htmlFor="">Project Name</label>
                    <input
                      type="text"
                      className="border p-2"
                      placeholder="Enter your project name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default ProjectForm;

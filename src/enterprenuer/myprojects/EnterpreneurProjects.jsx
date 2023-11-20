import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { useSelector } from "react-redux";

const EnterpreneurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const getProjects = async () => {
    setLoading(true);
    await axiosClient
      .get(`/enterpreneur/${userInfo._id}/projects`)
      .then((res) => {
        setLoading(false);
        console.log(res?.data?.projects);
        setProjects(res?.data?.projects);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    getProjects();
  }, []);
  return <div>EnterpreneurProjects</div>;
};

export default EnterpreneurProjects;

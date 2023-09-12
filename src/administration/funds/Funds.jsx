import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { toast } from "react-toastify";

const Funds = () => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFunds = async () => {
    setLoading(true);
    await axiosClient
      .get("/funds")
      .then((res) => {
        setLoading(false);
        console.log(res?.data?.funds);
        setFunds(res?.data?.funds);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.message);
      });
  };

  useEffect(() => {
    getFunds();
  }, []);
  return <div>Funds</div>;
};

export default Funds;

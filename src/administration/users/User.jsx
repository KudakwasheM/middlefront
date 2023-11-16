import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { toast } from "react-toastify";
import CustomLoader from "../../Guests/components/CustomLoader";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getDetails = async () => {
    setLoading(true);

    await axiosClient
      .get(`/users/${id}`)
      .then((res) => {
        setLoading(false);
        console.log(res?.data?.user);
        setUser(res?.data?.user);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="p-5">
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="flex gap-5">
          <img
            src=""
            className="ml-5 h-28 w-28 border p-1 border-[rgb(0,223,154)] rounded-full mb-4"
            alt=""
          />
          <div className="p-5 border ">
            <div className="">
              <tbody>
                <tr>
                  <td className="w-[200px] text-xl py-3">Name:</td>
                  <td className=" text-xl font-semibold">{user.name}</td>
                </tr>
                <tr>
                  <td className="w-[200px] text-xl py-3">Email:</td>
                  <td className="text-xl font-semibold">{user.email}</td>
                </tr>
                <tr>
                  <td className="w-[200px] text-xl py-3">Username:</td>
                  <td className="text-xl font-semibold">{user.username}</td>
                </tr>
                <tr>
                  <td className="w-[200px] text-xl py-3">Role:</td>
                  <td className="text-xl font-semibold">{user.role}</td>
                </tr>
              </tbody>
              <div className="grid grid-cols-2 mt-5 gap-3 w-full">
                <Link
                  to={`/admin/users/edit/${user._id}`}
                  className="bg-[rgb(0,0,255)] py-3 text-white text-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="bg-[rgb(255,0,0)] py-3 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;

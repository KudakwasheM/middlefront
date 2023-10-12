import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { toast } from "react-toastify";

const InvestorProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading();

    await axiosClient
      .get(`/users/${userInfo._id}`)
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
    <div className="my-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-5 text-center border h-[400px] flex flex-col items-center justify-center">
            <img
              src=""
              className="h-28 w-28 mx-auto border-2 p-1 border-[rgb(0,223,154)] rounded-full mb-4"
              alt=""
            />

            <div className="flex flex-col text-center mx-auto">
              <h2 className="text-2xl mb-2">{userInfo?.name}</h2>
              <h3 className="text-md text-[rgb(0,223,154)]">
                {userInfo?.role}
              </h3>
              <p className="text-md">{userInfo?.email}</p>
              <h3 className="text-md">{userInfo?.username}</h3>
            </div>
            <div className="flex gap-3 mt-3">
              <Link
                to={`/investor/profile/${userInfo._id}`}
                className="bg-[rgba(0,223,154,0.75)] text-white py-2 px-3 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
              >
                Edit Profile
              </Link>
              <Link className="bg-red-600 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-white py-2 px-3">
                Delete Profile
              </Link>
            </div>
          </div>
          <div className="col-span-2 border p-5">
            <h2 className="text-xl font-semibold">Details</h2>
            <div className="mt-5">
              {user.details ? (
                <div>
                  <table>
                    <tr>
                      <th></th>
                      <td>
                        US${user.details.minimum} - US${user.details.minimum}
                      </td>
                    </tr>
                    <tr>
                      <th>Budget</th>
                      <td>
                        US${user.details.minimum} - US${user.details.minimum}
                      </td>
                    </tr>
                    <tr>
                      <th>Budget</th>
                      <td>US${user.details.minimum}</td>
                    </tr>
                  </table>
                </div>
              ) : (
                <>No details recorded</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;

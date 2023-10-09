import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const InvestorProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);

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
            <div className="p-5 text-center border">
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
            </div>
            <div className="p-5 text-center border">
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
            </div>
            <div className="p-5 text-center border">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;

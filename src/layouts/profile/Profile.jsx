import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[55%] border p-5">
        <img
          src=""
          className="h-28 w-28 mx-auto border-2 p-1 border-[rgb(0,223,154)] rounded-full mb-4"
          alt=""
        />

        <div className="flex flex-col text-center mx-auto">
          <h2 className="text-2xl mb-2">{userInfo.name}</h2>
          <h3 className="text-md text-[rgb(0,223,154)]">{userInfo.role}</h3>
          <p className="text-md">{userInfo.email}</p>
          <h3 className="text-md">{userInfo.username}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;

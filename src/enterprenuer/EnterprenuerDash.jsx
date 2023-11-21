import React, { useState } from "react";
import {
  AiOutlineDollar,
  AiOutlinePercentage,
  AiOutlineProject,
  AiOutlineTeam,
} from "react-icons/ai";

const EnterprenuerDash = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="p-5">
          <div className="flex gap-5 lg:gap-20 justify-around">
            <a
              href="/admin/projects"
              className="flex flex-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-3"
            >
              <div className="flex-1">
                <h2 className="font-bold">{}</h2>
                <p className="text-sm">My Projects</p>
              </div>
              <div className="p-3 bg-[rgb(0,223,154)] text-white">
                <AiOutlineProject size={20} />
              </div>
            </a>
            <a
              href="/admin/investors"
              className="flex flex-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-3"
            >
              <div className="flex-1">
                <h2 className="font-bold">{}</h2>
                <p className="text-sm">My Investors</p>
              </div>
              <div className="p-3 bg-[rgb(0,223,154)] text-white">
                <AiOutlinePercentage size={20} />
              </div>
            </a>
            <a
              href="/admin/funds"
              className="flex flex-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-3"
            >
              <div className="flex-1">
                <h2 className="font-bold">{}</h2>
                <p className="text-sm">Funds Raised</p>
              </div>
              <div className="p-3 bg-[rgb(0,223,154)] text-white">
                <AiOutlineDollar size={20} />
              </div>
            </a>
            {/* <a
              href="/admin/users"
              className="flex shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-3"
            >
              <div className="flex-1">
                <h2 className="font-bold">{}</h2>
                <p className="text-sm">Users</p>
              </div>
              <div className="p-3 bg-[rgb(0,223,154)] text-white">
                <AiOutlineTeam size={20} />
              </div>
            </a> */}
          </div>
        </div>
      )}
    </>
  );
};

export default EnterprenuerDash;

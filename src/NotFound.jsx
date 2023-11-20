import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center">
      <div className="">
        <p className="text-2xl text-red-600">Error 404</p>
        <p className="text-3xl">Page not found</p>
      </div>
      <div className="mt-2">
        <Link to={`/`} className="text-xl underline text-sky-500">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

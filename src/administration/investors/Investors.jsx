import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomLoader from "../../Guests/components/CustomLoader";

const Investors = () => {
  const [investors, setInvestors] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const filterInvestors = investors.filter((investor) => {
    // Specify your filter conditions here
    return search.toLowerCase() === ""
      ? investor
      : investor.name.toLowerCase().includes(search.toLowerCase())
      ? investor
      : investor.email.toLowerCase().includes(search.toLowerCase())
      ? investor
      : investor.username.toLowerCase().includes(search.toLowerCase())
      ? investor
      : investor.role.toLowerCase().includes(search.toLowerCase());
  });

  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterInvestors.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterInvestors.length / itemsPerPage);

  const getInvestors = async () => {
    setLoading(true);
    await axiosClient
      .get("/users/investors")
      .then((res) => {
        setLoading(false);
        setInvestors(res?.data?.users);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.message);
      });
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    getInvestors();
  }, []);

  return (
    <div className="bg-white p-3 w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-3xl font-semibold">Investors</h2>
        {/* <Link
          to="/admin/users/create"
          className="flex items-center bg-green-400 font-semibold py-2 px-3 text-white"
        >
          Add User
          <AiOutlineUserAdd
            size={20}
            className="ml-2"
            style={{ stroke: "white", strokeWidth: "50" }}
          />
        </Link> */}
      </div>
      <input
        type="text"
        placeholder="Search for a user (name, email, username, role)"
        className="w-full p-2 text-lg border rounded-lgFdis"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          {currentItems ? (
            <>
              {currentItems.length > 0 ? (
                <div className="grid grid-cols-4 gap-5 text-center py-3">
                  {currentItems
                    // .filter((user) => {
                    //   return search.toLowerCase() === ""
                    //     ? user
                    //     : user.name.toLowerCase().includes(search)
                    //     ? user
                    //     : user.email.toLowerCase().includes(search)
                    //     ? user
                    //     : user.username.toLowerCase().includes(search);
                    // })
                    .map((investorr) => {
                      return (
                        <div
                          className="flex flex-col border rounded-lg bg-white p-5 hover:shadow-xl"
                          key={investorr._id}
                        >
                          <div className="mx-auto">
                            <img
                              src=""
                              alt=""
                              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
                            />
                          </div>
                          <div className="mt-5">
                            <h2 className="font-semibold mb-2">
                              {investorr.name}
                            </h2>
                            <p className="py-[1px]">{investorr.username}</p>
                            <p className="py-[1px] italic">{investorr.email}</p>
                            <p className="py-[1px]">{investorr.role}</p>
                            <div className="flex justify-around py-3">
                              <div className="flex items-center text-sm">
                                {investorr.active ? (
                                  <span className="rounded-full h-4 w-4 bg-green-500"></span>
                                ) : (
                                  <span className="rounded-full h-4 w-4 bg-red-500"></span>
                                )}{" "}
                                <p className="ml-2">Active</p>
                              </div>
                              <div className="flex items-center text-sm">
                                {investorr.subscribed ? (
                                  <span className="rounded-full h-4 w-4 bg-green-500"></span>
                                ) : (
                                  <span className="rounded-full h-4 w-4 bg-red-500"></span>
                                )}{" "}
                                <p className="ml-2">Subscribed</p>
                              </div>
                            </div>
                            <div className="flex justify-around border-t pt-3 mt-3">
                              <Link>
                                <AiOutlineDelete
                                  size={22}
                                  title="Delete"
                                  className="text-red-500"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p className="text-xl font-bold text-center py-5">
                  No users found
                </p>
              )}
            </>
          ) : (
            <p className="text-xl font-bold text-center py-5">No users found</p>
          )}
        </>
      )}
      <ReactPaginate
        previousLabel={"← Prev "}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          "flex justify-center items-center mb-1 text-lg gap-1 my-4"
        }
        previousLinkClassName={
          "border px-2 py-2 rounded-lg font-semibold hover:bg-[rgb(0,223,154)] hover:border-[rgb(0,223,154)] hover:text-white"
        }
        nextLinkClassName={
          "border px-2 py-2 rounded-lg font-semibold hover:bg-[rgb(0,223,154)] hover:border-[rgb(0,223,154)] hover:text-white"
        }
        pageLinkClassName="py-2 px-2 border rounded-lg font-semibold hover:bg-[rgb(0,223,154)] hover:border-[rgb(0,223,154)] hover:text-white"
        disabledClassName={"pagination__link--disabled"}
        activeLinkClassName={
          "bg-[rgb(0,223,154)] text-white border-[rgb(0,223,154)]"
        }
      />
    </div>
  );
};

export default Investors;

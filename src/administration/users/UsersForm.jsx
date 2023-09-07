import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSetUserMutation } from "../../slices/usersApiSlice";
import { addUser } from "../../slices/usersSlice";
import { toast } from "react-toastify";
import { roles } from "../../layouts/constants/Roles";
import { GrFormClose } from "react-icons/gr";
import axiosClient from "../../axiosClient";
import { InfinitySpin } from "react-loader-spinner";

const UsersForm = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadUser, setLoadUser] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [setUser, { isLoading }] = useSetUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (user._id !== "") {
      console.log(user._id);
      await axiosClient
        .put(`/users/${user._id}`)
        .then((res) => {
          setLoading(false);
          toast.success(res.message);
          navigate("/admin/users");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err?.response?.data?.message || err.error);
        });
    } else {
      await axiosClient
        .post("/users", {
          name,
          username,
          email,
          role,
          password,
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.message);
          navigate("/admin/users");
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err?.response?.data?.message || err.error);
        });
    }
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirm_password) {
  //     toast.error("Passowrds do not match");
  //     return;
  //   } else {
  //     try {
  //       const res = await setUser({
  //         name,
  //         username,
  //         email,
  //         role,
  //         password,
  //       }).unwrap();
  //       dispatch(addUser({ ...res }));
  //       console.log("Wassup");
  //     } catch (err) {
  //       toast.error(err?.data?.message || err.error);
  //     }
  //   }
  // };

  if (id) {
    useEffect(() => {
      setLoadUser(true);
      axiosClient.get(`/users/${id}`).then((res) => {
        setLoadUser(false);
        setUser(res.data.user);
      });
    }, []);
  }

  return (
    <>
      {loadUser ? (
        <div className="flex flex-col justify-center items-center">
          <InfinitySpin width="200" color="#4fa94d" />
          <p className="text-[#4fa94d] text-lg">Loading User Details...</p>
        </div>
      ) : (
        <div className="w-[400px] mx-auto m-5 p-4 border">
          <form>
            <div className="flex flex-col mb-2">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">
                  {user._id ? "Edit User" : "Add User"}
                </h2>
                <button
                  onClick={() => navigate("/admin/users")}
                  className="self-end"
                >
                  <GrFormClose size={25} />
                </button>
              </div>
              <label htmlFor="" className="mb-1">
                Email
              </label>
              <input
                type="text"
                defaultValue={user.email}
                className="border p-2"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Username</label>
              <input
                type="text"
                defaultValue={user.username}
                className="border p-2"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="border p-2"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Role</label>
              <select
                defaultValue={user.role}
                className="border p-2"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" selected disabled>
                  -- Select role --
                </option>
                {roles.map((role) => {
                  return (
                    <option value={role.value} key={role.value}>
                      {role.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="border p-2"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                className="border p-2"
                placeholder="Enter your confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-[rgb(0,223,154)] py-2 w-full text-white"
                onClick={submitHandler}
              >
                {loading ? "...Loading" : user._id ? "Edit User" : "Add User"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UsersForm;

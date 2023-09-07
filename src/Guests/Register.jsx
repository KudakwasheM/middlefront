import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useRegisterMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";
import { GrFormClose } from "react-icons/gr";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      let role = userInfo.role;
      switch (role) {
        case "Admin":
          navigate("/admin");
          break;
        case "Interprenuer":
          navigate("/enterpreneur");
          break;
        case "Investor":
          navigate("/enterpreneur");
          break;
        default:
          // navigate("/");
          break;
      }
      // navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      toast.error("Passowrds do not match");
      return;
    } else {
      if (!role) {
        toast.error("Please select role");
        return;
      }
      try {
        const res = await register({
          name,
          username,
          email,
          role,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        console.log(res);
        // navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col border md:w-[400px] p-5">
        <button onClick={() => navigate(-1)} className="self-end">
          <GrFormClose size={25} />
        </button>
        <h1 className="text-center text-[rgb(0,223,154)] text-4xl font-bold mb-3">
          Middle.
        </h1>
        <ToastContainer />
        <p className="text-2xl text-center mb-3">Create an account</p>
        <form>
          <div className="flex justify-around mb-2">
            <div className="justify-around">
              <input
                type="radio"
                name="role"
                id="enterpreneur"
                value="Enterprenuer"
                onChange={(e) => setRole(e.target.value)}
              />
              Enterprenuer
            </div>
            <div className="justify-around">
              <input
                type="radio"
                name="role"
                id="investor"
                value="Investor"
                onChange={(e) => setRole(e.target.value)}
              />
              Investor
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="" className="mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              className="border p-2"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={username}
              className="border p-2"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              className="border p-2"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="flex flex-col mb-2">
              <label htmlFor="">Role</label>
              <input
                type="text"
                value={role}
                className="border p-2"
                placeholder="Enter your role"
                onChange={(e) => setRole(e.target.value)}
              />
            </div> */}
          <div className="flex flex-col mb-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              className="border p-2"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              value={confirm_password}
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
              {isLoading ? "...Loading" : "Register"}
            </button>
          </div>
        </form>
        <p className="text-sm">
          You do not have an account?{" "}
          <Link to="/login" className="text-[rgb(0,223,154)] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

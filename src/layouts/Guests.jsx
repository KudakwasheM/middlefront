import React from "react";
import "../Guests/css/Guest.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Guests/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Guests/components/Footer";

const Guests = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Guests;

// const Guests = () => {
//   const [lodingT, setLoading] = useState(useContext(Test));

//   // useEffect(() => {
//   //   if (localStorage.getItem("user_id") == "") {
//   //     setLoading(true);
//   //   }
//   // }, []);

//   return (
//     <Test.Provider value={lodingT}>
//       {lodingT ? (
//         <CustomLoader />
//       ) : (
//         <>
//           <Navbar />
//           <ToastContainer />
//           <Outlet />
//           <Footer />
//         </>
//       )}
//     </Test.Provider>
//   );
// };

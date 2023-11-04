import { Navigate, Route, createBrowserRouter } from "react-router-dom";
import Guests from "./layouts/Guests";
import Administration from "./layouts/Administration";
import Enterprenuer from "./layouts/Enterprenuer";
import Investor from "./layouts/Investor";
import Index from "./Guests/Index";
import Login from "./Guests/Login";
import Register from "./Guests/Register";
import AdminDash from "./administration/AdminDash";
import EnterprenuerDash from "./enterprenuer/EnterprenuerDash";
import NotFound from "./NotFound";
import InvestorDash from "./investor/InvestorDash";
import Users from "./administration/users/Users";
import UsersForm from "./administration/users/UsersForm";
import Proposals from "./Guests/Proposals/Proposals";
import Proposal from "./Guests/Proposals/Proposal";
import Sponsors from "./Guests/Sponsors/Sponsors";
import Sponsor from "./Guests/Sponsors/Sponsor";
import Testimonial from "./Guests/Testimonials/Testimonial";
import Testimonials from "./Guests/Testimonials/Testimonials";
import Project from "./administration/projects/Project";
import Projects from "./administration/projects/Projects";
import ProjectForm from "./administration/projects/ProjectForm";
import Investors from "./administration/investors/Investors";
import User from "./administration/users/User";
import Funds from "./administration/funds/Funds";
import FundsForm from "./administration/funds/FundsForm";
import Fund from "./administration/funds/Fund";
import Profile from "./layouts/profile/Profile";
import EnterpreneurProjects from "./enterprenuer/myprojects/EnterpreneurProjects";
import InvestorProfile from "./investor/profile/InvestorProfile";
import InvestorUpdate from "./investor/profile/InvestorUpdate";
import ChangePassword from "./layouts/profile/ChangePassword";
import InvestorPassword from "./investor/profile/InvestorPassword";
import SuccessRegister from "./Guests/SuccessRegister";
import Verified from "./Guests/Verified";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guests />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/proposals", element: <Proposals /> },
      { path: "/proposals/:id", element: <Proposal /> },
      { path: "/investors", element: <Sponsors /> },
      { path: "/investors/:id", element: <Sponsor /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/testimonials/:id", element: <Testimonial /> },
    ],
  },
  {
    path: "/admin",
    element: <Administration />,
    children: [
      { path: "/admin", element: <Navigate to="/admin/dashboard" /> },
      { path: "dashboard", element: <AdminDash /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <Project /> },
      { path: "projects/create", element: <ProjectForm /> },
      { path: "projects/edit/:id", element: <ProjectForm /> },
      { path: "funds", element: <Funds /> },
      { path: "funds/:id", element: <Fund /> },
      { path: "funds/create", element: <FundsForm /> },
      { path: "funds/edit/:id", element: <FundsForm /> },
      { path: "investors", element: <Investors /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element: <User /> },
      { path: "users/create", element: <UsersForm /> },
      { path: "users/edit/:id", element: <UsersForm /> },
    ],
  },
  {
    path: "/enterpreneur",
    element: <Enterprenuer />,
    children: [
      {
        path: "/enterpreneur",
        element: <Navigate to="/enterpreneur/dashboard" />,
      },
      { path: "dashboard", element: <EnterprenuerDash /> },
      {
        path: "myprojects",
        element: <EnterpreneurProjects />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "changepassword",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/investor",
    element: <Investor />,
    children: [
      { path: "/investor", element: <Navigate to="/investor/profile" /> },
      { path: "profile", element: <InvestorProfile /> },
      { path: "profile/:id", element: <InvestorUpdate /> },
      { path: "changepassword", element: <InvestorPassword /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/register/success", element: <SuccessRegister /> },
  { path: "/verified/:id/:token", element: <Verified /> },
  { path: "*", element: <NotFound /> },
]);

export default router;

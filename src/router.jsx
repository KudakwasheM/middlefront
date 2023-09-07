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
import Projects from "./administration/projects/Projects";
import ProjectForm from "./administration/projects/ProjectForm";
import Investors from "./administration/investors/Investors";
import User from "./administration/users/User";

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
      { path: "projects/create", element: <ProjectForm /> },
      { path: "projects/edit/:id", element: <ProjectForm /> },
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
    ],
  },
  {
    path: "/investor",
    element: <Investor />,
    children: [
      { path: "/investor", element: <Navigate to="/investor/dashboard" /> },
      { path: "dashboard", element: <InvestorDash /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

export default router;

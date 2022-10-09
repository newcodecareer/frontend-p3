import React from "react";
// import Navbar from "./components/Navbar/navbar";
// import Logo from "./pages/Logo/logo";
// import BrowseNeeds from "./pages/BrowseNeeds/browseNeeds";
// import MyNeeds from "./pages/MyNeeds/myNeeds";
// import PostNeeds from "./pages/PostNeeds/postNeeds";
// import Profile from "./pages/Profile/profile";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Homepage = React.lazy(() => import("./pages/HomePage"));
const Navbar = React.lazy(() => import("./components/Navbar/navbar"));
const BrowseNeeds = React.lazy(() => import("./pages/BrowseNeeds/browseNeeds"));
const MyNeeds = React.lazy(() => import("./pages/MyNeeds/myNeeds"));
const PostNeeds = React.lazy(() => import("./pages/PostNeeds/postNeeds"));
const Profile = React.lazy(() => import("./pages/Profile/profile"));


const routes = [
  {
    path: "/404",
    element: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/browseNeeds",
    element: <BrowseNeeds />,
  },
  {
    path: "/myNeeds",
    element: <MyNeeds />,
  },
  {
    path: "/postNeeds",
    element: <PostNeeds />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;

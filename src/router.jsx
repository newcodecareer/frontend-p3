import React from "react";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import Signup from "./components/Auth/Signup";
import BrowseNeeds from "./components/BrowseNeeds/BrowseNeeds";

import PostOne from "./components/Post/PostOne";
import PostTwo from "./components/Post/PostTwo";
import PostThree from "./components/Post/PostThree";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Homepage = React.lazy(() => import("./pages/HomePage"));

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
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/browse-needs",
    element: <BrowseNeeds />,
  },
  {
    path: "/postone",
    element: <PostOne />,
  },
  {
    path: "/posttwo",
    element: <PostTwo />,
  },
  {
    path: "/postthree",
    element: <PostThree />,
  },
];

export default routes;

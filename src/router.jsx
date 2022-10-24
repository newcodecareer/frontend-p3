import React from "react";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import Signup from "./components/Auth/Signup";
import BrowseNeeds from "./components/BrowseNeeds/BrowseNeeds";

import PostStepOne from "./components/Post/PostStepOne";
import PostStepTwo from "./components/Post/PostStepTwo";
import PostStepThree from "./components/Post/PostStepThree";
import SearchFilters from "./components/SearchFilters/SearchFilters";
import Profile from "./components/Profile/Profile";
import PostDetails from "./components/PostDetails/PostDetails";
// import Homepage from "./pages/HomePage";
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
    path: "/post-step-one",
    element: <PostStepOne />,
  },
  {
    path: "/post-needs",
    element: <PostStepTwo />,
  },
  {
    path: "/post-step-three",
    element: <PostStepThree />,
  },
  {
    path: "/search-filters",
    element: <SearchFilters />,
  },
  {
    path: "/profiles",
    element: <Profile />,
  },
  {
    path: "/post-details",
    element: <PostDetails />,
  },
];

export default routes;

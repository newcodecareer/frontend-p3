import React from "react";
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

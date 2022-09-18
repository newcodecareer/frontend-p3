import React from "react";

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
];

export default routes;

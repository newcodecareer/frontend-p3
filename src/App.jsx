import React from "react";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import routes from "./router";
import LoadingPage from "./pages/LoadingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        {routes.map((route) => {
          const { path } = route;
          return <Route {...route} key={path} />;
        })}
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

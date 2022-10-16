import React from "react";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import routes from "./router";
import LoadingPage from "./pages/LoadingPage";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
          <Route path="/" element={<Homepage />} />

          {routes.map((route) => {
            const { path } = route;
            return <Route {...route} key={path} />;
          })}
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

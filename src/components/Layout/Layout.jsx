import React, { useState } from "react";
import { Main } from "./Layout.styles";
import { AuthContext } from "../../context/AuthContext";

import NavAfterLogin from "./NavAfterLogin/NavAfterLogin";
// import NavBeforeLogin from "./NavBeforeLogin/NavBeforeLogin";

const Layout = ({ children }) => {
  const login = localStorage.getItem("is login");

  const [isLogin, setIsLogin] = useState(login === "true");

  return (
    <AuthContext.Provider value={{ setIsLogin }}>
      {isLogin ? <NavAfterLogin /> : <NavBeforeLogin />}

      {/* <NavBeforeLogin /> */}
      {/* <NavAfterLogin /> */}
      <Main>{children}</Main>
    </AuthContext.Provider>
  );
};

export default Layout;

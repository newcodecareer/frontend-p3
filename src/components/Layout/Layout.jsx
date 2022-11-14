import { Main } from "./Layout.styles";
import MainNav from "./MainNav/MainNav";
import NavAfterLogin from "./NavAfterLogin/NavAfterLogin";
import NavBeforeLogin from "./NavBeforeLogin/NavBeforeLogin";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <NavBeforeLogin /> */}
      {/* <MainNav /> */}
      <NavAfterLogin />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

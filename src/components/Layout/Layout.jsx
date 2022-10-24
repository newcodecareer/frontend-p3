import { Main } from "./Layout.styles";
// import MainNav from "./MainNav/MainNav";
import NavBeforeLogin from "./NavBeforeLogin/NavBeforeLogin";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBeforeLogin />
      {/* <MainNav /> */}
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

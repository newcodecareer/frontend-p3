import { Main } from "./Layout.styles";
import MainNav from "./MainNav/MainNav";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNav />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;

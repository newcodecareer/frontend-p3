import { Main } from "./Layout.styles";
import MainNav from "./MainNav/MainNav";

const Layout = (props) => {
  return (
    <div>
      <MainNav />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Layout;

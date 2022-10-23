import { Link } from "react-router-dom";
import { Header, NavLogo, NavList } from "./MainNav.styles";

const MainNav = () => {
  return (
    <Header>
      <NavLogo>
        <Link to="/">
          <img src="../src/images/logo.png" alt="Houddy logo" />
        </Link>
      </NavLogo>
      <NavList>
        <ul>
          <li>
            <Link to="/postNeeds">Post Needs</Link>
          </li>
          <li>
            <Link to="/browseNeeds">Browse Needs</Link>
          </li>
          <li>
            <Link to="/myNeeds">My Needs</Link>
          </li>
        </ul>
      </NavList>
    </Header>
  );
};

export default MainNav;

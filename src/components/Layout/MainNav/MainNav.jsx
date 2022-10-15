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
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/earn-money">Register Tradie</Link>
          </li>
        </ul>
      </NavList>
    </Header>
  );
};

export default MainNav;

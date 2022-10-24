import { Link } from "react-router-dom";
import { Header, NavLogo, NavList } from "./NavBeforeLogin.styles";

const NavBeforeLogin = () => {
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
            <Link to="/signup">Register Tradie</Link>
          </li>
        </ul>
      </NavList>
    </Header>
  );
};

export default NavBeforeLogin;

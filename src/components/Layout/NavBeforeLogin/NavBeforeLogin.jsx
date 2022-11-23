import { Link } from "react-router-dom";
import { Header, NavLogo, NavList } from "./NavBeforeLogin.styles";

const NavBeforeLogin = () => {
  return (
    <Header>
      <NavLogo>
        <Link to="/">
          <img src="/images/logo.png" alt="Houddy logo" />
        </Link>
        <NavList>
          <ul>
            <li>
              <Link to="/post-needs">Post Needs</Link>
            </li>
            <li>
              <Link to="/browse-needs">Browse Needs</Link>
            </li>
            <li>
              <Link to="/myNeeds">My Needs</Link>
            </li>
          </ul>
        </NavList>
      </NavLogo>
      <NavList>
        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </NavList>
    </Header>
  );
};

export default NavBeforeLogin;

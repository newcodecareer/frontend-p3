import { Link } from "react-router-dom";
import { Header, NavLogo, NavList, NavLogin } from "./MainNav.styles";

const MainNav = () => {
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
            <li></li>
          </ul>
        </NavList>
      </NavLogo>

      <NavLogin>
        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </NavLogin>
    </Header>
  );
};

export default MainNav;

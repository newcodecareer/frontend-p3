import { Link } from "react-router-dom";
import { Header, LogoDiv, NavDiv } from "./MainNav.styles";

const MainNav = () => {
  return (
    <Header>
      <LogoDiv>
        <Link to="/">
          <img src="../src/images/logo.png" alt="Houddy logo" />
        </Link>
      </LogoDiv>
      <NavDiv>
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
      </NavDiv>
    </Header>
  );
};

export default MainNav;

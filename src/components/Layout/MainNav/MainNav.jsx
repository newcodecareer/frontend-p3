import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src="../src/images/logo.png" alt="Houddy logo" />
        </Link>
      </div>
      <nav>
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
      </nav>
    </header>
  );
};

export default MainNav;

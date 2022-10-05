import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form>
      <div className={classes.inputs}>
        <label>Log into your account</label>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Create password" />
      </div>
      <div className={classes.btnSignin}>
        <button type="submit">Log in</button>
      </div>
      <div className={classes.terms}>
        <p>
          <Link to="#">Forgot your password?</Link>
        </p>
        <p>
          Are you a new user? <Link to="/signup">Create a free account</Link>
        </p>
        <p>
          A new tradie? <Link to="#">List your business here</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;

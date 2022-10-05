import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <form>
      <div className={classes.inputs}>
        <label>Create a new account</label>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Mobile number" />
        <input type="password" placeholder="Create password" />
      </div>
      <div className={classes.btnCreate}>
        <button type="submit">Sign up</button>
      </div>
      <div className={classes.terms}>
        <p>
          By registering with Houddy, you agree to our{" "}
          <Link to="#">Privacy Policy & Terms & Conditions</Link>
        </p>
        <p>
          Already have an account ? <Link to="/login">Log in</Link>
        </p>
      </div>
    </form>
  );
};
// Already have an account ? <Routes></Routes><a href="/login">Log in</a>
export default Signup;

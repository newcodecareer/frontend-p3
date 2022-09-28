import classes from "./Signup.module.css";

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
        <button type="submit">Create Account</button>
      </div>
      <div className={classes.terms}>
        <p>
          By registering with Houddy, you agree to our{" "}
          <a href="#">Privacy Policy & Terms & Conditions</a>.
        </p>
        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
    </form>
  );
};

export default Signup;

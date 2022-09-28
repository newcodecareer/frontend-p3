import classes from "./Login.module.css";

const Login = () => {
  return (
    <form>
      <div className={classes.inputs}>
        <label>Create a new account</label>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Create password" />
      </div>
      <div className={classes.btnSignin}>
        <button type="submit">Sign in</button>
      </div>
      <div className={classes.terms}>
        <p>
          <a href="#">Forgot your password?</a>
        </p>
        <p>
          Are you a new user? <a href="#">Create a free account</a>
        </p>
        <p>
          A new tradie? <a href="#">List your business here</a>
        </p>
      </div>
    </form>
  );
};

export default Login;

import { Link } from "react-router-dom";
import { BtnDiv, Form, InputDiv, TermDiv } from "./Auth.styles";

const Login = () => {
  return (
    <Form>
      <InputDiv>
        <label>Log into your account</label>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Create password" />
      </InputDiv>
      <BtnDiv>
        <button type="submit">Log in</button>
      </BtnDiv>
      <TermDiv>
        <p>
          <Link to="#">Forgot your password?</Link>
        </p>
        <p>
          Are you a new user? <Link to="/signup">Create a free account</Link>
        </p>
        <p>
          A new tradie? <Link to="#">List your business here</Link>
        </p>
      </TermDiv>
    </Form>
  );
};

export default Login;

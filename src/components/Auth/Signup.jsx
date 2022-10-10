import { Link } from "react-router-dom";
import { BtnDiv, Form, InputDiv, TermDiv } from "./Auth.styles";

const Signup = () => {
  return (
    <Form>
      <InputDiv>
        <label>Create a new account</label>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Mobile number" />
        <input type="password" placeholder="Create password" />
      </InputDiv>
      <BtnDiv>
        <button type="submit">Sign up</button>
      </BtnDiv>
      <TermDiv>
        <p>
          By registering with Houddy, you agree to our
          <Link to="#">Privacy Policy & Terms & Conditions</Link>
        </p>
        <p>
          Already have an account ? <Link to="/login">Log in</Link>
        </p>
      </TermDiv>
    </Form>
  );
};

export default Signup;

import { BtnDiv, Button, Form, Input, InputDiv, Label, P, StyledLink, TermDiv } from "./Auth.styles";

const Signup = () => {
  return (
    <Form>
      <InputDiv>
        <Label>Create a new account</Label>
        <Input type="text" placeholder="Your name" />
        <Input type="email" placeholder="Email address" />
        <Input type="text" placeholder="Mobile number" />
        <Input type="password" placeholder="Create password" />
      </InputDiv>
      <BtnDiv>
        <Button type="submit">Sign up</Button>
      </BtnDiv>
      <TermDiv>
        <P>
          By registering with Houddy, you agree to our
          <StyledLink to="#"> Privacy Policy & Terms & Conditions</StyledLink>
        </P>
        <P>
          Already have an account ? <StyledLink to="/login">Log in</StyledLink>
        </P>
      </TermDiv>
    </Form>
  );
};

export default Signup;

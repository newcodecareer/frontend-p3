import { BtnDiv, Form, InputDiv, Input, Label, P, TermDiv, Button, StyledLink } from "./Auth.styles";

const Login = () => {
  return (
    <Form>
      <InputDiv>
        <Label>Log into your account</Label>
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Create password" />
      </InputDiv>
      <BtnDiv>
        <Button type="submit">Log in</Button>
      </BtnDiv>
      <TermDiv>
        <P>
          <StyledLink to="/reset-password">Forgot your password?</StyledLink>
        </P>
        <P>
          Are you a new user? <StyledLink to="/signup">Create a free account</StyledLink>
        </P>
        <P>
          A new tradie? <StyledLink to="#">List your business here</StyledLink>
        </P>
      </TermDiv>
    </Form>
  );
};

export default Login;

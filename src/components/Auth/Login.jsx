import {
  BtnContainer,
  Form,
  InputContainer,
  Input,
  Label,
  Paragraph,
  TermContainer,
  Button,
  StyledLink,
} from "./Auth.styles";

const Login = () => {
  return (
    <Form>
      <InputContainer>
        <Label>Log into your account</Label>
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Create password" />
      </InputContainer>
      <BtnContainer>
        <Button type="submit">
          <StyledLink to="/profiles" inputColor="#fff">
            Log in
          </StyledLink>
        </Button>
      </BtnContainer>
      <TermContainer>
        <Paragraph>
          <StyledLink to="/reset-password">Forgot your password?</StyledLink>
        </Paragraph>
        <Paragraph>
          Are you a new user? <StyledLink to="/signup">Create a free account</StyledLink>
        </Paragraph>
        <Paragraph>
          A new tradie? <StyledLink to="#">List your business here</StyledLink>
        </Paragraph>
      </TermContainer>
    </Form>
  );
};

export default Login;

import {
  BtnContainer,
  Button,
  Form,
  Input,
  InputContainer,
  Label,
  Paragraph,
  StyledLink,
  TermContainer,
} from "./Auth.styles";

const Signup = () => {
  return (
    <Form>
      <InputContainer>
        <Label>Create a new account</Label>
        <Input type="text" placeholder="Your name" />
        <Input type="email" placeholder="Email address" />
        <Input type="text" placeholder="Mobile number" />
        <Input type="password" placeholder="Create password" />
      </InputContainer>
      <BtnContainer>
        <Button type="submit">Sign up</Button>
      </BtnContainer>
      <TermContainer>
        <Paragraph>
          By registering with Houddy, you agree to our
          <StyledLink to="#"> Privacy Policy & Terms & Conditions</StyledLink>
        </Paragraph>
        <Paragraph>
          Already have an account ? <StyledLink to="/login">Log in</StyledLink>
        </Paragraph>
      </TermContainer>
    </Form>
  );
};

export default Signup;

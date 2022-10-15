import { BtnContainer, Button, Form, Input, InputContainer, Label, Paragraph, TermContainer } from "./Auth.styles";

const ResetPassword = () => {
  return (
    <Form>
      <InputContainer>
        <Label inputSize="1.8rem">Forgot your password?</Label>
        <Label inputWeight="500" inputSize="0.9rem" inputColor="rgb(150,150,150)">
          Enter your email address to reset your password.
        </Label>
        <Input placeholder="Email address" />
      </InputContainer>
      <BtnContainer>
        <Button>Reset Password</Button>
      </BtnContainer>
      <TermContainer>
        <Paragraph inputWeight="600">Not receive any email?</Paragraph>
        <Paragraph>You may need to check your spam folder.</Paragraph>
      </TermContainer>
    </Form>
  );
};

export default ResetPassword;

import { BtnDiv, Button, Form, Input, InputDiv, Label, P, TermDiv } from "./Auth.styles";

const ResetPassword = () => {
    return (
        <Form>
            <InputDiv>
                <Label inputSize="1.8rem">Forgot your password?</Label>
                <Label inputWeight="500" inputSize="0.9rem" inputColor="rgb(150,150,150)">
                    Enter your email address to reset your password.
                </Label>
                <Input placeholder="Email address" />
            </InputDiv>
            <BtnDiv>
                <Button>Reset Password</Button>
            </BtnDiv>
            <TermDiv>
                <P inputWeight="600">Not receive any email?</P>
                <P>You may need to check your spam folder.</P>
            </TermDiv>
        </Form>
    );
};

export default ResetPassword;

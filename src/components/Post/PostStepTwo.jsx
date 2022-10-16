import {
  Background,
  Heading,
  Button,
  Form,
  TextArea,
  ButtonContainer,
  BackButton,
  BreakLine,
  InputContainer,
} from "./PostStepTwo.styles";

import { Link } from "react-router-dom";

const PostStepTwo = () => {
  return (
    <Background>
      <Heading>Please clarify your details.</Heading>
      <Form>
        <InputContainer>
          <TextArea type="text" placeholder="e.g. Plumber" />
        </InputContainer>
        <BreakLine></BreakLine>
        <ButtonContainer>
          <Link to="/poststepone">
            <BackButton>Back</BackButton>
          </Link>
          <Link to="/poststepthree">
            <Button>Next</Button>
          </Link>
        </ButtonContainer>
      </Form>
    </Background>
  );
};

export default PostStepTwo;

import {
  Background,
  Heading,
  Button,
} from "./PostStepOne.styles";

import {
  TextArea,
  ButtonContainer,
  BackButton,
  BreakLine,
} from "./PostStepTwo.styles";

import { Link } from "react-router-dom";

const PostStepTwo = () => {
  return (
    <Background>
      <Heading>Please clarify your details.</Heading>
      <div>
        <TextArea type="text" placeholder="e.g. Plumber" />
      </div>
      <BreakLine></BreakLine>
      <ButtonContainer>
        <Link to="/post-step-one">
          <BackButton>Back</BackButton>
        </Link>
        <Link to="/post-step-three">
          <Button>Next</Button>
        </Link>
      </ButtonContainer>
    </Background>
  );
};

export default PostStepTwo;

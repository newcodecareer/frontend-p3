import { Background, Heading, Button } from "./PostStepOne.styles";

import { TextArea, ButtonContainer, BreakLine } from "./PostStepTwo.styles";

import { Link } from "react-router-dom";
import { secondaryFontColor } from "../common/index.styles";

const PostStepTwo = () => {
  return (
    <Background>
      <Heading>Please clarify your details.</Heading>
      <div>
        <TextArea
          type="text"
          placeholder="Please clarify your details. 
The more specific they are, the more acurate the quotes are. "
        />
      </div>
      <BreakLine></BreakLine>
      <ButtonContainer>
        <Link to="/post-needs">
          <Button inputWidth="240px" inputColor={secondaryFontColor}>
            Back
          </Button>
        </Link>
        <Link to="/post-step-three">
          <Button inputWidth="240px">Next</Button>
        </Link>
      </ButtonContainer>
    </Background>
  );
};

export default PostStepTwo;

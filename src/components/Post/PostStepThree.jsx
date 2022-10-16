import {
  Background,
  Heading,
  ButtonContainer,
  BackButton,
  Button,
  Info,
  InfoContainer,
  ParagraphOne,
  ParagraphTwo,
  Img,
  ParagraphContainer,
  ParagraphBox,
} from "./PostStepThree.styles";

import { Link } from "react-router-dom";

const PostStepThree = () => {
  return (
    <Background>
      <Heading>We have collected your need.</Heading>
      <InfoContainer>
        <Info>Posted on: 12 Sep 2022</Info>
        <Info>Status: Open for quoting</Info>
      </InfoContainer>
      <ParagraphContainer>
        <Img src="/src/images/houddy logo-02 4.png" alt="logo" />
        <ParagraphBox>
          <ParagraphOne>
            We are taking a quick look at your need and will let you know once it has been posted.
          </ParagraphOne>
          <ParagraphTwo>
            Please check back here or your email to see quotes if applicable.
          </ParagraphTwo>
        </ParagraphBox>
      </ParagraphContainer>
      <ButtonContainer>
        <Link to="/poststeptwo">
          <BackButton>Back</BackButton>
        </Link>
        <Link to="/home">
          <Button>Done</Button>
        </Link>
      </ButtonContainer>
    </Background>
  );
};

export default PostStepThree;

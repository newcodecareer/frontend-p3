import { Background, Heading, Button } from "./PostStepOne.styles";

import { BackButton, ButtonContainer } from "./PostStepTwo.styles";

import {
  Info,
  InfoContainer,
  ParagraphOne,
  ParagraphTwo,
  ImgBox,
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
        <ImgBox>
          <img src="/src/images/houddy logo-02 4.png" alt="logo" />
        </ImgBox>
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
        <Link to="/post-step-two">
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

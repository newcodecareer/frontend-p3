import {
  Background,
  H1,
  BtnDiv,
  BackBtn,
  Button,
  Span,
  InfoDiv,
  PDiv,
  P,
  Prompt,
  MsgDiv,
  Img,
} from "./PostThree.styles";

import { Link } from "react-router-dom";

const PostThree = () => {
  return (
    <Background>
      <H1>We have collected your need.</H1>
      <InfoDiv>
        <Span>Posted on: 12 Sep 2022</Span>
        <Span>Status: Open for quoting</Span>
      </InfoDiv>
      <MsgDiv>
        <Img src="/src/images/houddy logo-02 4.png" alt="logo" />
        <PDiv>
          <P>
            We are taking a quick look at your need and will let you know once it has been posted.
          </P>
          <Prompt>Please check back here or your email to see quotes if applicable.</Prompt>
        </PDiv>
      </MsgDiv>
      <BtnDiv>
        <Link to={"/posttwo"}>
          <BackBtn>Back</BackBtn>
        </Link>
        <Link to={"/home"}>
          <Button>Done</Button>
        </Link>
      </BtnDiv>
    </Background>
  );
};

export default PostThree;

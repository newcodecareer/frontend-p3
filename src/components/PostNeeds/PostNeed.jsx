import {
  PostContainer,
  StepsTiitle,
  Subtitle,
  CardContainer,
  Card,
  Img,
  Description,
  Steps,
} from "./PostNeed.styles";

const PostNeed = () => {
  return (
    <PostContainer>
      <StepsTiitle>Houddy, your house&apos;s best buddy</StepsTiitle>
      <Subtitle>Find right tradie as simple as three steps</Subtitle>
      <CardContainer>
        <Card>
          <Img src="/images/postNeed01.png" alt="Step one picture" />
          <Steps>1. Tell us what you need</Steps>
          <Description>Post your need and postcode to receive local free quotes</Description>
        </Card>
        <Card>
          <Img src="/images/postNeed02.png" alt="Step two picture" />
          <Steps>2. Compare your quotes</Steps>
          <Description>Chat with local tradies who respond and discuss details</Description>
        </Card>
        <Card>
          <Img src="/images/postNeed03.png" alt="Step three picture" />
          <Steps>3. Hire the best buddy</Steps>
          <Description>Select the best buddy and leave reviews and rewards.</Description>
        </Card>
      </CardContainer>
    </PostContainer>
  );
};

export default PostNeed;

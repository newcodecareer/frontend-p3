import {
  Background,
  DetailContainer,
  HeadingContainer,
  HeadingRight,
  Status,
  StatusInfoDefault,
  StatusInfo,
  Heading,
  Link,
  BudgetLabel,
  Budget,
  Button,
  InfoWrapper,
  Icon,
  Label,
  InfoDefault,
  Info,
  BreakLine,
  DescriptionContainer,
  Paragraph,
  ImageContainer,
  PostImg,
  SectionLine,
  TradieWrapper,
  Avatar,
  TradieName,
  OfferParagraph,
  TimeReply,
  Time,
  ReplyWrapper,
  ReplyIcon,
  Reply,
} from "./PostDetails.styles";

const PostDetails = () => {
  return (
    <Background>
      <DetailContainer>
        <HeadingContainer>
          <div>
            <Status>
              <StatusInfoDefault>OPEN</StatusInfoDefault>
              <StatusInfo>ASSIGNED</StatusInfo>
              <StatusInfo>COMPLETED</StatusInfo>
            </Status>
            <Heading>Bathroom Elevations CAD - urgently</Heading>
            <Link to="/">&lt; Return to map</Link>
            <InfoWrapper>
              <Icon src="/src/images/author_icon.png"></Icon>
              <div>
                <Label>POSTED BY</Label>
                <InfoDefault>Zoe</InfoDefault>
                <BreakLine></BreakLine>
              </div>
            </InfoWrapper>
            <InfoWrapper>
              <Icon src="/src/images/location_icon.png"></Icon>
              <div>
                <Label>LOCATION</Label>
                <Info>Hobart</Info>
                <BreakLine></BreakLine>
              </div>
            </InfoWrapper>
            <InfoWrapper>
              <Icon src="/src/images/date_icon.png"></Icon>
              <div>
                <Label>DUE DATE</Label>
                <Info>Sunday, 9th Oct 2022 Anytime</Info>
                <BreakLine></BreakLine>
              </div>
            </InfoWrapper>
          </div>
          <HeadingRight>
            <BudgetLabel>NEED BUDGET</BudgetLabel>
            <Budget>$350</Budget>
            <Button>Make an offer</Button>
          </HeadingRight>
        </HeadingContainer>
        <DescriptionContainer>
          <Label>DESCRIPTION</Label>
          <Paragraph>
            I require my drawings, product specs and our floor plans to be taken and Bathroom
            elevations drawn up in CAD for our plumbers.
            <br />
            We have x4 bathrooms to complete
            <br />
            Powder Room
            <br />
            Guest Ensuite
            <br />
            Master Ensuite
            <br />
            Boys Bathroom
            <br />-
            <br />
            Due date: Sunday, 9th Oct 2022
          </Paragraph>
          <ImageContainer>
            <PostImg src="/src/images/example_1.png"></PostImg>
            <PostImg src="/src/images/example_2.png"></PostImg>
            <PostImg src="/src/images/example_3.png"></PostImg>
            <PostImg src="/src/images/example_4.png"></PostImg>
            <PostImg src="/src/images/example_5.png"></PostImg>
          </ImageContainer>
          <SectionLine></SectionLine>
        </DescriptionContainer>
        <div>
          <Label>OFFERS</Label>
          <TradieWrapper>
            <Avatar src="/src/images/tradie_avatar.png"></Avatar>
            <TradieName>Jack</TradieName>
          </TradieWrapper>
          <OfferParagraph>
            I&apos;m a qualified Plumber and I can help you with everything related to digital
            marketing from shopify ux/ui update to your paid/organic social ads. I’m a qualified
            Plumber and I can help you with everything related to digital marketing from shopify
            ux/ui update to your paid/organic social ads.
          </OfferParagraph>
          <TimeReply>
            <Time>30 minutes ago</Time>
            <ReplyWrapper>
              <ReplyIcon src="/src/images/reply.png"></ReplyIcon>
              <Reply>Reply</Reply>
            </ReplyWrapper>
          </TimeReply>
        </div>
      </DetailContainer>
    </Background>
  );
};

export default PostDetails;

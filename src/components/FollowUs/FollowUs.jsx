import {
  FollowPage,
  Follow,
  FollowText,
  FaceBook,
  Twiter,
  Instagram,
  Img,
  Img1,
  StyledLink,
} from "./FollowUs.style";

const FollowUs = () => {
  return (
    <FollowPage>
      <Follow>
        <FollowText>Follow Us</FollowText>
      </Follow>
      <FaceBook>
        <StyledLink to="#">
          <Img1 src="../../../images/facebook2.png" />
        </StyledLink>
      </FaceBook>
      <Instagram>
        <StyledLink to="#">
          <Img src="../../../images/Ins.png" />
        </StyledLink>
      </Instagram>
      <Twiter>
        <StyledLink to="#">
          <Img src="../../../images/Twiter.png" />
        </StyledLink>
      </Twiter>
    </FollowPage>
  );
};

export default FollowUs;

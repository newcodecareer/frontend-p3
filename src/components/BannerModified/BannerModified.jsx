import { Link } from "react-router-dom";
import {
  BannerContainer,
  BannerBox,
  BackgroundImg1,
  BackgroundImg2,
  BackgroundImg3,
  Tick,
  Information,
  Subtitle,
  PostNeedBtn,
  DisplayImg,
  Title,
  BrowseTaskBtn,
  Picture,
} from "./BannerModified.styles";

const BannerModified = () => {
  return (
    <BannerContainer>
      <BannerBox>
        <Information>
          <Title>
            One-stop solution <br /> for your house.
          </Title>
          <Subtitle>
            <Tick> &#10003;&nbsp; </Tick>
            Forget the old rules. Find the best people. <br />
            <Tick> &#10003;&nbsp; </Tick>
            Work when you want, doing what you want.
            <br />
            <Tick> &#10003;&nbsp; </Tick>
            Right now. Right here.
          </Subtitle>
          <div>
            <Link to="/post-needs">
              <PostNeedBtn>Post your tasks</PostNeedBtn>
            </Link>
            <Link to="/browse-needs">
              <BrowseTaskBtn>Browse tasks and earn</BrowseTaskBtn>
            </Link>
          </div>
        </Information>
        <Picture>
          <DisplayImg src="/images/picture-of-home.jpg" alt="picture of a home" />
          <BackgroundImg1></BackgroundImg1>
          <BackgroundImg2></BackgroundImg2>
          <BackgroundImg3></BackgroundImg3>
        </Picture>
      </BannerBox>
    </BannerContainer>
  );
};

export default BannerModified;

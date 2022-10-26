import { Link } from "react-router-dom";
import { BannerContainer, Information, Title, BrowseTaskBtn } from "./banner.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <Information>
        <Title>One-stop solution for your house.</Title>
        {/* <input type="text" placeholder="Tell us what service do you need? e.g.Plumber" /> */}
        <div>
          <Link to="/browse-needs">
            <BrowseTaskBtn>Browse tasks</BrowseTaskBtn>
          </Link>
        </div>
      </Information>
    </BannerContainer>
  );
};

export default Banner;

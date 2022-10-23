import {
  BannerContainer,
  Information,
  Title,
  GetQuoteBtn
} 
from "./banner.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <Information>
        <Title>One-stop solution for your house.</Title>
        {/* <input type="text" placeholder="Tell us what service do you need? e.g.Plumber" /> */}
        <div>
            <GetQuoteBtn>Get Free Quotes</GetQuoteBtn>
        </div>
      </Information>
    </BannerContainer>
  );
};

export default Banner;

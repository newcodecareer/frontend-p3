import styled from "styled-components";
import {
  btnFontColor,
  fontFamily,
  fontSizeM,
  forthFontColor,
  primaryThemeColor,
} from "../common/index.styles";

export const BannerContainer = styled.div`
  height: 60vh;
  width: 100%;
  padding: 1rem 0;
`;

export const BannerBox = styled.div`
  font-family: ${fontFamily};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Information = styled.div`
  position: relative
  max-width: 900px;
  height: auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 3rem;
`;

export const Tick = styled.text`
  color: ${(props) => props.inputColor || `${primaryThemeColor}`};
`;

export const Title = styled.h1`
  position: relative;
  height: auto;
  font-size: 3rem;
  margin-top: 1.2rem;
  text-align: left;
`;

export const Subtitle = styled.p`
  position: relative;
  height: auto;
  font-size: 1.2rem;
  margin-top: 2.5rem;
  margin-bottom: 6rem;
  text-align: left;
  line-height: 2.5rem;
  color: ${(props) => props.inputColor || `${forthFontColor}`};
`;

export const PostNeedBtn = styled.button`
  color: ${btnFontColor};
  font-size: ${fontSizeM};
  border: none;
  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  padding: 1rem 1.5rem;
  float: left;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid ${primaryThemeColor};
  border-radius: 25px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const BrowseTaskBtn = styled.button`
  color: ${primaryThemeColor};
  font-size: ${fontSizeM};
  border: none;
  background-color: #ffffff;
  border-radius: 25px;
  padding: 1rem 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid ${primaryThemeColor};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const Picture = styled.div`3

`;

export const DisplayImg = styled.img`
  height: 35vh;
  border: none;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  margin: 20px;
  position: relative;
  top: 45%;
  left: 35%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const BackgroundImg1 = styled.div`
  position: absolute;
  height: 150px;
  width: 300px;
  right: 300px;
  background-color: #e8dbce;
  z-index: -1;
  border-radius: 70px;
`;

export const BackgroundImg2 = styled.div`
  position: absolute;
  height: 300px;
  width: 250px;
  right: 800px;
  bottom: 400px;
  background-color: #f6e6d5;
  z-index: -2;
  border-radius: 20px;
`;

export const BackgroundImg3 = styled.div`
  position: absolute;
  height: 300px;
  width: 350px;
  top: 110px;
  right: 350px;
  background-color: #faf3e4;
  z-index: -3;
  border-radius: 20px;
`;

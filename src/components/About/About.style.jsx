import styled from "styled-components";

import {
  fontSizeXXL,
  fontSizeM,
  fontSizeL,
  primaryThemeColor,
  fontFamily,
} from "../common/index.styles";

export const AboutPage = styled.div`
  max-width: 100%;
  height: auto;
  font-family: ${fontFamily};
  flex-direction: column;
`;

//AboutPage div1
export const Heading = styled.h1`
  text-align: center;
  line-height: 700px;
  font-size: 3.5rem;
  -webkit-text-stroke: 3px ${primaryThemeColor};
  height: 700px;
  background-image: url("../../../public/images/aboutPage_Three.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 0;
`;

//AboutPage div2
export const AboutOne = styled.div`
  width: 80%;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
`;
export const Text = styled.div`
  width: 40%;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
`;
export const Title = styled.h1`
  color: ${primaryThemeColor};
  font-size: 2.5rem;
`;
export const SubTitle = styled.h4`
  font-size: ${fontSizeL};
`;

//AboutPage div3
export const AboutTwo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 70px;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 5%;
  background-color: #fffff0;
`;
export const Img = styled.img`
  width: 400px;
  height: 330px;
  border: solid;
  border-radius: 100%;
  margin-left: 20%;
  margin-top: 15px;
`;
export const TextControl = styled.div`
  flex-direction: column;
  width: 36%;
  margin-top: 0;
  padding-left: 5%;
  margin-top: 10px;
`;
export const SubHeading = styled.h2`
  margin-top: 20px;
  color: ${primaryThemeColor};
  font-size: ${fontSizeXXL};
`;
export const AboutTwoText = styled.h2`
  font-size: ${fontSizeM};
  margin: 20px;
  margin-left: 0;
`;

//AboutPage div4
export const FAQ = styled.div`
  text-align: center;
  left: 0;
  right: 0;
  margin-top: 10px;
  margin-bottom: 20px;
`;

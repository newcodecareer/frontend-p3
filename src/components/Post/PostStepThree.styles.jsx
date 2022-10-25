import styled from "styled-components";
import { fontFamily, fontSizeM, fontSizeS, secondaryFontColor } from "../common/index.styles";

export const InfoContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: -1.2rem;
  font-family: ${fontFamily};
`;

export const Info = styled.span`
  /* font-family: "Inter"; */
  font-weight: 500;
  font-size: ${fontSizeS};
  /* letter-spacing: -0.6px; */
  margin-right: 60px;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  background: #fbfbfb;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  margin-bottom: 50px;
`;

export const ImgBox = styled.div`
  width: 30%;
  text-align: center;
`;

export const ParagraphBox = styled.div`
  width: 70%;
`;

export const ParagraphOne = styled.p`
  /* font-family: "Inter"; */
  font-weight: 600;
  font-size: ${fontSizeM};
  line-height: 25px;
  /* letter-spacing: -0.6px; */
  margin: 15px 5px 25px;
`;

export const ParagraphTwo = styled.p`
  /* font-family: "Inter"; */
  font-weight: 500;
  font-size: ${fontSizeM};
  line-height: 25px;
  /* letter-spacing: -0.6px; */
  margin: 15px 5px 25px;

  color: ${secondaryFontColor};
`;

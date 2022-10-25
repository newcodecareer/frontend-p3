import { Link } from "react-router-dom";
import styled from "styled-components";
import { fontFamily, fontSizeM, primaryFontColor, thirdFontColor } from "../common/index.styles";

export const Afooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fontFamily};
  font-size: ${fontSizeM};
  border-top: 2px solid ${thirdFontColor};
  width: 100%;
  bottom: 0;
`;
export const ParagraphOne = styled.span`
  height: 2rem;
  font-size: 1rem;
  line-height: 55px;
  color: ${primaryFontColor};
  margin-right: 200px;
`;
export const ParagraphTwo = styled.span`
  height: 2rem;
  line-height: 55px;
  color: ${primaryFontColor};
  margin-right: 200px;
`;
export const ParagraphThree = styled.span`
  height: 2rem;
  line-height: 55px;
  color: ${primaryFontColor};
`;
export const Img = styled.img`
  width: 120px;
  height: auto;
  padding-top: 12px;
  margin-right: 200px;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.inputColor || "rgb(55,55,55)"};
  font-weight: ${(props) => props.inputWeight || "600"};
  text-decoration: none;
`;

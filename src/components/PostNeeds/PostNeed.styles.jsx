import styled from "styled-components";
import { fontSizeXL, primaryThemeColor, secondaryFontColor } from "../common/index.styles";

export const PostContainer = styled.div`
  text-align: center;
`;

export const StepsTiitle = styled.h1`
  position: relative;
  height: auto;
  font-size: 3rem;
  margin-top: 4rem;
  margin-bottom: 20px;
`;

export const Subtitle = styled.div`
  position: relative;
  height: auto;
  font-size: ${fontSizeXL};
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  border: 2px solid ${secondaryFontColor};
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  margin: 30px;
`;

export const Img = styled.img`
  height: auto;
  width: 250px;
`;

export const Steps = styled.h3``;

export const Description = styled.p`
  color: ${secondaryFontColor};

`;

export const PostNeedBtn = styled.button`
  color: rgb(255, 255, 255);
  font-size: ${fontSizeXL};
  border: none;
  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  border-radius: 8px;
  padding: 1rem 2rem;
  margin: 3rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
`;

import styled from "styled-components";
import { fontSizeM, primaryThemeColor, secondaryFontColor } from "../common/index.styles";

export const PostContainer = styled.div`
  text-align: center;
`;

export const StepsTiitle = styled.h1`
  position: relative;
  height: auto;
  font-size: 2.2rem;
  margin-top: 4rem;
  margin-bottom: 20px;
`;

export const Subtitle = styled.div`
  position: relative;
  height: auto;
  margin-bottom: 25px;
  margin-top: 45px;
  font-size: 1.5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  border-radius: 10px;
  max-width: 250px;
  padding: 20px;
  margin: 30px;
  // box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  border: 1px solid #BEBEBE;

  &:hover {
    box-shadow: 0 10px 10px 0 rgba(48, 55, 66, 0.15);
    transform: translate(0,-5px);
    transition: all .2s ease-in-out;
    transition-delay: 0s !important;
  }
`;

export const Img = styled.img`
  height: auto;
  max-width: 200px;
`;

export const Steps = styled.h3``;

export const Description = styled.p`
  color: ${secondaryFontColor};
`;

export const PostNeedBtn = styled.button`
  color: rgb(255, 255, 255);
  font-size: ${fontSizeM};
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

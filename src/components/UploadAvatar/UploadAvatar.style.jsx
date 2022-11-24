import styled from "styled-components";

import { btnFontColor, fontSizeM, primaryThemeColor } from "../common/index.styles";

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardControl = styled.div`
  margin-top: 80px;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 350px;
  height: 350px;
`;

export const Card = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Card1 = styled.div`
  border: solid;
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  color: ${btnFontColor};
  font-size: ${fontSizeM};
  border: none;
  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  padding: 1rem 1.5rem;
  float: left;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid ${primaryThemeColor};
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const ButtonControl = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

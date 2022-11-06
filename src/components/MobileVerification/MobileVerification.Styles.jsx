import styled from "styled-components";
import {
  btnFontColor,
  fontSizeM,
  primaryFontColor,
  primaryThemeColor,
  thirdFontColor,
  fontFamily,
} from "../common/index.styles";

export const Input = styled.input`
  display: flex;
  margin: auto;
  width: 15rem;

  border: solid 3px ${thirdFontColor};
  color: ${primaryFontColor};
  box-sizing: border-box;
  font-size: ${fontSizeM};
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: ${primaryThemeColor};
  color: ${btnFontColor};
  height: 2rem;
  width: 5rem;
  border-radius: 5px;
  border: none;
  display: flex;
  text-align: center;
  font-family: ${fontFamily};
  font-weight: 600;
  font-size: ${fontSizeM};
  justify-content: center;
  line-height: 2rem;
  margin: 0.8rem auto;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

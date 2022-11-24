import styled from "styled-components";
import {
  btnFontColor,
  fontSizeM,
  primaryThemeColor,
  primaryFontColor,
} from "../common/index.styles";

export const ChangeButton = styled.button`
  background-color: ${(props) => props.inputBackgroundColor || `${primaryThemeColor}`};
  color: ${(props) => props.inputColor || `${btnFontColor}`};
  height: ${(props) => props.inputHeight || "2rem"};
  padding: ${(props) => props.inputPadding || "0.5rem 1rem"};
  border-radius: 8px;
  border: none;
  font-size: ${fontSizeM};
  font-weight: 600;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /* justify-content: center; */
  align-items: center;
  margin: auto;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const SecurityIcon = styled.span`
  width: 5rem;
  font-size: 2rem;
  color: green;
  height: 2.5rem;
  display: inline-block;
`;

export const SecurityItemName = styled.span`
  display: inline-block;
  font-size: ${fontSizeM};
  color: ${primaryFontColor};
  font-weight: 600;
  width: 10rem;
`;

export const SecurityItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  line-height: 2rem;
`;

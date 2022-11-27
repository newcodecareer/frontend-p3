import styled from "styled-components";
import { fontFamily, fontSizeM, primaryThemeColor } from "../common/index.styles";

export const Button = styled.button`
  width: ${(props) => props.inputWidth || "520px"};
  padding: 1.2rem 0;

  font-family: ${fontFamily};
  font-weight: 600;
  font-size: ${fontSizeM};
  /* letter-spacing: -0.6px; */
  color: white;

  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: none;

  margin: 0.8rem 0;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  fontSizeXXL,
  fontSizeL,
  primaryFontColor,
  primaryBorderColor,
  primaryThemeColor,
} from "../common/index.styles";

export const Error = styled.div`
  padding-top: 5%;
  flex-direction: column;
  max-width: 580px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
export const Heading = styled.span`
  margin: 1%;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  font-size: ${fontSizeXXL};
  font-weight: bold;
`;

export const Pharagraph = styled.div`
  text-align: center;
  padding: 0.5rem;
  color: ${(props) => props.inputColor || `${primaryFontColor}`};
  font-family: "Inter", sans-serif;
`;

export const Img = styled.img`
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  font-size: ${fontSizeL};
`;

export const LinkOne = styled(Link)`
  color: ${(props) => props.inputColor || `${primaryThemeColor}`};
`;

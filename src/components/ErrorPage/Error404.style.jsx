import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryThemeColor } from "../common/index.styles";

export const Error = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;

export const TextOne = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;

export const TextTwo = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

export const Img = styled.img`
  margin: auto;
  display: block;
  height: 200px;
`;

export const TextThree = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export const TextFour = styled.h2`
  display: flex;
  justify-content: center;
`;

export const LinkOne = styled(Link)`
  color: ${(props) => props.inputColor || `${primaryThemeColor}`};
`;

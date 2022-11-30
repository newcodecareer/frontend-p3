import styled from "styled-components";
import {
  fontFamily,
  fontSizeM,
  fontSizeXL,
  primaryThemeColor,
  primaryBackgroundColor,
} from "../common/index.styles";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 15%;
  width: 70%;
  z-index: 100;
  overflow: hidden;
  background-color: ${primaryBackgroundColor};
  border-radius: 6px;

  @media (min-width: 768px) {
    Modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

export const Header = styled.div`
  background: ${primaryThemeColor};
  padding: 0.6rem;
  color: ${primaryBackgroundColor};
`;

export const Content = styled.div`
  padding: 1rem;
  font-size: ${fontSizeXL};
`;

export const Footer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

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

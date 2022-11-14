import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import {
  fontFamily,
  fontSizeM,
  fontSizeS,
  primaryThemeColor,
  thirdFontColor,
} from "../common/index.styles";

export const GlobalStyle = createGlobalStyle`
  body, button, ul, li{
    margin: 0;
    padding: 0;
    font-size: ${fontSizeS};
    font-family: ${fontFamily};
  }

  button.nav, input{
    font-size: ${fontSizeM};
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 0.4rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  padding-left: 0.5rem;
  margin-right: 85px;
`;

export const SearchWrap = styled.div`
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  border: 2px solid #d2d2d2;
  border-radius: 25px;
  &:hover {
    border: 2px solid ${primaryThemeColor};
  }
`;

export const Input = styled.input`
  width: 120px;
  ::placeholder {
    color: ${thirdFontColor};
  }
  border: none;
  outline: none;
  font-size: ${fontSizeM};
  font-family: ${fontFamily};
  font-weight: 500;
  padding-left: 1rem;
  letter-spacing: -0.6px;
  position: relative;
  margin: 0 10px;
  padding: 0;
  outline: none;
  transition: width 0.5s;
  &:focus {
    width: 180px;
  }
`;

export const SearchButton = styled.button`
  background: none;
  color: ${primaryThemeColor};
  border: none;
  padding-right: 0.5rem;
  cursor: pointer;
`;

export const NavBar = styled.ul`
  /* width: 75%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 3rem;
  letter-spacing: -0.6px;
  :hover {
    cursor: pointer;
  }
`;

export const DropList = styled.button`
  color: ${primaryThemeColor};
  border: none;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Button = styled.button`
  color: black;
  border: none;
  background-color: white;
  cursor: pointer;
  :hover {
    color: ${primaryThemeColor};
  }
  :focus {
    color: ${primaryThemeColor};
    font-weight: bold;
  }
`;

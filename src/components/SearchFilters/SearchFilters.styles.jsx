import styled from "styled-components";
import {
  fontFamily,
  fontSizeL,
  fontSizeM,
  primaryThemeColor,
  thirdFontColor,
} from "../common/index.styles";

export const Background = styled.div`
  width: 1180px;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  font-size: ${fontSizeM};
  font-weight: 600;
  font-family: "Inter";
  padding-top: 0.4rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 0.5rem;
`;

export const SearchWrap = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 2px solid #d2d2d2;
  border-radius: 25px;
`;

export const Input = styled.input`
  width: 120px;
  ::placeholder {
    color: ${thirdFontColor};
  }
  border: none;
  font-size: ${fontSizeM};
  font-family: ${fontFamily};
  font-weight: 500;
  padding-left: 1rem;
  letter-spacing: -0.6px;
  position: relative;
  margin: 0 10px;
  outline: none;
  transition: width 0.5s;
  &:focus {
    width: 200px;
  }
`;

export const SearchButton = styled.button`
  background: none;
  color: ${primaryThemeColor};
  border: none;
  font-size: ${fontSizeL};
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
`;

export const DropList = styled.a`
  color: ${primaryThemeColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

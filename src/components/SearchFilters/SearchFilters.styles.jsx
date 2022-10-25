import styled from "styled-components";
import { fontFamily, primaryThemeColor, thirdFontColor } from "../common/index.styles";

export const Background = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SearchWrap = styled.div`
  width: 70%;
  height: 30px;
  border: 2px solid #d2d2d2;
  border-radius: 25px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Input = styled.input`
  width: 70%;
  ::placeholder {
    color: ${thirdFontColor};
  }

  border: none;
  outline: none;

  font-family: ${fontFamily};
  font-weight: 500;
  font-size: 10px;
  letter-spacing: -0.6px;
  margin: 0 10px;
`;

export const SearchButton = styled.img`
  width: 10%;
  padding: 0;
  align-self: center;
`;

export const NavBar = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 50px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: -0.6px;
`;

export const DropList = styled.a`
  color: ${primaryThemeColor};
  text-decoration: none;
`;

export const Arrow = styled.img`
  width: 10px;
  padding: 0 15px;
`;

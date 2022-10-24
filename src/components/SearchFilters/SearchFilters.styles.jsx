import styled from "styled-components";
import {
  fontFamily,
  fontSizeM,
  fontSizeXL,
  primaryThemeColor,
  thirdFontColor,
} from "../common/index.styles";

export const Background = styled.div`
  height: 90px;
  margin: auto;
  width: 1180px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 350px;
  height: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid ${thirdFontColor};
  border-radius: 94px;
`;

export const Input = styled.input`
  width: 250px;

  ::placeholder {
    color: ${thirdFontColor};
  }

  border: none;
  outline: none;

  font-family: ${fontFamily};
  font-weight: 500;
  font-size: ${fontSizeM};
  /* line-height: 24px; */
  letter-spacing: -0.6px;
`;

export const SearchButton = styled.img`
  width: ${fontSizeXL};
`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  list-style: none;
  margin-left: 90px;
`;

export const NavItem = styled.li`
  margin-right: 80px;

  font-family: "Inter";
  font-weight: 600;
  font-size: ${fontSizeM};
  line-height: 24px;
  letter-spacing: -0.6px;
`;

export const DropList = styled.a`
  color: ${primaryThemeColor};
  text-decoration: none;
`;

export const Arrow = styled.img`
  width: 0.8rem;
  padding: 0 0.8rem;
`;

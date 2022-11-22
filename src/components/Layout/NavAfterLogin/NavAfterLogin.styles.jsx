import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  btnFontColor,
  fontSizeM,
  primaryBorderColor,
  primaryFontColor,
  primaryThemeColor,
  bgcColor,
  fontFamily,
} from "../../common/index.styles";

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  font-family: "Inter", sans-serif;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid 1px ${primaryBorderColor};
  padding: 0 0 0.6rem;
  padding-top: 10px;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 150px;
  }
`;

export const NavList = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      margin-left: 2rem;
      cursor: pointer;
      a {
        text-decoration: none;
        font-size: ${fontSizeM};
        font-weight: 600;
        color: ${primaryFontColor};
        &:link {
          color: ${primaryFontColor};
        }
        &:hover,
        :active {
          color: ${primaryThemeColor};
        }
      }
      &:first-child {
        background-color: ${primaryThemeColor};
        padding: 0.5rem 1.5rem;
        border: solid 1px ${primaryThemeColor};
        border-radius: 8px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        a {
          color: ${btnFontColor};
        }
        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }
`;

export const HeaderMid = styled.div`
  display: flex;
`;

export const UserIcon = styled.div``;

export const StyledLink = styled(Link)`
  align-items: center;
  text-decoration: none;
  font-size: ${fontSizeM};
  font-weight: 600;
  color: ${primaryFontColor};
  padding: 1rem 1.5rem;
  &:hover,
  :active {
    color: ${primaryThemeColor};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.inputBackgroundColor || `${bgcColor}`};
  border: none;
  cursor: pointer;
  &:hover {
    color: ${primaryThemeColor};
    filter: brightness(1);
  }
`;

export const MenuControl = styled.div`
  background-color: ${(props) => props.inputBackgroundColor || `${bgcColor}`};
  flex-direction: column;
  position: fixed;
  z-index: 2;
  margin-top: 5px;
  border: 1px solid;
  border-radius: 5px;
  width: 140px;
  height: auto;
  list-style-type: none;
  padding-left: 0px;
  box-shadow: 0 0 10px grey;
`;

export const Icon = styled.img``;

export const MenuButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  padding: 10px;
  padding-left: 15px;
  margin: 0;
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${primaryThemeColor};
    filter: brightness(1);
  }
`;

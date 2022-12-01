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

export const MenuControl = styled.div`
  background-color: ${(props) => props.inputBackgroundColor || `${bgcColor}`};
  flex-direction: column;
  position: fixed;
  z-index: 2;
  margin-top: 10px;
  border-radius: 5px;
  width: 140px;
  height: auto;
  list-style-type: none;
  padding-left: 0px;
  box-shadow: 0 0 10px grey;
`;

export const Button = styled.button`
  background-color: ${(props) => props.inputBackgroundColor || `${bgcColor}`};
  border: none;
  cursor: pointer;
  &:hover {
    ${MenuControl} {
      transition: max-height 0.25s ease-in;
    }
  }
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 5px;
  border-radius: 100%;
  &:hover {
    background-color: ${primaryThemeColor};
    filter: brightness(1.2);
  }
  transition: 0.2s;
`;

export const MenuButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  padding: 10px;
  padding-left: 15px;
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: ${primaryThemeColor};
    filter: brightness(1.2);
  }
  transition: 0.2s;
  display: flex;
  align-items: center;
  animation: animate 0.5s ;
  @keyframes animate{
    from{
      height:20px;
    }
    to {
      height:42px;
    }
  }
`;

export const IconControl = styled.div`
  margin-top: 5px;
  margin-right: 10px;
`;

export const TextControl = styled.div`
  text-align: center;
`;

export const TriangleOne = styled.div``;

export const TriangleTwo = styled.div`
  position: relative;
  width: 0;
  height: 0;
  top: -10px;
  left: 15px;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent grey;
  ::after {
    content: "";
    position: absolute;
    top: 2px;
    left: -8px;
    border-width: 0 8px 8px;
    border-style: solid;
    border-color: transparent transparent white;
  }
`;

import styled from "styled-components";
import {
  btnFontColor,
  fontSizeM,
  primaryBorderColor,
  primaryFontColor,
  primaryThemeColor,
} from "../../common/index.styles";

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  font-family: "Inter", sans-serif;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  max-width: 100%;
  z-index: 2;
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
export const NavLogin = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: baseline;

    li {
      margin-left: 1rem;
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

      &:last-child {
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

import styled from "styled-components";
import {
  btnFontColor,
  fontSizeL,
  primaryBorderColor,
  primaryFontColor,
  primaryThemeColor,
} from "../../common/index.styles";

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  font-family: "Inter", sans-serif;
  max-width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${primaryBorderColor};
  padding: 0 20% 1rem;
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  img {
    width: 150px;
  }
`;

export const NavList = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: baseline;

    li {
      margin-left: 1rem;
      cursor: pointer;

      a {
        text-decoration: none;
        font-size: ${fontSizeL};
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
        padding: 6px 18px;
        border: solid 1px ${primaryThemeColor};
        border-radius: 5px;
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

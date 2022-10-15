import styled from "styled-components";
import { btnFontColor, primaryBorderColor, primaryFontColor, primaryThemeColor } from "../../common/index.styles";

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  font-family: "Inter", sans-serif;
  max-width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${primaryBorderColor};
  padding: 0 20%;
`;

export const NavLogo = styled.div`
  img {
    max-width: 120px;
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
        font-size: 0.9rem;
        font-weight: 500;
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
      }
    }
  }
`;

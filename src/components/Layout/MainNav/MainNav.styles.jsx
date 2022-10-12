import styled from "styled-components";

export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  font-family: "Inter", sans-serif;
  max-width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px lightgray;
  padding: 0 20%;
`;

export const LogoDiv = styled.div`
  img {
    max-width: 120px;
  }
`;

export const NavDiv = styled.nav`
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
        color: rgb(55, 55, 55);

        &:link {
          color: rgb(55, 55, 55);
        }
        &:hover,
        :active {
          color: #f77f00;
        }
      }

      &:last-child {
        background-color: #f77f00;
        padding: 6px 18px;
        border: solid 1px #f77f00;
        border-radius: 5px;
        a {
          color: white;
        }
      }
    }
  }
`;

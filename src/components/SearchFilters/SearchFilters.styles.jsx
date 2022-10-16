import styled from "styled-components";

export const Background = styled.div`
  width: 1920px;
  height: 90px;
  margin: auto;

  border-top: 1px solid #d2d2d2;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 350px;
  height: 56px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid #d2d2d2;
  border-radius: 94px;
`;

export const Input = styled.input`
  width: 250px;

  ::placeholder {
    color: #b4b4b4;
  }

  border: none;
  outline: none;

  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.6px;
`;

export const SearchButton = styled.img`
  width: 30px;
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
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.6px;
`;

export const DropList = styled.a`
  color: #f77f00;
  text-decoration: none;
`;

export const Arrow = styled.img`
  width: 15px;
  padding: 0 15px;
`;

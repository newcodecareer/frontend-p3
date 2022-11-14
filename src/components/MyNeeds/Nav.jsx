import {
  Background,
  Input,
  SearchContainer,
  SearchWrap,
  NavBar,
  NavItem,
  SearchButton,
  GlobalStyle,
  Button,
} from "../SearchFilters/SearchFilters.styles";

import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <Background>
      <GlobalStyle />
      <SearchContainer>
        <SearchWrap>
          <Input type="text" placeholder="Search for needs" />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchWrap>
      </SearchContainer>
      <NavBar>
        <NavItem>
          <Button>ALL TASKS</Button>
        </NavItem>
        <NavItem>
          <Button>POSTED TASKS</Button>
        </NavItem>
        <NavItem>
          <Button>TASK ASSIGNED</Button>
        </NavItem>
        <NavItem>
          <Button>OFFERS PENDING</Button>
        </NavItem>
        <NavItem>
          <Button>TASK COMPLETED</Button>
        </NavItem>
      </NavBar>
    </Background>
  );
};

export default Nav;

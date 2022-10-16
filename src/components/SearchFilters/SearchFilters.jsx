import {
  Background,
  Input,
  SearchContainer,
  SearchButton,
  NavBar,
  NavItem,
  DropList,
  Arrow,
} from "./SearchFilters.styles";

const SearchFilters = () => {
  return (
    <Background>
      <SearchContainer>
        <Input type="text" placeholder="Search for needs"></Input>
        <SearchButton src="/src/images/search_logo.png"></SearchButton>
      </SearchContainer>
      <NavBar>
        <NavItem>
          <DropList href="#">
            Category
            <Arrow src="/src/images/arrow.png"></Arrow>
          </DropList>
        </NavItem>
        <NavItem>
          <DropList href="#">
            50km Hobart TAS & remotely
            <Arrow src="/src/images/arrow.png"></Arrow>
          </DropList>
        </NavItem>
        <NavItem>
          <DropList href="#">
            Price
            <Arrow src="/src/images/arrow.png"></Arrow>
          </DropList>
        </NavItem>
        <NavItem>
          <DropList href="#">
            Offers
            <Arrow src="/src/images/arrow.png"></Arrow>
          </DropList>
        </NavItem>
        <NavItem>
          <DropList href="#">
            Preference Sort
            <Arrow src="/src/images/arrow.png"></Arrow>
          </DropList>
        </NavItem>
      </NavBar>
    </Background>
  );
};

export default SearchFilters;

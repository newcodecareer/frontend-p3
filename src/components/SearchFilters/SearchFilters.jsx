import { useState } from "react";
import {
  Background,
  Input,
  SearchContainer,
  SearchWrap,
  NavBar,
  NavItem,
  DropList,
  SearchButton
} from "./SearchFilters.styles";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import Category from "./Category";

const SearchFilters = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <Background>
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
          <DropList onClick={handleClick}>
            Category
            <TiArrowSortedDown />
            {isShown && <Category />}
          </DropList>
        </NavItem>
        <NavItem>
          <DropList>
            Location
            <TiArrowSortedDown />
          </DropList>
        </NavItem>
        <NavItem>
          <DropList href="#">
            Price
            <TiArrowSortedDown />
          </DropList>
        </NavItem>
        <NavItem>
          <DropList href="#">
            Offers
            <TiArrowSortedDown />
          </DropList>
        </NavItem>
        <NavItem>
          <DropList href="#">
            Preference Sort
            <TiArrowSortedDown />
          </DropList>
        </NavItem>
      </NavBar>
    </Background>
  );
};

export default SearchFilters;

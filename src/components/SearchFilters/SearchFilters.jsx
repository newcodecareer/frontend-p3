import React, { useState } from "react";
import { useRef } from "react";
import { useClickAway } from "react-use";
import {
  Background,
  Input,
  SearchContainer,
  SearchWrap,
  NavBar,
  NavItem,
  DropList,
  SearchButton,
  GlobalStyle,
} from "./SearchFilters.styles";

import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

import Category from "../SearchFilters/DropDownList/Category";
import Range from "./DropDownList/Location";
import Price from "../SearchFilters/DropDownList/Price";
import Offers from "../SearchFilters/DropDownList/Offers";
import Sort from "../SearchFilters/DropDownList/Sort";

const SearchFilters = () => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpenCategory(false);
    setIsOpenLocation(false);
    setIsOpenPrice(false);
    setIsOpenOffers(false);
    setIsOpenSort(false);
  });

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const togglePopupCategory = () => {
    setIsOpenCategory(!isOpenCategory);
    setIsOpenLocation(false);
    setIsOpenPrice(false);
    setIsOpenOffers(false);
    setIsOpenSort(false);
  };

  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const togglePopupLocation = () => {
    setIsOpenLocation(!isOpenLocation);
    setIsOpenCategory(false);
    setIsOpenPrice(false);
    setIsOpenOffers(false);
    setIsOpenSort(false);
  };

  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const togglePopupPrice = () => {
    setIsOpenPrice(!isOpenPrice);
    setIsOpenCategory(false);
    setIsOpenLocation(false);
    setIsOpenOffers(false);
    setIsOpenSort(false);
  };

  const [isOpenOffers, setIsOpenOffers] = useState(false);
  const togglePopupOffers = () => {
    setIsOpenOffers(!isOpenOffers);
    setIsOpenCategory(false);
    setIsOpenLocation(false);
    setIsOpenPrice(false);
    setIsOpenSort(false);
  };

  const [isOpenSort, setIsOpenSort] = useState(false);
  const togglePopupSort = () => {
    setIsOpenSort(!isOpenSort);
    setIsOpenCategory(false);
    setIsOpenLocation(false);
    setIsOpenPrice(false);
    setIsOpenOffers(false);
  };

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
      <NavBar ref={ref}>
        <NavItem className="navitem">
          <DropList className="nav" onClick={togglePopupCategory}>
            Category
            <TiArrowSortedDown />
          </DropList>
          {isOpenCategory && <Category handleClose={togglePopupCategory} content={<div></div>} />}
        </NavItem>
        <NavItem className="navitem">
          <DropList className="nav" onClick={togglePopupLocation}>
            Location
            <TiArrowSortedDown />
          </DropList>
          {isOpenLocation && <Range handleClose={togglePopupLocation} content={<div></div>} />}
        </NavItem>
        <NavItem className="navitem">
          <DropList className="nav" onClick={togglePopupPrice}>
            Price
            <TiArrowSortedDown />
          </DropList>
          {isOpenPrice && <Price handleClose={togglePopupPrice} content={<div></div>} />}
        </NavItem>
        <NavItem className="navitem">
          <DropList className="nav" onClick={togglePopupOffers}>
            Offers
            <TiArrowSortedDown />
          </DropList>
          {isOpenOffers && <Offers handleClose={togglePopupOffers} content={<div></div>} />}
        </NavItem>
        <NavItem className="navitem">
          <DropList className="nav" onClick={togglePopupSort}>
            Preference Sort
            <TiArrowSortedDown />
          </DropList>
          {isOpenSort && <Sort handleClose={togglePopupSort} content={<div></div>} />}
        </NavItem>
      </NavBar>
    </Background>
  );
};

export default SearchFilters;

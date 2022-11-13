import { useState } from "react";

import {
  Background,
  BottomContainer,
  Breakline,
  Paragraph,
  Btn,
  ApplyBtn,
  Wrap,
  GlobalStyle,
  PopUp,
  Shade,
  SelectedValue,
  RangeScroll,
  Slider,
} from "./Category.styles";

const Price = () => {
  const [priceFrom, setPriceFrom] = useState("5");
  const [priceTo, setPriceTo] = useState("9995");

  function handleChangeFrom(e) {
    setPriceFrom(e.target.value);
    const from = (100 % (priceFrom - 5)) / (9995 - 5);
    const to = (100 % (priceTo - 5)) / (9995 - 5);
    console.log(priceFrom);
    console.log(priceTo);
    document.documentElement.style.setProperty("--from", from);
    document.documentElement.style.setProperty("--to", to);
  }

  function handleChangeTo(e) {
    setPriceTo(e.target.value);
    const from = (100 % (priceFrom - 5)) / (9995 - 5);
    const to = (100 % (priceTo - 5)) / (9995 - 5);
    console.log(priceFrom);
    console.log(priceTo);
    document.documentElement.style.setProperty("--from", from);
    document.documentElement.style.setProperty("--to", to);
  }

  return (
    <Background>
      <GlobalStyle />
      <Shade />
      <PopUp price>
        <Paragraph>NEED PRICE</Paragraph>
        <Wrap price>
          <SelectedValue price>
            ${priceFrom} - ${priceTo}
          </SelectedValue>
          <Slider>
            <RangeScroll
              price
              top
              type="range"
              min="5"
              max="9995"
              step="5"
              value={priceFrom}
              onChange={handleChangeFrom}
              // range={range}
            />
            <RangeScroll
              price
              bottom
              type="range"
              min="5"
              max="9995"
              step="5"
              value={priceTo}
              onChange={handleChangeTo}

              // range={range}
            />
          </Slider>
        </Wrap>
        <Breakline price></Breakline>
        <BottomContainer>
          <Btn>Cancel</Btn>
          <ApplyBtn>Apply</ApplyBtn>
        </BottomContainer>
      </PopUp>
    </Background>
  );
};

export default Price;

import {
  Background,
  BottomContainer,
  Breakline,
  Paragraph,
  Btn,
  ApplyBtn,
  Wrap,
  ParagraphBlock,
  GlobalStyle,
  PopUp,
  Shade,
} from "./Category.styles";

import React, { useState } from "react";
import Switch from "react-switch";

const Offers = () => {
  const [hideAssigned, setHideAssigned] = useState(false);
  const [hideOffered, setHideOffered] = useState(false);

  const handleChangeAssigned = () => {
    if (!hideAssigned) {
      setHideAssigned(true);
    } else {
      setHideAssigned(false);
    }
  };

  const handleChangeOffered = () => {
    if (!hideOffered) {
      setHideOffered(true);
    } else {
      setHideOffered(false);
    }
  };

  return (
    <Background>
      <GlobalStyle />
      <Shade />
      <PopUp offer>
        <Paragraph>OFFER FILTERS</Paragraph>
        <Wrap offer>
          <ParagraphBlock>
            <Paragraph bk>Available needs only</Paragraph>
            <Paragraph sml>Hide assigned needs</Paragraph>
          </ParagraphBlock>
          <Switch onChange={handleChangeAssigned} checked={hideAssigned} />
        </Wrap>
        <Breakline></Breakline>
        <Wrap offer>
          <ParagraphBlock>
            <Paragraph bk>Needs with no offers only</Paragraph>
            <Paragraph sml>Hide needs with offers</Paragraph>
          </ParagraphBlock>
          <Switch onChange={handleChangeOffered} checked={hideOffered} />
        </Wrap>
        <Breakline></Breakline>
        <BottomContainer offer>
          <Btn>Cancel</Btn>
          <ApplyBtn>Apply</ApplyBtn>
        </BottomContainer>
      </PopUp>
    </Background>
  );
};

export default Offers;

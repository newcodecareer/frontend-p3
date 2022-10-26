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

import Switch from "react-switch";

const Offers = () => {
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
          <Switch />
        </Wrap>
        <Breakline></Breakline>
        <Wrap offer>
          <ParagraphBlock>
            <Paragraph bk>Needs with no offers only</Paragraph>
            <Paragraph sml>Hide needs with offers</Paragraph>
          </ParagraphBlock>
          <Switch />
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

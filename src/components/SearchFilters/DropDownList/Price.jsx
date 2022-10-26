import {
    Background,
    BottomContainer,
    Breakline,
    Paragraph,
    Btn,
    ApplyBtn,
    RangeScroll,
    Wrap,
  } from "./Category.styles";

  const Price = () => {
    return(
        <Background price>
            <Paragraph>NEED PRICE</Paragraph>
            <Wrap price>
                <RangeScroll type="range" min="5" max="100" />
            </Wrap>
            <Breakline price></Breakline>
            <BottomContainer>
                <Btn>Cancel</Btn>
                <ApplyBtn>Apply</ApplyBtn>
            </BottomContainer>
        </Background>
    );
  };

  export default Price
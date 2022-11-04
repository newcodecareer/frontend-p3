import {
  Background,
  BottomContainer,
  Option,
  Breakline,
  Paragraph,
  Btn,
  ApplyBtn,
  Input,
  RangeScroll,
  Wrap,
  GlobalStyle,
  Shade,
  PopUp,
} from "./Category.styles";

const Location = () => {
  return (
    <Background>
      <GlobalStyle />
      <Shade />
      <PopUp location>
        <div>
          <Paragraph location>TO BE DONE</Paragraph>
          <Wrap location>
            <Option type="button" value="In Person" />
            <Option type="button" value="Remotely" />
            <Option type="button" value="All" />
          </Wrap>
        </div>
        <div>
          <Paragraph>SUBURB</Paragraph>
          <Wrap location>
            <Input type="text" placeholder="Hobart TAS, Australia" />
          </Wrap>
        </div>
        <div>
          <Paragraph>DISTANCE</Paragraph>
          <Wrap>
            <RangeScroll type="range" min="5" max="100" />
          </Wrap>
        </div>
        <Breakline location></Breakline>
        <BottomContainer location>
          <Btn>Cancel</Btn>
          <ApplyBtn>Apply</ApplyBtn>
        </BottomContainer>
      </PopUp>
    </Background>
  );
};

export default Location;

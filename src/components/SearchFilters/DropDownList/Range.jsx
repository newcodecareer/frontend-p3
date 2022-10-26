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
} from "./Category.styles";

const Range = () => {
  return (
    <Background range>
      <div>
        <Paragraph>TO BE DONE</Paragraph>
        <Wrap>
          <Option type="button" value="In Person" />
          <Option type="button" value="Remotely" />
          <Option type="button" value="All" />
        </Wrap>
      </div>
      <div>
        <Paragraph>SUBURB</Paragraph>
        <Wrap>
          <Input type="text" placeholder="Hobart TAS, Australia" />
        </Wrap>
      </div>
      <div>
        <Paragraph>DISTANCE</Paragraph>
        <Wrap>
          <RangeScroll type="range" min="5" max="100" />
        </Wrap>
      </div>
      <Breakline></Breakline>
      <BottomContainer>
        <Btn>Cancel</Btn>
        <ApplyBtn>Apply</ApplyBtn>
      </BottomContainer>
    </Background>
  );
};

export default Range;

import { useState } from "react";
import {
  Background,
  BottomContainer,
  Option,
  Breakline,
  Paragraph,
  Btn,
  ApplyBtn,
  Input,
  Wrap,
  GlobalStyle,
  Shade,
  PopUp,
  RangeScroll,
  SelectedValue,
} from "./Category.styles";

const Location = () => {
  const [distance, setDistance] = useState("45");

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
          <Wrap location_distance>
            <SelectedValue>{distance} KM</SelectedValue>
            <RangeScroll
              type="range"
              min="5"
              max="105"
              step="20"
              value={distance}
              onChange={(event) => setDistance(event.target.value)}
            />
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

import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { primaryThemeColor } from "../common/index.styles";
import {
  SectionContainer,
  Button,
  ButtonContainer,
  Label,
  Textarea,
  Paragraph,
  DataContainer,
  BtnImage,
} from "./Profile.styles";

const About = () => {
  const [about, setAbout] = useState(false);
  return (
    <SectionContainer>
      <Label>About</Label>
      {about ? (
        <div>
          <Textarea placeholder="Description"></Textarea>
          <ButtonContainer>
            <Button onClick={() => setAbout(false)}>Cancel</Button>
            <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>Edit your description now.</Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setAbout(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default About;

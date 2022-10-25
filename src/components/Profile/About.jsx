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
  const initialAbout = () => {
    return (
      <DataContainer>
        <div>
          <Paragraph>Edit your description now.</Paragraph>
        </div>
        <div>
          <BtnImage onClick={() => setAbout(aboutInputs)}>
            <FiEdit2 />
          </BtnImage>
        </div>
      </DataContainer>
    );
  };

  const aboutInputs = () => {
    return (
      <div>
        <Textarea placeholder="Description"></Textarea>
        <ButtonContainer>
          <Button onClick={() => setAbout(initialAbout)}>Cancel</Button>
          <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
        </ButtonContainer>
      </div>
    );
  };

  const [about, setAbout] = useState(initialAbout);
  return (
    <SectionContainer>
      <Label>About</Label>
      {about}
    </SectionContainer>
  );
};

export default About;

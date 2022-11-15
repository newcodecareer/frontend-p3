import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { primaryThemeColor } from "../common/index.styles";
import {
  BtnImage,
  Button,
  ButtonContainer,
  DataContainer,
  Input,
  Label,
  Paragraph,
  SectionContainer,
} from "./Profile.styles";

const Skills = () => {
  const [skills, setSkills] = useState(false);

  return (
    <SectionContainer>
      <Label>Skills</Label>
      {skills ? (
        <div>
          <Input type="text" placeholder="Certificate" />
          <Input type="text" placeholder="Specialties" />
          <Input type="text" placeholder="Languages" />
          <Input type="text" placeholder="Company" />
          <ButtonContainer>
            <Button onClick={() => setSkills(false)}>Cancel</Button>
            <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>Add Your skills or services.</Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setSkills(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default Skills;

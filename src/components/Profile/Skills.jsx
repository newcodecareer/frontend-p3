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
  const initialSkills = () => {
    return (
      <DataContainer>
        <div>
          <Paragraph>Add Your skills or services.</Paragraph>
        </div>
        <div>
          <BtnImage onClick={() => setSkills(skillsInputs)}>
            <FiEdit2 />
          </BtnImage>
        </div>
      </DataContainer>
    );
  };

  const skillsInputs = () => {
    return (
      <div>
        <Input type="text" placeholder="Certificate" />
        <Input type="text" placeholder="Specialties" />
        <Input type="text" placeholder="Languages" />
        <Input type="text" placeholder="Company" />
        <ButtonContainer>
          <Button onClick={() => setSkills(initialSkills)}>Cancel</Button>
          <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
        </ButtonContainer>
      </div>
    );
  };

  const [skills, setSkills] = useState(initialSkills);

  return (
    <SectionContainer>
      <Label>Skills</Label>
      {skills}
    </SectionContainer>
  );
};

export default Skills;

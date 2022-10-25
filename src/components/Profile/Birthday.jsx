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
  VerInputs,
} from "./Profile.styles";

const Birthday = () => {
  const initialBirthday = () => {
    return (
      <DataContainer>
        <div>
          <Paragraph>Add Your Birthday here.</Paragraph>
        </div>
        <div>
          <BtnImage onClick={() => setBirthday(birthdayInputs)}>
            <FiEdit2 />
          </BtnImage>
        </div>
      </DataContainer>
    );
  };

  const birthdayInputs = () => {
    return (
      <div>
        <VerInputs>
          <Input
            inputWidth="5rem"
            inputMargin="10px 1% 10px 0"
            inputTextAline="center"
            type="text"
            placeholder="DD"
            minLength="2"
            maxLength="2"
          />
          <Input
            inputWidth="5rem"
            inputMargin="10px 1% 10px 0"
            inputTextAline="center"
            type="text"
            placeholder="MM"
            minLength="2"
            maxLength="2"
          />
          <Input
            inputWidth="6rem"
            inputMargin="10px 1% 10px 0"
            inputTextAline="center"
            type="text"
            placeholder="YYYY"
            minLength="4"
            maxLength="4"
          />
        </VerInputs>
        <ButtonContainer>
          <Button onClick={() => setBirthday(initialBirthday)}>Cancel</Button>
          <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
        </ButtonContainer>
      </div>
    );
  };

  const [birthday, setBirthday] = useState(initialBirthday);

  return (
    <SectionContainer>
      <Label>Birthday</Label>
      {birthday}
    </SectionContainer>
  );
};

export default Birthday;

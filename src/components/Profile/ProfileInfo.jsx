import { primaryThemeColor } from "../common/index.styles";
import { FiEdit2 } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import {
  ButtonContainer,
  VerInputs,
  Label,
  SectionContainer,
  Input,
  Button,
  BtnImage,
  DataContainer,
  Paragraph,
} from "./Profile.styles";
import { useState } from "react";

const ProfileInfo = () => {
  const initialInfo = () => {
    return (
      <DataContainer>
        <div>
          <Paragraph>Rebecca</Paragraph>
          <Paragraph inputColor={`${primaryThemeColor}`}>
            <SlLocationPin />
            &nbsp; Narangba
          </Paragraph>
        </div>
        <div>
          <BtnImage onClick={() => setInfo(infoInputs)}>
            <FiEdit2 />
          </BtnImage>
        </div>
      </DataContainer>
    );
  };
  const infoInputs = () => {
    return (
      <div>
        <VerInputs>
          <Input
            inputWidth="30%"
            inputMargin="10px 2% 10px 0"
            type="text"
            placeholder="Your name"
          />
          <Input inputWidth="30%" type="text" placeholder="Enter suburb or postcode" />
        </VerInputs>
        <ButtonContainer>
          <Button onClick={() => setInfo(initialInfo)}>Cancel</Button>
          <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
        </ButtonContainer>
      </div>
    );
  };
  const [info, setInfo] = useState(initialInfo);

  return (
    <SectionContainer>
      <Label>Personal Information</Label>
      {info}
    </SectionContainer>
  );
};

export default ProfileInfo;

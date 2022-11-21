import { primaryThemeColor } from "../common/index.styles";
import { FiEdit2 } from "react-icons/fi";
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
  const [info, setInfo] = useState(false);

  return (
    <SectionContainer>
      <Label>Personal Information</Label>
      {info ? (
        <div>
          <VerInputs>
            <Input
              inputWidth="30%"
              inputMargin="10px 2% 10px 0"
              type="text"
              placeholder="First name"
            />
            <Input inputWidth="30%" type="text" placeholder="Last Name" />
          </VerInputs>
          <ButtonContainer>
            <Button onClick={() => setInfo(false)}>Cancel</Button>
            <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>Rebecca Yang</Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setInfo(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default ProfileInfo;

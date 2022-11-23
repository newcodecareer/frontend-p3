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

const Address = () => {
  const [address, setAddress] = useState(false);

  return (
    <SectionContainer>
      <Label>Address</Label>
      {address ? (
        <div>
          <VerInputs>
            <Input inputMargin="10px 2% 10px 0" type="text" placeholder="Your address" />
          </VerInputs>
          <ButtonContainer>
            <Button onClick={() => setAddress(false)}>Cancel</Button>
            <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph inputColor={`${primaryThemeColor}`}>
              <SlLocationPin />
              &nbsp; Narangba
            </Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setAddress(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default Address;

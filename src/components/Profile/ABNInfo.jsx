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

const ABNInfo = () => {
  const [abn, setAbn] = useState(false);

  return (
    <SectionContainer>
      <Label>ABN</Label>
      {abn ? (
        <div>
          <Input inputWidth="26%" type="text" placeholder="Your ABN" />
          <ButtonContainer>
            <Button onClick={() => setAbn(false)}>Cancel</Button>
            <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>Add Your ABN, start to make money.</Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setAbn(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default ABNInfo;

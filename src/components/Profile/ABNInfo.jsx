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
  const initialAbn = () => {
    return (
      <DataContainer>
        <div>
          <Paragraph>Add Your ABN, start make money.</Paragraph>
        </div>
        <div>
          <BtnImage onClick={() => setAbn(abnInputs)}>
            <FiEdit2 />
          </BtnImage>
        </div>
      </DataContainer>
    );
  };

  const abnInputs = () => {
    return (
      <div>
        <Input inputWidth="26%" type="text" placeholder="Your ABN" />
        <ButtonContainer>
          <Button onClick={() => setAbn(initialAbn)}>Cancel</Button>
          <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
        </ButtonContainer>
      </div>
    );
  };

  const [abn, setAbn] = useState(initialAbn);

  return (
    <SectionContainer>
      <Label>ABN</Label>
      {abn}
    </SectionContainer>
  );
};

export default ABNInfo;

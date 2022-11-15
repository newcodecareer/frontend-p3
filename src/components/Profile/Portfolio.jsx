import { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { primaryThemeColor } from "../common/index.styles";
import {
  BtnAdd,
  BtnImage,
  Button,
  ButtonContainer,
  DataContainer,
  Label,
  Paragraph,
  SectionContainer,
} from "./Profile.styles";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(false);

  return (
    <SectionContainer>
      <Label>Portfolio</Label>
      {portfolio ? (
        <div>
          <Paragraph>
            Upload a maximum of 20 items.
            <br />
            File formats accepted include JPG/PNG and must not be larger than 5MB.
          </Paragraph>
          <ButtonContainer>
            <BtnAdd>
              <AiOutlinePlusSquare />
            </BtnAdd>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={() => setPortfolio(false)}>Cancel</Button>
            <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>Add items to your portfolio.</Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setPortfolio(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default Portfolio;

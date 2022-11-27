import styled from "styled-components";
import { fontFamily, forthFontColor, primaryThemeColor, fontSizeM } from "../common/index.styles";

export const MyNeedContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 3%;
  padding: 0;
  font-family: ${fontFamily};
`;

export const NeedBox = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.inputColor || `${forthFontColor}`};
`;

export const CheckOffer = styled.p`
  position: relative;
  height: auto;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: left;
  line-height: 2.5rem;
  color: ${(props) => props.inputColor || `${primaryThemeColor}`};
`;

export const Offer = styled.div`
  flex: 1.5;
`;

export const Title = styled.h1`
  position: relative;
  height: auto;
  font-size: 2rem;
  margin-top: 1rem;
  text-align: left;
`;

export const Description = styled.p`
  position: relative;
  height: auto;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: left;
  line-height: 1.5rem;
  color: ${(props) => props.inputColor || `${forthFontColor}`};
`;

export const View = styled.p`
  font-size: 1rem;
  margin-top: 4rem;
  color: ${(props) => props.inputColor || `${forthFontColor}`};
`;

export const NeedDetails = styled.div`
  margin-top: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border-bottom-right-radius: 0;
  flex: 1;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
`;

export const Needheader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditBtn = styled.button`
  color: ${primaryThemeColor};
  font-size: ${fontSizeM};
  background-color: #ffffff;
  border-radius: 30px;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid ${primaryThemeColor};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const NeedTitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
  margin-top: 0;
`;

export const NeedLocation = styled.p`
  margin-bottom: 2rem;
`;

export const NeedInfo = styled.p`
  color: ${(props) => props.inputColor || `${forthFontColor}`};
  padding-bottom: 1rem;
  border-bottom: 2px solid ${(props) => props.inputColor || `${forthFontColor}`};
`;

export const DueDate = styled.p`
  margin-top: 2rem;
`;

export const DateDay = styled.p`
  font-weight: bold;
`;

export const PriceTitle = styled.p``;

export const PriceNumber = styled.p`
  font-weight: bold;
`;

export const OfferTitle = styled.div`
  border-bottom: 5px solid ${(props) => props.inputColor || `${primaryThemeColor}`};
  position: absolute;
  display: flex;
  bottom: 0;
`;

export const Offerheader = styled.p`
  float: left;
  margin-right: 0.5rem;
  font-weight: bold;
`;

export const OfferNumber = styled.p`
  color: ${(props) => props.inputColor || `${forthFontColor}`};
`;

export const OfferBox = styled.div`
  height: 45vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

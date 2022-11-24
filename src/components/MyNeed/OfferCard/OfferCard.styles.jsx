import styled from "styled-components";
import {
  btnFontColor,
  fontSizeM,
  primaryThemeColor,
  primaryShadowColor,
} from "../../common/index.styles";

export const CardContainer = styled.div`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  margin: 1.5rem;
  margin-top: 2rem;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 5px 15px ${primaryShadowColor};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

export const OfferDetails = styled.div`
  display: flex;
`;

export const InfoBox = styled.div`
  margin-left: 1rem;
  margin-right: 2rem;
  flex: 1;
  border-right: 2px solid ${(props) => props.inputColor || `${primaryThemeColor}`};
`;

export const PortraitBox = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  // position: relative;
  margin-bottom: 1rem;
`;

export const RoundPortrait = styled.img`
  // width:200%;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
`;

export const RatingBox = styled.div`
  display: flex;
  margin: 0;
`;

export const Rating = styled.p``;

export const StarIcon = styled.div`
  margin-right: 0.5rem;
  color: #ffb542;
  float: left;
`;

export const TickIcon = styled.div`
  margin-right: 0.5rem;
  color: #097969;
  float: left;
`;

export const CompletionRate = styled.p`
  margin-left: 1rem;
`;

export const Verification = styled.div`
  margin-bottom: 2rem;
`;

export const AcceptButton = styled.button`
  color: ${btnFontColor};
  font-size: ${fontSizeM};
  border: none;
  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  padding: 0.5rem 1.5rem;
  float: left;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid ${primaryThemeColor};
  border-radius: 50px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.7);
  max-height: 3rem;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const PriceBox = styled.div`
  margin-left: 2rem;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const PriceDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export const BtnBox = styled.div`
  display: flex;
`;

export const CommentBox = styled.div`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  flex: 1.5;
`;

export const Comment = styled.p`
  margin: 1rem;
`;

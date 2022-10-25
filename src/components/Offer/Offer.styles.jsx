import styled from "styled-components";
import {
  btnFontColor,
  fontFamily,
  primaryFontColor,
  secondaryThemeColor,
  primaryThemeColor,
  secondaryBorderColor,
} from "../common/index.styles";

export const PopUpBox = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const PopUp = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export const CloseBtn = styled.div`
  top: 10px;
  right: 10px;
  position: absolute;
  width: 20px;
  height: 20px;
  color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  border: none;
  background: #ffffff;
  cursor: pointer;
  font-weight: bold;
`;

export const OfferPageTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: ${fontFamily};
`;

export const Line = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.5px solid ${(props) => props.inputColor || `${primaryThemeColor}`};
  height: 0;
  width: 60%;
`;

export const OfferTitle = styled.h3`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: ${fontFamily};
`;

export const ChargeBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: table;
  border: 2px solid ${(props) => props.inputColor || `${secondaryBorderColor}`};
  border-radius: 5px;
  font-family: ${fontFamily};
`;

export const DollarSign = styled.div`
  margin: 0px;
  padding: 10px;
  display: table-cell;
  outline: none;
  border-right: 2px solid ${(props) => props.inputColor || `${secondaryBorderColor}`};
  font-size: 1.3rem;
  font-family: ${fontFamily};
`;

export const OfferCharge = styled.input`
  margin: 0px;
  border: none;
  outline: none;
  display: table-cell;
  text-align: center;
  font-size: 1.3rem;
  width: 8rem;
  font-family: ${fontFamily};
`;

export const IntroTitle = styled.p`
  font-size: 0.9rem;
  font-family: ${fontFamily};
`;

export const Intro = styled.textarea`
  padding: 10px;
  border: 2px solid ${(props) => props.inputColor || `${secondaryBorderColor}`};
  border-radius: 5px;
  width: 95%;
  height: 150px;
  text-align: left;
  margin-bottom: 20px;
  outline: none;
  font-size: 0.9rem;
  font-family: ${fontFamily};
`;

export const Tips = styled.div`
  background-color: ${(props) => props.inputColor || `${secondaryThemeColor}`};
  padding: 18px;
  margin-bottom: 40px;
  color: ${(props) => props.inputColor || `${primaryFontColor}`};
  font-size: 0.8rem;
  border-radius: 5px;
  font-family: ${fontFamily};
`;

export const TipsInfo = styled.div`
  font-size: 0.9rem;
`;

export const TipsDetails = styled.div`
  padding: 10px;
`;

export const SubmitBtn = styled.button`
  color: ${btnFontColor};
  font-size: 1rem;
  width: 100%;
  border: none;
  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-family: ${fontFamily};
  &:hover {
    filter: brightness(1.2);
  }
`;

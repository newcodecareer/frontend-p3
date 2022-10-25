import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  primaryFontColor,
  secondaryFontColor,
  primaryThemeColor,
  thirdFontColor,
  fontSizeL,
  fontSizeM,
  fontSizeS,
} from "../common/index.styles";

export const Form = styled.form`
  max-width: 580px;
  margin: auto;
  box-sizing: border-box;
  padding: 2rem 1.5rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1.2rem;
`;

export const Label = styled.label`
  font-size: ${(props) => props.inputSize || `${fontSizeL}`};
  color: ${(props) => props.inputColor || `${primaryFontColor}`};
  font-weight: ${(props) => props.inputWeight || "700"};
  padding: 1rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 95%;
  font-size: ${fontSizeM};
  margin: 0.8rem;
  padding: 1rem;
  border: solid 2px ${thirdFontColor};
  border-radius: 5px;
  ::placeholder {
    color: ${secondaryFontColor};
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 95%;
  color: white;
  font-size: ${fontSizeM};
  font-weight: 600;
  padding: 1rem 0;
  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  border: none;
  border-radius: 8px;
  margin: 0.8rem;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const TermContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  width: 95%;
  text-align: center;
  font-size: ${(props) => props.inputSize || `${fontSizeS}`};
  font-weight: ${(props) => props.inputWeight || "500"};
  margin-bottom: 0.2rem;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.inputColor || `${primaryFontColor}`};
  font-weight: ${(props) => props.inputWeight || "700"};
  text-decoration: none;
  &:hover {
    color: ${primaryThemeColor};
  }
`;

import styled from "styled-components";
import {
  btnFontColor,
  fontSizeM,
  primaryFontColor,
  secondaryFontColor,
  thirdFontColor,
} from "../common/index.styles";

export const ProfileContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  margin-top: 30px;
  box-sizing: border-box;
  padding: 30px 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: solid 1.5px ${thirdFontColor};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const DataContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: ${fontSizeM};
  font-weight: 600;
  color: ${primaryFontColor};
`;

export const VerInputs = styled.div`
  display: flex;
  font-size: ${fontSizeM};
`;

export const Input = styled.input`
  width: ${(props) => props.inputWidth || "62%"};
  border: solid 3px ${thirdFontColor};
  color: ${primaryFontColor};
  box-sizing: border-box;
  font-size: ${fontSizeM};
  margin: ${(props) => props.inputMargin || "0.8rem 0"};
  padding: 1rem;
  border-radius: 5px;
  text-align: ${(props) => props.inputTextAline};
  ::placeholder {
    color: ${secondaryFontColor};
  }
`;

export const Textarea = styled.textarea`
  font-family: "Inter", sans-serif;
  height: 8rem;
  font-size: ${fontSizeM};
  width: ${(props) => props.inputWidth || "58.5%"};
  margin: ${(props) => props.inputMargin || "10px 0"};
  resize: none;
  border: solid 3px ${thirdFontColor};
  border-radius: 5px;
  padding: 1rem;
  overflow: hidden;
  color: ${primaryFontColor};
  ::placeholder {
    color: ${secondaryFontColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: ${(props) => props.inputBackgroundColor || `${secondaryFontColor}`};
  color: ${(props) => props.inputColor || `${btnFontColor}`};
  height: ${(props) => props.inputHeight || "2.5rem"};
  padding: ${(props) => props.inputPadding || "0.5rem 1rem"};
  border-radius: 8px;
  border: none;
  font-size: ${fontSizeM};
  font-weight: 600;
  margin: 1rem 1rem 1rem 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 2rem;
  span {
    width: 9rem;
    font-size: 9rem;
    color: ${thirdFontColor};
    border: solid 0.6rem ${thirdFontColor};
    border-radius: 50%;
    display: flex;
  }
`;

export const BtnImage = styled.button`
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  padding: 0.7rem;
  display: flex;
  background-color: ${thirdFontColor};
  color: #fff;
  position: ${(props) => props.inputPosition};
  left: 50%;
  transform: translateX(80%);
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-size: ${fontSizeM};
  color: ${(props) => props.inputColor || `${primaryFontColor}`};
`;

export const BtnAdd = styled.button`
  font-size: 5rem;
  color: ${thirdFontColor};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  margin-left: -40px;
`;

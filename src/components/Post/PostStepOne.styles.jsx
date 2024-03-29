import styled from "styled-components";
import {
  fontFamily,
  fontSizeM,
  primaryFontColor,
  primaryThemeColor,
  thirdFontColor,
} from "../common/index.styles";

export const Background = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryFontColor};
`;

export const Heading = styled.h1`
  margin: 50px 0;
  font-family: ${fontFamily};
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  /* letter-spacing: -0.6px; */
`;

export const Label = styled.label`
  display: block;
  padding: 1rem 0;
  font-family: ${fontFamily};
  font-weight: 600;
  font-size: ${fontSizeM};
  /* letter-spacing: -0.6px; */
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 500px;
  /* height: 30px; */

  font-family: ${fontFamily};
  font-weight: 500;
  font-size: ${fontSizeM};
  /* letter-spacing: -0.6px; */
  border: 2px solid ${thirdFontColor};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 30px;

  ::placeholder {
    color: ${thirdFontColor};
  }
`;

export const Button = styled.button`
  width: ${(props) => props.inputWidth || "520px"};
  padding: 1.2rem 0;

  font-family: ${fontFamily};
  font-weight: 600;
  font-size: ${fontSizeM};
  /* letter-spacing: -0.6px; */
  color: white;

  background-color: ${(props) => props.inputColor || `${primaryThemeColor}`};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: none;

  margin: 0.8rem 0;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const TextArea = styled.textarea`
  width: 500px;
  height: 150px;
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: ${fontSizeM};
  line-height: 1.5;
  /* letter-spacing: -0.6px; */
  border: 2px solid ${thirdFontColor};
  border-radius: 8px;
  padding: 1rem;
  resize: none;
  overflow: hidden;
  ::placeholder {
    color: ${thirdFontColor};
  }
`;

export const ButtonContainer = styled.div`
  margin: 20px 0;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

// export const BackButton = styled.button`
//   width: 200px;
//   height: 40px;
//   font-family: "Inter";
//   font-weight: 600;
//   font-size: 15px;
//   letter-spacing: -0.6px;
//   cursor: pointer;
//   border: 1px solid ${thirdFontColor};
//   background: white;
//   border-radius: 7px;
//   margin-right: 15px;
// `;

export const BreakLine = styled.hr`
  width: 540px;
  border: 1px solid ${thirdFontColor};
  margin: 120px 0 0 0;
`;

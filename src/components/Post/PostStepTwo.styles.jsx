import styled from "styled-components";
import { fontFamily, fontSizeM, thirdFontColor } from "../common/index.styles";

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
    color: #b4b4b4;
  }
`;

export const ButtonContainer = styled.div`
  margin: 20px 0;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  width: 200px;
  height: 40px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.6px;

  cursor: pointer;

  border: 1px solid #b4b4b4;
  background: white;
  border-radius: 7px;

  margin-right: 15px;
`;

export const BreakLine = styled.hr`
  width: 540px;
  border: 1px solid #d2d2d2;
  margin: 120px 0 0 0;
`;

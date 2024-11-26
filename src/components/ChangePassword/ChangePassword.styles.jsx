import styled from "styled-components";
import { btnFontColor, fontSizeM, thirdFontColor, primaryThemeColor } from "../common/index.styles";

export const ChangePasswordUserIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 5rem;
  span {
    width: 9rem;
    font-size: 9rem;
    color: ${thirdFontColor};
    border: solid 0.6rem ${thirdFontColor};
    border-radius: 50%;
    display: flex;
  }
`;

export const ChangePasswordSecondIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 5rem;
`;

export const ChangePasswordContextStyle = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center;
  position: relative; */
  padding-top: 1rem;
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    /* padding: 2rem; */
  }
`;

export const ChangePasswordEmailAddress = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 1rem;
  font-weight: 800;
`;

export const ChangePasswordBtn = styled.button`
  background-color: ${(props) => props.inputBackgroundColor || `${primaryThemeColor}`};
  color: ${(props) => props.inputColor || `${btnFontColor}`};
  height: ${(props) => props.inputHeight || "2.5rem"};
  padding: ${(props) => props.inputPadding || "0.5rem 1rem"};
  border-radius: 8px;
  border: none;
  font-size: ${fontSizeM};
  font-weight: 600;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: auto;
  &:hover {
    filter: brightness(1.2);
  }
`;

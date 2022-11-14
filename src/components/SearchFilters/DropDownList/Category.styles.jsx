import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

import {
  fontFamily,
  fontSizeS,
  // fontSizeM,
  // fontSizeXL,
  primaryThemeColor,
  secondaryFontColor,
  thirdFontColor,
  btnFontColor,
  primaryBackgroundColor,
} from "../../common/index.styles";

export const GlobalStyle = createGlobalStyle`
  body, button, input{
    margin: 0;
    padding: 0;
    font-size: ${fontSizeS};
    font-family: ${fontFamily};
  }
`;

export const Shade = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  top: 71.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400vw;
  height: 100%;
`;

export const PopUp = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 20px 15px;

  ${(props) =>
    props.category &&
    css`
      width: 500px;
      height: 230px;
      top: 23%;
      left: 25%;
    `};

  ${(props) =>
    props.location &&
    css`
      width: 300px;
      height: 280px;
      overflow-y: scroll;
      top: 27.5%;
      left: 57%;
    `};

  ${(props) =>
    props.price &&
    css`
      width: 300px;
      height: 165px;
      top: 17.5%;
      left: 67%;
    `};

  ${(props) =>
    props.offer &&
    css`
      width: 300px;
      height: 210px;
      top: 21.5%;
      left: 75%;
    `};

  ${(props) =>
    props.sort &&
    css`
      width: 160px;
      height: 285px;
      top: 28%;
      left: 78%;
    `};
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 125px;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const MiddleContainer = styled.div`
  max-height: 130px;
  overflow-y: scroll;
`;

export const Breakline = styled.hr`
  border: 0.5px solid ${thirdFontColor};
  margin: 15px 0;

  ${(props) =>
    props.location &&
    css`
      margin-top: 40px;
    `};
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.offer &&
    css`
      margin-top: 20px;
    `};
`;

export const Paragraph = styled.p`
  font-weight: 500;
  color: ${secondaryFontColor};
  margin: 0 0 20px 0;
  line-height: 18px;

  ${(props) =>
    props.category &&
    css`
      margin: 0;
    `};

  ${(props) =>
    props.sml &&
    css`
      margin: 0;
      line-height: 18px;
    `};

  ${(props) =>
    props.bk &&
    css`
      color: black;
      margin: 0;
    `};
`;

export const ApplyBtn = styled.button`
  width: 110px;
  height: 30px;
  background-color: ${primaryThemeColor};
  color: ${btnFontColor};
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

export const Btn = styled.button`
  height: 30px;
  background: white;
  color: ${(props) => (props.primary ? primaryThemeColor : secondaryFontColor)};
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const List = styled.ul`
  columns: 2;
  list-style: none;
  padding: 0;
  margin: 0;

  ${(props) =>
    props.sort &&
    css`
      columns: 1;
      font-size: ${fontSizeS};
    `};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  ${(props) =>
    props.category &&
    css`
      justify-content: flex-start;
      margin-bottom: 10px;
    `};

  ${(props) =>
    props.sort &&
    css`
      margin: 0;
      &:hover {
        background-color: ${primaryBackgroundColor};
      }
      border: none;
      border-radius: 7px;
      width: 150px;
    `};
`;

export const Checkbox = styled.input`
  display: none;

  + label {
    padding-left: 40px;
    position: relative;
  }

  + label::before {
    border: 1px solid ${primaryThemeColor};
    border-radius: 3px;
    left: 3px;
    height: 18px;
    width: 18px;
    content: "";
    position: absolute;
    cursor: pointer;
  }

  :checked + label::before {
    content: "✓";
    border: none;
    background-color: ${primaryThemeColor};
    color: white;
    text-align: center;
    vertical-align: center;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid ${thirdFontColor};
  border-radius: 5px;

  width: 245px;
  height: 30px;

  padding-left: 10px;
  outline: none;
`;

export const Option = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  border-color: ${thirdFontColor};

  color: ${primaryThemeColor};
  background-color: white;

  padding: 5px 10px;

  width: 80px;
  height: 30px;

  cursor: pointer;
  &:focus {
    background-color: ${primaryThemeColor};
    border: none;
    color: white;
  }
`;

export const RangeScroll = styled.input`
  width: 90%;
  margin: 0 atuo;
  cursor: pointer;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${(props) =>
    props.location &&
    css`
      margin-bottom: 20px;
    `};

  ${(props) =>
    props.price &&
    css`
      margin: 40px 0;
    `};

  ${(props) =>
    props.offer &&
    css`
      justify-content: space-between;
    `};
`;

export const ParagraphBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SwitchBtn = styled.button``;

export const Img = styled.img`
  visibility: hidden;
`;

export const ListBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:active {
    font-weight: 600;
    background-color: ${primaryBackgroundColor};
    & ~ & {
      visibility: visible;
    }
  }
`;

import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

import {
  fontFamily,
  fontSizeS,
  fontSizeM,
  //   fontSizeXL,
  primaryThemeColor,
  secondaryFontColor,
  thirdFontColor,
  btnFontColor,
  primaryBackgroundColor,
} from "../../common/index.styles";

export const CreateStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: ${fontSizeS};
    font-family: ${fontFamily};
    vertical-align: baseline;
};
`;

export const Background = styled.div`
  border: 1px solid black;

  ${(props) =>
    props.category &&
    css`
      width: 500px;
      height: 225px;
      padding: 20px 15px;
    `};

  ${(props) =>
    props.range &&
    css`
      width: 300px;
      height: 280px;
      padding: 0 15px 15px 15px;
      overflow-y: scroll;
    `};

  ${(props) =>
    props.price &&
    css`
      width: 300px;
      height: 180px;
      padding: 0 15px 15px 15px;
    `};

  ${(props) =>
    props.offer &&
    css`
      width: 300px;
      height: 240px;
      padding: 0 15px 15px 15px;
    `};

  ${(props) =>
    props.sort &&
    css`
      width: 160px;
      height: 285px;
      padding: 15px;
    `};
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
  margin: 20px 0 10px;

  ${(props) =>
    props.price &&
    css`
      margin: 35px 0 10px;
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
      margin: 20px 0 0 0;
    `};
`;

export const Paragraph = styled.p`
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: ${fontSizeM};

  color: ${secondaryFontColor};
  margin: ${(props) => (props.category ? 0 : "20px 0")};

  ${(props) =>
    props.sml &&
    css`
      font-size: ${fontSizeS};
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
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 9px;

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
  margin-right: 15px;
  width: 18px;
  height: 18px;
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

  font-size: ${fontSizeS};

  width: 80px;
  height: 30px;

  cursor: pointer;
`;

export const RangeScroll = styled.input`
  width: 90%;
  margin: 0 atuo;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${(props) =>
    props.price &&
    css`
      margin: 45px 0 0 0;
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

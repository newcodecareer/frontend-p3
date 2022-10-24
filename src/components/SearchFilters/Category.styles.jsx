import styled, { css } from "styled-components";

import {
  fontFamily,
  fontSizeS,
//   fontSizeM,
//   fontSizeXL,
  primaryThemeColor,
  secondaryFontColor,
  thirdFontColor,
  btnFontColor,
} from "../common/index.styles";

export const Background = styled.div`
  border: 1px solid black;

  ${(props) =>
    props.category &&
    css`
      width: 500px;
      height: 225px;
      padding: 20px 15px;
      overflow-y: hidden;
    `};

  ${(props) =>
    props.range &&
    css`
      width: 300px;
      height: 280px;
      padding: 0 15px 15px 15px;
      overflow-y: scroll;
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
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: ${fontSizeS};

  color: ${secondaryFontColor};
  margin: ${(props) => (props.category ? 0 : "20px 0")};
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
`;

export const ListItem = styled.li`
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
`;

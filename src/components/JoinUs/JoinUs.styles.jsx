import styled from "styled-components";
import { fontFamily, forthFontColor } from "../common/index.styles";

export const JoinUsContainer = styled.div`
  /* height: 60vh; */
  width: 80%;
  margin: auto;
`;

export const JoinUsBox = styled.div`
  font-family: ${fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8rem;
`;

export const Information = styled.div`
  max-width: 900px;
  height: auto;
  text-align: center;
  margin-right: 8rem;
`;

export const Title = styled.h1`
  height: auto;
  font-size: 3rem;
  margin-top: 1.2rem;
  text-align: left;
`;

export const Subtitle = styled.p`
  height: auto;
  font-size: 1.2rem;
  text-align: left;
  line-height: 2.5rem;
  color: ${(props) => props.inputColor || `${forthFontColor}`};
`;

export const DisplayImg = styled.img`
  height: 19rem;
`;

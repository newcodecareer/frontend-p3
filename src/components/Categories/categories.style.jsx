import styled from "styled-components";

import { secondaryFontColor } from "../common/index.styles";

export const Category = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-bottom: 100px;
`;

export const Heading = styled.span`
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-weight: bold;
`;

export const SubHeading = styled.span`
  color: darkorange;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  padding: 20px;
  margin: 35px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 130px;
  height: 100px;
  border: 2px solid ${secondaryFontColor};
`;

export const Img = styled.img`
  height: 65px;
  width: 80px;
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.a`
  margin-top: 3px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-align: center;
`;

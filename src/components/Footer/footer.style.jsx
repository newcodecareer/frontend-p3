import { Link } from "react-router-dom";
import styled from "styled-components";

export const Afooter = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid grey;
  position: fixed;
  width: 100%;
  bottom: 0;
`;
export const ParagraphOne = styled.span`
  height: 50px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  line-height: 55px;
  background: white;
  color: black;
  margin-right: 200px;
`;
export const ParagraphTwo = styled.span`
  height: 50px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  line-height: 55px;
  background: white;
  color: black;
  margin-right: 200px;
`;
export const ParagraphThree = styled.span`
  height: 50px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  line-height: 55px;
  background: white;
  color: black;
`;
export const Img = styled.img`
  width: 130px;
  height: 33px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-right: 200px;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.inputColor || "rgb(55,55,55)"};
  font-weight: ${(props) => props.inputWeight || "510"};
  text-decoration: none;
`;

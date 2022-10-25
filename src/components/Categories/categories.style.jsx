import styled from "styled-components";

export const Category = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Heading = styled.span`
  font-size: 45px;
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
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  border-style: groove;
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 130px;
`;

export const Img = styled.img`
  height: 60px;
  padding-left: 15px;
`;

export const Text = styled.a`
  padding-top: 5px;
  padding-left: 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-align: center;
`;

import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 45%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
  margin-bottom: 40px;
`;

export const Info = styled.span`
  font-family: "Inter";
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.6px;

  margin-right: 60px;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 45%;

  background: #fbfbfb;
  border: 1px solid #f5f5f5;
  border-radius: 7px;

  margin-bottom: 50px;
`;

export const ImgBox = styled.div`
  width: 30%;
  text-align: center;
`;

export const ParagraphBox = styled.div`
  width: 70%;
`;

export const ParagraphOne = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: -0.6px;
  margin: 15px 5px 25px;
`;

export const ParagraphTwo = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: -0.6px;
  margin: 0 5px 15px;

  color: #969595;
`;

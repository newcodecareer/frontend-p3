import styled from "styled-components";

export const Background = styled.div`
  width: 1920px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  height: 114px;
  margin-top: 150px;
  margin-bottom: 80px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 60px;
  line-height: 73px;
  letter-spacing: -0.6px;
`;

export const InfoContainer = styled.div`
  width: 1110px;
  margin-bottom: 40px;
`;

export const Info = styled.span`
  display: inline-block;
  width: 390px;

  font-family: "Inter";
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.6px;

  margin-right: 60px;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 1110px;
  height: 255px;

  background: #fbfbfb;
  border: 3px solid #f5f5f5;
  border-radius: 7px;
`;

export const Img = styled.img`
  width: 143px;
  height: 224px;

  border-radius: 152.5px;
`;
export const ParagraphBox = styled.div`
  width: 811px;

  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ParagraphOne = styled.p`
  margin: 0;
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.6px;
  margin-bottom: 35px;
`;

export const ParagraphTwo = styled.p`
  margin: 0;
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.6px;

  color: #969595;
`;

export const ButtonContainer = styled.div`
  margin-top: 220px;
`;

export const Button = styled.button`
  width: 580px;
  height: 90px;

  font-family: "Inter";
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.6px;
  color: white;

  background-color: ${(props) => props.inputColor || "#f77f00"};
  box-shadow: 4px 5px 21px rgba(0, 0, 0, 0.16);
  border-radius: 11px;
  border: none;

  cursor: pointer;
`;

export const BackButton = styled.button`
  width: 380px;
  height: 90px;

  font-family: "Inter";
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.6px;
  color: black;

  background-color: white;
  border: none;

  cursor: pointer;
`;
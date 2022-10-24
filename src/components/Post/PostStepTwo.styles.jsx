import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 550px;
  height: 120px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.6px;

  background: #ffffff;
  border: 2px solid #b4b4b4;
  border-radius: 7px;
  outline: none;
  
  padding: 15px;

  ::placeholder {
    color: #b4b4b4;
  }
`;

export const ButtonContainer = styled.div`
  margin: 20px auto 50px;
`;

export const BackButton = styled.button`
  width: 200px;
  height: 40px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.6px;

  cursor: pointer;

  border: 1px solid #b4b4b4;
  background: white;
  border-radius: 7px;

  margin-right: 15px;
`;

export const BreakLine = styled.hr`
  width: 600px;
  border: 1px solid #d2d2d2;
  margin: 150px 0 0 0;
`;

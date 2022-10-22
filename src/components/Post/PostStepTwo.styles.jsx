import styled from "styled-components";

export const TextArea = styled.textarea`
    width: 550px;
    height: 120px;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.6px;

    background: #FFFFFF;
    border: 2px solid #B4B4B4;
    border-radius: 7px;

    padding: 15px;

    ::placeholder {
        color: #B4B4B4;
    }
`;

export const ButtonContainer = styled.div`
  margin: 20px auto 50px;
`;

export const BackButton = styled.button`
  width: 250px;
  height: 40px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.6px;
  color: black;

  cursor: pointer;

  border: none;
  background: white;
`;

export const BreakLine = styled.hr`
  width: 600px;
  border: 1px solid #d2d2d2;
  margin: 150px 0 0 0;
`;

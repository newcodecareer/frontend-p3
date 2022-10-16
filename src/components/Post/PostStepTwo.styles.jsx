import styled from "styled-components";

export const Background = styled.div`
  width: 1920px;
  margin: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  height: 114px;
  margin-top: 150px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 60px;
  line-height: 73px;
  text-align: center;
  letter-spacing: -0.6px;
`;

export const InputContainer = styled.div`
  margin-bottom: 55px;
`;

export const TextArea = styled.textarea`
    width: 1074px;
    height: 219px;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.6px;
    align-items: 
    background: #FFFFFF;
    border: 3px solid #B4B4B4;
    border-radius: 7px;

    padding: 15px;

    ::placeholder {
        color: #B4B4B4;
    }
`;
export const ButtonContainer = styled.div`
  width: 1110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const Button = styled.button`
  width: 580px;
  height: 90px;

  font-family: "Inter";
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
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
  text-align: center;
  letter-spacing: -0.6px;
  color: black;
  background-color: white;
  border: none;
  border-radius: 11px;

  cursor: pointer;
`;

export const BreakLine = styled.hr`
  width: 1131px;
  height: 0px;
  border: 1px solid #d2d2d2;
  margin-top: 230px;
`;

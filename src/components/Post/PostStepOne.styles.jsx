import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  margin: 50px 0;
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
  letter-spacing: -0.6px;
`;

export const Label = styled.label`
  display: block;
  height: 30px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.6px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 13px;
  letter-spacing: -0.6px;

  background: #ffffff;
  border: 2px solid #b4b4b4;
  border-radius: 5px;

  padding: 0 15px;
  margin-bottom: 30px;

  ::placeholder {
    color: #b4b4b4;
  }
`;

export const Button = styled.button`
  width: 330px;
  height: 40px;

  font-family: "Inter";
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.6px;
  color: white;

  background-color: ${(props) => props.inputColor || "#f77f00"};
  box-shadow: 4px 5px 21px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  border: none;
 
  margin: ${props => (props.primary ? "50px auto" : "0")}; 
  cursor: pointer;
`;

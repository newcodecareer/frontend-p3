import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  max-width: 580px;
  margin: auto;
  box-sizing: border-box;
  padding: 30px 25px;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`;

export const Label = styled.label`
    font-size: ${props => props.inputSize || '1.2rem'};
    color: ${props => props.inputColor || 'rgb(55,55,55)'};
    font-weight: ${props => props.inputWeight || '600'};
    padding: 15px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 95%;
    font-size: 1rem;
    margin: 10px;
    padding: 15px;
    border: solid 1px rgb(211, 211, 211);
    border-radius: 5px;
`;

export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
    width: 95%;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    padding: 18px 0;
    background-color: ${props => props.inputColor || '#f77f00'};
    border: none;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
`

export const TermDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const P = styled.p`
    width: 95%;
    text-align: center;
    font-size: ${props => props.inputSize || '0.8rem'};
    font-weight: ${props => props.inputWeight || '500'};
    margin-bottom: 0.2rem;
`

export const StyledLink = styled(Link)`
    color: ${props => props.inputColor || 'rgb(55,55,55)'};
    font-weight: ${props => props.inputWeight || '700'};
    text-decoration: none;
`;
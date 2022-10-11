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

export const H1 = styled.h1`
    height: 114px;
    margin-top: 150px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 73px;
    text-align: center;
    letter-spacing: -0.01em;
`;

export const Label = styled.label`
    display: block;
    width: 580px;
    height: 55px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 42px;
    letter-spacing: -0.01em;
`;

export const InputDiv = styled.div`
    margin-bottom: 55px;
`;

export const Input = styled.input`
    width: 544px;
    height: 84px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.01em;

    background: #FFFFFF;
    border: 3px solid #B4B4B4;
    border-radius: 7px;

    padding: 0 15px;

    ::placeholder {
        color: #B4B4B4;
    }
`;

export const Button = styled.button`
    
    width: 580px;
    height: 90px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.01em;
    color: white;

    background-color: ${(props) => props.inputColor || "#f77f00"};
    box-shadow: 4px 5px 21px rgba(0, 0, 0, 0.16);
    border-radius: 11px;
    border: none;
    
    margin: 57px auto 90px;
    cursor: pointer;
`;
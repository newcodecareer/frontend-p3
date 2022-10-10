import styled from "styled-components";

export const Form = styled.form`
  max-width: 580px;
  margin: auto;
  box-sizing: border-box;
  padding: 30px 25px;
`;

export const InputDiv = styled.div.attrs(props => ({
    size: props.size || '1.2rem',
    color: props.color || 'rgb(55,55,55)',
}))`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;

  label {
    font-size: ${props => props.size};
    color: ${props => props.color};
    font-weight: 600;
    padding: 15px;
  }

  input {
    box-sizing: border-box;
    width: 95%;
    font-size: 1rem;
    margin: 10px;
    padding: 15px;
    border: solid 1px rgb(211, 211, 211);
    border-radius: 5px;
  }
`;

export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 95%;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    padding: 18px 0;
    background-color: #f77f00;
    border: none;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
  }
`;

export const TermDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    width: 95%;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  a {
    color: rgb(55, 55, 55);
    font-weight: 700;
    text-decoration: none;
  }
`;

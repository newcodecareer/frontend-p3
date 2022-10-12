import styled from "styled-components";

export const Background = styled.div`
    width: 1920px;
    height: 90px;
    margin: auto;

    border-top: 1px solid #D2D2D2;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const InputDiv = styled.div`
    width: 350px;
    height: 56px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 2px solid #D2D2D2;
    border-radius: 94px;
`;

export const Input = styled.input`
    width: 250px;

    ::placeholder {
        color: #b4b4b4;
    }

    border: none;
    outline: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.01em;
`;

export const ImgBtn = styled.img`
    width: 30px;
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    list-style: none;
`;

export const Li = styled.li`
    margin-right: 80px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.01em;

    color: #F77F00;
`;

export const A = styled.a`
    color: #F77F00;
    text-decoration: none;
`;

export const Polygon = styled.img`
    width: 15px;
    padding: 0 15px;
    
`;
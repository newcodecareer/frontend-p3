import styled from "styled-components";

export const PostContainer = styled.div`
    text-align: center;
`;

export const StepsTiitle = styled.h1`
    position: relative;
    height: auto;
    font-size: 3rem;
    margin-top: 55px;
    margin-bottom: 20px;
`;

export const Subtitle = styled.div`
    position: relative;
    height: auto;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--third-color);
    margin-bottom: 30px;
    margin-top: 20px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
`;

export const Card = styled.div`
    border: 2px solid #a5a5a5;
    border-radius: 10px;
    width: 300px;
    padding: 20px;
    margin: 30px;
`;

export const Img = styled.img`
    height: 250px;
    width:250px;
`;

export const Steps = styled.h3`
`;


export const Description = styled.p`
    color: #707070;
`;

export const PostNeedBtn = styled.button`
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    border: none;
    background-color: ${(props) => props.inputColor || "#f77f00"};
    border-radius: 5px;
    padding: 10px;
    margin: 50px;
    cursor: pointer;
    font-weight: 600;   
    &:hover{
        filter: brightness(1.2);
    }
`;

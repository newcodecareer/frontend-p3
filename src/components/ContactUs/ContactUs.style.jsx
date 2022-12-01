import styled from "styled-components";
import { Link } from "react-router-dom";

import {
    primaryThemeColor,
  } from "../common/index.styles";

export const ContactUsPage = styled.div`
    max-width: 100%;
    height:auto;
    flex-direction: column;
    display: flex;
    align-items: center;

`;
export const Title = styled.div`
    margin-top: 70px;
    margin-bottom: 0;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image:url("../../../public/images/contactus1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;
export const TitleText = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: ${primaryThemeColor};
    
`;

export const Wave = styled.img`
    width: 100%;
    height: 200px;
`;

export const Team = styled.div`
    display: flex;
    width: 60%;
    margin-left: 100px;
    height: auto;
`;
export const Developer = styled.div`
    margin-left: 50px;
    padding-right: 50px;
    border-right: solid 1px ${primaryThemeColor};;
`;
export const Dev = styled.div`
    margin-left: 50px;
    
`;
export const Card = styled.div`
    padding-top: 20px;
    margin-top: 10px;
    display: flex;
`;
export const CardLeft = styled.div`
`;

export const CardRight = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    flex-direction: column;
`;
export const CardRightTop = styled.div`
    flex-direction: column;
`;
export const Heading = styled.div`
    font-weight: 800;
`;

export const CardRightBottom = styled.div``;

export const StyledLink = styled(Link)``;


export const Img = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
`;

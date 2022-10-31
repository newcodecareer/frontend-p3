import { Link } from "react-router-dom";
import styled from "styled-components";


import {
    fontSizeM,
    primaryThemeColor,
    thirdFontColor,
    secondaryThemeColor,
    bgcColor,
  } from "../common/index.styles";


export const AnewFooter = styled.div`
    flex-direction: column; 
    
`;

export const Wave = styled.div`
    width: 100%;
    height: 270px;
    background-image: url("../../../public/images/svg1.png");
`;

export const FooterTop = styled.div`
    border-bottom: 2px solid ${thirdFontColor};
    display: flex;
    padding-top: 45px;
    padding-bottom: 45px;
    background-color: ${secondaryThemeColor};`;

//footerTopleft
export const FooterTopLeft = styled.div`
    width: 30%;
    height: auto;
    flex-direction: column;
    margin-left: 15%;
`;

export const Pharagraph = styled.h4`
    margin-bottom:3px ;
    
`;

export const Img = styled.img`
    margin-top: 7px;
    width: 200px;
    height: auto;
`;


export const ButtonContainer = styled.div`
    display: flex;
    
`; 
export const Button = styled.button`
    margin-top: 10px;
    padding-top: 5px;
    margin-right: 10px;
    margin-bottom: 20px;
    background-color: ${(props) => props.inputBackgroundColor || `${bgcColor}`};
    border-radius:100%;
    cursor: pointer;
    &:hover {
    color:${primaryThemeColor};
    filter: brightness(1);
  }
`;

//footerTopright
export const FooterTopRight = styled.div`
    width: 70%;
    height: auto;
    display: flex;
`;

export const Company = styled.div`
    flex-direction: column;    
`;
export const Existing = styled.div`
    margin-left: 15%;
    flex-direction: column;
`;

export const Categories = styled.div`
    margin-left: 15%;
`;


export const Heading = styled.h2`
    font-size: ${fontSizeM};
`;
export const StyledLink = styled(Link)`
    color: ${(props) => props.inputColor || "rgb(55,55,55)"};
    font-weight: ${(props) => props.inputWeight || "450"};
    font-size: 0.9rem;
    text-decoration: none;
    &:hover {
    color: ${primaryThemeColor};
    }
`;

//footerUnder
export const FooterUnder = styled.div`
    text-align: center;
`;
export const Text = styled.p`
    font-size:${fontSizeM} ;
`;

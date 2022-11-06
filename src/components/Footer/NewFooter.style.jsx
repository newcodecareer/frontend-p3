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

//FooterTop div
export const FooterTop = styled.div`
    border-bottom: 2px solid ${thirdFontColor};
    display: flex;
    padding-top: 45px;
    padding-bottom: 45px;
    background-color: ${secondaryThemeColor};
`;

//footerTopleft div
export const FooterTopLeft = styled.div`
    width: 20%;
    height: auto;
    flex-direction: column;
    margin-left: 15%;
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

//footerToprMid div
export const FooterTopMid = styled.div`
    width: 45%;
    height: auto;
    display: flex;
`;
export const Company = styled.div`
    flex-direction: column;    
`;
export const Existing = styled.div`
    margin-left: 12%;
    flex-direction: column;
`;
export const Categories = styled.div`
    margin-left: 12%;
    flex-direction: column;
 
`;
export const CategoriesUnderLeft = styled.div``;

export const CategoriesUnderRight = styled.div`
    margin-left: 15px;
`;
export const CategoriesUnder = styled.div`
    display: flex;
`;
export const CategoriesTop = styled.div``;
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

//FooterTopRight div
export const FooterTopRight = styled.div`
    
    width:25%;
`;
export const Img3 = styled.img`
    margin-top: 13px;
    width: 200px;
    height: auto;
`;
export const Pharagraph = styled.h4`
    margin-top: 13px;
    margin-bottom:3px ;
    
`;

//footerUnder div
export const FooterUnder = styled.div`
    width:100%;
    height: 30px;
    display: flex;  
`;
export const Img2 = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    margin-right: 5px;
    border-radius: 100%;
    border: solid;
    border-width: 2px;
`;
export const Text = styled.p`
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    margin-left: 0;
    font-size:${fontSizeM} ;
    font-weight: 100;
`;

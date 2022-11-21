import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    primaryThemeColor,
  } from "../common/index.styles";

export const StyledLink = styled(Link)`
    display: flex;
    
    justify-content: center;
`;

export const FollowPage = styled.div`
    //div covers the entire screen
    display: flex;
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;
export const Follow = styled.div`
    width:40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const FollowText = styled.div`
    font-size: 5rem;
    font-weight: 600;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
    color: ${primaryThemeColor};
    display: flex;
    font-style: italic;
  
`;

export const Img = styled.img`
    width: 70%;
    height: auto;
    align-items: center;
`;

export const Img1 = styled.img`
    width: 100%;
    height: auto;
    align-items: center;
`;

export const FaceBook = styled.div`
    width: 20%;
    background-color: #3b5998;
    display: flex;
    align-items: center;
`;

export const Twiter = styled.div`
    background-color: #00acee;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
export const Instagram = styled.div`
    background-color: #833AB4;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;


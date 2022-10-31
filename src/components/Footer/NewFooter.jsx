import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

import{
    AnewFooter,
    FooterTopRight,
    FooterTopLeft,
    Pharagraph,
    Img,
    ButtonContainer,
    Button,
    Company,
    Existing,
    Categories,
    Heading,
    StyledLink,
    FooterTop,
    FooterUnder,
    Text,
    Wave,
} from "./NewFooter.style";

const NewFooter = ()=>{
    return(
        <AnewFooter>
            <Wave></Wave>
            <FooterTop>
                <FooterTopLeft>
                    <StyledLink to = "/">
                        <Img src="../../../public/images/logo-origin.png" alt="Houddy Logo" />
                    </StyledLink>
                    <Pharagraph>Follow Us</Pharagraph>
                    <ButtonContainer>
                        <Button onClick={()=>{window.location.href="#"}}>
                            <FaFacebookF/>
                        </Button>
                        <Button onClick={()=>{window.location.href="#"}}>
                            <FaInstagram/>
                        </Button>
                        <Button onClick={()=>{window.location.href="#"}}>
                            <FaTwitter/>
                        </Button>
                    </ButtonContainer>
                    <Pharagraph>Sponsor</Pharagraph>
                    <StyledLink as="a" href="https://www.junglemeetforum.com/#">
                        <Img src="https://www.junglemeetforum.com/footerLogo.svg" alt="Houddy Logo" />
                    </StyledLink>
                </FooterTopLeft>
                <FooterTopRight>
                    <Company>
                        <Heading>Company</Heading>
                        <StyledLink to = "/about">About us</StyledLink>
                        <br/>
                        <StyledLink to = "#">Privacy Policy</StyledLink>
                        <br/>
                        <StyledLink to = "#">Terms of Use</StyledLink>
                    </Company>
                    <Existing>
                        <Heading>Existing Members</Heading>
                        <StyledLink to = "/login">Login</StyledLink>
                        <br/>
                        <StyledLink to = "/signup">Sign up</StyledLink>
                        <br/>
                        <StyledLink to = "/browse-needs">Browse Tasks</StyledLink>
                        
                    </Existing>
                    <Categories>
                        <Heading>Popular Categories</Heading>
                        <StyledLink to = '#'>Burst Pipe</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Locked Out</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Short Out</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Removal</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Builder</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Electrician</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Plumber</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Handyman</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Fencing</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Painting</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Gardening</StyledLink>
                        <br/>
                        <StyledLink to = '#'>Cleaning</StyledLink>
                        <br/>
                    </Categories>
                </FooterTopRight>
            </FooterTop>
            <FooterUnder>
                <Text>
                    &copy; 2022 Houddy Pty Ltd. All Rights Reserved.
                </Text>
            </FooterUnder>
            
        </AnewFooter>
    );
};

export default NewFooter;

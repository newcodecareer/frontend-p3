// import { BsGithub } from "react-icons/Bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import {
  AnewFooter,
  FooterTop,
  FooterUnder,
  FooterTopRight,
  FooterTopMid,
  FooterTopLeft,
  Pharagraph,
  Img,
  ButtonContainer,
  Button,
  Company,
  Existing,
  Categories,
  CategoriesTop,
  CategoriesUnder,
  CategoriesUnderLeft,
  CategoriesUnderRight,
  Heading,
  StyledLink,
  Text,
  Wave,
  Img2,
  Img3,
} from "./NewFooter.style";

const NewFooter = () => {
  return (
    <AnewFooter>
      <Wave></Wave>
      <FooterTop>
        <FooterTopLeft>
          <StyledLink to="/">
            <Img src="../../../images/logo-origin.png" alt="Houddy Logo" />
          </StyledLink>
          <Pharagraph>Follow Us</Pharagraph>
          <ButtonContainer>
            {/* <Button
              onClick={() => {
                window.location.href = "#";
              }}
            >
              <BsGithub />
            </Button> */}
            <Button
              onClick={() => {
                window.location.href = "#";
              }}
            >
              <FaInstagram />
            </Button>
            <Button
              onClick={() => {
                window.location.href = "#";
              }}
            >
              <FaTwitter />
            </Button>
          </ButtonContainer>
        </FooterTopLeft>
        <FooterTopMid>
          <Company>
            <Heading>Company</Heading>
            <StyledLink to="/about">About us</StyledLink>
            <br />
            <StyledLink to="#">Privacy Policy</StyledLink>
            <br />
            <StyledLink to="#">Terms of Use</StyledLink>
          </Company>
          <Existing>
            <Heading>Existing Members</Heading>
            <StyledLink to="/login">Login</StyledLink>
            <br />
            <StyledLink to="/signup">Sign up</StyledLink>
            <br />
            <StyledLink to="/browse-needs">Browse Tasks</StyledLink>
          </Existing>
          <Categories>
            <CategoriesTop>
              <Heading>Popular Categories</Heading>
            </CategoriesTop>
            <CategoriesUnder>
              <CategoriesUnderLeft>
                <StyledLink to="#">Burst Pipe</StyledLink>
                <br />
                <StyledLink to="#">Locked Out</StyledLink>
                <br />
                <StyledLink to="#">Short Out</StyledLink>
                <br />
                <StyledLink to="#">Removal</StyledLink>
                <br />
                <StyledLink to="#">Builder</StyledLink>
                <br />
                <StyledLink to="#">Electrician</StyledLink>
                <br />
              </CategoriesUnderLeft>
              <CategoriesUnderRight>
                <StyledLink to="#">Plumber</StyledLink>
                <br />
                <StyledLink to="#">Handyman</StyledLink>
                <br />
                <StyledLink to="#">Fencing</StyledLink>
                <br />
                <StyledLink to="#">Painting</StyledLink>
                <br />
                <StyledLink to="#">Gardening</StyledLink>
                <br />
                <StyledLink to="#">Cleaning</StyledLink>
                <br />
              </CategoriesUnderRight>
            </CategoriesUnder>
          </Categories>
        </FooterTopMid>
        <FooterTopRight>
          <Pharagraph>Sponsor</Pharagraph>
          <StyledLink as="a" href="https://www.junglemeetforum.com/#" target={"_blank"}>
            <Img3 src="https://www.junglemeetforum.com/footerLogo.svg" alt="Houddy Logo" />
          </StyledLink>
          <br />
          <StyledLink as="a" href="https://jiangren.com.au/" target={"_blank"}>
            <Img3 src="https://dfxq4uecljgnp.cloudfront.net/images/logo-jr-academy-transparent-md.webp" />
          </StyledLink>
        </FooterTopRight>
      </FooterTop>
      <FooterUnder>
        <Img2 src="../../../images/favicon.png" />
        <Text>&copy; 2022 Houddy Pty Ltd. All Rights Reserved.</Text>
      </FooterUnder>
    </AnewFooter>
  );
};

export default NewFooter;

import {
  Afooter,
  Img,
  StyledLink,
  ParagraphOne,
  ParagraphTwo,
  ParagraphThree,
  ParagraphFour,
} from "./footer.style";

const Footer = () => {
  return (
    <Afooter>
      <Img src="/images/logo.png" alt="Houddy Logo" />
      <ParagraphOne>&copy; 2022 Houddy Pty Ltd. All Rights Reserved.</ParagraphOne>
      <ParagraphTwo>
        <StyledLink to="#">Privacy Policy</StyledLink>
      </ParagraphTwo>
      <ParagraphThree>
        <StyledLink to="#">Terms of Use</StyledLink>
      </ParagraphThree>
      <ParagraphFour>
        <StyledLink to="/about">About us</StyledLink>
      </ParagraphFour>
    </Afooter>
  );
};

export default Footer;

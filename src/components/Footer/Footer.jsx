import {
  Afooter,
  Img,
  StyledLink,
  ParagraphOne,
  ParagraphTwo,
  ParagraphThree,
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
    </Afooter>
  );
};

export default Footer;

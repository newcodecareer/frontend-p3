import {
  AboutPage,
  AboutOne,
  Title,
  SubTitle,
  Text,
  AboutTwo,
  Img,
  AboutTwoText,
  TextControl,
  Heading,
  SubHeading,
  FAQ,
} from "./About.style";

const About = () => {
  return (
    <AboutPage>
      <Heading>About Us</Heading>
      <AboutOne>
        <Text>
          <Title>We are here to make people's lives better</Title>
          <SubTitle>
            Creating a way to connect people ready to work, with people who need work done
          </SubTitle>
        </Text>
      </AboutOne>
      <AboutTwo>
        <Img src="../../../public/images/aboutPage_Two.png" alt="Houddy Logo" />
        <TextControl>
          <SubHeading>The Houddy Vision</SubHeading>
          <AboutTwoText>
            Houddy is a trusted community platform that connects people who need to outsource tasks
            and find local services, with people who are looking to earn money and ready to work.
          </AboutTwoText>
          <AboutTwoText>
            From simple to complicated tasks, Houddy can help you complete your home cleaning,
            handyman jobs, admin work, photography, graphic design or even build a website.
          </AboutTwoText>
          <AboutTwoText>"The only way to do great work is to love what you do"</AboutTwoText>
        </TextControl>
      </AboutTwo>
      <FAQ>
        <SubHeading>FAQ</SubHeading>
        <SubTitle>What is Houddy?</SubTitle>
        <Text>
          There are a range of tasks available on Houddy from tasks around the home like deliveries,
          cleaning, gardening and handyman work to tasks for businesses like office admin,
          promotional work or computer & IT support. There also a range of creative tasks like
          photography, graphic design and website & blog support which can help you earn money
          online. Now with a greater network of qualified service providers via Oneflare, an
          airtasker company.
        </Text>
        <SubTitle>Who will I be working with?</SubTitle>
        <Text>
          It's totally up to you! When browsing tasks, you can check out profiles, reviews and
          recommendations to determine who you'll be working with.
        </Text>
        <SubTitle>How much does it cost?</SubTitle>
        <Text>
          Once the task has been completed, a Service Fee will be deducted from the agreed offer
          price to cover all Insurance, Handling and Transaction costs. There are no hidden fees or
          additional costs.
        </Text>
      </FAQ>
    </AboutPage>
  );
};

export default About;

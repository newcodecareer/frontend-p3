import { BsLinkedin } from "react-icons/Bs";

import {
  AboutPage,
  AboutOne,
  Title,
  SubTitle,
  Text,
  AboutTwo,
  Img,
  Img2,
  AboutTwoText,
  TextControl,
  Heading,
  SubHeading,
  FAQ,
  TeamMembers,
  TeamMembersUp,
  TeamMembersMid,
  Card,
  Photo,
  MemberH1,
  MemberTitle,
  Button,
} from "./About.style";

const About = () => {
  return (
    <AboutPage>
      <Heading>About Us</Heading>
      <AboutOne>
        <Text>
          <Title>We are here to make people&apos;s lives better</Title>
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
          <AboutTwoText>
            &quot;The only way to do great work is to love what you do&quot;
          </AboutTwoText>
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
          It&apos;s totally up to you! When browsing tasks, you can check out profiles, reviews and
          recommendations to determine who you&apos;ll be working with.
        </Text>
        <SubTitle>How much does it cost?</SubTitle>
        <Text>
          Once the task has been completed, a Service Fee will be deducted from the agreed offer
          price to cover all Insurance, Handling and Transaction costs. There are no hidden fees or
          additional costs.
        </Text>
      </FAQ>
      <TeamMembers>
        <MemberTitle>Team Members</MemberTitle>
        <TeamMembersUp>
          <Card>
            <Photo>
              <Img2 src="../../../public/images/haoyu3.jpg" />
            </Photo>
            <MemberH1>Alex</MemberH1>
            <Button
              onClick={() => {
                window.open("https://www.linkedin.com/in/haoyu-zhang-alex/");
              }}
            >
              <BsLinkedin />
            </Button>
          </Card>
          <Card>
            <Photo>
              <Img2 src="../../../public/images/Zoe.jpg" />
            </Photo>
            <MemberH1>Zoe</MemberH1>
            <Button
              onClick={() => {
                window.open("https://www.linkedin.com/in/chenhe512/");
              }}
            >
              <BsLinkedin />
            </Button>
          </Card>
          <Card>
            <Photo>
              <Img2 src="../../../public/images/Rebecca.jpg" />
            </Photo>
            <MemberH1>Rebecca</MemberH1>
            <Button
              onClick={() => {
                window.open("https://www.linkedin.com/in/rebecca-shuo-yang/");
              }}
            >
              <BsLinkedin />
            </Button>
          </Card>
          <Card>
            <Photo>
              <Img2 src="../../../public/images/Tairan.jpg" />
            </Photo>
            <MemberH1>Tairan</MemberH1>
            <Button
              onClick={() => {
                window.open("https://www.linkedin.com/in/tairan-liang-240a99179/");
              }}
            >
              <BsLinkedin />
            </Button>
          </Card>
        </TeamMembersUp>
        <TeamMembersMid>
          <Card>
            <Photo>
              <Img2 src="../../../public/images/dog1.gif" />
            </Photo>
            <MemberH1>Comming Soon</MemberH1>
          </Card>
          <Card>
            <Photo>
              <Img2 src="../../../public/images/dog1.gif" />
            </Photo>
            <MemberH1>Comming Soon</MemberH1>
          </Card>
          <Card>
            <Photo>
              <Img2 src="../../../public/images/dog1.gif" />
            </Photo>
            <MemberH1>Comming Soon</MemberH1>
          </Card>
        </TeamMembersMid>
      </TeamMembers>
    </AboutPage>
  );
};

export default About;

import {
    JoinUsContainer,
    JoinUsBox,
    Information,
    Subtitle,
    DisplayImg,
    Title,
  } from "./JoinUs.styles";
  
  const JoinUs = () => {
    return (
      <JoinUsContainer>
        <JoinUsBox>
          <Information>
            <Title>Join Houddy today</Title>
            <Subtitle>
              Make light work of the things you need done.
              <br />
              Find new customers and pick local job leads that suit you.
              <br />
              Let&apos;s win work together!
            </Subtitle>
          </Information>
          <DisplayImg src="../src/images/House_with_tree.png" alt="picture of a home" />
        </JoinUsBox>
      </JoinUsContainer>
    );
  };
  
  export default JoinUs;
  
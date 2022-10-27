import { Error, Heading, Text, Img, LinkOne, Paragraph } from "./Error404.style";

const Error404 = () => {
  return (
    <Error>
      <Heading>Whoops!</Heading>
      <Paragraph>
        <Text>404 Page Not Found!</Text>
      </Paragraph>
      <Img src="/images/404.png" alt="404 picture" />
      <Paragraph>
        <Text>Looks like this page have some problems.</Text>
        <Text>
          Try our &nbsp;<LinkOne to="/">Homepage</LinkOne>&nbsp;instead.
        </Text>
      </Paragraph>
    </Error>
  );
};

export default Error404;

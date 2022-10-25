import { Error, Heading, Text, Img, LinkOne, Pharagraph } from "./Error404.style";

const Error404 = () => {
  return (
    <Error>
      <Heading>Whoops!</Heading>
      <Pharagraph>
        <Text>404 Page Not Found!</Text>
      </Pharagraph>
      <Img src="src/images/404.png" alt="404 picture" />
      <Pharagraph>
        <Text>Looks like this page have some problems.</Text>
        <Text>
          Try our &nbsp;<LinkOne to="/">homepage</LinkOne>&nbsp;instead.
        </Text>
      </Pharagraph>
    </Error>
  );
};

export default Error404;

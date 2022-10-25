import { Error, TextOne, Img, TextThree, LinkOne, TextFour } from "./Error404.style";

const Error404 = () => {
  return (
    <Error>
      <TextOne>Whoops!</TextOne>
      {/* <TextTwo>404 Page Not Found!</TextTwo> */}
      {/* <Img src="src/images/dog1.gif" alt="404 picture" /> */}
      <Img src="src/images/404.png" alt="404 picture" />
      <TextThree>Sorry! Looks like this page went on vacation.</TextThree>
      <TextFour>
        Try our &nbsp;<LinkOne to="/">homepage</LinkOne>&nbsp;instead.
      </TextFour>
    </Error>
  );
};

export default Error404;

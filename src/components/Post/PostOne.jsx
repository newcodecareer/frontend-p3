import { Background, H1, Button, Form, Input, InputDiv, Label } from "./PostOne.styles";

import { Link } from "react-router-dom";

const PostOne = () => {
  return (
    <Background>
      <H1>Take three steps to get started.</H1>
      <Form>
        <InputDiv>
          <Label>what service do you need?</Label>
          <Input type="text" placeholder="e.g. Plumber" />
        </InputDiv>
        <InputDiv>
          <Label>where is the location?</Label>
          <Input type="text" placeholder="Enter your postcode" />
        </InputDiv>
        <InputDiv>
          <Label>when do you need this done?</Label>
          <Input type="text" placeholder="DD/MM/YYYY" />
        </InputDiv>
        <Link to={"/posttwo"}>
          <Button>Next</Button>
        </Link>
      </Form>
    </Background>
  );
};

export default PostOne;

import {
  Background,
  Heading,
  Button,
  Form,
  Input,
  InputContainer,
  Label,
} from "./PostStepOne.styles";

import { Link } from "react-router-dom";

const PostStepOne = () => {
  return (
    <Background>
      <Heading>Take three steps to get started.</Heading>
      <Form>
        <InputContainer>
          <Label>what service do you need?</Label>
          <Input type="text" placeholder="e.g. Plumber" />
        </InputContainer>
        <InputContainer>
          <Label>where is the location?</Label>
          <Input type="text" placeholder="Enter your postcode" />
        </InputContainer>
        <InputContainer>
          <Label>when do you need this done?</Label>
          <Input type="text" placeholder="DD/MM/YYYY" />
        </InputContainer>
        <Link to="/poststeptwo">
          <Button>Next</Button>
        </Link>
      </Form>
    </Background>
  );
};

export default PostStepOne;

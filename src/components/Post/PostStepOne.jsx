import { Background, Heading, InputGroup, Label, Input, Button } from "./PostStepOne.styles";

import { Link } from "react-router-dom";

const PostStepOne = () => {
  return (
    <Background>
      <div>
        <Heading>Take three steps to get started.</Heading>
        <InputGroup>
          <div>
            <Label>what service do you need?</Label>
            <Input type="text" placeholder="e.g. Plumber" />
          </div>
          <div>
            <Label>where is the location?</Label>
            <Input type="text" placeholder="Enter your postcode" />
          </div>
          <div>
            <Label>when do you need this done?</Label>
            <Input type="text" placeholder="DD/MM/YYYY" />
          </div>
          <Link to="/post-steps-two">
            <Button primary>Next</Button>
          </Link>
        </InputGroup>
      </div>
    </Background>
  );
};

export default PostStepOne;

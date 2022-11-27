import {
  Background,
  Heading,
  InputGroup,
  Label,
  Input,
  Button,
  TextArea,
  ButtonContainer,
  BreakLine,
} from "./PostStepOne.styles";

import { secondaryFontColor } from "../common/index.styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputErrorModal from "../InputErrorModal/InputErrorModal";

const PostStepOne = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [onDate, setOnDate] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(undefined);

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeLocationHandler = (e) => {
    setLocation(e.target.value);
  };

  const changeOnDateHandler = (e) => {
    setOnDate(e.target.value);
  };

  const changeBudgetHandler = (e) => {
    setBudget(e.target.value);
  };

  const changeDetailsHandler = (e) => {
    setDetails(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length === 0 ||
      location.trim().length === 0 ||
      onDate.trim().length === 0 ||
      budget.trim().length === 0 ||
      details.trim().length === 0
    ) {
      setError({
        title: "An Error has Occurred.",
        message: "Input cannot be empty.",
      });
      return;
    }

    if (Number(budget) < 1) {
      setError({
        title: "An Error has Occurred.",
        message: "Budget cannot be less then 1.",
      });
      return;
    }

    setTitle("");
    setLocation("");
    setOnDate("");
    setBudget("");
    setDetails("");
  };

  const resetInput = () => {
    setTitle("");
    setLocation("");
    setOnDate("");
    setBudget("");
    setDetails("");
  };

  return (
    <>
      {error && (
        <InputErrorModal
          title={error.title}
          message={error.message}
          onModalDismiss={() => setError(undefined)}
        />
      )}
      <Background>
        <Heading>Take steps to get started.</Heading>
        <form onSubmit={onSubmitHandler}>
          <InputGroup>
            <div>
              <Label htmlFor="title">What service do you need?</Label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={changeTitleHandler}
                placeholder="e.g. Plumber"
              />
            </div>
            <div>
              <Label htmlFor="location">Where is the location?</Label>
              <Input
                type="text"
                id="location"
                value={location}
                onChange={changeLocationHandler}
                placeholder="Enter your postcode"
              />
            </div>
            <div>
              <Label htmlFor="onDate">When do you need this done?</Label>
              <Input
                type="text"
                id="onDate"
                value={onDate}
                onChange={changeOnDateHandler}
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div>
              <Label htmlFor="budget">What is your budget?</Label>
              <Input
                type="text"
                id="budget"
                value={budget}
                onChange={changeBudgetHandler}
                placeholder="Enter your budget"
              />
            </div>
          </InputGroup>
          <Label htmlFor="details">Please clarify your details.</Label>
          <div>
            <TextArea
              type="text"
              id="details"
              value={details}
              onChange={changeDetailsHandler}
              placeholder="Please clarify your details. 
            The more specific they are, the more accurate the quotes are. "
            />
          </div>
          <BreakLine></BreakLine>
          <ButtonContainer>
            <Link to="/post-needs">
              <Button onClick={resetInput} inputWidth="240px" inputColor={secondaryFontColor}>
                Cancel
              </Button>
            </Link>
            {/* <Link to="/post-step-three"> */}
            <Button type="submit" inputWidth="240px">
              Submit
            </Button>
            {/* </Link> */}
          </ButtonContainer>
        </form>
      </Background>
    </>
  );
};

export default PostStepOne;

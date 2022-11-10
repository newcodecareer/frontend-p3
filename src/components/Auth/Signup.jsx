import React, { useEffect, useReducer, useState } from "react";
import { api } from "../../utils/axios";
import {
  BtnContainer,
  Button,
  Form,
  Input,
  InputContainer,
  Label,
  Paragraph,
  StyledLink,
  TermContainer,
} from "./Auth.styles";

const firstNameValidator = (value) => {
  if (value === "") {
    return false;
  }
  // return value;
  return value.trim().length > 1;
};

const lastNameValidator = (value) => {
  if (value === "") {
    return false;
  }
  // return value;
  return value.trim().length > 9;
};

const emailValidator = (value) => {
  if (value === "") {
    return false;
  }
  // return value;
  return value.includes("@");
};

const passwordValidator = (value) => {
  if (value === "") {
    return false;
  }
  // return value;
  return value.trim().length > 7;
};

const actions = {
  update_firstName: "update_firstName",
  validate_firstName: "validate_firstName",
  update_lastName: "update_lastName",
  validate_lastName: "validate_lastName",
  update_email: "update_email",
  validate_email: "validate_email",
  update_password: "update_password",
  validate_password: "validate_password",
};

const initialState = {
  firstName: "",
  isFirstNameValid: true,
  lastName: "",
  isLastNameValid: true,
  email: "",
  isEmailValid: true,
  password: "",
  isPasswordValid: true,
};

// AuthReducer
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.update_firstName:
      return {
        ...state,
        firstName: action.payload,
        isFirstNameValid: firstNameValidator(action.payload),
      };
    case actions.validate_firstName:
      return {
        ...state,
        isFirstNameValid: firstNameValidator(action.payload),
      };
    case actions.update_lastName:
      return {
        ...state,
        lastName: action.payload,
        isLastNameValid: lastNameValidator(action.payload),
      };
    case actions.validate_lastName:
      return {
        ...state,
        isLastNameValid: lastNameValidator(action.payload),
      };
    case actions.update_email:
      return {
        ...state,
        email: action.payload,
        isEmailValid: emailValidator(action.payload),
      };
    case actions.validate_email:
      return {
        ...state,
        isEmailValid: emailValidator(action.payload),
      };
    case actions.update_password:
      return {
        ...state,
        password: action.payload,
        isPasswordValid: passwordValidator(action.payload),
      };
    case actions.validate_password:
      return {
        ...state,
        isPasswordValid: passwordValidator(action.payload),
      };
    default:
      return initialState;
  }
};

const Signup = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState, undefined);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFormIsValid(
        state.isFirstNameValid &&
          state.isLastNameValid &&
          state.isEmailValid &&
          state.isPasswordValid
      );
    }, 500);
    return () => clearTimeout(debounce);
  }, [state.isFirstNameValid, state.isLastNameValid, state.isEmailValid, state.isPasswordValid]);

  const firstNameChangeHandler = (e) => {
    dispatch({
      type: actions.update_firstName,
      payload: e.target.value,
    });
  };

  const lastNameChangeHandler = (e) => {
    dispatch({
      type: actions.update_lastName,
      payload: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    dispatch({
      type: actions.update_email,
      payload: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    dispatch({
      type: actions.update_password,
      payload: e.target.value,
    });
  };

  const validateFirstNameHandler = (e) => {
    dispatch({
      type: actions.validate_firstName,
      payload: e.target.value,
    });
  };

  const validateLastNameHandler = (e) => {
    dispatch({
      type: actions.validate_lastName,
      payload: e.target.value,
    });
  };

  const validateEmailHandler = (e) => {
    dispatch({
      type: actions.validate_email,
      payload: e.target.value,
    });
  };

  const validatePasswordHandler = (e) => {
    dispatch({
      type: actions.validate_password,
      payload: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await api("/auth/signup", {
      method: "post",
      requestData: {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
      },
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputContainer>
        <Label>Create a new account</Label>
        <Input
          type="text"
          value={state.firstName}
          onChange={firstNameChangeHandler}
          onBlur={validateFirstNameHandler}
          placeholder="Your first name"
        />
        <Input
          type="text"
          value={state.lastName}
          onChange={lastNameChangeHandler}
          onBlur={validateLastNameHandler}
          placeholder="Your last name"
        />
        <Input
          type="email"
          value={state.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeholder="Email address"
        />
        <Input
          type="password"
          value={state.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeholder="Create password"
        />
      </InputContainer>
      <BtnContainer>
        <Button type="submit" disabled={formIsValid}>
          Sign up
        </Button>
      </BtnContainer>
      <TermContainer>
        <Paragraph>
          By registering with Houddy, you agree to our
          <StyledLink to="#"> Privacy Policy & Terms & Conditions</StyledLink>
        </Paragraph>
        <Paragraph>
          Already have an account ? <StyledLink to="/login">Log in</StyledLink>
        </Paragraph>
      </TermContainer>
    </Form>
  );
};

export default Signup;

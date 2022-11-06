import React, { useEffect, useReducer, useState } from "react";
import { axiosInstance } from "../../utils/axios";
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

const nameValidator = (value) => {
  if (value === "") {
    return false;
  }
  return value;
  // return value.trim().length > 1;
};

const emailValidator = (value) => {
  if (value === "") {
    return false;
  }
  return value;
  // return value.includes("@");
};

const mobileValidator = (value) => {
  if (value === "") {
    return false;
  }
  return value;
  // return value.trim().length > 9;
};

const passwordValidator = (value) => {
  if (value === "") {
    return false;
  }
  return value;
  // return value.trim().length > 7;
};

const actions = {
  update_name: "update_name",
  validate_name: "validate_name",
  update_email: "update_email",
  validate_email: "validate_email",
  update_mobile: "update_mobile",
  validate_mobile: "validate_mobile",
  update_password: "update_password",
  validate_password: "validate_password",
};

const initialState = {
  name: "",
  isNameValid: true,
  email: "",
  isEmailValid: true,
  mobile: "",
  isMobileValid: true,
  password: "",
  isPasswordValid: true,
};

// AuthReducer
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.update_name:
      return {
        ...state,
        name: action.payload,
        isNameValid: nameValidator(action.payload),
      };
    case actions.validate_name:
      return {
        ...state,
        isNameValid: nameValidator(action.payload),
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
    case actions.update_mobile:
      return {
        ...state,
        mobile: action.payload,
        isMobileValid: mobileValidator(action.payload),
      };
    case actions.validate_mobile:
      return {
        ...state,
        isMobileValid: mobileValidator(action.payload),
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
        state.isNameValid && state.isEmailValid && state.isMobileValid && state.isPasswordValid
      );
    }, 500);
    return () => clearTimeout(debounce);
  }, [state.isNameValid, state.isEmailValid, state.isMobileValid, state.isPasswordValid]);

  const nameChangeHandler = (e) => {
    dispatch({
      type: actions.update_name,
      payload: e.target.value,
    });
  };

  const emailChangeHandler = (e) => {
    dispatch({
      type: actions.update_email,
      payload: e.target.value,
    });
  };

  const mobileChangeHandler = (e) => {
    dispatch({
      type: actions.update_mobile,
      payload: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    dispatch({
      type: actions.update_password,
      payload: e.target.value,
    });
  };

  const validateNameHandler = () => {
    dispatch({
      type: actions.validate_name,
    });
  };

  const validateEmailHandler = () => {
    dispatch({
      type: actions.validate_email,
    });
  };

  const validateMobileHandler = () => {
    dispatch({
      type: actions.validate_mobile,
    });
  };

  const validatePasswordHandler = () => {
    dispatch({
      type: actions.validate_password,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosInstance.post("/auth/signup", {
      name: state.name,
      email: state.email,
      mobile: state.mobile,
      password: state.password,
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputContainer>
        <Label>Create a new account</Label>
        <Input
          type="text"
          value={state.name}
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
          placeholder="Your name"
        />
        <Input
          type="email"
          value={state.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeholder="Email address"
        />
        <Input
          type="text"
          value={state.mobile}
          onChange={mobileChangeHandler}
          onBlur={validateMobileHandler}
          placeholder="Mobile number"
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
        <Button type="submit">Sign up</Button>
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

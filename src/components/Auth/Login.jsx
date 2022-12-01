import React, { useReducer, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../utils/axios";
import {AiFillEye} from 'react-icons/ai';
import {
  BtnContainer,
  Form,
  InputContainer,
  Input,
  Label,
  Paragraph,
  TermContainer,
  Button,
  StyledLink,
} from "./Auth.styles";

const emailValidator = (value) => {
  if (value === "") {
    return false;
  }
  return value.includes("@");
};

const passwordValidator = (value) => {
  if (value === "") {
    return false;
  }
  return value.trim().length > 7;
};

const actions = {
  update_email: "update_email",
  validate_email: "validate_email",
  update_password: "update_password",
  validate_password: "validate_password",
};

const initialState = {
  email: "",
  isEmailValid: true,
  password: "",
  isPasswordValid: true,
};

const reducer = (state, action) => {
  switch (action.type) {
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

const Login = () => {
  // const [formIsValid, setFormIsValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState, undefined);
  const [shown, setShown] = useState(false);
  const showPassword = () =>{
    setShown(!shown);
  }
  // useEffect(() => {
  //   const debounce = setTimeout(() => {
  //     setFormIsValid(state.isEmailValid && state.isPasswordValid);
  //   }, 500);
  //   return () => clearTimeout(debounce);
  // }, [state.isEmailValid, state.isPasswordValid]);

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

  const { setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await api("/auth/signin", {
      method: "post",
      requestData: {
        email: state.email,
        password: state.password,
      },
    })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        setIsLogin(true);
        localStorage.setItem("is login", true);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <InputContainer>
          <Label>Log into your account</Label>
          <Input
            type="email"
            value={state.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            placeholder="Email address"
          />
          {/* <Input
            type="password"
            value={state.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            placeholder="Create password"
          /> */}
          <div style = {{
            display:"flex", 
            marginLeft:35,
            }}
          >
            <Input
              type={shown ? "text" :"password"}
              value={state.password}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              placeholder="Input your password"
              style = {{width:510}}
            />
            <button 
              onClick={showPassword} 
              type = "button"
              style = {{
                height:30,
                width:30,
                marginTop:24,
              }}
            >
              <AiFillEye/>
            </button>
          </div>
        </InputContainer>
        <BtnContainer>
          <Button type="submit">Log in</Button>
        </BtnContainer>
        <TermContainer>
          <Paragraph>
            <StyledLink to="/reset-password">Forgot your password?</StyledLink>
          </Paragraph>
          <Paragraph>
            Are you a new user? <StyledLink to="/signup">Create a free account</StyledLink>
          </Paragraph>
          <Paragraph>
            A new tradie? <StyledLink to="#">List your business here</StyledLink>
          </Paragraph>
        </TermContainer>
      </Form>
    </>
  );
};

export default Login;

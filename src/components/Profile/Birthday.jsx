import { useState, useReducer } from "react";
import { FiEdit2 } from "react-icons/fi";
import { api, parseJwt } from "../../utils/axios";
import { primaryThemeColor } from "../common/index.styles";
import {
  BtnImage,
  Button,
  ButtonContainer,
  DataContainer,
  Input,
  Label,
  Paragraph,
  SectionContainer,
  VerInputs,
} from "./Profile.styles";

const actions = {
  update_birthdayDay: "update_birthdayDay",
  update_birthdayMonth: "update_birthdayMonth",
  update_birthdayYear: "update_birthdayYear",
};

const initialState = {
  birthdayDay: "",
  birthdayMonth: "",
  birthdayYear: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.update_birthdayDay:
      return {
        ...state,
        birthdayDay: action.payload,
      };
    case actions.update_birthdayMonth:
      return {
        ...state,
        birthdayMonth: action.payload,
      };
    case actions.update_birthdayYear:
      return {
        ...state,
        birthdayYear: action.payload,
      };
    default:
      return initialState;
  }
};

const Birthday = () => {
  const [birthday, setBirthday] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const dayChangeHandler = (e) => {
    dispatch({
      type: actions.update_birthdayDay,
      payload: e.target.value,
    });
  };

  const monthChangeHandler = (e) => {
    dispatch({
      type: actions.update_birthdayMonth,
      payload: e.target.value,
    });
  };

  const yearChangeHandler = (e) => {
    dispatch({
      type: actions.update_birthdayYear,
      payload: e.target.value,
    });
  };

  const userData = parseJwt(localStorage.getItem("token"));

  const saveHandler = async (e) => {
    e.preventDefault();
    await api(`customers/${userData.id}`, {
      method: "patch",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      requestData: {
        birthdayDay: state.birthdayDay,
        birthdayMonth: state.birthdayMonth,
        birthdayYear: state.birthdayYear,
      },
    })
      .then((response) => {
        const { birthdayDay, birthdayMonth, birthdayYear } = response.data;
        localStorage.setItem("birthdayDay", birthdayDay);
        localStorage.setItem("birthdayMonth", birthdayMonth);
        localStorage.setItem("birthdayYear", birthdayYear);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    setBirthday(false);
  };

  return (
    <SectionContainer>
      <Label>Birthday</Label>
      {birthday ? (
        <div>
          <VerInputs>
            <Input
              inputWidth="5rem"
              inputMargin="10px 1% 10px 0"
              inputTextAline="center"
              type="text"
              placeholder="DD"
              minLength="2"
              maxLength="2"
              onChange={dayChangeHandler}
            />
            <Input
              inputWidth="5rem"
              inputMargin="10px 1% 10px 0"
              inputTextAline="center"
              type="text"
              placeholder="MM"
              minLength="2"
              maxLength="2"
              onChange={monthChangeHandler}
            />
            <Input
              inputWidth="6rem"
              inputMargin="10px 1% 10px 0"
              inputTextAline="center"
              type="text"
              placeholder="YYYY"
              minLength="4"
              maxLength="4"
              onChange={yearChangeHandler}
            />
          </VerInputs>
          <ButtonContainer>
            <Button onClick={() => setBirthday(false)}>Cancel</Button>
            <Button onClick={saveHandler} inputBackgroundColor={`${primaryThemeColor}`}>
              Save
            </Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>
              {localStorage.getItem("birthdayDay")} . {localStorage.getItem("birthdayMonth")} .{" "}
              {localStorage.getItem("birthdayYear")}
            </Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setBirthday(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default Birthday;

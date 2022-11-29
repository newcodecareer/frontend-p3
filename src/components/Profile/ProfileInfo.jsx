import { primaryThemeColor } from "../common/index.styles";
import { FiEdit2 } from "react-icons/fi";
import {
  ButtonContainer,
  VerInputs,
  Label,
  SectionContainer,
  Input,
  Button,
  BtnImage,
  DataContainer,
  Paragraph,
} from "./Profile.styles";
import { useReducer, useState } from "react";
import { api, parseJwt } from "../../utils/axios";

const actions = {
  update_firstName: "update_firstName",
  update_lastName: "update_lastName",
};

const initialState = {
  firstName: "",
  lastName: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.update_firstName:
      return {
        ...state,
        firstName: action.payload,
      };
    case actions.update_lastName:
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      return initialState;
  }
};

const ProfileInfo = ({ firstName, lastName }) => {
  const [info, setInfo] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

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
  const userData = parseJwt(localStorage.getItem("token"));
  const saveHandler = async (e) => {
    e.preventDefault();
    await api(`customers/${userData.id}`, {
      method: "patch",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      requestData: {
        firstName: state.firstName,
        lastName: state.lastName,
      },
    })
      .then((response) => {
        const { firstName, lastName } = response.data;
        localStorage.setItem("first name", firstName);
        localStorage.setItem("last name", lastName);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    setInfo(false);
  };

  return (
    <SectionContainer>
      <Label>Personal Information</Label>
      {info ? (
        <div>
          <VerInputs>
            <Input
              inputWidth="30%"
              inputMargin="10px 2% 10px 0"
              type="text"
              placeholder="First name"
              onChange={firstNameChangeHandler}
            />
            <Input
              inputWidth="30%"
              type="text"
              placeholder="Last Name"
              onChange={lastNameChangeHandler}
            />
          </VerInputs>
          <ButtonContainer>
            <Button onClick={() => setInfo(false)}>Cancel</Button>
            <Button onClick={saveHandler} inputBackgroundColor={`${primaryThemeColor}`}>
              Save
            </Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>
              {firstName ? localStorage.getItem("first name") : ""}{" "}
              {lastName ? localStorage.getItem("last name") : ""}
            </Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setInfo(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default ProfileInfo;

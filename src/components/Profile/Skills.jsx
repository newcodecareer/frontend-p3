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
  UnorderedList,
} from "./Profile.styles";

const actions = {
  update_skillOne: "update_skillOne",
  update_skillTwo: " update_skillTwo",
  update_skillThree: "update_skillThree",
  update_skillFour: "update_skillFour",
};

const initialState = {
  skillOne: "",
  skillTwo: "",
  skillThree: "",
  skillFour: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.update_skillOne:
      return {
        ...state,
        skillOne: action.payload,
      };
    case actions.update_skillTwo:
      return {
        ...state,
        skillTwo: action.payload,
      };
    case actions.update_skillThree:
      return {
        ...state,
        skillThree: action.payload,
      };
    case actions.update_skillFour:
      return {
        ...state,
        skillFour: action.payload,
      };
    default:
      return initialState;
  }
};

const Skills = () => {
  const [skills, setSkills] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const skillOneChangeHandler = (e) => {
    dispatch({
      type: actions.update_skillOne,
      payload: e.target.value,
    });
  };

  const skillTwoChangeHandler = (e) => {
    dispatch({
      type: actions.update_skillTwo,
      payload: e.target.value,
    });
  };

  const skillThreeChangeHandler = (e) => {
    dispatch({
      type: actions.update_skillThree,
      payload: e.target.value,
    });
  };

  const skillFourChangeHandler = (e) => {
    dispatch({
      type: actions.update_skillFour,
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
        skillOne: state.skillOne,
        skillTwo: state.skillTwo,
        skillThree: state.skillThree,
        skillFour: state.skillFour,
      },
    })
      .then((response) => {
        const { skillOne, skillTwo, skillThree, skillFour } = response.data;
        localStorage.setItem("skillOne", skillOne);
        localStorage.setItem("skillTwo", skillTwo);
        localStorage.setItem("skillThree", skillThree);
        localStorage.setItem("skillFour", skillFour);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    setSkills(false);
  };

  return (
    <SectionContainer>
      <Label>Skills</Label>
      {skills ? (
        <div>
          <Input type="text" placeholder="Certificate" onChange={skillOneChangeHandler} />
          <Input type="text" placeholder="Specialties" onChange={skillTwoChangeHandler} />
          <Input type="text" placeholder="Languages" onChange={skillThreeChangeHandler} />
          <Input type="text" placeholder="Company" onChange={skillFourChangeHandler} />
          <ButtonContainer>
            <Button onClick={() => setSkills(false)}>Cancel</Button>
            <Button onClick={saveHandler} inputBackgroundColor={`${primaryThemeColor}`}>
              Save
            </Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>
              <UnorderedList>
                <li>{localStorage.getItem("skillOne")}</li>
                <li>{localStorage.getItem("skillTwo")} </li>
                <li> {localStorage.getItem("skillThree")}</li>
                <li>{localStorage.getItem("skillFour")} </li>
              </UnorderedList>
            </Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setSkills(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default Skills;

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
} from "./Profile.styles";

const actions = {
  update_ABN: "update_ABN",
};

const initialState = {
  ABN: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.update_ABN:
      return {
        ...state,
        ABN: action.payload,
      };
    default:
      return initialState;
  }
};

const ABNInfo = () => {
  const [abn, setAbn] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const ABNChangeHandler = (e) => {
    dispatch({
      type: actions.update_ABN,
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
        ABN: state.ABN,
      },
    })
      .then((response) => {
        const { ABN } = response.data;
        localStorage.setItem("ABN", ABN);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    setAbn(false);
  };

  return (
    <SectionContainer>
      <Label>ABN</Label>
      {abn ? (
        <div>
          <Input inputWidth="26%" type="text" placeholder="Your ABN" onChange={ABNChangeHandler} />
          <ButtonContainer>
            <Button onClick={() => setAbn(false)}>Cancel</Button>
            <Button onClick={saveHandler} inputBackgroundColor={`${primaryThemeColor}`}>
              Save
            </Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph>{localStorage.getItem("ABN")}</Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setAbn(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default ABNInfo;

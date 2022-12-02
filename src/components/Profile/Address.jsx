import { primaryThemeColor } from "../common/index.styles";
import { FiEdit2 } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
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
import { useState, useReducer } from "react";
import { api, parseJwt } from "../../utils/axios";

const actions = {
  update_address: "update_address",
};

const initialState = {
  address: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.update_address:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return initialState;
  }
};

const Address = () => {
  const [address, setAddress] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addressChangeHandler = (e) => {
    dispatch({
      type: actions.update_address,
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
        address: state.address,
      },
    })
      .then((response) => {
        const { address } = response.data;
        localStorage.setItem("address", address);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    setAddress(false);
  };

  return (
    <SectionContainer>
      <Label>Address</Label>
      {address ? (
        <div>
          <VerInputs>
            <Input
              inputMargin="10px 2% 10px 0"
              type="text"
              placeholder="Your address"
              onChange={addressChangeHandler}
            />
          </VerInputs>
          <ButtonContainer>
            <Button onClick={() => setAddress(false)}>Cancel</Button>
            <Button onClick={saveHandler} inputBackgroundColor={`${primaryThemeColor}`}>
              Save
            </Button>
          </ButtonContainer>
        </div>
      ) : (
        <DataContainer>
          <div>
            <Paragraph inputColor={`${primaryThemeColor}`}>
              <SlLocationPin />
              {localStorage.getItem("address")}
            </Paragraph>
          </div>
          <div>
            <BtnImage onClick={() => setAddress(true)}>
              <FiEdit2 />
            </BtnImage>
          </div>
        </DataContainer>
      )}
    </SectionContainer>
  );
};

export default Address;

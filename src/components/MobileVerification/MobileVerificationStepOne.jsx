import React from "react";
import { HiUser } from "react-icons/hi2";
import {
  ChangePasswordUserIcon,
  ChangePasswordSecondIcon,
} from "../ChangePassword/ChangePassword.styles";
import MobileNumberInput from "./MobileNumberInput";
import MobileVerificationSendBtn from "./MobileVerificationSendBtn";
import MobileVerificationStepOneContext from "./MobileVerificationStepOneContext";

export default function MobileVerificationStepOne() {
  return (
    <div>
      <ChangePasswordUserIcon>
        <span>
          <HiUser />
        </span>
      </ChangePasswordUserIcon>
      <ChangePasswordSecondIcon>
        <img src="public\images\mobile.png" alt="" />
      </ChangePasswordSecondIcon>
      <MobileVerificationStepOneContext />
      <MobileNumberInput />

      <MobileVerificationSendBtn />
    </div>
  );
}

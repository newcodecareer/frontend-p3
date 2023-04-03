import React from "react";
import { HiUser } from "react-icons/hi2";
import {
  ChangePasswordUserIcon,
  ChangePasswordSecondIcon,
} from "../ChangePassword/ChangePassword.styles";
import MobileVerificationCodeInput from "./MobileVerificationCodeInput";
import MobileVerificationSendBtn from "./MobileVerificationVerifyBtn";
import MobileVerificationStepTwoContext from "./MobileVerificationStepTwoContext";

export default function MobileVerificationStepTwo() {
  return (
    <div>
      <ChangePasswordUserIcon>
        <span>
          <HiUser />
        </span>
      </ChangePasswordUserIcon>
      <ChangePasswordSecondIcon>
        <img src="/images/mobile.png" alt="" />
      </ChangePasswordSecondIcon>
      <MobileVerificationStepTwoContext />
      <MobileVerificationCodeInput />
      <MobileVerificationSendBtn />
    </div>
  );
}

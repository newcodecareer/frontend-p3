import React from "react";
import { HiUser } from "react-icons/hi2";
import {
  ChangePasswordUserIcon,
  ChangePasswordSecondIcon,
} from "../ChangePassword/ChangePassword.styles";
import MobileVerificationStepThreeBtn from "./MobileVerificationStepThreeBtn";
import MobileVerificationStepThreeContext from "./MobileVerificationStepThreeContext";

export default function MobileVerificationStepThree() {
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
      <MobileVerificationStepThreeContext />
      <MobileVerificationStepThreeBtn />
    </div>
  );
}

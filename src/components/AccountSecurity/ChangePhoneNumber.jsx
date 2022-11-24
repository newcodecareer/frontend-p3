import React from "react";
import {
  ChangePasswordContextStyle,
  ChangePasswordSecondIcon,
  ChangePasswordBtn,
} from "../ChangePassword/ChangePassword.styles";
import { Input } from "../MobileVerification/MobileVerification.Styles";

export default function ChangePhoneNumber() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="public\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      <ChangePasswordContextStyle>
        <p>Please enter the verification code</p>
      </ChangePasswordContextStyle>
      <Input type="text" placeholder="Enter your verification code" />
      <ChangePasswordBtn
        onClick={() => {
          window.location.href = "/change-phone-number-step-two";
        }}
      >
        Send
      </ChangePasswordBtn>
    </div>
  );
}

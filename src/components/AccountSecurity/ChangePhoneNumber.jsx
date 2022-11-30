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
        <p>A verification code has been sent to your current security phone number.</p>
      </ChangePasswordContextStyle>
      <Input type="text" placeholder="Enter your verification code" />
      <ChangePasswordBtn
        onClick={() => {
          window.location.href = "/change-phone-number-step-two";
        }}
      >
        Verify
      </ChangePasswordBtn>
    </div>
  );
}

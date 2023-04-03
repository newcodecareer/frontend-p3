import React from "react";
import { Button, Input } from "../MobileVerification/MobileVerification.Styles";
import {
  ChangePasswordContextStyle,
  ChangePasswordSecondIcon,
} from "../ChangePassword/ChangePassword.styles";

export default function ChangePhoneNumberStepTwo() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      <ChangePasswordContextStyle>
        <p>Please provide your new security phone number.</p>
        <p>We&#39;ll send you a verification code.</p>
      </ChangePasswordContextStyle>
      <Input type="text" placeholder="Enter your mobile number" />
      <Button
        onClick={() => {
          window.location.href = "/change-phone-number-step-three";
        }}
      >
        Send
      </Button>
    </div>
  );
}

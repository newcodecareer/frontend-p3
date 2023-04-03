import React from "react";
import {
  ChangePasswordContextStyle,
  ChangePasswordSecondIcon,
} from "../ChangePassword/ChangePassword.styles";
import { Input, Button } from "../MobileVerification/MobileVerification.Styles";

export default function ChangePhoneNumberStepThree() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      <ChangePasswordContextStyle>
        <p>A verification code has been sent to your new security phone number.</p>
      </ChangePasswordContextStyle>
      <Input type="text" placeholder="Enter your verification code" />
      <Button
        onClick={() => {
          window.location.href = "/change-phone-number-step-four";
        }}
      >
        Verify
      </Button>
    </div>
  );
}

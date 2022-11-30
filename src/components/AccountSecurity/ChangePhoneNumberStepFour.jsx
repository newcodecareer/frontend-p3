import React from "react";
import {
  ChangePasswordContextStyle,
  ChangePasswordSecondIcon,
  ChangePasswordBtn,
} from "../ChangePassword/ChangePassword.styles";

export default function ChangePhoneNumberStepFour() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="public\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      <ChangePasswordContextStyle>
        <p>Your security phone number has been changed.</p>
      </ChangePasswordContextStyle>
      <ChangePasswordBtn
        onClick={() => {
          window.location.href = "/account-security";
        }}
      >
        Done
      </ChangePasswordBtn>
    </div>
  );
}

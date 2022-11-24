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
        <p>You have changed your security phone number.</p>
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

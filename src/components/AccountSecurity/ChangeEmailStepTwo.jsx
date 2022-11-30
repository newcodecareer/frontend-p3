import React from "react";
import {
  ChangePasswordBtn,
  ChangePasswordContextStyle,
  ChangePasswordSecondIcon,
} from "../ChangePassword/ChangePassword.styles";

export default function ChangeEmailStepTwo() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="public\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      <ChangePasswordContextStyle>
        <p>If you do not see the email in your inbox, please check your junk mail folder.</p>
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

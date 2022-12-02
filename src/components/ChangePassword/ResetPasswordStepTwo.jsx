import React from "react";
import {
  ChangePasswordBtn,
  ChangePasswordContextStyle,
  ChangePasswordSecondIcon,
} from "./ChangePassword.styles";
import { Link } from "react-router-dom";

export default function ResetPasswordStepTwo() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="public\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      <ChangePasswordContextStyle>
        <p>If you do not see the email in your inbox, please check your junk mail folder.</p>
      </ChangePasswordContextStyle>

      <Link to="/">
        <ChangePasswordBtn>Done</ChangePasswordBtn>
      </Link>
    </div>
  );
}

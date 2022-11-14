import React from "react";
import { ChangePasswordContextStyle } from "../ChangePassword/ChangePassword.styles";

export default function MobileVerificationStepOneContext() {
  return (
    <div>
      <ChangePasswordContextStyle>
        <p>We&#39;ll keep you up to date about the latest happenings on your tasks by SMS.</p>
        <p>We&#39;ll send you a verification code.</p>
      </ChangePasswordContextStyle>
    </div>
  );
}

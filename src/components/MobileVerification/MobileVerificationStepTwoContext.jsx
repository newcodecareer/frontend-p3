import React from "react";
import { ChangePasswordContextStyle } from "../ChangePassword/ChangePassword.styles";

export default function MobileVerificationStepTwoContext() {
  return (
    <div>
      <ChangePasswordContextStyle>
        <p>Please enter the verification code</p>
      </ChangePasswordContextStyle>
    </div>
  );
}

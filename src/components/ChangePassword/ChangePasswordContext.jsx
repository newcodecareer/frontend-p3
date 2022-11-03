import React from "react";
import { ChangePasswordContextStyle, ChangePasswordEmailAddress } from "./ChangePassword.styles";

export default function ChangePasswordContext() {
  return (
    <>
      <ChangePasswordContextStyle>
        <p>Please click the button below to receive an email with a password reset link.</p>
        <p>This email will be sent to:</p>
      </ChangePasswordContextStyle>
      <ChangePasswordEmailAddress>jihi@gmail.com</ChangePasswordEmailAddress>
      <ChangePasswordContextStyle>
        <p>
          If you need to update your email address, please click&nbsp;<a href="#">here</a>.
        </p>
      </ChangePasswordContextStyle>
    </>
  );
}

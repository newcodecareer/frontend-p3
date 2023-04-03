import React from "react";
import {
  ChangePasswordContextStyle,
  ChangePasswordEmailAddress,
  ChangePasswordSecondIcon,
  ChangePasswordBtn,
} from "../ChangePassword/ChangePassword.styles";

export default function ChangeEmail() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      <ChangePasswordContextStyle>
        <p>
          Please click the button below to receive an email with a link to change your email
          address.
        </p>
        <p>This email will be sent to:</p>
      </ChangePasswordContextStyle>
      <ChangePasswordEmailAddress>jihi@gmail.com</ChangePasswordEmailAddress>
      <ChangePasswordContextStyle>
        <p>
          If you are not able to access to this email, please click&nbsp;<a href="#">here</a>.
        </p>
      </ChangePasswordContextStyle>
      <ChangePasswordBtn
        onClick={() => {
          window.location.href = "/change-email-step-two";
        }}
      >
        Send
      </ChangePasswordBtn>
    </div>
  );
}

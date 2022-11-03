import React from "react";
import { ChangePasswordBtn } from "./ChangePassword.styles";
import ChangePasswordContext from "./ChangePasswordContext";
import ChangePasswordIcons from "./ChangePasswordIcons";

export default function ChangePassword() {
  return (
    <div>
      <ChangePasswordIcons />
      <ChangePasswordContext />
      <ChangePasswordBtn>Change Password</ChangePasswordBtn>
    </div>
  );
}

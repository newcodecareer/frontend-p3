import React from "react";
import { ChangePasswordBtn } from "./ChangePassword.styles";
import ChangePasswordContext from "./ChangePasswordContext";
// import ChangePasswordIcons from "./ChangePasswordIcons";
import { HiUser } from "react-icons/hi2";
import { ChangePasswordUserIcon, ChangePasswordSecondIcon } from "./ChangePassword.styles";

export default function ChangePassword() {
  return (
    <div>
      <ChangePasswordUserIcon>
        <span>
          <HiUser />
        </span>
      </ChangePasswordUserIcon>
      <ChangePasswordSecondIcon>
        <img src="\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>
      {/* <ChangePasswordIcons /> */}
      <ChangePasswordContext />
      <ChangePasswordBtn
        onClick={() => {
          window.location.href = "/reset-password-step-two";
        }}
      >
        Send
      </ChangePasswordBtn>
    </div>
  );
}

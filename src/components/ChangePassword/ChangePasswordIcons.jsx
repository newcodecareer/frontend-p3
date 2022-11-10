import { HiUser } from "react-icons/hi2";

import React from "react";
import { ChangePasswordUserIcon, ChangePasswordLockIcon } from "./ChangePassword.styles";

export default function ChangePasswordIcons() {
  return (
    <>
      <ChangePasswordUserIcon>
        <span>
          <HiUser />
        </span>
      </ChangePasswordUserIcon>
      <ChangePasswordLockIcon>
        <img src="public\images\lock-password.png" alt="" />
      </ChangePasswordLockIcon>
    </>
  );
}

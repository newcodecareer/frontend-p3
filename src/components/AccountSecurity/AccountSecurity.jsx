import React from "react";
import { ChangePasswordSecondIcon } from "../ChangePassword/ChangePassword.styles";
import AccountSecruityItemList from "./AccountSecruityItemList";
import { SecurityItemContainer } from "./AccountSecurity.style";

export default function AccountSecurity() {
  return (
    <div>
      <ChangePasswordSecondIcon>
        <img src="public\images\lock-password.png" alt="" />
      </ChangePasswordSecondIcon>

      <SecurityItemContainer>
        <AccountSecruityItemList />
      </SecurityItemContainer>
    </div>
  );
}

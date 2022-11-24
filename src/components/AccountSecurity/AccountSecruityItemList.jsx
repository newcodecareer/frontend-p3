import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { ChangeButton, SecurityIcon, SecurityItemName } from "./AccountSecurity.style";

export default function AccountSecruityItemList() {
  return (
    <div>
      <div>
        <SecurityItemName>Password</SecurityItemName>
        <SecurityItemName>********</SecurityItemName>
        <SecurityIcon>
          <HiOutlineShieldCheck />
        </SecurityIcon>
        <ChangeButton>Change</ChangeButton>
      </div>
      <div>
        <SecurityItemName>Phone number</SecurityItemName>
        <SecurityItemName>+60 12345678</SecurityItemName>
        <SecurityIcon>
          <HiOutlineShieldCheck />
        </SecurityIcon>
        <ChangeButton
          onClick={() => {
            window.location.href = "/change-phone-number-step-one";
          }}
        >
          Change
        </ChangeButton>
      </div>
      <div>
        <SecurityItemName>Email</SecurityItemName>
        <SecurityItemName>jihi@gmail.com</SecurityItemName>
        <SecurityIcon>
          <HiOutlineShieldCheck />
        </SecurityIcon>

        <ChangeButton
          onClick={() => {
            window.location.href = "/change-email";
          }}
        >
          Change
        </ChangeButton>
      </div>
    </div>
  );
}

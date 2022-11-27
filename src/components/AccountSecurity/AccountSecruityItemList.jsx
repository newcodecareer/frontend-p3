import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { ChangeButton, SecurityIcon, SecurityItemName } from "./AccountSecurity.style";
import { useState } from "react";
import { Button, ButtonContainer, VerInputs } from "../Profile/Profile.styles";

import { primaryThemeColor } from "../common/index.styles";
import { Input } from "../MobileVerification/MobileVerification.Styles";

// export default function AccountSecruityItemList() {
export default function AccountSecruityItemList() {
  const [item, setItem] = useState(false);
  return (
    <div>
      {item ? (
        <div>
          <VerInputs>
            <Input type="password" placeholder="Current password" />
            <Input type="password" placeholder="New password" />
          </VerInputs>
          <ButtonContainer>
            <Button onClick={() => setItem(false)}>Cancel</Button>
            <Button inputBackgroundColor={`${primaryThemeColor}`}>Save</Button>
          </ButtonContainer>
        </div>
      ) : (
        <div>
          <SecurityItemName>Password</SecurityItemName>
          <SecurityItemName>********</SecurityItemName>
          <SecurityIcon>
            <HiOutlineShieldCheck />
          </SecurityIcon>
          <ChangeButton onClick={() => setItem(true)}>Change</ChangeButton>
        </div>
      )}
      {/* <div>
        <SecurityItemName>Password</SecurityItemName>
        <SecurityItemName>********</SecurityItemName>
        <SecurityIcon>
          <HiOutlineShieldCheck />
        </SecurityIcon>
        <ChangeButton>Change</ChangeButton>
      </div> */}
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

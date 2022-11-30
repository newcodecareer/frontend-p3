import React from "react";
import { Button } from "./MobileVerification.Styles";

export default function MobileVerificationSendBtn() {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = "/mobile-verification-step-three";
        }}
      >
        Verify
      </Button>
    </div>
  );
}

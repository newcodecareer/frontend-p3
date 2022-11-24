import React from "react";
import { Button } from "./MobileVerification.Styles";

export default function MobileVerificationStepThreeBtn() {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Done
      </Button>
    </div>
  );
}

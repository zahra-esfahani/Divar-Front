import React, { useState } from "react";
import SendOTPForm from "../components/tempelates/SendOTPForm";
import CheckOTPForm from "../components/tempelates/CheckOTPForm";

function Auth() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");

  return (
    <>
      {step === 1 && (
        <SendOTPForm
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <CheckOTPForm
          phoneNumber={phoneNumber}
          code={code}
          setCode={setCode}
          setStep={setStep}
        />
      )}
    </>
  );
}

export default Auth;

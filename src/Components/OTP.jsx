import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

const Otp_Digit_Count = 6;

const OTP = () => {
  const [otpFields, setOtpFields] = useState(
    new Array(Otp_Digit_Count).fill("")
  );

  const ref = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value.trim())) {
      return;
    }

    // create shallow copy
    const copyOtp = [...otpFields];
    copyOtp[index] = value.slice(-1);
    setOtpFields(copyOtp);
    if (value.trim() && index < otpFields.length - 1)
      ref.current[index + 1].focus();
  };

  useEffect(() => {
    ref.current[0]?.focus();
  }, []);

  const handlekeyDown = (e, index) => {
    const key = e.key;

    if (!e.target.value && key === "Backspace") {
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
    }
    if (key === "ArrowRight") {
      if (index < otpFields.length - 1) ref.current[index + 1].focus();
    }
  };

  return (
    <div className="container ">
      {otpFields.map((value, index) => {
        return (
          <input
            type="text"
            ref={(currentInput) => (ref.current[index] = currentInput)}
            key={index}
            value={otpFields[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handlekeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTP;

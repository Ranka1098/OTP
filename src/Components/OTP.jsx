import React, { useState } from "react";
import "./otp.css";

const Otp_Digit_Count = 6;

const OTP = () => {
  const [otpFields, setOtpFields] = useState(
    new Array(Otp_Digit_Count).fill("")
  );

  const handleChange = (e, index) => {
    const value = e.target.value;

    // create shallow copy
    const copyOtp = [...otpFields];
    copyOtp[index] = value.slice(-1);
    setOtpFields(copyOtp);
  };

  return (
    <div className="container ">
      {otpFields.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            value={otpFields[index]}
            onChange={(e) => handleChange(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTP;

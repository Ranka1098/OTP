import React, { useState } from "react";
import "./otp.css";

const Otp_Digit_Count = 6;

const OTP = () => {
  const [otpFields, setOtpFields] = useState(
    new Array(Otp_Digit_Count).fill("")
  );

  return (
    <div className="container ">
      {otpFields.map((value, index) => {
        return <input type="text" key={index} />;
      })}
    </div>
  );
};

export default OTP;

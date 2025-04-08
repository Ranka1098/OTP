import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

const OTP = () => {
  const [otpFields, setOtpFields] = useState(new Array(6).fill(""));

  //  useRef ka use karenge har input ka DOM reference paane ke liye.
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // sirf number allow karo
    const newOtp = [...otpFields];
    newOtp[index] = value.slice(-1); // sirf ek hi value type kar sake
    setOtpFields(newOtp);

    //
    if (value && index < otpFields.length - 1) {
      //  value = Agar user ne input box me kuch type kiya hai (i.e., value not empty), tabhi aage ka code chalega.
      //otpFields.length - 1 = last input ka index.
      inputRefs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    inputRefs.current["0"].focus();
  }, []);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    const newOtp = [...otpFields];
    if (key === "Backspace") {
      if (otpFields[index] === "") {
        // agar current empty hai, tab piche jao
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      } else {
        // agar kuch likha hai, sirf current value delete karo
        newOtp[index] = "";
        setOtpFields(newOtp);
      }
    }

    if (key === "ArrowLeft") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
    if (key === "ArrowRight") {
      if (index < otpFields.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handlegetotp = () => {
    if (otpFields.includes("")) {
      console.log("otp fiels are empty");
    } else {
      console.log("OTP :", otpFields.join(""));
    }
  };

  return (
    <div>
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentinput) => {
              inputRefs.current[index] = currentinput; // ref assign
            }}
            type="text"
            value={value} // controlled input
            onChange={(e) => handleChange(e, index)} // value change handle
            onKeyDown={(e) => handleKeyDown(e, index)} //key
          />
        );
      })}
      <button type="button" onClick={handlegetotp}>
        getOtpValue
      </button>
    </div>
  );
};

export default OTP;

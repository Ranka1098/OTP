import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

const OTP = ({ otpLength }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const myRef = useRef([]); //reference banaya hai jiske under empty aaray ko refer kiya hai
  console.log(myRef);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    console.log(key);
    const copyOtpFields = [...otpFields];

    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) {
        myRef.current[index + 1].focus(); // focus ko next per shift kiya gaya hai
      }
    }
    if (key === "ArrowLeft") {
      if (index > 0) {
        myRef.current[index - 1].focus();
      }
    }

    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) {
        myRef.current[index - 1].focus();
      }
      return;
    }

    if (isNaN(key)) {
      return;
    }

    copyOtpFields[index] = key;
    if (index + 1 < otpFields.length) {
      myRef.current[index + 1].focus(); // focus ko next per shift kiya gaya hai
    }
    setOtpFields(copyOtpFields);
  };

  useEffect(() => {
    myRef.current["0"].focus();
  }, []);

  const getOtpValue = () => {
    console.log(otpFields.join(""));
  };
  return (
    <div>
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => {
              myRef.current[index] = currentInput;
            }}
            type="text"
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
      <button type="button" onClick={getOtpValue}>
        getValue
      </button>
    </div>
  );
};

export default OTP;

// 1. ye jo componnet hai props accept karta hai or uskilength 6 hai
// 2. jo ui hai usko state se control karu
// 3. new array banate hai jiski length 6 hai or usko fill kar dete hai empty se.
// 4. jo array banaya hai uske uper map karte hai or div ko render karte hai
// 5. div ko css ki help se style karo
// 6. opt box ki value rahe gi value
// 7. input me jo bhi dikha rahe hai state ki base per dikha rahe hai lekin apni state to empty hai
//    to phele apni state me change karna hai.
// 8. ek handler lagte hai jaise hi koi key down ho rahi hai to wo hadler us input box ki value dega
//    onKeyDown ye handler event object return karega
// 9. sabse phele aaray ki copy banani hai or uska reference pass karna hai nahi react ko lagega ki phele bhi vahi otpField refer kar rahe the or abhi vahi refer kar rahe ho.
// 10. onkeyDown hanlder se hum even or index pass kardenege or jo key milegi usko array ki state ke perticular index per set karna hai.
//  kuch is taraf =>
// const copyOtpFields = [...otpFields];
// copyOtpFields[index] = key;
// setOtpFields(copyOtpFields);
//  11. jaise input box me number type ho to focus next input box me shift ho jave is ke liye hume DOM element ka refernce chahiye iskey liye hum useRef ka use karenge
// useRef basicallay Dom element ka reference lene ke liye use ho ta hai or useRef ek object return karta hai.
// useRef ka syntax
// const ref = useRef(initialValue);
// {
//   current: initialValue; // is current proprty ko app update kar sakte ho aur usme koi bhi value store kar sakte ho.Dom element,number,object,etc
// }
// 12.6 size ka array hogo or her ek index per input ko refer karenge kuch is tarike se ref={(currentInput)=>{myRef.current[index]=currentInput}}
// 13.agar user backspace key press karta hai input box empty ho jana chahiye or focus pichle input box per shift ho jana chahiye to is tarah se karenge
//  is tarah se achive karenge
// if (key === "Backspace") {
//   copyOtpFields[index] = "";
//   setOtpFields(copyOtpFields);
//   if (index > 0) {
//     myRef.current[index - 1].focus();
//   }
//   return;
// }
// 14.jab first tim component mount ho raha hain na phele input box per focus karo
// useEffect(() => {
//   myRef.current["0"].focus();
// }, []);
// 15.hum me left or right arrows key per focus ko move karna hai
//(index > 0)  kyu kiya hai => Ab agar user ArrowLeft dabata hai, toh hum usko pehle wale box par bhejna chahte hain ,Agar abhi user pehle box (index 0) par hai, aur wo left arrow dabata hai, toh
// index - 1 = 0 - 1 = -1 Aur myRef.current[-1] exist hi nahi karta — usse error aayega.
// if (index > 0) {
//   myRef.current[index - 1].focus();
// } Ye condition ensure karti hai ki sirf tabhi left jao, jab tum pehle box par nahi ho.
//kuch is tarah se achive karte hai if (key === "ArrowRight") {
//   if (index + 1 < otpFields.length) {
//     myRef.current[index + 1].focus(); // focus ko next per shift kiya gaya hai
//   }
// }
// if (key === "ArrowLeft") {
//   if (index > 0) {
//     myRef.current[index - 1].focus(); // focus ko pichle wale per shift kiya jayega
//   }
// }

// join() => join method array ko string me convert karti hai

# Approach

1.6 input box hone chahiye
2.jaise hi component mount hota hai pehle input box focus hona chahiye
3.jaise hi user input me type karta hai focus next input per shift ho jana chahiye
4.user ko sirf number type karna allow hona chahiye
5.user input box me type karta hai to latest number hi show karo

// 1. pehle 6 six digit ka input box banana hai
// => ek input filed ki state banayenge uske under array se 6 digit ka input box banayenge or usko empty se fill kar denge
// => kuch is tarah const [otpFields, setOtpFields] = useState(new Array(6).fill(""));
// 2. jo 6 aaray create hai unke per map method laga kar style kar denge.
// 3. jo input box banay hai uske under sirf number print ho or uski valu get karna hai
// => phele dekhna ho input box konsi value print ho rahi hai or humko onchange se pata chalega
// kuch is tarah se
// const handleChange = (e, index) => {
// const value = e.target.value;

// if (isNaN(value)) {
// return;
// }

// // ek shallow copy banate hai
// const copyOtpFields = [...otpFields];
// // jo copy banayi hai uske index per value ko set karna hai
// copyOtpFields[index] = value;
// // usko state me save karna hai
// setOtpFields(copyOtpFields);
// };
// 4.jub input box me number print ho to focus next per shit ho jaye
// kuch is tarah se achive karenge
// if (index + 1 < otpFields.length) {
// myRef.current[index + 1].focus();
// }
// 5.jab component mount hoga to pehel input box per focus ho
// useEffect(() => {
// myRef.current["0"].focus();
// }, []);
// jab user bakspace key enter kare to focus piche shift ho jaye

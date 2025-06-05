import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {

    const[isSignInForm,setIsSignInForm] = useState(true);
    const[errorMessage,setErrorMessage] = useState(null);

    const email = useRef(null)
    const Password = useRef(null)
    
    const handleButtonClick = () => {

            console.log(email.current.value)
            console.log(Password.current.value)

            const message = checkValidData(email.current.value,Password.current.value)
            setErrorMessage(message)
    }

    const handleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
        alt="logo"
      />
      <Header />

      <form onSubmit={(e)=> e.preventDefault() } className="w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-6 rounded-lg shadow-lg space-y-8 ">
        <h1 className="text-white text-xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="FullName"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        />}
        <input
        ref={email}
          type="text"
          placeholder="Email address"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        />
        <input
        ref={Password}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h1 onClick={handleSignInForm} className="text-white cursor-pointer" >{isSignInForm? "Are you new?Sign up" : "Already Registered!! Sign In Now"}</h1>
      </form>
    </div>
  );
};

export default Login;

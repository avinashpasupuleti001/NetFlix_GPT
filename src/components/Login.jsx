
import Header from './Header'
import React, { useState,useRef } from 'react'
import ValidateEmail from '../utils/Validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const [signIn, setSignIn] = useState(false)
    const [error, setError] = useState(false)
    const toggleSign = () => {
        setSignIn(!signIn);
    }
    const email = useRef(null);
    const password = useRef(null);

    const handleButton = () => {
        console.log(email.current.value, password.current.value);
        const msg = ValidateEmail(email.current.value, password.current.value);
        setError(msg);
        console.log(msg);
        if (msg === null) {
            //sign in or sign up logic here
            if (!signIn) {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log("User signed up:", user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setError(errorCode + " --- " + errorMessage);
                    });
            } else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log("User signed in:", user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setError(errorCode + " --- " + errorMessage);
                    }); 
            }
        }
    }
        return (
            <div>
                <Header />
                <div><img src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_small.jpg" alt="Netflix Background" className="w-full h-screen object-cover" /></div>
                <div>
                    <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-5 rounded-lg text-white">
                        <h1 className="font-bold text-3xl py-4">{signIn ? "Sign In" : "Sign Up"}</h1>
                        <input ref={email} type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-500 rounded-lg" />
                        {!signIn && <input type="text" placeholder="Enter the Name" className="p-2 m-2 w-full bg-gray-500 rounded-lg" />}
                        <input ref={password} type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-500 rounded-lg" />
                        <button onClick={handleButton} className="bg-red-700 text-white p-2 m-2 w-full">{signIn ? "Sign In" : "Sign Up"}</button>
                        <p className="py-4 cursor-pointer" onClick={toggleSign}>{signIn ? "New to Netflix? Sign up now" : "Already Registered? Sign in now"} </p>
                        <p className="text-red-500 font-bold">{error}</p>
                    </form>
              
                </div>
            </div>
        )
    }

    export default Login;

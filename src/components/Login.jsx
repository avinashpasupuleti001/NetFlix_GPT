
import Header from './Header'
import React, { useState } from 'react'
const Login = () => {
    const [signIn, setSignIn] = useState(false)
    const toggleSign = () => {
        setSignIn(!signIn);
    }
    return (
      <div>
          <Header />
          <div><img src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_small.jpg" alt="Netflix Background" className="w-full h-screen object-cover" /></div>
          <div>
              <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-5 rounded-lg text-white">
                  <h1 className="font-bold text-3xl py-4">{signIn ? "Sign In" : "Sign Up"}</h1>
                    <input type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-500 rounded-lg" />  
                     {!signIn && <input type="text" placeholder="Enter the Name" className="p-2 m-2 w-full bg-gray-500 rounded-lg" />}
                  <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-500 rounded-lg" />
                  <button className="bg-red-700 text-white p-2 m-2 w-full">{signIn ? "Sign In" : "Sign Up"}</button>
                  <p className="py-4 cursor-pointer" onClick={toggleSign}>{signIn ? "New to Netflix? Sign up now" : "Already Registered? Sign in now"} </p>
              </form>
              
           </div>
    </div>
  )
}

export default Login

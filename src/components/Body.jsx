import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'

const Body = () => {
    const dispatch = useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path: "/browser",
            element: <Browser />
        }
    ])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, redirect to the browser page
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
                
            } else {
                // User is signed out, redirect to the login page
                dispatch(removeUser());
                
            }
        });
    }, []);
  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

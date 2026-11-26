import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { logo } from '../utils/constants'
import { toggleState } from '../utils/GptSlice'
import { sptlang } from '../utils/LangConstants'
import { changeLang } from '../utils/configlangSlice'
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const gptsearch = useSelector((store) => store.gpt.showgpt);
  function handleGPT() {
      dispatch(toggleState());
      console.log("hello");
  }
  function handleOptions(e) {
    dispatch(changeLang(e.target.value))
  }
  function handlesignout() {
    signOut(auth).then(() => {
      // Sign-out successful.
       navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log("sign out error", error)
    });
  }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, redirect to the browser page
                const { uid, email, displayName , photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browser");
            } else {
                // User is signed out, redirect to the login page
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);
  return (
    <div className="absolute w-screen top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-gradient-to-b from-black">
      <img src= {logo} alt="Logo" className="h-10 w-auto" />
      {user && (
        <div className="flex p-2">
         {gptsearch && <select className="px-4 py-2 mx-2 my-1 bg-purple-800 text-white rounded" onChange={handleOptions}>
            {sptlang.map((lan) => (
              <option key={lan.identifier} value={lan.identifier}>
                {lan.title}
              </option>
            ))}
          </select>}
          <button className="px-4 py-2 mx-2 my-1 bg-purple-800 text-white rounded" onClick={handleGPT}>{gptsearch?"Home Page":"Gpt Search"}</button>
          <img src={user.photoURL} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
          <button onClick={handlesignout} className="text-white hover:text-gray-300 font-bold">sign out</button>
        </div>
      )}
    </div>
  )
}

export default Header

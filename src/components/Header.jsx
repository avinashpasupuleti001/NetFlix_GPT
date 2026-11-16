import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.user.user);
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
    <div className="absolute w-screen top-0 left-0 right-0 z-10 p-4 flex items-center justify-between bg-gradient-to-b from-black">
      <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAchJje9GUBJ_ehbO0uOApH8QmRyuvK0LQI9obzFeGtfkpfLyh4FdolMZR4PtvyNoOomDcY7BzTbhFC3gJinH0UadYBg807AKDSPyfsUDm9T3CZKn9OSZN3II7060MZESFcb6YOS9jvzh.svg" alt="Netflix Logo" className="w-32 h-12" />
      {user && (
        <div className="flex p-2">
          <img src={user.photoURL} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
          <button onClick={handlesignout} className="text-white hover:text-gray-300 font-bold">sign out</button>
        </div>
      )}
    </div>
  )
}

export default Header

import React, { useEffect, useState } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './Config';
import Home from './Home';

function Signin() {
  const [value, setValue] = useState("");

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleSignOut = () => {
    setValue("");
  };

  useEffect(() => {
    let useremail = localStorage.getItem("email");
    if (useremail) {
      setValue(useremail);
    }
  }, []);

  return (
    <div>
      {value ? (
        <Home onSignOut={handleSignOut} />
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Signin;

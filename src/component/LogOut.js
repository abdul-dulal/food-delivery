import React from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase.init.js";
const LogOut = () => {
  const logout = () => {
    signOut(auth);
    console.log("click");
  };
  return (
    <div>
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default LogOut;

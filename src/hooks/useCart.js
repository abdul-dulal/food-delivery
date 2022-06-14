import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebase.init";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:4000/order?email=${email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [email]);
  return [cart];
};

export default useCart;

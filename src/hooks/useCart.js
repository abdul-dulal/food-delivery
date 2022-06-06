import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../component/Loading";
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

  // const [user] = useAuthState(auth);
  // const email = user?.email;
  // const {
  //   isLoading,
  //   refetch,
  //   data: orders,
  // } = useQuery("repoData", () =>
  //   fetch(`http://localhost:4000/order?email=${email}`).then((res) =>
  //     res.json()
  //   )
  // );
  // if (isLoading) {
  //   return <Loading />;
  // }

  // return [orders, refetch, isLoading];
};

export default useCart;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../component/Loading";
import auth from "../firebase.init";

const useCart = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const {
    isLoading,
    refetch,
    data: cart,
  } = useQuery("repoData", () =>
    fetch(`https://still-tundra-10310.herokuapp.com/order?email=${email}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(cart);
  return { cart, refetch };
};

export default useCart;

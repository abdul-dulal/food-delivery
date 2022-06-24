import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CheckoutFrom from "../component/CheckoutFrom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51LAu8pBK2ZUV12C8aDcsEUJS2oBqt4Suq0XwkBDMKGHkuwy7mGJCi2LDvQ1HR9WwT7ltulMSjTpFYtSkWetJl5vo007tT01Rrw"
);
const Payment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState([]);
  console.log(payment);

  useEffect(() => {
    const url = `http://localhost:4000/breakfist-payment/${id}`;

    axios.get(url).then((res) => setPayment(res.data));
  }, []);

  useEffect(() => {
    const url = `http://localhost:4000/lunch-payment/${id}`;
    console.log(url);
    axios.get(url).then((res) => setPayment(res.data));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/dinner-payment/${id}`)
      .then((res) => setPayment(res.data));
  }, []);

  return (
    <div className="grid justify-center ite px-12  ">
      <div className="shadow-lg bg-blue-100 h-[330px] w-[350px]">
        <h1 className="text-center py-4 text-xl font-bold"> Order summery</h1>
        <div className="grid grid-cols-2 gap-16 ml-4">
          <div>
            <h1>Subtoal (1 items) </h1>
            <h1>Shiping Fee</h1>
            <p>Total</p>
          </div>
          <div>
            <h1>${payment.price}</h1>
            <p>$ 2</p>
            <p> $ {payment.price + 2}</p>
          </div>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutFrom payment={payment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

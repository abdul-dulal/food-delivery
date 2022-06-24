import React from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
const CheckoutFrom = ({ payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCarderror] = useState("");
  const [success, setSuccess] = useState("");
  const [transitionid, setTransitionid] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { price } = payment;

  const newPrice = { price: price };

  useEffect(() => {
    if (price) {
      fetch(`http://localhost:4000/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPrice),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    // if (error) {
    //   setCarderror(error);
    // } else {
    //   console.log("[PaymentMethod]", paymentMethod);
    // }
    setCarderror(error?.message || "");

    // confirm card payment
    const { paymentIntent, error: intenetError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: price,
          },
        },
      });
    if (intenetError) {
      setCarderror(intenetError.message());
    } else {
      setCarderror("");
      setTransitionid(paymentIntent.id);
      setSuccess("your payment success");
      console.log(paymentIntent);
      // information post krte hbe ei kan teke
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          className="ml-5"
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-[#E51A4B] px-10 py-3 rounded-md my-4 ml-3 text-white cursor-pointer "
        >
          Pay Now
        </button>
      </form>
      {cardError && <h1 className="text-red-700  ml-3"> {cardError}</h1>}
      {success && (
        <div>
          <h1 className="text-green-700  ml-3"> {success}</h1>
          <p className="ml-3">Your Transsition Id {transitionid}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutFrom;

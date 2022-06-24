import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Footer from "./home/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
const Order = () => {
  const [quantity, setQuantity] = useState(1);
  const [user] = useAuthState(auth);
  const [meal, setMeal] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/breakfast/${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/lunch/${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:4000/dinner/${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, []);

  const AddtoCart = () => {
    const cart = {
      email: user?.email,
      price: meal.price * quantity,
      name: meal.name,
      quantity: meal.quantity,
      image: meal.image,
    };
    fetch("http://localhost:4000/addCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === false) {
          toast.error("already added");
        } else {
          toast.success("Successfully add to cart");
        }
      });
  };

  return (
    <div>
      <div className="grid grid-cols-2 px-24">
        <div className="block mx-auto">
          <img src={meal?.image} className="h-[350px] " alt="" />
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl font-bold">{meal?.name}</h1>
            <p>{meal?.description}</p>
            <p> $ {meal?.price * quantity}</p>
            <div className="flex items-center content-center">
              <p className="mt-1 text-xl">Quantity </p>
              <button
                className="ml-4 text-3xl font-bold text-black"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                -
              </button>
              <p className="ml-4 text-2xl input input-bordered  w-24 text-center pt-2 ">
                {quantity}
              </p>
              <button
                className="ml-4 text-3xl font-bold text-red-700   "
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity === 5}
              >
                +
              </button>
            </div>
            <div className="mt-8">
              <button
                onClick={() => navigate(`/payment/${meal._id}`)}
                className=" px-10 py-4 text-white font-bold rounded bg-[#26ABD4]"
              >
                Buy Now
              </button>
              <button
                className="px-8 py-4 text-white font-bold rounded ml-12 bg-[#D0611E] border-0"
                onClick={AddtoCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;

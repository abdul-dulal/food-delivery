import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const OrderDeatils = ({ order, refetch }) => {
  const { name, image, quantity, price, _id } = order;

  const navigate = useNavigate();

  const cancelOrder = () => {
    fetch(`https://still-tundra-10310.herokuapp.com/deleteorder/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className="grid grid-cols-2 w-1/2 mx-auto    bg-base-100 shadow-xl pb-4">
      <div className="grid grid-cols-2">
        <div class="w-32 rounded mx-auto">
          <img src={image} title={name} alt="" />
        </div>
        <div className=" mt-4">
          <label className="text-xl ">{name}</label>
          <p> Quantity : {quantity}</p>
          <p> Price: $ {price}</p>
        </div>
      </div>
      <div className="mt-4">
        <span
          className="text-xl font-bold text-red-700 cursor-pointer"
          onClick={cancelOrder}
        >
          <AiTwotoneDelete />
        </span>
        <button
          onClick={() => navigate(`/payment/${_id}`)}
          className=" bg-red-700 px-6 py-2 text-white rounded-md mt-3"
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default OrderDeatils;

import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const OrderDeatils = ({ order, refetch }) => {
  const { name, image, quantity, price, _id } = order;

  const cancelOrder = () => {
    fetch(`http://localhost:4000/deleteorder/${_id}`, {
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
          <p>{quantity}</p>
          <p> $ {price}</p>
        </div>
      </div>
      <div className="mt-4">
        <span
          className="text-xl font-bold text-red-700 cursor-pointer"
          onClick={cancelOrder}
        >
          <AiTwotoneDelete />
        </span>
      </div>
    </div>
  );
};

export default OrderDeatils;

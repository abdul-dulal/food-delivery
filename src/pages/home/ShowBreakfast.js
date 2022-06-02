import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ShowBreakfast = ({ meal }) => {
  const { name, description, image, price, _id } = meal;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/order/${_id}`)}
      className="hover:scale-[.9] duration-1000"
    >
      <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p className="font-bold"> $ {price}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ShowBreakfast;

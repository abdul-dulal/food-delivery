import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./home/Footer";
const Order = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/meal/${id}`)
      .then((res) => setMeal(res.data));
  }, [id]);

  return (
    <div>
      <div className="grid grid-cols-2 px-24">
        <div>
          <img src={meal?.image} alt="" />
        </div>
        <div>
          <h1>hello2</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;

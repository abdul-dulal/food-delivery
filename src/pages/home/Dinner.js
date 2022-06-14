import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Showdinner from "./Showdinner";

const Dinner = () => {
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/get-dinnger`)
      .then((res) => setDinner(res.data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-16">
      {dinner.map((dinner) => (
        <Showdinner dinner={dinner} key={dinner._id} />
      ))}
    </div>
  );
};

export default Dinner;

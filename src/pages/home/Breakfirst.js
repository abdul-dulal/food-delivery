import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowBreakfast from "./ShowBreakfast";
const Breakfirst = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/meal`)
      .then((res) => setBreakfast(res.data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-16">
      {breakfast?.map((meal) => (
        <ShowBreakfast key={Math.random()} meal={meal} />
      ))}
    </div>
  );
};

export default Breakfirst;

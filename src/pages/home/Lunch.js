import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Showlunch from "./Showlunch";

const Lunch = () => {
  const [lunch, setlunch] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/get-lunch`)
      .then((res) => setlunch(res.data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-16">
      {lunch.map((lunch) => (
        <Showlunch lunch={lunch} key={lunch._id} />
      ))}
    </div>
  );
};

export default Lunch;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../component/Loading";
import ShowBreakfast from "./ShowBreakfast";

const Breakfirst = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [isLoading, setisloading] = useState(false);

  useEffect(() => {
    axios.get(`https://still-tundra-10310.herokuapp.com/meal`).then((res) => {
      setBreakfast(res.data);
      setisloading(true);
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-16">
      {isLoading ? (
        breakfast?.map((meal) => (
          <ShowBreakfast key={Math.random()} meal={meal} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Breakfirst;

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "../../component/Loading";
import Showlunch from "./Showlunch";

const Lunch = () => {
  const [lunch, setlunch] = useState([]);
  const [isLoading, setisloading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://still-tundra-10310.herokuapp.com/get-lunch`)
      .then((res) => {
        setlunch(res.data);
        setisloading(true);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-16">
      {isLoading ? (
        lunch.map((lunch) => <Showlunch lunch={lunch} key={lunch._id} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Lunch;

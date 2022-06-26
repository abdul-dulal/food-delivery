import axios from "axios";
import Showdinner from "./Showdinner";
import { useQuery } from "react-query";
import Loading from "../../component/Loading";
import { useState } from "react";
import { useEffect } from "react";

const Dinner = () => {
  const [dinner, setDinner] = useState([]);
  const [isLoading, setisloading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://still-tundra-10310.herokuapp.com/get-dinner`)
      .then((res) => {
        setDinner(res.data);
        setisloading(true);
      });
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-16">
      {isLoading ? (
        dinner?.map((dinner) => <Showdinner dinner={dinner} key={dinner._id} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Dinner;

import React from "react";
import { useParams } from "react-router-dom";

const Deliver = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Deliver;

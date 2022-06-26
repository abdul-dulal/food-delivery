import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ClipLoader";
const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const override = css`
    display: block;
    margin: 0 auto;

    border-color: red;
  `;
  return (
    <div className="">
      <ScaleLoader color={color} loading={loading} css={override} size={100} />
    </div>
  );
};

export default Loading;

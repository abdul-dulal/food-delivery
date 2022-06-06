import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const center = {
  lat: 23.810331,
  lng: 90.412521,
};
const CheckOut = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDjwVR5XBFSDWWwR38tv9JSqbu7Et2gyC8",
  });
  if (!isLoaded) {
    return <p>hello</p>;
  }
  return (
    <div>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      ></GoogleMap>
    </div>
  );
};

export default CheckOut;

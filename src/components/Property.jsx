import React from "react";
import House from "../assets/houses.jpg";

export default function Property() {
  return (
    <div className="property">
      <div className="property-box">
        <div className="property-photo-container">
          <img src={House} alt="House Photo" />
        </div>
        <div className="property-info-container"></div>
      </div>
    </div>
  );
}

import React from "react";
import House from "../assets/houses.jpg";

export default function Property(props) {
  return (
    <div className="property">
      <div className="property-box" onClick={props.displayInfo}>
        <div className="property-photo-container">
          <img src={House} alt="House Photo" />
        </div>
        <div className="property-info-container">
          <span className="price">$900</span>
          <span className="sales-type">For Rent</span>
          <div className="property-size">
            <span className="bedrooms">3 bds |</span>
            <div className="bathrooms">2 bas |</div>
            <span className="square-feet"> 1,500 sqft</span>
          </div>
          <span className="address">1145 West Comet Rd, Clinton, OH 44216</span>
          <button type="button" className="apply-button">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

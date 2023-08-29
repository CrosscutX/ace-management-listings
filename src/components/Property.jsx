import React from "react";
import House from "../assets/houses.jpg";

export default function Property(props) {
  return (
    <div className="property">
      <div
        className="property-box"
        onClick={(e) => {
          e.stopPropagation();
          props.displayInfo();
        }}
      >
        <div className="property-photo-container">
          <img src={props.mainImage} alt="House Photo" />
        </div>
        <div className="property-info-container">
          <span className="price">${props.price}</span>
          <span className="sales-type">{props.rentOrOwn}</span>
          <div className="property-size">
            <span className="bedrooms">{props.bedrooms} bds |</span>
            <div className="bathrooms">{props.bathrooms} bas |</div>
            <span className="square-feet"> {props.squareFeet} sqft</span>
          </div>
          <span className="address">{props.address}</span>
          <button type="button" className="apply-button">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

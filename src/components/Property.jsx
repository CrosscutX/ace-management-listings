import React from "react";
import House from "../assets/houses.jpg";

export default function Property(props) {
  return (
    <div className="property">
      <div
        className="property-box"
        onClick={(e) => {
          e.stopPropagation();
          //Selects the home so that property info has the right info to display
          props.selectHome(props.home);
          //Displays or doesn't display info based on if the display state is true or false.
          if (props.display === false) {
            props.displayInfo(true);
          } else {
            props.displayInfo(false);
          }
          //Keeps the info panel displayed when clicking a property when the large image is displayed.
          //Also removes the dark effect if the same criteria is true.
          if (props.showImageContainer === true) {
            props.setShowImageContainer(false);
            props.displayInfo(true);
            props.setDark(false);
          }
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

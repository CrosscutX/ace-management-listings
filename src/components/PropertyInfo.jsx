import { useEffect, useState } from "react";
import House from "../assets/houses.jpg";
import HouseIndoor1 from "../assets/houseIndoor1.jpg";
import HouseIndoor2 from "../assets/houseIndoor2.jpg";
import HouseIndoor3 from "../assets/houseIndoor3.jpg";

export default function PropertyInfo(props) {
  let secondaryImages = [];

  //Makes sure the selected home actually has secondary images attached to it
  if (props.selectedHome["secondaryImages"] != undefined) {
    secondaryImages = props.selectedHome["secondaryImages"].map((image) => {
      return <img src={props.urlBuild(image["asset"])} alt="secondary image" />;
    });
  }

  useEffect(() => {
    function propertyInfoListener(e) {
      if (
        //prevents the .contains from getting an undefined or null value, which will throw errors
        props.infoContainer.current !== undefined &&
        props.infoContainer.current !== null &&
        props.showImageContainer === false
      ) {
        if (!props.infoContainer.current.contains(e.target)) {
          props.displayInfo(false);
        }
      }
    }

    document.addEventListener("click", propertyInfoListener);

    return () => {
      document.removeEventListener("click", propertyInfoListener);
    };
  });

  return (
    <>
      {props.display && (
        <div className="property-info" ref={props.infoContainer}>
          <div className="left-info-container">
            <img
              src={props.urlBuild(props.selectedHome["mainImage"])}
              alt="main image"
              onClick={(e) => {
                e.stopPropagation();
                const currentHouse = e.target.src;
                props.setSelectedImage(currentHouse);
                props.imageContainerSetter();
                props.setDark(true);
              }}
            />
            {secondaryImages}
          </div>

          <div className="right-info-container">
            <span>Price: {props.selectedHome["price"]}</span>
            <span>Address: {props.selectedHome["address"]}</span>
            <span>Bedrooms: {props.selectedHome["bedrooms"]}</span>
            <span>Bathrooms: {props.selectedHome["bathrooms"]}</span>
            <span>Laundry: {props.selectedHome["laundry"]}</span>
            <span>AC: {props.selectedHome["ac"]}</span>
            <button type="button" className="info-button">
              Apply
            </button>
          </div>
        </div>
      )}
    </>
  );
}

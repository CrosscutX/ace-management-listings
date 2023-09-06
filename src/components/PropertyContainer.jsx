import React from "react";
import Property from "./Property";

export default function PropertyContainer(props) {
  let mapHomes = props.homes.map((home, index) => {
    return (
      <Property
        key={index}
        home={home}
        displayInfo={props.displayInfo}
        display={props.display}
        price={home["price"]}
        rentOrOwn={home["rentOrOwn"]}
        bedrooms={home["bedrooms"]}
        bathrooms={home["bathrooms"]}
        squareFeet={home["sqft"]}
        address={home["address"]}
        mainImage={props.urlBuild(home["mainImage"]["asset"])}
        selectHome={props.selectHome}
        showImageContainer={props.showImageContainer}
        setShowImageContainer={props.setShowImageContainer}
        dark={props.dark}
        setDark={props.setDark}
        setDisplayApp={props.setDisplayApp}
        selectedAddressSetter={props.selectedAddressSetter}
      />
    );
  });

  let propertyClass = "property-container";
  if (props.dark === true) {
    propertyClass += " dark";
  }
  return (
    <div className={propertyClass}>
      <h2>Available Properties</h2>
      <div className="property-body">{mapHomes}</div>
    </div>
  );
}

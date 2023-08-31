import React from "react";
import Property from "./Property";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client.js";

export default function PropertyContainer(props) {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

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
        mainImage={urlFor(home["mainImage"]["asset"])}
        selectHome={props.selectHome}
        showImageContainer={props.showImageContainer}
        setShowImageContainer={props.setShowImageContainer}
        dark={props.dark}
        setDark={props.setDark}
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

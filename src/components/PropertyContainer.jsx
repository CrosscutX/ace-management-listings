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
    console.log(home["mainImage"]["asset"]["_ref"]);
    return (
      <Property
        key={index}
        displayInfo={props.displayInfo}
        display={props.display}
        price={home["price"]}
        rentOrOwn={home["rentOrOwn"]}
        bedrooms={home["bedrooms"]}
        bathrooms={home["bathrooms"]}
        squareFeet={home["sqft"]}
        address={home["address"]}
        mainImage={urlFor(home["mainImage"]["asset"])}
      />
    );
  });
  return (
    <div className="property-container">
      <h2>Available Properties</h2>
      <div className="property-body">{mapHomes}</div>
    </div>
  );
}

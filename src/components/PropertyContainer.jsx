import React from "react";
import Property from "./Property";

export default function PropertyContainer(props) {
  return (
    <div className="property-container">
      <h2>Available Properties</h2>
      <div className="property-body">
        <Property displayInfo={props.displayInfo} />
        <Property displayInfo={props.displayInfo} />
        <Property displayInfo={props.displayInfo} />
      </div>
    </div>
  );
}

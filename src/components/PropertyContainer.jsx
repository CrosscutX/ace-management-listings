import React from "react";
import Property from "./Property";

export default function PropertyContainer() {
  return (
    <div className="property-container">
      <h2>Available Properties</h2>
      <div className="property-body">
        <Property />
        <Property />
        <Property />
      </div>
    </div>
  );
}

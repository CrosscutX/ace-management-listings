import React from "react";

export default function PropertyInfo(props) {
  console.log(props.display);
  return (
    <>
      {props.display && (
        <div className="property-info">
          <h2>Info Lol</h2>
        </div>
      )}
    </>
  );
}

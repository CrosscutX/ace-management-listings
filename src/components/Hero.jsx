import React from "react";

export default function Hero(props) {
  console.log(props.dark);
  let heroClass = "hero";
  if (props.dark === true) {
    heroClass += " dark";
  }

  return (
    <div className={heroClass}>
      <h1>Ace Management Listing Portal</h1>
    </div>
  );
}

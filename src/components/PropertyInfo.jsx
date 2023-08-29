import { useEffect } from "react";
import House from "../assets/houses.jpg";
import HouseIndoor1 from "../assets/houseIndoor1.jpg";
import HouseIndoor2 from "../assets/houseIndoor2.jpg";
import HouseIndoor3 from "../assets/houseIndoor3.jpg";

export default function PropertyInfo(props) {
  useEffect(() => {
    function propertyInfoListener(e) {
      if (
        //prevents the .contains from getting an undefined or null value, which will throw errors
        props.infoContainer.current !== undefined &&
        props.infoContainer.current !== null
      ) {
        if (!props.infoContainer.current.contains(e.target)) {
          props.displayInfo();
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
          <div className="top-info-container">
            <div className="left-info-container">
              <img src={House} alt="main image" />
            </div>
            <div className="right-info-container">
              <span>Price: </span>
              <span>Address: </span>
              <span>Bedrooms: </span>
              <span>Bathrooms: </span>
              <span>Laundry: </span>
              <span>AC: </span>
              <button type="button" className="info-button">
                Apply
              </button>
            </div>
          </div>
          <div className="bottom-info-container">
            <img src={HouseIndoor1} alt="secondary image" />
            <img src={HouseIndoor2} alt="secondary image" />
            <img src={HouseIndoor3} alt="secondary image" />
          </div>
        </div>
      )}
    </>
  );
}

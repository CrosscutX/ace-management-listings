import { useEffect } from "react";

export default function PropertyInfo(props) {
  let secondaryImages = [];
  let propertyInfo = "property-info";
  if (props.dark === true) {
    propertyInfo += " dark";
  }
  //Makes sure the selected home actually has secondary images attached to it
  if (props.selectedHome["secondaryImages"] != undefined) {
    secondaryImages = props.selectedHome["secondaryImages"].map(
      (image, index) => {
        return (
          <img
            src={props.urlBuild(image["asset"])}
            alt="secondary image"
            key={index}
          />
        );
      }
    );
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
        <div className={propertyInfo} ref={props.infoContainer}>
          <div className="left-info-container">
            <img
              src={props.urlBuild(props.selectedHome["mainImage"])}
              alt="main image"
              onClick={(e) => {
                e.stopPropagation();
                const currentHouse = e.target.src;
                props.setSelectedImage(currentHouse);
                props.imageContainerSetter();
                if (props.dark === true) {
                  props.setDark(false);
                } else {
                  props.setDark(true);
                }
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
            <button
              type="button"
              className="info-button"
              onClick={(e) => {
                e.stopPropagation();
                props.setDisplayApp(true);
                props.selectedAddressSetter(props.selectedHome["address"]);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </>
  );
}

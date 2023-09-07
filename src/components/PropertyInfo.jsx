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
        );
      }
    );
  }

  function booleanCheck(value) {
    if (value == false) {
      return "No";
    } else {
      return "Yes";
    }
  }

  function rentOrSellCheck(value) {
    if (value === true) {
      return "sale";
    } else {
      return "rent";
    }
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
            <span className="highlight">
              Property for {rentOrSellCheck(props.selectedHome["rentOrOwn"])}
            </span>
            <span>
              <span className="highlight">Price:</span>{" "}
              {props.selectedHome["price"]}
            </span>
            <span>
              <span className="highlight">Address:</span>{" "}
              {props.selectedHome["address"]}
            </span>
            <span>
              <span className="highlight">Bedrooms:</span>{" "}
              {props.selectedHome["bedrooms"]}
            </span>
            <span>
              <span className="highlight">Bathrooms:</span>{" "}
              {props.selectedHome["bathrooms"]}
            </span>
            <span>
              <span className="highlight">Laundry:</span>{" "}
              {booleanCheck(props.selectedHome["laundry"])}
            </span>
            <span>
              <span className="highlight">AC:</span>{" "}
              {booleanCheck(props.selectedHome["ac"])}
            </span>
            <span>
              <span className="highlight">Garage:</span>{" "}
              {booleanCheck(props.selectedHome["garage"])}
            </span>
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

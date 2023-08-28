import { useEffect } from "react";

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
          console.log(props.infoContainer.current);
        }
      }
    }

    document.addEventListener("click", propertyInfoListener);

    return () => {
      document.removeEventListener("click", propertyInfoListener);
    };
  });
  console.log(props.display);
  return (
    <>
      {props.display && (
        <div className="property-info" ref={props.infoContainer}>
          <h2>Info Lol</h2>
        </div>
      )}
    </>
  );
}

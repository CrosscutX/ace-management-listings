import { useEffect, useRef } from "react";

export default function LargeImageContainer(props) {
  let imageContainer = useRef();
  useEffect(() => {
    function imageListener(e) {
      if (
        //prevents the .contains from getting an undefined or null value, which will throw errors
        imageContainer.current !== undefined &&
        imageContainer.current !== null
      ) {
        if (!imageContainer.current.contains(e.target)) {
          props.setShowImageContainer(false);
          props.setDark(false);
        }
      }
    }
    document.addEventListener("click", imageListener);

    return () => {
      document.removeEventListener("click", imageListener);
    };
  });

  return (
    <div className="large-image-container">
      <img src={props.image} alt="Big Image" ref={imageContainer} />
      <span className="exit-button">X</span>
    </div>
  );
}

import { useEffect, useRef } from "react";

export default function LargeImageContainer(props) {
  let imageContainer = useRef();
  useEffect(() => {
    function imageListener(e) {
      console.log(imageContainer.current);
      console.log(e.target);
      if (
        //prevents the .contains from getting an undefined or null value, which will throw errors
        imageContainer.current !== undefined &&
        imageContainer.current !== null
      ) {
        if (!imageContainer.current.contains(e.target)) {
          console.log("in setwhoimagecontainer");
          props.setShowImageContainer(false);
        }
      }
    }
    document.addEventListener("click", imageListener);

    return () => {
      document.removeEventListener("click", imageListener);
    };
  });

  return (
    <div className="large-image-container" ref={imageContainer}>
      <img src={props.image} alt="Big Image" />
    </div>
  );
}

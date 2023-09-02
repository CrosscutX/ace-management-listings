import { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PropertyContainer from "./components/PropertyContainer";
import PropertyInfo from "./components/PropertyInfo";
import LargeImageContainer from "./components/LargeImageContainer";
import Application from "./components/Application";
import Footer from "./components/Footer";
import SanityClient from "./client.js";

export default function App() {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayApp, setDisplayApp] = useState(true);
  const [homes, setHomes] = useState([]);
  const [selectedHome, setSelectedHome] = useState([]);
  const [showImageContainer, setShowImageContainer] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [dark, setDark] = useState(false);
  let infoContainer = useRef();

  useEffect(() => {
    SanityClient.fetch(`*[_type == "listHome"]`).then((data) => setHomes(data));
  }, []);

  function imageContainerSetter() {
    if (showImageContainer === true) {
      setShowImageContainer(false);
    } else {
      setShowImageContainer(true);
    }
  }

  function displayAppSetter() {
    if (displayApp === true) {
      setDisplayApp(false);
    } else {
      setDisplayApp(true);
    }
  }

  function selectedHomeSetter(home) {
    setSelectedHome(home);
  }
  //Changes the background of body whenever large images are displayed
  if (dark === false) {
    document.body.style.backgroundColor = "#fdfbff";
  } else {
    document.body.style.backgroundColor = "#161a1e";
  }

  if (displayApp === true) {
    document.body.style.backgroundColor = "#E8AA9B";
  } else {
    document.body.style.backgroundColor = "#161a1e";
  }

  return (
    <div className="app-container">
      {!displayApp && (
        <div className="app">
          <Hero dark={dark} />
          <PropertyInfo
            display={displayInfo}
            infoContainer={infoContainer}
            displayInfo={setDisplayInfo}
            selectedHome={selectedHome}
            showImageContainer={showImageContainer}
            imageContainerSetter={imageContainerSetter}
            setSelectedImage={setSelectedImage}
            dark={dark}
            setDark={setDark}
          />
          {showImageContainer && (
            <LargeImageContainer
              image={selectedImage}
              setShowImageContainer={setShowImageContainer}
              setDark={setDark}
            />
          )}
          <PropertyContainer
            displayInfo={setDisplayInfo}
            display={displayInfo}
            homes={homes}
            selectHome={selectedHomeSetter}
            showImageContainer={showImageContainer}
            setShowImageContainer={setShowImageContainer}
            dark={dark}
            setDark={setDark}
          />
          <Footer />
        </div>
      )}
      {displayApp && (
        <div className="form">
          <Application />
        </div>
      )}
    </div>
  );
}

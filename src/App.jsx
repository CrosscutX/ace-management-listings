import { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PropertyContainer from "./components/PropertyContainer";
import PropertyInfo from "./components/PropertyInfo";
import LargeImageContainer from "./components/LargeImageContainer";
import Footer from "./components/Footer";
import SanityClient from "./client.js";

export default function App() {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayApp, setDisplayApp] = useState(false);
  const [homes, setHomes] = useState([]);
  const [selectedHome, setSelectedHome] = useState([]);
  const [showImageContainer, setShowImageContainer] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
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

  return (
    <div className="app">
      <Hero />
      <PropertyInfo
        display={displayInfo}
        infoContainer={infoContainer}
        displayInfo={setDisplayInfo}
        selectedHome={selectedHome}
        showImageContainer={showImageContainer}
        imageContainerSetter={imageContainerSetter}
        setSelectedImage={setSelectedImage}
      />
      {showImageContainer && (
        <LargeImageContainer
          image={selectedImage}
          setShowImageContainer={setShowImageContainer}
        />
      )}

      <PropertyContainer
        displayInfo={setDisplayInfo}
        display={displayInfo}
        homes={homes}
        selectHome={selectedHomeSetter}
        showImageContainer={showImageContainer}
        setShowImageContainer={setShowImageContainer}
      />
      <Footer />
    </div>
  );
}

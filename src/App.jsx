import { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PropertyContainer from "./components/PropertyContainer";
import PropertyInfo from "./components/PropertyInfo";
import LargeImageContainer from "./components/LargeImageContainer";
import Application from "./components/Application";
import Footer from "./components/Footer";
import SanityClient from "./client.js";
import imageUrlBuilder from "@sanity/image-url";

export default function App() {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayApp, setDisplayApp] = useState(false);
  const [homes, setHomes] = useState([]);
  const [selectedHome, setSelectedHome] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState([]);
  const [showImageContainer, setShowImageContainer] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [dark, setDark] = useState(false);
  let infoContainer = useRef();
  const builder = imageUrlBuilder(SanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

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

  function selectedAddressSetter(address) {}
  //Changes the background of body whenever large images are displayed

  if (dark === false) {
    document.body.style.backgroundColor = "#fdfbff";
  } else {
    document.body.style.backgroundColor = "#161a1e";
  }

  if (displayApp === true) {
    document.body.style.backgroundColor = "#E8AA9B";
  } else if (displayApp === false && dark === false) {
    document.body.style.backgroundColor = "#fdfbff";
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
            urlBuild={urlFor}
            setSelectedAddress={setSelectedAddress}
            setDisplayApp={setDisplayApp}
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
            urlBuild={urlFor}
          />
          <Footer />
        </div>
      )}
      {displayApp && (
        <div className="form">
          <Application selectedAddress={selectedAddress} />
        </div>
      )}
    </div>
  );
}

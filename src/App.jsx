import { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PropertyContainer from "./components/PropertyContainer";
import PropertyInfo from "./components/PropertyInfo";
import Footer from "./components/Footer";

export default function App() {
  const [displayInfo, setDisplayInfo] = useState(false);
  let infoContainer = useRef();

  function displayInfoSetter() {
    if (displayInfo === true) {
      setDisplayInfo(false);
    } else {
      setDisplayInfo(true);
    }
  }

  return (
    <div className="app">
      <Hero />
      <PropertyInfo
        display={displayInfo}
        infoContainer={infoContainer}
        displayInfo={displayInfoSetter}
      />
      <PropertyContainer
        displayInfo={displayInfoSetter}
        display={displayInfo}
      />
      <Footer />
    </div>
  );
}

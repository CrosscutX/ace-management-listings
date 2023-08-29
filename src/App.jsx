import { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PropertyContainer from "./components/PropertyContainer";
import PropertyInfo from "./components/PropertyInfo";
import Footer from "./components/Footer";
import SanityClient from "./client.js";

export default function App() {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [homes, setHomes] = useState([]);
  const [selectedHome, setSelectedHome] = useState([]);
  let infoContainer = useRef();

  console.log(selectedHome);

  useEffect(() => {
    SanityClient.fetch(`*[_type == "listHome"]`).then((data) => setHomes(data));
  }, []);

  function displayInfoSetter() {
    if (displayInfo === true) {
      setDisplayInfo(false);
    } else {
      setDisplayInfo(true);
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
        displayInfo={displayInfoSetter}
        selectedHome={selectedHome}
      />
      <PropertyContainer
        displayInfo={displayInfoSetter}
        display={displayInfo}
        homes={homes}
        selectHome={selectedHomeSetter}
      />
      <Footer />
    </div>
  );
}

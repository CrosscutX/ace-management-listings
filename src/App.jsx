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

  useEffect(() => {
    SanityClient.fetch(`*[_type == "listHome"]`).then((data) => setHomes(data));
  }, []);

  // useEffect(() => {
  //   homes.map((homes) => {
  //     console.log(homes);
  //   });
  // }, [homes]);

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
        homes={homes}
      />
      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
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

  useEffect(() => {
    homes.map((homes) => {
      console.log(homes);
    });
  }, [homes]);

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
      <PropertyInfo display={displayInfo} />
      <PropertyContainer displayInfo={displayInfoSetter} />
      <Footer />
    </div>
  );
}

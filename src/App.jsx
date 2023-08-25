import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PropertyContainer from "./components/PropertyContainer";
import PropertyInfo from "./components/PropertyInfo";
import Footer from "./components/Footer";

export default function App() {
  const [displayInfo, setDisplayInfo] = useState(false);

  function displayInfoSetter() {
    if (displayInfo === true) {
      setDisplayInfo(false);
    } else {
      setDisplayInfo(true);
    }
  }

  console.log(displayInfo);
  return (
    <div className="app">
      <Hero />
      <PropertyInfo display={displayInfo} />
      <PropertyContainer displayInfo={displayInfoSetter} />
      <Footer />
    </div>
  );
}

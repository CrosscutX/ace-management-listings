import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PropertyContainer from "./components/PropertyContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <PropertyContainer />
      <Footer />
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import AlertCard from "./Components/AlertCard/AlertCard";
import ClientImageBar from "./Components/ClientImagesBar/ClientImageBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import VideoSection from "./Components/VideoSection/VideoSection";
import CookiesPopup from "./Components/CookiesPopup/CookiesPopup";

function App() {
  const [showAlertCard, setShowAlertCard] = useState(true);

  return (
    <main className="container">
      <Navbar />
      {showAlertCard ? <AlertCard setShowAlertCard={setShowAlertCard} /> : null}

      <HeroSection />
      <ClientImageBar />
      <VideoSection />
      <CookiesPopup />
    </main>
  );
}

export default App;

import "./App.css";
import AlertCard from "./Components/AlertCard/AlertCard";
import ClientImageBar from "./Components/ClientImagesBar/ClientImageBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <main className="container">
      <Navbar />
      <AlertCard />
      <HeroSection />
      <ClientImageBar />
    </main>
  );
}

export default App;

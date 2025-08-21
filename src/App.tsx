import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import PropertiesPage from "./pages/PropertiesPage";
import ContactPage from "./pages/ContactPage";
import LogoWatermark from "./components/ui/LogoWatermark";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-properties" element={<PropertiesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
      <LogoWatermark />
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar.tsx";
import { LandingPage } from "./components/pages/landingPage/LandingPage.tsx";
import { AboutPage } from "./components/pages/aboutPage/AboutPage.tsx";
import { ContactPage } from "./components/pages/contactPage/ContactPage.tsx";
import { SettingsPage } from "./components/pages/settingsPage/SettingsPage.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/settings"} element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

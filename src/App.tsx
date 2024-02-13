import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar.tsx";
import { LandingPage } from "./components/pages/landingPage/LandingPage.tsx";
import { AboutPage } from "./components/pages/aboutPage/AboutPage.tsx";
import { ContactPage } from "./components/pages/contactPage/ContactPage.tsx";
import { SettingsPage } from "./components/pages/settingsPage/SettingsPage.tsx";
import i18n from "./i18n.ts";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
        <div className="w-full flex justify-center">
          <div className="min-w-[1260px] max-w-[1260px]">
            <Routes>
              <Route path={"/"} element={<LandingPage />} />
              <Route path={"/about"} element={<AboutPage />} />
              <Route path={"/contact"} element={<ContactPage />} />
              <Route path={"/settings"} element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;

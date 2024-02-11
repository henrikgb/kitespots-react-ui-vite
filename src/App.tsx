import "./App.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "nb" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <div>
      <h1>Kite spots 2.0</h1>
      <h3>{t("currentLanguage")}</h3>
      <button type={"button"} onClick={handleChangeLanguage}>
        {t("changeLanguage")}
      </button>
    </div>
  );
}

export default App;

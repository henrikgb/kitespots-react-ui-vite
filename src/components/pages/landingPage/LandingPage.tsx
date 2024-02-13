import { useTranslation } from "react-i18next";
import { useState } from "react";

export const LandingPage = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "nb" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1>Kite spots 2.0</h1>
      <h3>
        {t("currentLanguage")}: {t(currentLanguage)}
      </h3>
      <button type={"button"} onClick={handleChangeLanguage}>
        {t("changeLanguage")}
      </button>
    </div>
  );
};

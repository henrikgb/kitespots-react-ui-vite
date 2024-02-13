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
  };
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-2 min-w-[1260px] max-w-[1260px] ">
        <h1>Kite spots 2.0</h1>
        <h3>
          {t("currentLanguage")}: {t(currentLanguage)}
        </h3>
        <button type={"button"} onClick={handleChangeLanguage}>
          {t("changeLanguage")}
        </button>
      </div>
    </div>
  );
};

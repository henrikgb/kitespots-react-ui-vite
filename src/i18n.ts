import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "./locale/english/translation.json";
import norwegianTranslation from "./locale/norwegian/translation.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { ...englishTranslation },
    nb: { ...norwegianTranslation },
  },
  lng: "en",
});

export default i18n;

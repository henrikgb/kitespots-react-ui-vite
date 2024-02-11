import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./locale/en.json";
import nbJSON from "./locale/nb.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    nb: { ...nbJSON },
  },
  lng: "en",
});
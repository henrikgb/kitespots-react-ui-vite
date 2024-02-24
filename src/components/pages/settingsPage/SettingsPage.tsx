import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import shoreBreak from "../../../assets/shoreBreak.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type ButtonColor = "white" | "blue-gray";

export const SettingsPage = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(language);
  const [norwegianButtonColor, setNorwegianButtonColor] =
    useState<ButtonColor>("white");
  const [englishButtonColor, setEnglishButtonColor] =
    useState<ButtonColor>("blue-gray");

  useEffect(() => {
    if (currentLanguage === "nb") {
      setNorwegianButtonColor("blue-gray");
      setEnglishButtonColor("white");
    } else {
      setNorwegianButtonColor("white");
      setEnglishButtonColor("blue-gray");
    }
  }, [currentLanguage]);

  const switchLanguage = (updatedLanguage: "en" | "nb") => {
    setCurrentLanguage(updatedLanguage);
    changeLanguage(updatedLanguage);
    localStorage.setItem("language", updatedLanguage);
  };

  return (
    <Card className="mt-6 w-full h-full bg-webPageContainerBody">
      <CardHeader
        color="blue-gray"
        className="flex h-full justify-center items-center"
        style={{ height: 300 }}
      >
        <img
          src={shoreBreak}
          alt="kitespots-logo"
          className="w-full h-full object-cover"
          style={{ height: "100%", width: "100%" }}
        />
      </CardHeader>
      <CardBody className="flex flex-row flex-wrap gap-4 justify-start">
        <Typography variant="h4">
          {t("changeLanguage").charAt(0).toUpperCase() +
            t("changeLanguage").slice(1)}
        </Typography>
        <div className="flex flex-row gap-4">
          <Button
            variant="filled"
            placeholder=""
            onClick={() => switchLanguage("en")}
            color={englishButtonColor}
          >
            {t("english")}
          </Button>
          <Button
            variant="filled"
            placeholder=""
            onClick={() => switchLanguage("nb")}
            color={norwegianButtonColor}
          >
            {t("norwegian")}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

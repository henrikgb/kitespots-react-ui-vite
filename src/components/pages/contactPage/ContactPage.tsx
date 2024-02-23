import { Trans, useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import sunset from "../../../assets/beachSunset.jpg";

export const ContactPage = () => {
  const { t } = useTranslation();
  const email = "henrik.busengdal@kitespots.no";

  return (
    <Card className="mt-6 w-full h-full bg-webPageContainerBody">
      <CardHeader
        color="blue-gray"
        className="flex h-full justify-center items-center"
        style={{ height: 300 }}
      >
        <img
          src={sunset}
          alt="kitespots-logo"
          className="w-full h-full object-cover"
          style={{ height: "100%", width: "100%" }}
        />
      </CardHeader>
      <CardBody className="flex h-[250px] justify-center">
        <div className={`text-container`}>
          <h2>{t("contactInfoHeader")}</h2>
          <div className="mb-4">
            <Trans
              i18nKey="contactInfoMessagePart1"
              components={{ br: <br /> }}
            ></Trans>
          </div>
          <Trans i18nKey="contactInfoEmail" values={{ email }}>
            <a href={`mailto:${email}`} className={`font-bold text-black`}></a>
          </Trans>
          <br />
          <p>{t("contactInfoMessagePart2")}</p>
        </div>
      </CardBody>
    </Card>
  );
};

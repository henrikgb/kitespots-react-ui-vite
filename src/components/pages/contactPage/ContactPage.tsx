import { Trans, useTranslation } from "react-i18next";

export const ContactPage = () => {
  const { t } = useTranslation();
  const email = "henrik.busengdal@kitespots.no";

  return (
    <div className={`text-container`}>
      <p className="font-bold text-2xl mb-4">{t("contactInfoHeader")}</p>
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
  );
};

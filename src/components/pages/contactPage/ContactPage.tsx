import { Trans, useTranslation } from "react-i18next";
import { Paper } from "../../Paper.tsx";

export const ContactPage = () => {
  const { t } = useTranslation();
  const email = "henrik.busengdal@kitespots.no";

  return (
    <div className="w-full flex justify-center">
      <Paper>
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
      </Paper>
    </div>
  );
};

import { Trans, useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();

  const kitespotsGithubRepo =
    "https://github.com/henrikgb/kitespots-react-ui-vite";
  const linkMeteomatics =
    "https://www.meteomatics.com/en/weather-api/?msclkid=85e0b029dcb111d13bc7d5e280cfcaa6&utm_source=bing&utm_medium=cpc&utm_campaign=Weather%20API%20(englisch%20ausser%20USA)&utm_term=meteomatics&utm_content=Weather%20Api";
  const linkStavangerKiteklubb = "https://www.stavangerkiteklubb.com/";

  return (
    <div>
      <p className={"font-bold text-2xl mb-4"}>{t("aboutPageHeader")}</p>
      <div className="mb-4">
        <Trans i18nKey="aboutPageTextSection1">
          <a
            href={`${kitespotsGithubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold text-black`}
          ></a>
        </Trans>
      </div>
      <p className="mb-4">{t("aboutPageTextSection2")}</p>
      <div className="mb-4">
        <Trans i18nKey="aboutPageTextSection3">
          <a
            href={`${linkMeteomatics}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold text-black`}
          ></a>
        </Trans>
      </div>
      <div className="mb-4">
        <Trans i18nKey="aboutPageTextSection4">
          <a
            href={`${linkStavangerKiteklubb}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold text-black`}
          ></a>
        </Trans>
      </div>
      <p className="mb-4">{t("aboutPageTextSection5")}</p>
    </div>
  );
};

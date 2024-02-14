import { Trans, useTranslation } from "react-i18next";
import { Paper } from "../../Paper.tsx";
import { TextBox } from "../../TextBox.tsx";
import { BoxFlexRow } from "../../BoxFlexRow.tsx";
import githubLogo from "../../../assets/github.png";
import kitespotsLogo from "../../../assets/KitespotsLogoIcon.svg";
import StavangerKiteklubbLogo from "../../../assets/stavangerKiteklubb.svg";
import meteomaticsLogo from "../../../assets/meteomatics.png";
import seleBeach from "../../../assets/beaches/06-Sele-North-Bore-800.png";

export const AboutPage = () => {
  const { t } = useTranslation();

  const kitespotsGithubRepo =
    "https://github.com/henrikgb/kitespots-react-ui-vite";
  const linkMeteomatics =
    "https://www.meteomatics.com/en/weather-api/?msclkid=85e0b029dcb111d13bc7d5e280cfcaa6&utm_source=bing&utm_medium=cpc&utm_campaign=Weather%20API%20(englisch%20ausser%20USA)&utm_term=meteomatics&utm_content=Weather%20Api";
  const linkStavangerKiteklubb = "https://www.stavangerkiteklubb.com/";

  return (
    <div className="flex flex-col gap-12">
      <div className="w-full flex justify-center">
        <div className="max-w-[650px]">
          <p className={"font-bold text-2xl"}>{t("aboutPageHeader")}</p>
        </div>
      </div>
      <div className="w-fit flex justify-start">
        <Paper>
          <BoxFlexRow>
            <TextBox>
              <Trans i18nKey="aboutPageTextSection1">
                <a
                  href={`${kitespotsGithubRepo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold text-black`}
                ></a>
              </Trans>
            </TextBox>
            <a
              href={`${kitespotsGithubRepo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="Github logo"></img>
            </a>
          </BoxFlexRow>
        </Paper>
      </div>
      <div className="flex justify-end">
        <Paper>
          <BoxFlexRow>
            <img
              src={kitespotsLogo}
              alt="Kitespots logo"
              style={{ height: 160 }}
            ></img>
            <TextBox>
              <div className="text-start">
                <p>{t("aboutPageTextSection2")}</p>
              </div>
            </TextBox>
          </BoxFlexRow>
        </Paper>
      </div>
      <div className="flex justify-start">
        <Paper>
          <BoxFlexRow>
            <TextBox>
              <Trans i18nKey="aboutPageTextSection3">
                <a
                  href={`${linkMeteomatics}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold text-black`}
                ></a>
              </Trans>
            </TextBox>
            <a
              href={`${linkMeteomatics}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={meteomaticsLogo}
                alt="Meteomatics logo"
                style={{ height: 120 }}
              ></img>
            </a>
          </BoxFlexRow>
        </Paper>
      </div>

      <div className="flex justify-end">
        <Paper>
          <BoxFlexRow>
            <a
              href={`${linkStavangerKiteklubb}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={StavangerKiteklubbLogo}
                alt="Stavanger kiteklubb logo"
                style={{ height: 160 }}
              ></img>
            </a>
            <TextBox>
              <Trans i18nKey="aboutPageTextSection4">
                <a
                  href={`${linkStavangerKiteklubb}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold text-black`}
                ></a>
              </Trans>
            </TextBox>
          </BoxFlexRow>
        </Paper>
      </div>

      <div className="flex justify-start">
        <Paper>
          <BoxFlexRow>
            <TextBox>
              <p>{t("aboutPageTextSection5")}</p>
            </TextBox>
            <img src={seleBeach} alt="Sele beach" style={{ height: 160 }}></img>
          </BoxFlexRow>
        </Paper>
      </div>
    </div>
  );
};

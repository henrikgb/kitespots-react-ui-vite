import {
  Card,
  CardBody,
  CardHeader,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import githubLogo from "../../../assets/github.png";
import kitespotsLogo from "../../../assets/KitespotsLogoIcon.svg";
import StavangerKiteklubbLogo from "../../../assets/stavangerKiteklubb.svg";
import meteomaticsLogo from "../../../assets/meteomatics.png";
import seleBeach from "../../../assets/beaches/06-Sele-North-Bore-800.png";
import { Trans, useTranslation } from "react-i18next";
import { TextBox } from "../../TextBox.tsx";

export function AboutContentCarousel() {
  const { t } = useTranslation();
  const kitespotsGithubRepo =
    "https://github.com/henrikgb/kitespots-react-ui-vite";
  const linkMeteomatics =
    "https://www.meteomatics.com/en/weather-api/?msclkid=85e0b029dcb111d13bc7d5e280cfcaa6&utm_source=bing&utm_medium=cpc&utm_campaign=Weather%20API%20(englisch%20ausser%20USA)&utm_term=meteomatics&utm_content=Weather%20Api";
  const linkStavangerKiteklubb = "https://www.stavangerkiteklubb.com/";

  return (
    <Carousel
      className="rounded-xl h-fit"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <Card className="mt-6 w-full h-full bg-webPageContainerBody">
        <CardHeader
          color="blue-gray"
          className="flex h-full justify-center items-center"
          style={{ height: 300 }}
        >
          <a
            href={`${kitespotsGithubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="github-logo"
              style={{ maxHeight: 200 }}
            ></img>
          </a>
        </CardHeader>
        <CardBody className="flex h-[250px] justify-center">
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
        </CardBody>
      </Card>
      <Card className="mt-6 w-full h-full bg-webPageContainerBody">
        <CardHeader
          color="blue-gray"
          className="flex h-full justify-center items-center"
          style={{ height: 300 }}
        >
          <img
            src={kitespotsLogo}
            alt="kitespots-logo"
            style={{ height: 200 }}
          />
        </CardHeader>
        <CardBody className="flex h-[250px] justify-center">
          <TextBox>
            <div className="text-start">
              <p>{t("aboutPageTextSection2")}</p>
            </div>
          </TextBox>
        </CardBody>
      </Card>
      <Card className="mt-6 w-full h-full bg-webPageContainerBody">
        <CardHeader
          color="blue-gray"
          className="flex h-full justify-center items-center"
          style={{ height: 300 }}
        >
          <img
            src={meteomaticsLogo}
            alt="meteomatics-logo"
            style={{ maxHeight: 200 }}
          />
        </CardHeader>
        <CardBody className="flex h-[250px] justify-center">
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
        </CardBody>
      </Card>
      <Card className="mt-6 w-full h-full bg-webPageContainerBody">
        <CardHeader
          color="blue-gray"
          className="flex h-full justify-center items-center"
          style={{ height: 300 }}
        >
          <a
            href={`${linkStavangerKiteklubb}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={StavangerKiteklubbLogo}
              alt="Stavanger kiteklubb logo"
              style={{ height: 200 }}
            ></img>
          </a>
        </CardHeader>
        <CardBody className="flex h-[250px] justify-center">
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
        </CardBody>
      </Card>
      <Card className="mt-6 w-full h-full bg-webPageContainerBody">
        <CardHeader
          color="blue-gray"
          className="flex h-full justify-center items-center"
          style={{ height: 300 }}
        >
          <img src={seleBeach} alt="sele beach" style={{ height: 220 }}></img>
        </CardHeader>
        <CardBody className="flex h-[250px] justify-center">
          <TextBox>
            <p>{t("aboutPageTextSection5")}</p>
          </TextBox>
        </CardBody>
      </Card>
    </Carousel>
  );
}

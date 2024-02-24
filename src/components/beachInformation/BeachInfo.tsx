import { StarRating } from "../../util/starRating/StarRating.tsx";
import useBeachDescriptionStore from "../../stores/BeachDescriptionStore.ts";
import { useTranslation } from "react-i18next";
import style from "../beachInformation/BeachInfo.module.css";

export const BeachInfo = () => {
  const { t } = useTranslation();
  const { image, nameId, beginnerScore, freestyleScore, waveScore } =
    useBeachDescriptionStore();

  return (
    <div className="flex flex-col gap-4 p-5 w-full">
      <div className="flex justify-center w-full">
        <p
          className={"flex justify-center font-bold text-3xl w-fit"}
          style={{ borderBottom: "solid black" }}
        >
          {nameId}
        </p>
      </div>
      <div className="flex justify-center">
        <ul>
          <li className="flex flex-row gap-2">
            <p>{t("beginner")}:</p>
            <StarRating score={beginnerScore ? beginnerScore : 0} />
          </li>
          <li className="flex flex-row gap-2">
            <p>{t("freestyle")}:</p>
            <StarRating score={freestyleScore ? freestyleScore : 0} />
          </li>
          <li className="flex flex-row gap-2">
            <p>{t("wave")}:</p>
            <StarRating score={waveScore ? waveScore : 0} />
          </li>
        </ul>
      </div>
      <div className={style.beachInfoContainer}>
        <img
          className="flex items-start"
          src={image ? image : ""}
          alt="Beach Wind Directions"
          style={{ width: 200 }}
        />
        <div className={style.textList}>
          <ul className="flex flex-col justify-center ml-4">
            <li>
              <p>{t("sideOnshore")}</p>
              <span
                className={style.square}
                style={{ backgroundColor: "#00bb00" }}
              ></span>
            </li>
            <li>
              <p>{t("onshore")}</p>
              <span
                className={style.square}
                style={{ backgroundColor: "#008000" }}
              ></span>
            </li>
            <li>
              <p>{t("overLand")}</p>
              <span
                className={style.square}
                style={{ backgroundColor: "#45a3ff" }}
              ></span>
            </li>
            <li>
              <p>{t("sideOffshore")}</p>
              <span
                className={style.square}
                style={{ backgroundColor: "#ffa500" }}
              ></span>
            </li>
            <li>
              <p>{t("offshore")}</p>
              <span
                className={style.square}
                style={{ backgroundColor: "#FD0100" }}
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

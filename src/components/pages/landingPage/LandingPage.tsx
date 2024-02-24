import styleClasses from "../landingPage/LandingPage.module.css";
import { Paper } from "../../Paper.tsx";
import { BeachInfo } from "../../beachInformation/BeachInfo.tsx";

export const LandingPage = () => {
  return (
    <div className={`${styleClasses.body}`}>
      <div className={`${styleClasses.mapAndImageContainer}`}>
        <div className={`${styleClasses.childContainer}`}>
          <Paper width="w-full">Kart</Paper>
        </div>
        <div className={`${styleClasses.childContainer}`}>
          <BeachInfo />
        </div>
      </div>
      <div className={`${styleClasses.weatherForecastContainer}`}>
        <div className={`${styleClasses.childContainer}`}>vind</div>
        <div className={`${styleClasses.childContainer}`}>vindretning</div>
      </div>
    </div>
  );
};

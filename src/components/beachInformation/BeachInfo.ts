import sandeBeachImage from "../../assets/beaches/02-Sandeviga-800.png";
import solaBeachImage from "../../assets/beaches/04-Sola-800.png";
import hellestoeBeachImage from "../../assets/beaches/05-Hellesto-800.png";
import seleBeachImage from "../../assets/beaches/06-Sele-North-Bore-800.png";
import boreBeachImage from "../../assets/beaches/07-South-Bore-800.png";
import orreBeachImage from "../../assets/beaches/10-Orre-800.png";
import xBeachImage from "../../assets/beaches/11-X-800.png";
import refsnesBeachImage from "../../assets/beaches/12-Refsnes-800.png";
import brusandBeachImage from "../../assets/beaches/13-Brusand-800.png";

export interface BeachCoordinateProp {
  id: number;
  latitude: number;
  longitude: number;
  nameId: string;
  image: string;
  beginnerScore: number;
  freestyleScore: number;
  waveScore: number;
  windDirectionDescriptions: WindDirectionDescriptions[];
}

export interface WindDirectionDescriptions {
  intervalStart: number;
  intervalStop: number;
  colorCode: string;
  category: string;
}

export const beachCoordinates: BeachCoordinateProp[] = [
  {
    id: 1,
    latitude: 59.02050003940309,
    longitude: 5.592325942611728,
    nameId: "SANDE",
    image: sandeBeachImage,
    beginnerScore: 3,
    freestyleScore: 5,
    waveScore: 5,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 10,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 10,
        intervalStop: 60,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 60,
        intervalStop: 150,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 150,
        intervalStop: 190,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 190,
        intervalStop: 250,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 250,
        intervalStop: 265,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 265,
        intervalStop: 305,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 305,
        intervalStop: 360,
        colorCode: "#45a3ff",
        category: "overLand",
      },
    ],
  },
  {
    id: 2,
    latitude: 58.88531361351894,
    longitude: 5.602662428854268,
    nameId: "SOLA",
    image: solaBeachImage,
    beginnerScore: 5,
    freestyleScore: 4,
    waveScore: 3,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 10,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 10,
        intervalStop: 140,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 140,
        intervalStop: 165,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 165,
        intervalStop: 225,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 225,
        intervalStop: 235,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 235,
        intervalStop: 275,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 275,
        intervalStop: 315,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 315,
        intervalStop: 345,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 345,
        intervalStop: 360,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
    ],
  },
  {
    id: 3,
    latitude: 58.84227538997773,
    longitude: 5.560516132410946,
    nameId: "HELLESTO",
    image: hellestoeBeachImage,
    beginnerScore: 1,
    freestyleScore: 3,
    waveScore: 5,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 10,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 10,
        intervalStop: 30,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 30,
        intervalStop: 160,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 160,
        intervalStop: 190,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 190,
        intervalStop: 210,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 210,
        intervalStop: 270,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 270,
        intervalStop: 310,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 310,
        intervalStop: 320,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 320,
        intervalStop: 360,
        colorCode: "#45a3ff",
        category: "overLand",
      },
    ],
  },
  {
    id: 4,
    latitude: 58.81231852222533,
    longitude: 5.546945324943648,
    nameId: "SELE",
    image: seleBeachImage,
    beginnerScore: 1,
    freestyleScore: 3,
    waveScore: 5,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 20,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 20,
        intervalStop: 150,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 150,
        intervalStop: 170,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 170,
        intervalStop: 210,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 210,
        intervalStop: 240,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 240,
        intervalStop: 280,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 280,
        intervalStop: 330,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 330,
        intervalStop: 350,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 350,
        intervalStop: 360,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
    ],
  },
  {
    id: 5,
    latitude: 58.80123195118268,
    longitude: 5.5480941336096645,
    nameId: "BORE",
    image: boreBeachImage,
    beginnerScore: 4,
    freestyleScore: 3,
    waveScore: 4,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 10,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 10,
        intervalStop: 20,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 20,
        intervalStop: 160,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 160,
        intervalStop: 175,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 175,
        intervalStop: 220,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 220,
        intervalStop: 255,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 255,
        intervalStop: 295,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 295,
        intervalStop: 340,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 340,
        intervalStop: 360,
        colorCode: "#45a3ff",
        category: "overLand",
      },
    ],
  },
  {
    id: 6,
    latitude: 58.740441600947264,
    longitude: 5.512925570900187,
    nameId: "ORRE",
    image: orreBeachImage,
    beginnerScore: 4,
    freestyleScore: 3,
    waveScore: 4,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 135,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 135,
        intervalStop: 160,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 160,
        intervalStop: 180,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 180,
        intervalStop: 235,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 235,
        intervalStop: 275,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 275,
        intervalStop: 315,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 315,
        intervalStop: 345,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 345,
        intervalStop: 355,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 355,
        intervalStop: 360,
        colorCode: "#FD0100",
        category: "offshore",
      },
    ],
  },
  {
    id: 7,
    latitude: 58.722027,
    longitude: 5.52196,
    nameId: "X",
    image: xBeachImage,
    beginnerScore: 1,
    freestyleScore: 4,
    waveScore: 5,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 5,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 5,
        intervalStop: 160,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 160,
        intervalStop: 170,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 170,
        intervalStop: 185,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 185,
        intervalStop: 245,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 245,
        intervalStop: 285,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 285,
        intervalStop: 330,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 330,
        intervalStop: 355,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 355,
        intervalStop: 360,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
    ],
  },
  {
    id: 8,
    latitude: 58.68756890551574,
    longitude: 5.551150818355702,
    nameId: "REFSNES",
    image: refsnesBeachImage,
    beginnerScore: 4,
    freestyleScore: 5,
    waveScore: 5,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 30,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 30,
        intervalStop: 155,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 155,
        intervalStop: 180,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 180,
        intervalStop: 200,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 200,
        intervalStop: 270,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 270,
        intervalStop: 310,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 310,
        intervalStop: 330,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 330,
        intervalStop: 352,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 352,
        intervalStop: 360,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
    ],
  },
  {
    id: 9,
    latitude: 58.53797648002299,
    longitude: 5.730672797723366,
    nameId: "BRUSAND",
    image: brusandBeachImage,
    beginnerScore: 2,
    freestyleScore: 3,
    waveScore: 3,
    windDirectionDescriptions: [
      {
        intervalStart: 0,
        intervalStop: 95,
        colorCode: "#FD0100",
        category: "offshore",
      },
      {
        intervalStart: 95,
        intervalStop: 105,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 105,
        intervalStop: 150,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 150,
        intervalStop: 175,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 175,
        intervalStop: 215,
        colorCode: "#008000",
        category: "onshore",
      },
      {
        intervalStart: 215,
        intervalStop: 260,
        colorCode: "#00bb00",
        category: "sideOnshore",
      },
      {
        intervalStart: 260,
        intervalStop: 285,
        colorCode: "#45a3ff",
        category: "overLand",
      },
      {
        intervalStart: 285,
        intervalStop: 315,
        colorCode: "#ffa500",
        category: "sideOffshore",
      },
      {
        intervalStart: 315,
        intervalStop: 360,
        colorCode: "#FD0100",
        category: "offshore",
      },
    ],
  },
];

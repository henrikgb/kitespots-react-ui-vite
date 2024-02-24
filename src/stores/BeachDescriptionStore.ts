import { create } from "zustand";
import {
  beachCoordinates,
  WindDirectionDescriptions,
} from "../components/beachInformation/BeachInfo.ts";

interface beachDescriptionState {
  id: number | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  nameId: string | undefined;
  image: string | undefined;
  beginnerScore: number | undefined;
  freestyleScore: number | undefined;
  waveScore: number | undefined;
  windDirectionDescriptions: WindDirectionDescriptions[] | undefined;

  setId: (value: number) => void;
  setLatitude: (value: number) => void;
  setLongitude: (value: number) => void;
  setNameId: (value: string) => void;
  setImage: (value: string) => void;
  setBeginnerScore: (value: number) => void;
  setFreestyleScore: (value: number) => void;
  setWaveScore: (value: number) => void;
  setWindDirectionDescriptions: (value: WindDirectionDescriptions[]) => void;
}

const defaultBeachCoordinate = beachCoordinates.find(
  (coordinate) => coordinate.nameId === "SELE",
); // Choose the default coordinate

const useBeachDescriptionStore = create<beachDescriptionState>((set) => ({
  id: defaultBeachCoordinate?.id || undefined,
  latitude: defaultBeachCoordinate?.latitude || undefined,
  longitude: defaultBeachCoordinate?.longitude || undefined,
  nameId: defaultBeachCoordinate?.nameId || undefined,
  image: defaultBeachCoordinate?.image || undefined,
  beginnerScore: defaultBeachCoordinate?.beginnerScore || undefined,
  freestyleScore: defaultBeachCoordinate?.freestyleScore || undefined,
  waveScore: defaultBeachCoordinate?.waveScore || undefined,
  windDirectionDescriptions:
    defaultBeachCoordinate?.windDirectionDescriptions || undefined,
  setId: (updateId?: number) => {
    set(() => ({
      id: updateId,
    }));
  },
  setLatitude: (updateLatitude?: number) => {
    set(() => ({
      latitude: updateLatitude,
    }));
  },
  setLongitude: (updateLongitude?: number) => {
    set(() => ({
      longitude: updateLongitude,
    }));
  },
  setNameId: (updateNameId?: string) => {
    set(() => ({
      nameId: updateNameId,
    }));
  },
  setImage: (updateImage?: string) => {
    set(() => ({
      image: updateImage,
    }));
  },
  setBeginnerScore: (updateBeginnerScore?: number) => {
    set(() => ({
      beginnerScore: updateBeginnerScore,
    }));
  },
  setFreestyleScore: (updateFreestyleScore?: number) => {
    set(() => ({
      freestyleScore: updateFreestyleScore,
    }));
  },
  setWaveScore: (updateWaveScore?: number) => {
    set(() => ({
      waveScore: updateWaveScore,
    }));
  },
  setWindDirectionDescriptions: (
    updateWindDirectionDescriptions?: WindDirectionDescriptions[],
  ) => {
    set(() => ({
      windDirectionDescriptions: updateWindDirectionDescriptions,
    }));
  },
}));

export default useBeachDescriptionStore;

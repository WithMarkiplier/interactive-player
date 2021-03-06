import {
  createContext,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Plyr from "plyr";
import { IChoiceGroup } from "../../src/types/types";
import { choiceGroupData } from "../../src/data/data";
import toast from "react-hot-toast";

interface ISettings {
  autoplay: boolean;
}
export interface IAppContextVals {
  player: Plyr;
  setPlayer: (player: Plyr) => void;
  choices: IChoiceGroup[];
  setChoices: (choices: IChoiceGroup[]) => void;
  currentTime: number;
  setCurrentTime: (currentTime: number) => void;
  playerRef: MutableRefObject<any>;
  endings: number[];
  setEndings: (endings: number[]) => void;
  choiceBarVisible: boolean;
  setChoiceBarVisible: (choiceBarVisible: boolean) => void;
  currentCG: IChoiceGroup;
  setCurrentCG: (currentCG: IChoiceGroup) => void;
  walkthrough: string[];
  setWalkthrough: (walkthrough: string[]) => void;
  settings: ISettings;
  setSettings: (settings: ISettings) => void;
}

export const defaults: IAppContextVals = {
  player: null,
  setPlayer: null,
  choices: [choiceGroupData.find((x) => x.type === "start")],
  setChoices: null,
  currentTime: 0,
  setCurrentTime: null,
  playerRef: null,
  endings: [],
  setEndings: null,
  choiceBarVisible: false,
  setChoiceBarVisible: null,
  currentCG: choiceGroupData.find((x) => x.type === "start"),
  setCurrentCG: null,
  walkthrough: [choiceGroupData.find((x) => x.type === "start").watchCode],
  setWalkthrough: null,
  settings: { autoplay: true },
  setSettings: null,
};

export const AppContext = createContext<IAppContextVals>(defaults);

const AppContextProvider: React.FC<{} | IAppContextVals> = ({ children }) => {
  const [player, setPlayer] = useState<Plyr>(defaults.player);
  const [choices, setChoices] = useState<IChoiceGroup[]>(defaults.choices);
  const [currentTime, setCurrentTime] = useState(defaults.currentTime);
  const playerRef = useRef(defaults.playerRef);
  const [choiceBarVisible, setChoiceBarVisible] = useState(false);
  const [endings, setEndings] = useState<number[]>([]);
  const [walkthrough, setWalkthrough] = useState<string[]>(
    defaults.walkthrough
  );
  const [currentCG, setCurrentCG] = useState(defaults.currentCG);
  const [settings, setSettings] = useState<ISettings>(defaults.settings);

  useEffect(() => {
    if (window) {
      if (endings.length > 0) {
        try {
          window.localStorage.setItem("endings", JSON.stringify(endings));
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [endings]);

  useEffect(() => {
    if (window) {
      if (settings) {
        try {
          const rSettings = JSON.parse(window.localStorage.getItem("settings"));

          if (rSettings !== settings && rSettings)
            window.localStorage.setItem("settings", JSON.stringify(settings));
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [settings]);

  useEffect(() => {
    if (window) {
      if (walkthrough.length > 1) {
        try {
          window.localStorage.setItem(
            "walkthrough",
            JSON.stringify(walkthrough)
          );
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [walkthrough]);

  useEffect(() => {
    if (window) {
      try {
        window.localStorage.setItem("ls-test", "success");
        window.localStorage.removeItem("ls-test");
      } catch (e) {
        toast.error(
          "Could not access Local Storage! Your progress will not be saved."
        );
      }

      const storedEndings = window.localStorage.getItem("endings");

      if (storedEndings) {
        const eIds = JSON.parse(storedEndings) as number[];

        if (eIds) setEndings(eIds);
      }

      const storedWalkthrough = window.localStorage.getItem("walkthrough");

      if (storedWalkthrough) {
        const wIds = JSON.parse(storedWalkthrough) as string[];

        if (wIds) setWalkthrough(wIds);
      }

      const storedSettings = window.localStorage.getItem("settings");
      if (storedSettings) {
        const ap = JSON.parse(storedSettings) as ISettings;

        if (ap) setSettings(ap);
      }
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        player,
        setPlayer,
        choices,
        setChoices,
        currentTime,
        setCurrentTime,
        playerRef,
        endings,
        setEndings,
        choiceBarVisible,
        setChoiceBarVisible,
        currentCG,
        setCurrentCG,
        walkthrough,
        setWalkthrough,
        settings,
        setSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AContext = {
  Provider: AppContextProvider,
  Consumer: AppContext,
};

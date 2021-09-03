import { createContext, useState } from "react";
import Plyr from "plyr";

export interface IAppContextVals {
  player: Plyr;
  setPlayer: (player: Plyr) => void;
}

export const defaults: IAppContextVals = {
  player: null,
  setPlayer: null,
};

export const AppContext = createContext<IAppContextVals>(defaults);

const AppContextProvider: React.FC<{} | IAppContextVals> = ({ children }) => {
  const [player, setPlayer] = useState<Plyr>(defaults.player);

  return (
    <AppContext.Provider value={{ player, setPlayer }}>
      {children}
    </AppContext.Provider>
  );
};

export const AContext = {
  Provider: AppContextProvider,
  Consumer: AppContext,
};

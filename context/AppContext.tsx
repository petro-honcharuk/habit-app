import { AppState } from "@/types/app";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type AppContextType = {
  appState: AppState;
  setAppState: Dispatch<SetStateAction<AppState>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>({
    status: "loading",
  });
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
}

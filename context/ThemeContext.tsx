import { Colors } from "@/constants/colors";
import { ThemeColors } from "@/types/theme";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
export type ThemeMode = "light" | "dark";
type ThemeContextType = {
  colors: ThemeColors;
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const colors = Colors[theme];

  return (
    <ThemeContext.Provider value={{ colors, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

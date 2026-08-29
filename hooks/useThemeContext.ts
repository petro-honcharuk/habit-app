import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error("theme context Error");
  }
  return themeContext;
}

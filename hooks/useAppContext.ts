import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("context Error");
  }
  return context;
}

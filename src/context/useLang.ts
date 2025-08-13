import { useContext } from "react";
import { LangContext } from "./LanguageContext";
import type { LangContextType } from "./LanguageContext";

export function useLang(): LangContextType {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang doit être utilisé à l’intérieur de <LanguageProvider>");
  }
  return ctx;
}
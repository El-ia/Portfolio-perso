import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./components/App/App";
import { LangProvider } from "./context/LanguageProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider initialLang="fr">
      <App />
    </LangProvider>
  </StrictMode>
);
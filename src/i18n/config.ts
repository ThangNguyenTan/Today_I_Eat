import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import vi from "./vi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: "vi",
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

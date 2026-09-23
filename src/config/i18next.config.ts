import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const detectorWithCustom = LanguageDetector as unknown as {
  addDetector: (detector: {
    name: string;
    lookup: () => string | undefined;
    cacheUserLanguage: () => void;
  }) => void;
};

detectorWithCustom.addDetector({
  name: "esPriority",
  lookup() {
    const nav = typeof window !== "undefined" ? window.navigator : undefined;
    if (!nav) return undefined;

    const langs: string[] = [];
    if (Array.isArray(nav.languages)) langs.push(...nav.languages);
    if (nav.language) langs.push(nav.language);
    if ("userLanguage" in nav && nav.userLanguage) {
      langs.push((nav as Navigator & { userLanguage?: string }).userLanguage!);
    }

    const normalized = langs
      .map((l) => String(l).toLowerCase().trim())
      .filter(Boolean);

    const isSpanish = normalized.some(
      (l) => l === "es" || l.startsWith("es-")
    );
    if (isSpanish) return "es";

    const isEnglish = normalized.some(
      (l) => l === "en" || l.startsWith("en-")
    );
    if (isEnglish) return "en";

    return undefined;
  },
  cacheUserLanguage() {},
});

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "es"],
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "esPriority", "htmlTag"],
            caches: ["localStorage"],
        },
        backend: {

            loadPath: "/locales/{{ns}}/{{lng}}/{{ns}}.json",

        },

        ns: [
            "about",
            "contact",
            "posts",
            "profile",
            "projects",
            "footer",
            "modal",
            "tabs",
        ],
        defaultNS: "profile",
    });

export default i18next;
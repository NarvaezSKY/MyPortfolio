import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "es"],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["navigator", "localStorage", "htmlTag"],
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

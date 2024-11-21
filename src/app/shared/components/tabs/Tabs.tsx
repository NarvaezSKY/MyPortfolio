import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export const Tabs = () => {
  const location = useLocation();

  const getTabClass = (path: string) => {
    return location.pathname.includes(path)
      ? "border-primary text-white"
      : "border-transparent text-gray-300";
  };
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-row justify-between mt-2">
      <Link
        to="/feed"
        className={`flex-grow border-b-2 ${getTabClass(
          "feed"
        )} px-2 py-2 text-center text-sm sm:text-base transition-all duration-200 hover:text-white`}
      >
        {t("tabs.posts", { ns: "tabs" })}
      </Link>
      <Link
        to="/about"
        className={`flex-grow border-b-2 ${getTabClass(
          "about"
        )} px-2 py-2 text-center text-sm sm:text-base transition-all duration-200 hover:text-white`}
      >
        {t("tabs.aboutMe", { ns: "tabs" })}
      </Link>
      <Link
        to="/projects"
        className={`flex-grow border-b-2 ${getTabClass(
          "projects"
        )} px-2 py-2 text-center text-sm sm:text-base transition-all duration-200 hover:text-white`}
      >
        {t("tabs.myProjects", { ns: "tabs" })}
      </Link>
      <Link
        to="/contact"
        className={`flex-grow border-b-2 ${getTabClass(
          "contact"
        )} px-2 py-2 text-center text-sm sm:text-base transition-all duration-200 hover:text-white`}
      >
        {t("tabs.contactMe", { ns: "tabs" })}
      </Link>
    </div>
  );
};

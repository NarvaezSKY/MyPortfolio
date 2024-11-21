import { useState, useEffect } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { UseSongStore } from "../shared/store";
import SongCover from "./components/song-cover/SongCover";
import { PiReadCvLogoFill } from "react-icons/pi";
import EnglishCV from "../../assets/CV/en/CV_Cristian_Narvaez_(English).pdf";
import SpanishCV from "../../assets/CV/es/CV_Cristian_Narvaez_(Español).pdf";

import { FaBriefcase, FaCode, FaReact, FaCalendar } from "react-icons/fa";
import profie from "../../assets/profile.jpg";
import { icons } from "./utils";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { loading, song } = UseSongStore();
  const [currentIcon, setCurrentIcon] = useState(<FaReact size={18} />);
  const [currentLink, setCurrentLink] = useState(
    "https://reactjs.org/docs/getting-started.html"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLink((prevLink) => {
        const currentIndex = icons.findIndex(
          (icon: { link: string }) => icon.link === prevLink
        );
        const nextIndex = (currentIndex + 1) % icons.length;

        setCurrentIcon(icons[nextIndex].icon);
        return icons[nextIndex].link;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center w-full border-y-primary rounded-lg overflow-hidden mb-4">
      <div className="w-full h-40 flex items-start justify-start">
        <div className="flex flex-col text-primary text-lg font-light w-full">
          <div className="flex">
            {song.recenttracks?.track?.[0]?.["@attr"]?.nowplaying === "true" ? (
              <p>{t("profile.currentlyListening")}</p>
            ) : (
              <p>{t("profile.lastSong")}</p>
            )}
            {loading && <Spinner size="sm" className="ml-2" />}
          </div>
          <SongCover />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full py-3 px-2 space-x-0 -mt-9">
        <div className="min-w-32 h-32 rounded-full bg-primary border-2 border-transparent overflow-hidden mb-4 md:mb-0">
          <img
            src={profie}
            alt="Foto de perfil"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <div className="flex flex-col items-center sm:items-start mt-5 sm:mt-0 sm:ml-4">
            <div className="flex items-center space-x-2 sm:space-x-3 sm:mt-6 -mt-2">
              <h1 className="sm:text-6xl text-3xl font-bold text-white">
                Cristian Narvaez
              </h1>
              <Button
                size="sm"
                color="primary"
                radius="full"
                isIconOnly
                as="a"
                href={currentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-tertiary mt-2 sm:mt-4"
              >
                {currentIcon}
              </Button>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-100">
              {t("profile.role")}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full px-4 mt-2 sm:mt-0">
        <p className="text-white text-base font-normal sm:text-left text-justify">
          {t("profile.bio")}
        </p>
      </div>

      <div className="sm:flex justify-center text-gray-200 mt-5 space-y-2 sm:space-y-0 sm:flex-row sm:justify-start sm:space-x-4">
        <div className="flex items-center">
          <FaBriefcase size={18} className="mr-1" />
          <span className="mr-4 text-sm">{t("profile.availability")}</span>
        </div>
        <div className="flex items-center">
          <FaCode size={18} className="mr-1" />
          <span className="mr-4 text-sm">{t("profile.experience")}</span>
        </div>
        <div className="flex items-center">
          <PiReadCvLogoFill size={18} className="mr-1" />
          <a
            href={currentLanguage === "es" ? SpanishCV : EnglishCV}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-sm text-primary hover:text-highlight transition-all duration-300"
          >
            {t("profile.CV")}
          </a>
        </div>
        <div className="flex items-center">
          <FaCalendar size={18} className="mr-1" />
          <span className="mr-4 text-sm">{t("profile.lastUpdate")}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

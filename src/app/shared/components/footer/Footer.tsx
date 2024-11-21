import { Button } from "@nextui-org/react";
import { FaLinkedin, FaGithub, FaInstagram, FaLastfmSquare, FaSpotify } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


export const Footer = () => {
  const { t } = useTranslation();
  const almost = t("footer.almost", {ns: "footer"});
  return (
    <div className="flex w-full flex-col justify-center items-center p-1 rounded-lg">
      <div className="flex items-center space-x-4 mb-2">
        <Button
          isIconOnly
          radius="full"
          as="a"
          href="https://www.linkedin.com/in/cristian-samir-narvaez/"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          color="primary"
          className="transform hover:scale-110 transition-transform duration-300 ease-in-out group"
        >
          <FaLinkedin
            size={24}
            className="text-white transition-colors duration-300 ease-in-out group-hover:text-tertiary"
          />
        </Button>
        <Button
          isIconOnly
          radius="full"
          as="a"
          href="https://github.com/NarvaezSKY"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          color="primary"
          className="transform hover:scale-110 transition-transform duration-300 ease-in-out group"
        >
          <FaGithub
            size={24}
            className="text-white transition-colors duration-300 ease-in-out group-hover:text-tertiary"
          />
        </Button>
        <Button
          isIconOnly
          radius="full"
          as="a"
          href="https://www.instagram.com/narvaez_sky/"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          color="primary"
          className="transform hover:scale-110 transition-transform duration-300 ease-in-out group"
        >
          <FaInstagram
            size={24}
            className="text-white transition-colors duration-300 ease-in-out group-hover:text-tertiary"
          />
        </Button>
        <Button
          isIconOnly
          radius="full"
          as="a"
          href="https://www.last.fm/es/user/NarvaezZz"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          color="primary"
          className="transform hover:scale-110 transition-transform duration-300 ease-in-out group"
        >
          <FaLastfmSquare
            size={24}
            className="text-white transition-colors duration-300 ease-in-out group-hover:text-tertiary"
          />
        </Button>
        <Button
          isIconOnly
          radius="full"
          as="a"
          href="https://open.spotify.com/playlist/3EIt8SpGoGDICjVoqgtbyw?si=d9d4a6849fcd4464"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          color="primary"
          className="transform hover:scale-110 transition-transform duration-300 ease-in-out group"
        >
          <FaSpotify
            size={24}
            className="text-white transition-colors duration-300 ease-in-out group-hover:text-tertiary"
          />
        </Button>
      </div>
      <p className="text-sm text-gray-200">
        ©2024 narvaezsky - <span className="text-xs">({almost})</span> {t("footer.rights", {ns: "footer"})}
      </p>
      
    </div>
  );
};

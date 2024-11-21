import { IoIosMail } from "react-icons/io";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Button, Tooltip } from "@nextui-org/react";
import copy from "copy-to-clipboard";
import { toast } from "sonner";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const contact = t("contact.contact", { ns: "contact" });
  const findMe = t("contact.findMe", { ns: "contact" });
  const orEven = t("contact.orEven", { ns: "contact" });
  const follow = t("contact.follow", { ns: "contact" });

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    copy("csnarvaez45@soy.sena.edu.co");
    toast.success(t("modal.email", { ns: "modal" }), { duration: 2000 });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-start py-4">
      <h1 className="text-3xl font-bold text-white mt-6">
        {t("contact.ifYouLikedMyWork", { ns: "contact" })
          .split("{{contact}}")
          .map((part, index) => (
            <Fragment key={index}>
              {part}
              {index === 0 ? (
                <Tooltip content={orEven}>
                  <span className="text-primary">{contact}</span>
                </Tooltip>
              ) : null}
            </Fragment>
          ))}
      </h1>

      <div className="flex flex-col items-start w-full">
        <div className="flex items-center gap-4 my-4">
          <IoIosMail size={30} color="white" className="-mr-1" />
          <a
            href="mailto:csnarvaez45@soy.sena.edu.co"
            className="text-white hover:text-primary font-semibold text-base sm:text-lg transition-colors duration-200 ease-in-out"
          >
            csnarvaez45@soy.sena.edu.co
          </a>
          <Tooltip content={copied ? "Copied!" : "Copy"} placement="right">
            <Button
              color="primary"
              className={`${
                copied ? "text-primary" : "text-white"
              } bg-transparent -mx-4 transition-all duration-200 hover:text-primary`}
              onClick={handleCopy}
              size="sm"
              isIconOnly
            >
              <div className="mt-1">
                {copied ? <FaCheck size={16} /> : <FaCopy size={16} />}
              </div>
            </Button>
          </Tooltip>
        </div>

        <div className="flex items-center gap-4 hover:text-primary">
          <FaLinkedin size={28} color="white" />
          <a
            href="https://www.linkedin.com/in/cristian-samir-narvaez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary font-semibold sm:text-lg text-base flex gap-2 items-center -ml-2 transition-colors duration-200 ease-in-out"
          >
            Cristian Samir Narvaez Quintero
            <FiExternalLink size={16} className="mt-1" />
          </a>
        </div>
      </div>

      <hr className="bg-primary border-0 my-6 h-0.5 w-full" />
      <h1 className="text-2xl font-bold text-white mb-3">
        {t("contact.also", { ns: "contact" })
          .split("{{findMe}}")
          .map((part, index) => (
            <Fragment key={index}>
              {part}
              {index === 0 ? (
                <Tooltip content={follow}>
                  <span className="text-primary">{findMe}</span>
                </Tooltip>
              ) : null}
            </Fragment>
          ))}
      </h1>
      <div className="flex gap-4 mb-6">
        <a
          href="https://github.com/NarvaezSKY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.instagram.com/narvaez_sky/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
};

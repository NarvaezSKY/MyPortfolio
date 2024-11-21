import { Button, Tooltip } from "@nextui-org/react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-2 w-full my-5 justify-center lg:flex-nowrap">
      <div className="flex flex-col justify-center">
        <div className="border-b border-primary rounded-lg flex items-center pt-2 px-1">
          <Tooltip color="secondary" content="React">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://reactjs.org/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <FaReact size={40} className="text-[#61DBFB] animate-spinner-ease-spin" />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="TypeScript">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://www.typescriptlang.org/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <BiLogoTypescript
                size={47}
                className="text-blue-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="JavaScript">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <FaJs
                size={40}
                className="text-yellow-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="HTML5">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <FaHtml5
                size={40}
                className="text-orange-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="CSS3">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <FaCss3
                size={40}
                className="text-[#264de4] transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Tailwind CSS">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://tailwindcss.com/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <RiTailwindCssFill
                size={40}
                className="text-teal-400 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>
        </div>
        <p className="text-center text-white">Frontend</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="border-b border-primary rounded-lg flex items-center pt-2 px-1">
          <Tooltip color="secondary" content="Node.js">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://nodejs.org/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <FaNodeJs
                size={40}
                className="text-green-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Express.js">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://expressjs.com/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <SiExpress
                size={40}
                className="text-white transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Python">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://www.python.org/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{
                animation: "float 2s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <FaPython
                size={40}
                className="text-[#ffde57] transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>
        </div>
        <p className="text-center text-white">Backend</p>
      </div>
      <div className="flex flex-col justify-center">
      <div className="border-b border-primary rounded-lg flex items-center pt-2 pl-2">
        <Tooltip color="secondary" content="MySQL">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://www.mysql.com/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{
              animation: "float 2s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <SiMysql
              size={42}
              className="text-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>

        <Tooltip color="secondary" content="MongoDB">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://www.mongodb.com/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{
              animation: "float 2s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <SiMongodb
              size={40}
              className="text-green-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>
      </div>
        <p className="text-center text-white">{t("stack.DB", { ns: "about" })}</p>
      </div>
      <div>
      <div className="border-b border-primary rounded-lg flex items-center pt-2 pl-2">
        <Tooltip color="secondary" content="Docker">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://www.docker.com/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{
              animation: "float 2s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <FaDocker
              size={40}
              className="text-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>

        <Tooltip color="secondary" content="Git">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://git-scm.com/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{
              animation: "float 2s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <FaGitAlt
              size={40}
              className="text-[#F1502F] transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>
      </div>
        <p className="text-center text-white">{t("stack.OT", { ns: "about" })}</p>
      </div>
    </div>
  );
};

import { motion } from "framer-motion";
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
  FaJava,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiDjango,
  SiFlask,
  SiSqlite,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiPowerbi,
  SiMicrosoftexcel,
  SiGooglecloud,
  SiVercel,
  SiRender,
  SiNetlify,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 w-full my-5 items-center">
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex flex-col justify-center"
        >
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

            <Tooltip color="secondary" content="Next.js">
              <Button
                as="a"
                target="_blank"
                size="lg"
                href="https://nextjs.org/"
                variant="light"
                isIconOnly
                className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
                style={{ animationDelay: "1s" }}
              >
                <RiNextjsFill
                  size={40}
                  className="text-white transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
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
                  animationDelay: "0s",
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
                  animationDelay: "1s",
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
                  animationDelay: "0s",
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
                  animationDelay: "1s",
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
                  animationDelay: "0s",
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
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

            <Tooltip color="secondary" content="Java">
              <Button
                as="a"
                target="_blank"
                size="lg"
                href="https://www.java.com/"
                variant="light"
                isIconOnly
                className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
                style={{ animationDelay: "1s" }}
              >
                <FaJava
                  size={40}
                  className="text-red-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </Button>
            </Tooltip>

            <Tooltip color="secondary" content="Django">
              <Button
                as="a"
                target="_blank"
                size="lg"
                href="https://www.djangoproject.com/"
                variant="light"
                isIconOnly
                className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
                style={{ animationDelay: "0s" }}
              >
                <SiDjango
                  size={40}
                  className="text-green-700 transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </Button>
            </Tooltip>

            <Tooltip color="secondary" content="Flask">
              <Button
                as="a"
                target="_blank"
                size="lg"
                href="https://flask.palletsprojects.com/"
                variant="light"
                isIconOnly
                className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
                style={{ animationDelay: "1s" }}
              >
                <SiFlask
                  size={40}
                  className="text-white transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </Button>
            </Tooltip>
          </div>
          <p className="text-center text-white">Backend</p>
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
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

          <Tooltip color="secondary" content="SQLite">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://www.sqlite.org/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "1s" }}
            >
              <SiSqlite
                size={40}
                className="text-blue-400 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="PostgreSQL">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://www.postgresql.org/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "0s" }}
            >
              <SiPostgresql
                size={40}
                className="text-[#336791] transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Microsoft SQL Server">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://www.microsoft.com/en-us/sql-server"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "1s" }}
            >
              <SiMicrosoftsqlserver
                size={40}
                className="text-red-700 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>
        </div>
          <p className="text-center text-white">{t("stack.DB", { ns: "about" })}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col justify-center"
        >
        <div className="border-b border-primary rounded-lg flex items-center pt-2 pl-2">
          <Tooltip color="secondary" content="Vercel">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://vercel.com/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "0s" }}
            >
              <SiVercel
                size={40}
                className="text-white transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Render">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://render.com/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "1s" }}
            >
              <SiRender
                size={40}
                className="text-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Netlify">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://www.netlify.com/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "0s" }}
            >
              <SiNetlify
                size={40}
                className="text-teal-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>
        </div>
          <p className="text-center text-white">Deploy</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col justify-center"
        >
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

          <Tooltip color="secondary" content="Power BI">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://powerbi.microsoft.com/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "1s" }}
            >
              <SiPowerbi
                size={40}
                className="text-yellow-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Excel">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://www.microsoft.com/en-us/microsoft-365/excel"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "0s" }}
            >
              <SiMicrosoftexcel
                size={40}
                className="text-green-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>

          <Tooltip color="secondary" content="Google Cloud">
            <Button
              as="a"
              target="_blank"
              size="lg"
              href="https://cloud.google.com/"
              variant="light"
              isIconOnly
              className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
              style={{ animationDelay: "1s" }}
            >
              <SiGooglecloud
                size={40}
                className="text-blue-400 transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Button>
          </Tooltip>
        </div>
          <p className="text-center text-white">{t("stack.OT", { ns: "about" })}</p>
        </motion.div>
      </div>
    </div>
  );
};

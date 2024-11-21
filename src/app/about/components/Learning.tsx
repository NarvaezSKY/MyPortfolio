import { Button, Tooltip } from "@nextui-org/react";
import { FaAws } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs, SiMicrosoftsqlserver } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

export const Learning = () => {
  const { t } = useTranslation();

  const learningText = t("about.learning", { ns: "about" });

  const technologies = {
    Whisper: "https://openai.com/index/whisper/",
    PyAnnote: "https://pyannote.github.io/",
    "Phi-3-mini": "https://huggingface.co/microsoft/Phi-3-mini-4k-instruct",
  };

  const processedText = learningText.split(/({{.*?}})/).map((part, index) => {
    const match = part.match(/{{(.*?)}}/);
    if (match) {
      const techName = match[1] as keyof typeof technologies;
      const link = technologies[techName];
      return (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline transition-colors duration-300 ease-in-out hover:text-highlight"
        >
          {techName}
        </a>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });

  return (
    <div>
      <div className="flex gap-2 my-3 w-full justify-center items-center">
        <Tooltip content="Next.js" color="secondary">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://nextjs.org/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{ animationDelay: "0s" }}
          >
            <RiNextjsFill
              size={40}
              className="text-white transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>

        <Tooltip content="NestJS" color="secondary">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://nestjs.com/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{ animationDelay: "1s" }}
          >
            <SiNestjs
              size={40}
              className="text-red-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>

        <Tooltip content="Firebase" color="secondary">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://firebase.google.com/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{ animationDelay: "0s" }}
          >
            <IoLogoFirebase
              size={40}
              className="text-yellow-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>

        <Tooltip content="AWS" color="secondary">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://aws.amazon.com/"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{ animationDelay: "1s" }}
          >
            <FaAws
              size={40}
              className="text-orange-500 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>

        <Tooltip content="Microsoft SQL Server" color="secondary">
          <Button
            as="a"
            target="_blank"
            size="lg"
            href="https://www.microsoft.com/en-us/sql-server"
            variant="light"
            isIconOnly
            className="transition-transform duration-300 hover:scale-110 cursor-pointer animate-float"
            style={{
              animation: "float 2s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <SiMicrosoftsqlserver
              size={40}
              className="text-red-700 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Button>
        </Tooltip>
      </div>

      <div className="text-gray-200 text-xs font-thin w-full flex justify-center break-words my-4">
        <p>{processedText}</p>
      </div>
    </div>
  );
};

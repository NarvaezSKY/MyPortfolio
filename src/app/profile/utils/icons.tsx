import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiNextui } from "react-icons/si";
import { DiMysql } from "react-icons/di";

export const icons = [
  {
    icon: <FaReact size={19} />,
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    icon: <RiTailwindCssFill size={19} />,
    link: "https://tailwindcss.com/",
  },
  {
    icon: <SiTypescript size={19} />,
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <SiNextui size={19} />,
    link: "https://nextui.org/",
  },
  { icon: <FaNodeJs size={19} />, link: "https://nodejs.org/en/docs/" },
  {
    icon: <FaJs size={19} />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  { icon: <FaPython size={19} />, link: "https://docs.python.org/3/" },
  { icon: <FaGitAlt size={19} />, link: "https://git-scm.com/doc" },
  { icon: <FaDocker size={19} />, link: "https://docs.docker.com/" },
  {
    icon: <FaFigma size={19} />,
    link: "https://www.figma.com/resources/learn-design/",
  },
  {
    icon: <SiMongodb size={19} />,
    link: "https://www.mongodb.com/es",
  },
  {
    icon: <DiMysql size={20} />,
    link: "https://www.mysql.com/",
  },
  {
    icon: <FaHtml5 size={19} />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <FaCss3 size={19} />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

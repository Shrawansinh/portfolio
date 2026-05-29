import { BsBootstrap, BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiReact,
  SiTailwindcss
} from "react-icons/si";
export const TechstackList = [
  { _id: 1, name: "HTML", icon: <BsFiletypeHtml className="text-4xl text-orange-500" /> },
  { _id: 2, name: "CSS / SCSS", icon: <BsFiletypeCss className="text-4xl text-blue-500" /> },
  { _id: 3, name: "Bootstrap", icon: <BsBootstrap className="text-4xl text-purple-500" /> },
  { _id: 4, name: "Javascript", icon: <SiJavascript className="text-4xl text-yellow-400" /> },
  { _id: 7, name: "React JS", icon: <SiReact className="text-4xl text-cyan-400" /> },
  { _id: 10, name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
   { _id: 15, name: "Node JS", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { _id: 16, name: "Express JS", icon: <SiExpress className="text-4xl text-gray-300" /> },
  { _id: 18, name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-400" /> },
  { _id: 19, name: "SQL", icon: <SiMysql className="text-4xl text-sky-500" /> },
  { _id: 21, name: "Git / Github", icon: <SiGithub className="text-4xl text-white" /> },
];

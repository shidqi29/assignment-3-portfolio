import {
  FaCss3,
  FaGitAlt,
  FaGithubSquare,
  FaHtml5,
  FaInstagramSquare,
  FaJs,
  FaLinkedin,
  FaNode,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa";
import { SiFlutter, SiTailwindcss } from "react-icons/si";
const iconSize = "100%";

export const socials = [
  {
    name: "Instagram",
    link: "https://instagram.com/shidqiamrlhaq",
    icon: <FaInstagramSquare size={iconSize} />,
  },
  {
    name: "Github",
    link: "https://github.com/shidqi29",
    icon: <FaGithubSquare size={iconSize} />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shidqiamirulhaq/",
    icon: <FaLinkedin size={iconSize} />,
  },
];

export const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 size={iconSize} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3 size={iconSize} />,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={iconSize} />,
  },
  {
    name: "NodeJS",
    icon: <FaNode size={iconSize} />,
  },
  {
    name: "React",
    icon: <FaReact size={iconSize} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={iconSize} />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={iconSize} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={iconSize} />,
  },
  {
    name: "npm",
    icon: <FaNpm size={iconSize} />,
  },
  {
    name: "yarn",
    icon: <FaYarn size={iconSize} />,
  },
];

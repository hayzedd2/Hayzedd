import { FiGithub } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import Pill from "../components/Pill";

export const Links = [
  {
    name: " Github",
    icon: <FiGithub />,
    href: "https://github.com/hayzedd2/",
    bg: "#0D1117",
    tilt: "-5deg",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn className="text-[1.4rem]" />,
    href: "http://linkedin.com/in/azeez-alhameen-9a604026a",
    bg: "#0075B1",
    tilt: "5deg",
  },
  {
    name: "Mail",
    icon: <IoMail className="text-[1.4rem]" />,
    href: "mailto:azeezalhameen1@gmail.com",
    bg: "bg-sky-400 ml-[-20px]",
    tilt: "-5deg",
  },
];

export const projectArray = [
  {
    projectName: "PicToPlate",
    projectDescription:
      "Allows you to snap or upload a photo of any dish to get instant recipes, cooking instructions, and expert answers about ingredients and techniques.",
    projectLink: "https://pictoplate.alhameen.xyz/",
  },
  {
    projectName: "Snippet",
    projectDescription:
      "A CLI tool for developers to save, retrieve and manage commonly used code snippets. Written in",
    span: "golang",
    projectLink: "https://github.com/hayzedd2/snippet-cli/",
  },
  {
    projectName: "EventEase",
    projectDescription:
      "A web application for discovering and managing events with Google Calendar integration, allowing users to explore events near them and create their own events.",
    projectLink: "https://eventease.alhameen.xyz/",
  },
  {
    projectName: "Structo",
    projectDescription:
      "A tool that helps generate realistic mock data by analyzing TypeScript interfaces or Go structs, ensuring type safety in testing environments.",
    projectLink: "https://structo.alhameen.xyz/",
  },
  {
    projectName: " Habeeb's portfolio",
    projectDescription:
      "A portfolio I built for Habeeb, a product designer replicating his exact Figma design. It highlights his case studies, skills, experience, certifications, and more.",
    projectLink: "https://habeeb-azeez.vercel.app/",
  },
];

export const repositoryArray = [
  {
    projectName: "Role-Based auth",
    projectDescription: (
      <span>
        An <Pill text="advanced auth" /> system for a Next.js app with
        role-based access control for secure authorization. Features include
        sign-up, login, OAuth, two-factor authentication (2FA), email
        verification, and password reset functionality.
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/RoleBased-Auth/",
  },
  {
    projectName: "Structo",
    projectDescription: (
      <span>
        Behind the scenes of{" "}
        <a href="https://structo.alhameen.xyz/" target="_blank">
          <Pill text="Structo" link />
        </a>
        - an application written in <Pill text="golang" /> to help parse
        interfaces or structs and generate type-safe mock data.
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/structo/",
  },
  {
    projectName: "use-keys-bindings",
    projectDescription: (
      <span>
        A <Pill text="smol" /> React package I built for handling keyboard
        shortcuts — simple and easy to use.{" "}
        <a
          href="https://www.npmjs.com/package/use-keys-bindings"
          target="_blank"
        >
          <Pill text="See it on npm" link />
        </a>
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/use-keys-bindings",
  },
  {
    projectName: "My-playground",
    projectDescription: (
      <span>
        I try to create <Pill text="mini-web interactions" /> during my free time. See this repo for some of them (framer motion), documenting my interaction journey.
       
      </span>
    ),
    projectLink: "https://github.com/hayzedd2/My-playground/",
  },
];

import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { SiExpress } from "react-icons/si";

import { AiFillGithub } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSwagger } from "react-icons/si";

import { SiFigma } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";

const socialMediaData = [
  // {
  //   name: "linkedin",
  //   icon: <GrLinkedin />,
  //   url: "https://www.linkedin.com/in/",
  // },
  {
    name: "github",
    icon: <ImGithub />,
    url: "https://github.com/Parsamkr",
  },
  {
    name: "instagram",
    icon: <GrInstagram />,
    url: "https://www.instagram.com/parsa_mokhtarpour/",
  },
  {
    name: "telegram",
    icon: <FaTelegram />,
    url: "https://t.me/parsamkr",
  },
];

const abilities = [
  {
    id: 1,
    icon: <MdDesignServices />,
    title: "UI & UX design",
    description:
      "I have acquired comprehensive skills in UI/UX design, specifically utilizing industry-standard tools such as Figma and Adobe XD. My expertise in these platforms allows me to create captivating and user-friendly designs that effectively cater to clients' needs.",
  },
  {
    id: 2,
    icon: <MdDeveloperMode />,
    title: "Website",
    description:
      "I specialize in visually captivating websites, with expertise in front-end and medium-level back-end development. Using modern technologies, I craft responsive interfaces for seamless user experiences. From engaging front-end designs to dynamic back-end functionalities, I deliver high-quality websites that exceed expectations.",
  },
  {
    id: 3,
    icon: <MdCastForEducation />,
    title: "Education",
    description:
      "In my educational journey, I have specialized as a mentor for HTML, CSS, and JavaScript (front-end development), along with React and Next.js. I am passionate about guiding and empowering aspiring developers to gain proficiency in these technologies. Through my mentorship, I strive to create an engaging and supportive learning environment, enabling students to build strong foundations and excel in their web development skills.",
  },
];

const skills = [
  { id: 1, icon: <SiExpress />, title: "Express JS" },
  { id: 2, icon: <SiNodedotjs />, title: "Node JS" },
  { id: 3, icon: <TbBrandNextjs />, title: "Next JS" },
  { id: 4, icon: <SiMongodb />, title: "MongoDB" },
  { id: 5, icon: <AiFillApi />, title: "Restful API" },
  { id: 6, icon: <FaReact />, title: "React JS" },
  { id: 7, icon: <BsFillBootstrapFill />, title: "Bootstrap" },
  { id: 8, icon: <SiJavascript />, title: "Javascript" },
  { id: 9, icon: <FaHtml5 />, title: "HTML 5" },
  { id: 10, icon: <FaCss3 />, title: "CSS 3" },
  { id: 11, icon: <AiFillGithub />, title: "Git" },
  { id: 12, icon: <SiSwagger />, title: "Swagger" },
  { id: 13, icon: <BsWordpress />, title: "Word press" },
  { id: 14, icon: <BsTrello />, title: "Trello" },
];

const designSkill = [
  { id: 15, icon: <SiFigma />, title: "Figma" },
  { id: 16, icon: <SiAdobexd />, title: "Adobe XD" },
  { id: 17, icon: <SiAdobephotoshop />, title: "Photoshop" },
];

const experiences = [
  {
    id: 1,
    jobTitle: "Apanco",
    year: "November 2019 – December 2023",
    place: "Sari, Mazandaran, Iran",
    technologies: [
      "Express JS",
      "Node JS",
      "Next JS",
      "MongoDB",
      "Restful Api",
      "Swagger",
      "Git",
      "ReactJs",
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
    ],
    description:
      "During my time at Apanco, I worked as a full stack developer and dealt with the development of some websites",
  },
  {
    id: 2,
    jobTitle: "Faramoj",
    year: "October 2019 – November 2019",
    place: "Sari, Mazandaran, Iran",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    description:
      "At Faramoj, I was involved in implementing frontend of online shops and creating SVGs for websites.",
  },
];

export { socialMediaData, abilities, skills, designSkill, experiences };

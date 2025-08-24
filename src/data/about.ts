import { Paragraph } from "../components/about/TypewriterBlock";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiTypeorm,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiSlack,
  SiDiscord,
  SiGooglecloud,
  SiSwagger,
  SiCloudinary,
  SiDocker,
  SiFramer,
  SiReactquery,
  SiVite,
  SiBootstrap,
  SiEslint,
} from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

// Textos "Sobre mí" (para TypewriterBlock)
export const aboutParagraphs: Paragraph[] = [
  {
    text:
      "Soy <span class='text-accent font-semibold'>Omar Leonardo Caiguan Ojeda</span>, Desarrollador Full Stack con enfoque en <span class='font-semibold text-accent'>Back-End</span>. Me especializo en crear soluciones <span class='font-semibold'>escalables</span> y <span class='font-semibold'>seguras</span> usando tecnologías como <span class='font-semibold text-accent'>TypeScript</span>, <span class='font-semibold text-accent'>NestJS</span> y <span class='font-semibold text-accent'>PostgreSQL</span>.",
  },
  {
    text:
      "Tengo experiencia en <span class='font-semibold text-accent'>APIs RESTful</span>, integración de servicios, autenticación y despliegue con <span class='font-semibold text-accent'>Docker</span>. He desarrollado plataformas completas aplicando <span class='font-semibold'>buenas prácticas</span> y <span class='font-semibold'>arquitectura limpia</span>.",
  },
  {
    text:
      "Además, cuento con habilidades en <span class='font-semibold'>comunicación</span>, <span class='font-semibold'>trabajo en equipo</span> y <span class='font-semibold'>resolución de problemas</span>. Busco aportar valor en equipos <span class='font-semibold'>dinámicos</span>, aprendiendo y mejorando constantemente.",
  },
];

// Chips de habilidades que aparecen luego del tipeo
export const skills: string[] = [
  "TypeScript",
  "NestJS",
  "Docker",
  "PostgreSQL",
  "APIs RESTful",
  "Comunicación",
  "Trabajo en equipo",
];

// Categorías de tecnologías para la sección de tecnologías
export const techCategories = [
  {
    title: "Lenguajes",
    icons: [
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    icons: [
      { Icon: SiReact, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiChakraui, name: "Chakra" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    icons: [
      { Icon: SiNodedotjs, name: "Node.js" },
      { Icon: SiExpress, name: "Express.js" },
      { Icon: SiNestjs, name: "NestJS" },
      { Icon: SiTypeorm, name: "TypeORM" },
      { Icon: SiPrisma, name: "Prisma" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    title: "Herramientas",
    icons: [
      { Icon: SiGit, name: "Git" },
      { Icon: SiSlack, name: "Slack" },
      { Icon: SiDiscord, name: "Discord" },
      { Icon: SiGooglecloud, name: "Google Cloud" },
    ],
  },
];

// Proyectos para ProjectCard (respetando preferencias de íconos)
export const projects = [
  {
    title: "TutoGo Radio",
    description:
      "App web de transmisión de radio por internet, ofrecer a los usuarios una experiencia auditiva moderna, fluida y accesible.",
    images: ["/P5/P5.png"],
    githubLink: "https://github.com/omar-caiguan-ojeda/TutoGo-Radio",
    deployLink: "https://tutogoradio.vercel.app/",
    techIcons: [
      SiNextdotjs,
      SiReact,
      SiTailwindcss,
      SiFramer,
      FaMusic, // Howler.js
      SiReactquery, // TanStack Query
    ],
  },
  {
    title: "Magic Quest",
    description: "App web promociona juego de rol",
    images: ["/P4/P4.png"],
    githubLink: "https://github.com/omar-caiguan-ojeda/React-Project-V2",
    deployLink: "https://magic-quest.vercel.app/",
    techIcons: [
      SiReact,
      SiVite,
      SiTailwindcss,
      SiFramer,
      SiBootstrap,
      SiEslint,
    ],
  },
  {
    title: "Fit Manager",
    description: "Gestión y administración de gimnasios",
    images: ["/P1/1.png", "/P1/2.png", "/P1/3.png"],
    githubLink: "https://github.com/omar-caiguan-ojeda/Fit-Manager-PF",
    deployLink: "https://fitmanager-henry.vercel.app/home",
    techIcons: [
      SiTypescript,
      SiNestjs,
      SiSwagger,
      SiTypeorm,
      SiPostgresql,
      SiNextdotjs,
      SiReact,
      SiTailwindcss,
      SiCloudinary,
      SiGooglecloud,
      FaStripe,
    ],
  },
  {
    title: "Game Hub",
    description: "Portal de videojuegos",
    images: ["/P2/1.png", "/P2/2.png", "/P2/3.png"],
    githubLink: "https://github.com/omar-caiguan-ojeda/UGPS-Challenge",
    deployLink: "https://gamehub-sooty-iota.vercel.app/",
    techIcons: [SiTypescript, SiReact, SiChakraui],
  },
  {
    title: "E-commerce | Backend",
    description: "Gestión y administración de un E-commerce",
    images: ["/P3/1.png", "/P3/2.png", "/P3/3.png"],
    githubLink: "https://github.com/omar-caiguan-ojeda/Ecommerce-PI-M4",
    techIcons: [SiTypescript, SiNestjs, SiTypeorm, SiPostgresql, SiSwagger, SiDocker, SiCloudinary],
  },
];

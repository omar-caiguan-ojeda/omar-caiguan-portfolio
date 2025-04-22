// src/components/Technologies.tsx
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
  SiGooglecloud
} from "react-icons/si";

interface TechCardProps {
  title: string;
  icons: {
    Icon: React.ElementType;
    name: string;
  }[];
}

// const TechCard = ({ title, icons }: TechCardProps) => (
//   <div className="bg-darkBg/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300">
//     <h3 className="text-textLight text-xl font-semibold mb-4">{title}</h3>
//     <div className="grid grid-cols-3 gap-6">
//       {icons.map(({ Icon, name }) => (
//         <div
//           key={name}
//           className="group flex flex-col items-center justify-center"
//           title={name}
//         >
//           <Icon
//             className="text-4xl text-secondary group-hover:text-accent transition-colors duration-300"
//           />
//           <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-1">
//             {name}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

const TechCard = ({ title, icons }: TechCardProps) => (
  <div className="bg-darkBg/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 flex flex-col min-h-[300px]">
    <h3 className="text-textLight text-xl font-semibold mb-4 text-center">{title}</h3>
    <div className="flex-grow flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6">
        {icons.map(({ Icon, name }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center h-full"
            title={name}
          >
            <Icon
              className="text-4xl text-secondary group-hover:text-accent transition-colors duration-300"
            />
            <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-1">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Technologies = () => {
  const techCategories = [
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
        { Icon: SiChakraui, name: "Chakra UI" },
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


  return (
    <section id="technologies" className="py-20 bg-darkBg/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-textLight mb-12 text-center">
          Tecnologías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category) => (
            <TechCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

// // About.tsx
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import ProjectCard from "../components/ProjectCard";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiChakraui,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiExpress,
//   SiNestjs,
//   SiTypeorm,
//   SiPrisma,
//   SiMongodb,
//   SiPostgresql,
//   SiGit,
//   SiSlack,
//   SiDiscord,
//   SiGooglecloud
// } from "react-icons/si";

// // const TechCategory = ({ title, icons }: { title: string; icons: { Icon: React.ElementType; name: string }[] }) => (
// //   <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
// //     <h3 className="text-textLight text-xl font-semibold mb-8 text-center">{title}</h3>
// //     <div className="grid grid-cols-3 gap-8 flex-grow place-content-center">
// //       {icons.map(({ Icon, name }) => (
// //         <div
// //           key={name}
// //           className="group flex flex-col items-center justify-center aspect-square"
// //           title={name}
// //         >
// //           <Icon
// //             className="text-4xl text-secondary group-hover:text-accent transition-colors duration-300"
// //             size={32}
// //           />
// //           <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-2 text-center">
// //             {name}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// const TechCategory = ({ title, icons }: { title: string; icons: { Icon: React.ElementType; name: string }[] }) => (
//   <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
//     <h3 className="text-textLight text-xl font-semibold mb-8 text-center">{title}</h3>
//     <div className="flex-grow flex items-center justify-center">
//       <div className="grid grid-cols-3 gap-8">
//         {icons.map(({ Icon, name }) => (
//           <div
//             key={name}
//             className="group flex flex-col items-center justify-center aspect-square"
//             title={name}
//           >
//             <Icon
//               className="text-4xl text-secondary group-hover:text-accent transition-colors duration-300"
//               size={32}
//             />
//             <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-2 text-center">
//               {name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const About = () => {
//   const techCategories = [
//     {
//       title: "Lenguajes",
//       icons: [
//         { Icon: SiJavascript, name: "JavaScript" },
//         { Icon: SiTypescript, name: "TypeScript" },
//       ],
//     },
//     {
//       title: "Frontend",
//       icons: [
//         { Icon: SiReact, name: "React" },
//         { Icon: SiNextdotjs, name: "Next.js" },
//         { Icon: SiChakraui, name: "Chakra" },
//         { Icon: SiTailwindcss, name: "Tailwind CSS" },
//       ],
//     },
//     {
//       title: "Backend",
//       icons: [
//         { Icon: SiNodedotjs, name: "Node.js" },
//         { Icon: SiExpress, name: "Express.js" },
//         { Icon: SiNestjs, name: "NestJS" },
//         { Icon: SiTypeorm, name: "TypeORM" },
//         { Icon: SiPrisma, name: "Prisma" },
//         { Icon: SiMongodb, name: "MongoDB" },
//         { Icon: SiPostgresql, name: "PostgreSQL" },
//       ],
//     },
//     {
//       title: "Herramientas",
//       icons: [
//         { Icon: SiGit, name: "Git" },
//         { Icon: SiSlack, name: "Slack" },
//         { Icon: SiDiscord, name: "Discord" },
//         { Icon: SiGooglecloud, name: "Google Cloud" },
//       ],
//     },
//   ];

//   // return (
//   //   <div className="min-h-screen bg-darkBg">
//   //     <Navbar />
//   //     <div className="max-w-4xl mx-auto p-6 pt-20">
//   //       <section className="mb-12">
//   //         <h2 className="text-3xl font-bold text-neonBlue mb-6">
//   //           Sobre Mí
//   //         </h2>
//   //         <p className="mt-4 text-lg leading-relaxed text-textLight">
//   //           Soy Omar Leonardo Caiguan Ojeda, desarrollador Full Stack especializado en Back-End. Me apasiona construir soluciones escalables y eficientes con tecnologías como TypeScript, React y Node.js. Con experiencia en proyectos como plataformas de e-commerce y gestión de gimnasios, busco integrarme a equipos donde pueda crecer y aportar valor.
//   //         </p>
//   //       </section>

//   //       <section className="mb-12">
//   //         <h2 className="text-3xl font-bold text-neonPink mb-6">
//   //           Tecnologías
//   //         </h2>
//   //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//   //           {techCategories.map((category) => (
//   //             <TechCategory key={category.title} {...category} />
//   //           ))}
//   //         </div>
//   //       </section>

//   //       <section id="projects" className="py-8">
//   //         <h2 className="text-3xl font-bold text-neonBlue mb-6">
//   //           Proyectos
//   //         </h2>
//   //         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//   //           <ProjectCard
//   //             title="Fit-Manager"
//   //             description="Plataforma para gestionar gimnasios con APIs REST y autenticación segura."
//   //             link="https://github.com"
//   //           />
//   //           <ProjectCard
//   //             title="Ecommerce"
//   //             description="Tienda online de productos tecnológicos con gestión de stock y pagos."
//   //             link="https://github.com"
//   //           />
//   //         </div>
//   //       </section>

//   //       <section id="contact" className="py-8">
//   //         <h2 className="text-3xl font-bold text-neonPink mb-6">
//   //           Contacto
//   //         </h2>
//   //         <p className="mt-4 text-lg">
//   //           Email: <a href="mailto:omar.caiguan@gmail.com" className="text-neonBlue hover:underline">omar.caiguan@gmail.com</a> | Tel: +56 9 3057 9869
//   //         </p>
//   //       </section>

//   //       <Link to="/" className="inline-block">
//   //         <button className="px-6 py-3 bg-transparent border-2 border-neonBlue text-neonBlue rounded-lg hover:bg-neonBlue hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-neonBlue/50">
//   //           Volver al Inicio
//   //         </button>
//   //       </Link>
//   //     </div>
//   //   </div>
//   // );

//   return (
//     <div className="min-h-screen bg-darkBg">
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6 pt-20">
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-textLight mb-6">
//             Sobre Mí
//           </h2>
//           <p className="mt-4 text-lg leading-relaxed text-textLight">
//             Soy Omar Leonardo Caiguan Ojeda, desarrollador Full Stack especializado en Back-End. Me apasiona construir soluciones escalables y eficientes con tecnologías como TypeScript, React y Node.js. Con experiencia en proyectos como plataformas de e-commerce y gestión de gimnasios, busco integrarme a equipos donde pueda crecer y aportar valor.
//           </p>
//         </section>

//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-textLight mb-6">
//             Tecnologías
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {techCategories.map((category) => (
//               <TechCategory key={category.title} {...category} />
//             ))}
//           </div>
//         </section>

//         <section id="projects" className="py-8">
//           <h2 className="text-3xl font-bold text-textLight mb-6">
//             Proyectos
//           </h2>
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <ProjectCard
//               title="Fit-Manager"
//               description="Plataforma para gestionar gimnasios con APIs REST y autenticación segura."
//               link="https://github.com"
//             />
//             <ProjectCard
//               title="Ecommerce"
//               description="Tienda online de productos tecnológicos con gestión de stock y pagos."
//               link="https://github.com"
//             />
//           </div>
//         </section>

//         <section id="contact" className="py-8">
//           <h2 className="text-3xl font-bold text-textLight mb-6">
//             Contacto
//           </h2>
//           <p className="mt-4 text-lg text-textLight">
//             Email: <a href="mailto:omar.caiguan@gmail.com" className="text-accent hover:underline">omar.caiguan@gmail.com</a> | Tel: +56 9 3057 9869
//           </p>
//         </section>

//         <Link to="/" className="inline-block">
//           <button className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
//             Volver al Inicio
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default About;









// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import ProjectCard from "../components/ProjectCard";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiChakraui,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiExpress,
//   SiNestjs,
//   SiTypeorm,
//   SiPrisma,
//   SiMongodb,
//   SiPostgresql,
//   SiGit,
//   SiSlack,
//   SiDiscord,
//   SiGooglecloud,
//   SiSwagger,
//   SiCloudinary,
//   SiDocker,
// } from "react-icons/si";
// //import { TbBrandMercadopago } from "react-icons/tb";

// const TechCategory = ({ title, icons }: { title: string; icons: { Icon: React.ElementType; name: string }[] }) => (
//   <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
//     <h3 className="text-textLight text-xl font-semibold mb-8 text-center">{title}</h3>
//     <div className="flex-grow flex items-center justify-center">
//       <div className="grid grid-cols-3 gap-8">
//         {icons.map(({ Icon, name }) => (
//           <div
//             key={name}
//             className="group flex flex-col items-center justify-center aspect-square"
//             title={name}
//           >
//             <Icon
//               className="text-4xl text-secondary group-hover:text-accent transition-colors duration-300"
//               size={32}
//             />
//             <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-2 text-center">
//               {name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const About = () => {
//   const techCategories = [
//     {
//       title: "Lenguajes",
//       icons: [
//         { Icon: SiJavascript, name: "JavaScript" },
//         { Icon: SiTypescript, name: "TypeScript" },
//       ],
//     },
//     {
//       title: "Frontend",
//       icons: [
//         { Icon: SiReact, name: "React" },
//         { Icon: SiNextdotjs, name: "Next.js" },
//         { Icon: SiChakraui, name: "Chakra" },
//         { Icon: SiTailwindcss, name: "Tailwind CSS" },
//       ],
//     },
//     {
//       title: "Backend",
//       icons: [
//         { Icon: SiNodedotjs, name: "Node.js" },
//         { Icon: SiExpress, name: "Express.js" },
//         { Icon: SiNestjs, name: "NestJS" },
//         { Icon: SiTypeorm, name: "TypeORM" },
//         { Icon: SiPrisma, name: "Prisma" },
//         { Icon: SiMongodb, name: "MongoDB" },
//         { Icon: SiPostgresql, name: "PostgreSQL" },
//       ],
//     },
//     {
//       title: "Herramientas",
//       icons: [
//         { Icon: SiGit, name: "Git" },
//         { Icon: SiSlack, name: "Slack" },
//         { Icon: SiDiscord, name: "Discord" },
//         { Icon: SiGooglecloud, name: "Google Cloud" },
//       ],
//     },
//   ];

//   const projects = [
//     {
//       title: "Fit Manager",
//       description: "Gestión y administración de gimnasios",
//       images: ["/P1/1.png", "/P1/2.png", "/P1/3.png"],
//       githubLink: "https://github.com/omar-caiguan-ojeda/Fit-Manager-PF",
//       deployLink: "https://fitmanager-henry.vercel.app/home",
//       techIcons: [
//         SiTypescript,
//         SiNestjs,
//         SiSwagger,
//         SiTypeorm,
//         SiPostgresql,
//         SiNextdotjs,
//         SiReact,
//         SiTailwindcss,
//         SiCloudinary,
//         SiGooglecloud,
//         //TbBrandMercadopago,
//       ],
//     },
//     {
//       title: "Game Hub",
//       description: "Portal de videojuegos",
//       images: ["/P2/1.png", "/P2/2.png", "/P2/3.png"],
//       githubLink: "https://github.com/omar-caiguan-ojeda/UGPS-Challenge",
//       deployLink: "https://gamehub-sooty-iota.vercel.app/",
//       techIcons: [SiTypescript, SiReact, SiChakraui],
//     },
//     {
//       title: "E-commerce | Backend",
//       description: "Gestión y administración de un E-commerce",
//       images: ["/P3/1.png", "/P3/2.png", "/P3/3.png"],
//       githubLink: "https://github.com/omar-caiguan-ojeda/Ecommerce-PI-M4",
//       techIcons: [SiTypescript, SiNestjs, SiTypeorm, SiPostgresql, SiSwagger, SiDocker, SiCloudinary],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-darkBg">
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6 pt-20">
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-textLight mb-6">Sobre Mí</h2>
//           <p className="mt-4 text-lg leading-relaxed text-textLight">
//             Soy Omar Leonardo Caiguan Ojeda, desarrollador Full Stack especializado en Back-End. Me apasiona construir soluciones escalables y eficientes con tecnologías como TypeScript, React y Node.js. Con experiencia en proyectos como plataformas de e-commerce y gestión de gimnasios, busco integrarme a equipos donde pueda crecer y aportar valor.
//           </p>
//         </section>

//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-textLight mb-6">Tecnologías</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {techCategories.map((category) => (
//               <TechCategory key={category.title} {...category} />
//             ))}
//           </div>
//         </section>

//         <section id="projects" className="py-8">
//           <h2 className="text-3xl font-bold text-textLight mb-6">Proyectos</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {projects.map((project) => (
//               <ProjectCard key={project.title} {...project} />
//             ))}
//           </div>
//         </section>

//         <section id="contact" className="py-8">
//           <h2 className="text-3xl font-bold text-textLight mb-6">Contacto</h2>
//           <p className="mt-4 text-lg text-textLight">
//             Email: <a href="mailto:omar.caiguan@gmail.com" className="text-accent hover:underline">omar.caiguan@gmail.com</a> | Tel: +56 9 3057 9869
//           </p>
//         </section>

//         <Link to="/" className="inline-block">
//           <button className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
//             Volver al Inicio
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default About;





import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
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
} from "react-icons/si";
import { FaStripe } from "react-icons/fa6";

const TechCategory = ({ title, icons }: { title: string; icons: { Icon: React.ElementType; name: string }[] }) => (
  <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
    <h3 className="text-textLight text-xl font-semibold mb-8 text-center">{title}</h3>
    <div className="flex-grow flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        {icons.map(({ Icon, name }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center aspect-square"
            title={name}
          >
            <Icon
              className="text-4xl text-secondary group-hover:text-accent transition-colors duration-300"
              size={32}
            />
            <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-2 text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const About = () => {
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

  const projects = [
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

  return (
    <div className="min-h-screen bg-darkBg">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 pt-20">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-textLight mb-6">Sobre Mí</h2>
          <p className="mt-4 text-lg leading-relaxed text-textLight">
            Soy Omar Leonardo Caiguan Ojeda, desarrollador Full Stack especializado en Back-End. Me apasiona construir soluciones escalables y eficientes con tecnologías como TypeScript, React y Node.js. Con experiencia en proyectos como plataformas de e-commerce y gestión de gimnasios, busco integrarme a equipos donde pueda crecer y aportar valor.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-textLight mb-6">Tecnologías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories.map((category) => (
              <TechCategory key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section id="projects" className="py-8">
          <h2 className="text-3xl font-bold text-textLight mb-6">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-3xl font-bold text-textLight mb-6">Contacto</h2>
          <p className="mt-4 text-lg text-textLight">
            Email: <a href="mailto:omar.caiguan@gmail.com" className="text-accent hover:underline">omar.caiguan@gmail.com</a> | Tel: +56 9 3057 9869
          </p>
        </section>

        <Link to="/" className="inline-block">
          <button className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
            Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
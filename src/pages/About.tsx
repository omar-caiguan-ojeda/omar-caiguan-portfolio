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
// import { FaStripe, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
// import Footer from "../components/Footer";

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
//         FaStripe,
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
//         <section id="about" className="mb-12">
//           <h2 className="text-3xl font-bold text-textLight mb-6">Sobre Mí</h2>
//           <p className="mt-4 text-lg leading-relaxed text-textLight">
//             Soy Omar Leonardo Caiguan Ojeda, desarrollador Full Stack especializado en Back-End. Me apasiona construir soluciones escalables y eficientes con tecnologías como TypeScript, React y Node.js. Con experiencia en proyectos como plataformas de e-commerce y gestión de gimnasios, busco integrarme a equipos donde pueda crecer y aportar valor.
//           </p>
//         </section>

//         <section id="technologies" className="mb-12">
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
//           <div className="flex justify-between gap-4 max-w-2xl mx-auto">
//             <a
//               href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
//             >
//               <FaLinkedin size={48} />
//             </a>
//             <a
//               href="https://github.com/omar-caiguan-ojeda"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
//             >
//               <FaGithub size={48} />
//             </a>
//             <a
//               href="mailto:omar.caiguan@gmail.com"
//               className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
//             >
//               <FaEnvelope size={48} />
//             </a>
//             <a
//               href="https://discord.com/users/1061385061791969360"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
//             >
//               <SiDiscord size={48} />
//             </a>
//             <a
//               href="https://wa.me/+56930579869"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
//             >
//               <FaWhatsapp size={48} />
//             </a>
//           </div>
//         </section>

//         <Link to="/" className="inline-block">
//           <button className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
//             Volver al Inicio
//           </button>
//         </Link>
//       </div>
//       <Footer />
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
import { FaStripe, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import Footer from "../components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
              size={48}
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

  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para mostrar mensajes de éxito o error
  const [status, setStatus] = useState("");

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Configuración de EmailJS
    const serviceID = "service_p4vpvtp"; // Reemplaza con tu Service ID de EmailJS
    const templateID = "template_jsx7v0f"; // Reemplaza con tu Template ID de EmailJS
    const userID = "S7H9Jk9ohjcI64BKb"; // Reemplaza con tu User ID de EmailJS

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("Correo enviado con éxito:", response.status, response.text);
        setStatus("Mensaje enviado con éxito. ¡Gracias por contactarme!");
        setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
      },
      (error) => {
        console.error("Error al enviar el correo:", error);
        setStatus("Error al enviar el mensaje. Por favor, intenta de nuevo.");
      }
    );
  };

  return (
    <div className="min-h-screen bg-darkBg flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 pt-20 flex-grow">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold text-textLight mb-6">Sobre Mí</h2>
          <p className="mt-4 text-lg leading-relaxed text-textLight">
            Soy Omar Leonardo Caiguan Ojeda, desarrollador Full Stack especializado en Back-End. Me apasiona construir soluciones escalables y eficientes con tecnologías como TypeScript, React y Node.js. Con experiencia en proyectos como plataformas de e-commerce y gestión de gimnasios, busco integrarme a equipos donde pueda crecer y aportar valor.
          </p>
        </section>

        <section id="technologies" className="mb-12">
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
          <h2 className="text-3xl font-bold text-textLight mb-6 text-center">Contacto</h2>
          <div className="flex justify-between gap-4 max-w-2xl mx-auto">
            <a
              href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={48} />
            </a>
            <a
              href="https://github.com/omar-caiguan-ojeda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={48} />
            </a>
            <a
              href="mailto:omar.caiguan@gmail.com"
              className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={48} />
            </a>
            <a
              href="https://discord.com/users/1061385061791969360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <SiDiscord size={48} />
            </a>
            <a
              href="https://wa.me/+56930579869"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            >
              <FaWhatsapp size={48} />
            </a>
          </div>
        </section>

        {/* Nueva sección: Formulario de contacto */}
        <section id="contact-form" className="py-8">
          <h2 className="text-3xl font-bold text-textLight mb-6 text-center">Envíame un Mensaje</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="p-3 rounded-lg bg-darkBg border border-primary/50 text-textLight placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              className="p-3 rounded-lg bg-darkBg border border-primary/50 text-textLight placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje"
              rows={4}
              className="p-3 rounded-lg bg-darkBg border border-primary/50 text-textLight placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300 resize-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              Enviar Mensaje
            </button>
          </form>
          {status && (
            <p className={`mt-4 text-center ${status.includes("éxito") ? "text-accent" : "text-red-500"}`}>
              {status}
            </p>
          )}
        </section>

        <Link to="/" className="inline-block">
          <button className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
            Volver al Inicio
          </button>
        </Link>

      </div>
      <Footer />
    </div>
  );
};

export default About;
// src/pages/About.tsx
import { Link, useNavigate } from "react-router-dom";
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
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CodeBackgroundAbout from "../components/CodeBackgroundAbout";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const TechCategory = ({ title, icons }: { title: string; icons: { Icon: React.ElementType; name: string }[] }) => (
  <div className="bg-darkBg/50 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
    <h3 className="text-textLight text-lg xs:text-xl font-semibold mb-6 xs:mb-8 text-center">{title}</h3>
    <div className="flex-grow flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
        {icons.map(({ Icon, name }) => (
          <motion.div
            key={name}
            className="group flex flex-col items-center justify-center aspect-square"
            title={name}
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320 }}
          >
            <Icon
              className="text-2xl xs:text-3xl sm:text-4xl text-secondary group-hover:text-accent transition-colors duration-300"
              size={36}
            />
            <span className="text-xs text-secondary/0 group-hover:text-secondary transition-all duration-300 mt-2 text-center">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const About = () => {
  const navigate = useNavigate();

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

  // Estado para la animación de salida
  const [diluteAll, setDiluteAll] = useState(false);

  // Efecto de diluir todo el contenido antes de navegar al Home
  const handleDiluteAll = () => {
    if (diluteAll) return;
    setDiluteAll(true);
    setTimeout(() => {
      navigate("/");
    }, 1600);
  };

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
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      console.error("Configuración de EmailJS no encontrada");
      return;
    }

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

  // Animación de texto tipo "máquina de escribir" para la descripción
  const fullDescription = "Soy Omar Leonardo Caiguan Ojeda, desarrollador Full Stack especializado en Back-End. Me apasiona construir soluciones escalables y eficientes con tecnologías como TypeScript, React y Node.js. Con experiencia en proyectos como plataformas de e-commerce y gestión de gimnasios, busco integrarme a equipos donde pueda crecer y aportar valor.";
  const [typedDesc, setTypedDesc] = useState("");
  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    function type() {
      if (i <= fullDescription.length) {
        setTypedDesc(fullDescription.slice(0, i));
        i++;
        timeout = setTimeout(type, 18);
      }
    }
    type();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen bg-darkBg flex flex-col relative overflow-hidden">
      <CodeBackgroundAbout />
      <motion.div
        initial={{ x: -200, opacity: 0, filter: 'blur(12px)' }}
        animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { x: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="z-50 fixed top-0 left-0 w-full"
      >
        <Navbar onHomeClick={handleDiluteAll} diluteAll={diluteAll} />
      </motion.div>
      <div className="pt-20"></div>
      <motion.div
        initial={{ y: 200, opacity: 0, filter: 'blur(12px)' }}
        animate={diluteAll ? { y: 200, opacity: 0, filter: 'blur(8px)' } : { y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        className="max-w-4xl mx-auto p-6 pt-20 flex-grow z-20"
      >
        <section id="about-section" className="mb-12">
          <motion.h2
            className="text-3xl font-bold text-textLight mb-6 cursor-pointer"
            onClick={handleDiluteAll}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Sobre Mí
          </motion.h2>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-textLight min-h-[120px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {typedDesc}
            <span className="text-accent animate-pulse">|</span>
          </motion.p>
        </section>

        <section id="tech-section" className="mb-12">
          <motion.h2
            className="text-3xl font-bold text-textLight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Tecnologías
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, type: 'spring' }}
                viewport={{ once: true }}
              >
                <TechCategory {...category} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects-section" className="py-8">
          <motion.h2
            className="text-3xl font-bold text-textLight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Proyectos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact-section" className="py-8">
          <motion.h2
            className="text-3xl font-bold text-textLight mb-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>
          <motion.div
            className="flex justify-between gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </section>

        {/* Nueva sección: Formulario de contacto */}
        <section id="contact-form" className="py-8">
          <motion.h2
            className="text-3xl font-bold text-textLight mb-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Envíame un Mensaje
          </motion.h2>
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
              className="px-6 py-3 bg-darkBg/80 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 shadow-md shadow-accent/10"
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

        <motion.button
          className="w-full max-w-[300px] px-4 py-3 bg-darkBg/80 border-2 border-accent text-accent rounded-lg transition-all duration-300 mt-8 hover:bg-accent hover:text-darkBg hover:shadow-lg hover:shadow-accent/50 shadow-md shadow-accent/10 text-base xs:text-lg"
          onClick={handleDiluteAll}
          initial={false}
          animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Volver al Inicio
        </motion.button>

      </motion.div>
      <motion.footer
        initial={{ opacity: 1 }}
        animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default About;
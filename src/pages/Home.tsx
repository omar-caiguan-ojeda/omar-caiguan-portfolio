import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import CodeBackground from "../components/CodeBackground";
import GlobalGlow from "../components/GlobalGlow";
import { useState } from "react";

const Home = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [glow, setGlow] = useState(false);
  const navigate = useNavigate();

  // Maneja el click en foto o boton
  const handleExit = () => {
    setGlow(true);
    setTimeout(() => {
      setIsExiting(true);
    }, 200);
    setTimeout(() => {
      navigate("/about");
    }, 900);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-darkBg overflow-hidden">
      <CodeBackground />
      <GlobalGlow active={glow} />
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={isExiting ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { x: -200, opacity: 0, filter: 'blur(12px)' }}
          animate={isExiting ? { y: -200, opacity: 0, filter: 'blur(12px)' } : { x: 0, y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <motion.img
            src="/omar-photo.JPG"
            alt="Omar Caiguan"
            className="rounded-full w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 object-cover shadow-lg border-2 border-accent hover:shadow-[0_0_24px_6px_var(--tw-shadow-color)] hover:shadow-accent hover:border-accent transition-all duration-300 cursor-pointer"
            draggable="false"
            style={{ userSelect: "none" }}
            onClick={handleExit}
          />
        </motion.div>
        <motion.div
          initial={isExiting ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { x: 200, opacity: 0, filter: 'blur(12px)' }}
          animate={isExiting ? { y: 200, opacity: 0, filter: 'blur(12px)' } : { x: 0, y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div>
            <h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-textLight tracking-tight leading-tight"
            >
              Omar Leonardo<br />
              Caiguan Ojeda
            </h1>
            <p
              className="text-lg xs:text-xl md:text-2xl text-accent mt-2 font-medium"
            >
              Desarrollador Web Full Stack
            </p>
            <p
              className="text-base xs:text-lg mt-4 max-w-xs xs:max-w-sm sm:max-w-md text-secondary"
            >
              ¡Hola! Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras y escalables.
            </p>
            <div className="relative group mt-6 inline-block w-full max-w-[300px]">
              <div className={`absolute inset-0 rounded-lg bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 scale-110 transition-all duration-500`}></div>
              <button
                className="relative w-full px-4 py-3 bg-darkBg/80 border-2 border-accent text-accent rounded-lg transition-all duration-300 hover:bg-accent hover:text-darkBg hover:shadow-lg hover:shadow-accent/50 shadow-md shadow-accent/10 group-hover:scale-105 text-base xs:text-lg"
                onClick={handleExit}
              >
                Conoce más sobre mí
              </button>
            </div>
            <div className="mt-6 flex justify-center md:justify-start gap-4 xs:gap-6 flex-wrap">
              <a
                href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
                title="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/omar-caiguan-ojeda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
                title="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="mailto:omar.caiguan@gmail.com"
                className="text-secondary hover:text-accent transition-colors duration-300"
                title="Correo Electrónico"
              >
                <FaEnvelope size={28} />
              </a>
              <a
                href="https://discord.com/users/1061385061791969360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
                title="Discord"
              >
                <SiDiscord size={28} />
              </a>
              <a
                href="https://wa.me/+56930579869"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
                title="WhatsApp"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://drive.google.com/file/d/1JU3sMX3lCxJvKdDRsAvTvntZaYxaS0ET/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300"
                title="Currículum Vitae"
              >
                <FaFileAlt size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
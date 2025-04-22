import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
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
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ x: -200, opacity: 0, filter: 'blur(12px)' }}
          animate={isExiting ? { y: -200, opacity: 0, filter: 'blur(12px)' } : { x: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <motion.img
            src="/omar-photo.JPG"
            alt="Omar Caiguan"
            className="rounded-full w-52 h-52 object-cover shadow-lg border-2 border-accent hover:shadow-[0_0_24px_6px_var(--tw-shadow-color)] hover:shadow-accent hover:border-accent transition-all duration-300 cursor-pointer"
            draggable="false"
            style={{ userSelect: "none" }}
            onClick={handleExit}
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={isExiting ? { y: 200, opacity: 0, filter: 'blur(12px)' } : { opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={isExiting ? { y: 200, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-4xl md:text-5xl font-bold text-textLight tracking-tight leading-tight"
          >
            Omar Leonardo<br />
            Caiguan Ojeda
          </motion.h1>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={isExiting ? { y: 200, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="text-xl md:text-2xl text-accent mt-2 font-medium"
          >
            Desarrollador Web Full Stack
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={isExiting ? { y: 200, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
            className="text-lg mt-4 max-w-md text-secondary"
          >
            ¡Hola! Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras y escalables.
          </motion.p>
          <div className="relative group mt-6 inline-block" onClick={handleExit}>
            <div className={`absolute inset-0 rounded-lg bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 scale-110 transition-all duration-500`}></div>
            <button className="relative px-6 py-3 bg-darkBg/80 border-2 border-accent text-accent rounded-lg transition-all duration-300 hover:bg-accent hover:text-darkBg hover:shadow-lg hover:shadow-accent/50 shadow-md shadow-accent/10 group-hover:scale-105">
              Conoce más sobre mí
            </button>
          </div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={isExiting ? { y: 200, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
            className="mt-6 flex justify-center md:justify-start gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/omar-caiguan-ojeda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:omar.caiguan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              <FaEnvelope size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://discord.com/users/1061385061791969360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              <SiDiscord size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/+56930579869"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              <FaWhatsapp size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
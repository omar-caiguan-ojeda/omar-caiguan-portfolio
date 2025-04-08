// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiDiscord } from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-darkBg">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/about">
            <div className="relative group cursor-pointer p-1">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src="/omar-photo.JPG"
                alt="Omar Caiguan"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              />
            </div>
          </Link>
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-textLight tracking-tight leading-tight"
          >
            Omar Leonardo<br />
            Caiguan Ojeda
          </motion.h1>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-accent mt-2 font-medium"
          >
            Desarrollador Web Full Stack
          </motion.p>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg mt-4 max-w-md text-secondary"
          >
            ¡Hola! Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras y escalables.
          </motion.p>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Link to="/about">
              <div className="relative group mt-6 inline-block">
                <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <button className="relative px-6 py-3 bg-transparent border border-primary text-primary rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  Conoce más sobre mí
                </button>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
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
        </div>
      </div>
    </div>
  );
};

export default Home
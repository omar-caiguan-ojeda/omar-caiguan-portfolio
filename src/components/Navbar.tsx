import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";

interface NavbarProps {
  onHomeClick: () => void;
  diluteAll: boolean;
}

const Navbar = ({ onHomeClick, diluteAll }: NavbarProps) => {
  // Foto: glow total al hacer hover, borde discreto
  const glowPhoto = "hover:shadow-[0_0_24px_6px_var(--tw-shadow-color)] hover:shadow-accent hover:border-accent border-2 transition-all duration-300 cursor-pointer";

  return (
    <motion.nav
      initial={{ opacity: 0, filter: 'blur(12px)' }}
      animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full flex items-center justify-between px-6 py-4 bg-darkBg/80 border-b border-primary/20 z-50"
    >
      <div className="flex items-center gap-4">
        <motion.img
          src="/omar-photo.JPG"
          alt="Omar Caiguan"
          className={`w-12 h-12 rounded-full object-cover border-primary/50 ${glowPhoto}`}
          initial={false}
          animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={onHomeClick}
          whileHover={{ scale: 1.08 }}
        />
        <motion.span
          className="text-textLight font-medium text-lg cursor-pointer transition-all duration-300"
          initial={false}
          animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={onHomeClick}
          whileHover={{ scale: 1.11 }}
        >Omar Caiguan</motion.span>
      </div>
      {/* Opciones de navegación centradas */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-8">
          <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={onHomeClick}>Sobre mí</button>
          <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={onHomeClick}>Tecnologías</button>
          <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={onHomeClick}>Proyectos</button>
          <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={onHomeClick}>Contacto</button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-accent transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/omar-caiguan-ojeda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-accent transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="mailto:omar.caiguan@gmail.com"
          className="text-secondary hover:text-accent transition-colors duration-300"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://discord.com/users/1061385061791969360"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-accent transition-colors duration-300"
        >
          <SiDiscord size={20} />
        </a>
        <a
          href="https://wa.me/+56930579869"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-accent transition-colors duration-300"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
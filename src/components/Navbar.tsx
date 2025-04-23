import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  onHomeClick: () => void;
  diluteAll: boolean;
}

const Navbar = ({ onHomeClick, diluteAll }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const glowPhoto = "hover:shadow-[0_0_24px_6px_var(--tw-shadow-color)] hover:shadow-accent hover:border-accent border-2 transition-all duration-300 cursor-pointer";

  // Scroll to section helper
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Responsive nav options
  const navOptions = (
    <>
      <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={() => handleScroll("about-section")}>Sobre mí</button>
      <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={() => handleScroll("tech-section")}>Tecnologías</button>
      <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={() => handleScroll("projects-section")}>Proyectos</button>
      <button className="text-secondary hover:text-textLight transition-colors duration-300" onClick={() => handleScroll("contact-section")}>Contacto</button>
    </>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, filter: 'blur(12px)' }}
      animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full flex items-center justify-between px-4 sm:px-6 py-3 bg-darkBg/80 border-b border-primary/20 z-50"
    >
      <div className="flex items-center gap-4">
        <motion.img
          src="/omar-photo.JPG"
          alt="Omar Caiguan"
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-primary/50 ${glowPhoto}`}
          initial={false}
          animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={onHomeClick}
          whileHover={{ scale: 1.08 }}
        />
        <motion.span
          className="text-textLight font-medium text-base sm:text-lg cursor-pointer transition-all duration-300"
          initial={false}
          animate={diluteAll ? { opacity: 0, filter: 'blur(8px)' } : { opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={onHomeClick}
          whileHover={{ scale: 1.11 }}
        >Omar Caiguan</motion.span>
      </div>
      {/* Desktop nav */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex gap-8">
          {navOptions}
        </div>
      </div>
      {/* Mobile nav hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="text-secondary hover:text-accent focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-darkBg/95 border-b border-primary/20 flex flex-col items-center gap-4 py-6 z-50 animate-fade-in">
            {navOptions}
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 ml-4">
        <a href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110" title="LinkedIn"><FaLinkedin size={22} /></a>
        <a href="https://github.com/omar-caiguan-ojeda" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110" title="GitHub"><FaGithub size={22} /></a>
        <a href="mailto:omar.caiguan@gmail.com" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110" title="Correo Electrónico"><FaEnvelope size={22} /></a>
        <a href="https://discord.com/users/1061385061791969360" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110" title="Discord"><SiDiscord size={22} /></a>
        <a href="https://wa.me/+56930579869" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110" title="WhatsApp"><FaWhatsapp size={22} /></a>
        <a href="https://drive.google.com/file/d/1JU3sMX3lCxJvKdDRsAvTvntZaYxaS0ET/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110" title="Currículum Vitae"><FaFileAlt size={22} /></a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
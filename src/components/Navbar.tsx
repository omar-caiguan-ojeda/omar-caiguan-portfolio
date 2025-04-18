// src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon, FaWhatsapp } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí implementaremos el cambio de tema más adelante
  };

  const handleScroll = (id: string) => {
    if (location.pathname !== "/about") {
      window.location.href = "/about";
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-darkBg/90 backdrop-blur-sm z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y nombre */}
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="/omar-photo.JPG"
              alt="Omar Caiguan"
              className="w-12 h-12 rounded-full object-cover border border-primary/50 transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20"
            />
            <span className="text-textLight font-medium text-lg">Omar Caiguan</span>
          </Link>

          {/* Enlaces de navegación centrales */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {/* <Link to="/about" className="text-secondary hover:text-textLight transition-colors duration-300">
              Sobre mí
            </Link> */}

            <button
              onClick={() => handleScroll("about")}
              className="text-secondary hover:text-textLight transition-colors duration-300"
            >
              Sobre mí
            </button>
            
            <button
              onClick={() => handleScroll("technologies")}
              className="text-secondary hover:text-textLight transition-colors duration-300"
            >
              Tecnologías
            </button>

            <button
              onClick={() => handleScroll("projects")}
              className="text-secondary hover:text-textLight transition-colors duration-300"
            >
              Proyectos
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="text-secondary hover:text-textLight transition-colors duration-300"
            >
              Contacto
            </button>
          </div>

          {/* Iconos de redes sociales y tema */}
          <div className="flex items-center space-x-4">
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
            <button
              onClick={toggleTheme}
              className="text-secondary hover:text-accent transition-colors duration-300 p-1"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// src/components/Footer.tsx
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-darkBg/90 border-t border-primary/20 py-4">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        {/* Texto de copyright a la izquierda */}
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Omar Leonardo Caiguan Ojeda. Todos los derechos reservados.
        </p>

        {/* Iconos de contacto a la derecha */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/omar-caiguan-ojeda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:omar.caiguan@gmail.com"
            className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://discord.com/users/1061385061791969360"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
          >
            <SiDiscord size={24} />
          </a>
          <a
            href="https://wa.me/+56930579869"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { motion } from "framer-motion";
import { contactLinks } from "../../data/links";

interface ContactLinksProps {
  className?: string;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ className }) => {
  return (
    <motion.div
      className={className ?? "flex flex-wrap justify-center gap-3 xs:gap-4 max-w-md mx-auto"}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
      viewport={{ once: true }}
    >
      {contactLinks.map(({ href, title, Icon, external }) => (
        <a
          key={title}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
          title={title}
        >
          <Icon size={32} />
        </a>
      ))}
    </motion.div>
  );
};

export default ContactLinks;

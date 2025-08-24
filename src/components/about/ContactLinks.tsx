import React from "react";
import { motion } from "framer-motion";
import { contactLinks } from "../../data/links";

interface ContactLinksProps {
  className?: string;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ className }) => {
  return (
    <motion.div
      className={
        className ??
        // Full width, responsive spacing, center on small, distribute on large
        "w-full max-w-none mx-auto px-4 flex flex-wrap justify-center lg:justify-between gap-4 sm:gap-5 lg:gap-6"
      }
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
          {/* Responsive icon sizes for larger screens */}
          <Icon className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
        </a>
      ))}
    </motion.div>
  );
};

export default ContactLinks;

import React from "react";
import { motion } from "framer-motion";
import { useContactForm } from "../../hooks/useContactForm";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { formData, status, submitting, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact-form" className={className ?? "py-8"}>
      <motion.h2
        className="text-2xl xs:text-3xl font-bold text-textLight mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Envíame un Mensaje
      </motion.h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="p-2 xs:p-3 rounded-lg bg-darkBg border border-primary/50 text-textLight placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300 text-sm xs:text-base"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico"
          className="p-2 xs:p-3 rounded-lg bg-darkBg border border-primary/50 text-textLight placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300 text-sm xs:text-base"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
          rows={4}
          className="p-2 xs:p-3 rounded-lg bg-darkBg border border-primary/50 text-textLight placeholder-secondary focus:outline-none focus:border-accent transition-all duration-300 resize-none text-sm xs:text-base"
          required
        />
        <button
          type="submit"
          className="px-4 xs:px-6 py-2 xs:py-3 bg-darkBg/80 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-darkBg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 shadow-md shadow-accent/10 text-sm xs:text-base disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
      {status && (
        <p className={`mt-4 text-center text-sm xs:text-base ${status.includes("éxito") ? "text-accent" : "text-red-500"}`}>
          {status}
        </p>
      )}
    </section>
  );
};

export default ContactForm;

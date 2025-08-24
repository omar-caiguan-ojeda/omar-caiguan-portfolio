import { useState } from "react";
import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      console.error("Configuración de EmailJS no encontrada");
      setStatus("Error de configuración. Contacto no disponible temporalmente.");
      setSubmitting(false);
      return;
    }

    try {
      // EmailJS espera un Record<string, unknown>, convertimos formData explícitamente
      const templateParams: Record<string, unknown> = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log("Correo enviado con éxito:", response.status, response.text);
      setStatus("Mensaje enviado con éxito. ¡Gracias por contactarme!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setStatus("Error al enviar el mensaje. Por favor, intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return { formData, status, submitting, handleChange, handleSubmit };
};

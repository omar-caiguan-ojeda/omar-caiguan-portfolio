import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

export interface ContactLinkItem {
  href: string;
  title: string;
  Icon: React.ElementType;
  external?: boolean;
}

export const contactLinks: ContactLinkItem[] = [
  {
    href: "https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/",
    title: "LinkedIn",
    Icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://github.com/omar-caiguan-ojeda",
    title: "GitHub",
    Icon: FaGithub,
    external: true,
  },
  {
    href: "mailto:omar.caiguan@gmail.com",
    title: "Correo Electrónico",
    Icon: FaEnvelope,
  },
  {
    href: "https://discord.com/users/1061385061791969360",
    title: "Discord",
    Icon: SiDiscord,
    external: true,
  },
  {
    href: "https://wa.me/+56930579869",
    title: "WhatsApp",
    Icon: FaWhatsapp,
    external: true,
  },
  {
    href: "https://drive.google.com/file/d/1JU3sMX3lCxJvKdDRsAvTvntZaYxaS0ET/view?usp=drive_link",
    title: "Currículum Vitae",
    Icon: FaFileAlt,
    external: true,
  },
];

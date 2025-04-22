// src/components/ProjectCard.tsx
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  deployLink?: string;
  techIcons: React.ElementType[];
}

const ProjectCard = ({ title, description, images, githubLink, deployLink, techIcons }: ProjectCardProps) => {
  return (
    <div className="relative group cursor-pointer p-1">
      {/* Fondo con efecto de luz y blur (similar a omar-photo.jpg y botón) */}
      <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Contenedor principal */}
      <div className="relative bg-darkBg/50 rounded-lg overflow-hidden border border-primary/20 transition-all duration-300 group-hover:scale-[1.03]">
        {/* Imagen fija */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={images[0]} // Solo la primera imagen
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          />

          {/* Capa de overlay para oscurecer la imagen al hacer hover */}
          <div className="absolute inset-0 bg-darkBg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Título deslizante desde arriba */}
        <div className="absolute top-0 left-0 w-full bg-darkBg/80 text-textLight text-xl font-semibold text-center py-2 transform -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {title}
        </div>

        {/* Descripción y enlaces deslizantes desde abajo */}
        <div className="absolute bottom-0 left-0 w-full bg-darkBg/80 p-4 flex flex-col items-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-secondary text-sm mb-2">{description}</p>
          <div className="flex gap-2 mb-2 flex-wrap justify-center">
            {techIcons.map((Icon, index) => (
              <Icon key={index} className="text-accent" size={20} />
            ))}
          </div>
          <div className="flex gap-4">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-textLight">
              <FaGithub size={24} />
            </a>
            {deployLink && (
              <a href={deployLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-textLight">
                <SiVercel size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
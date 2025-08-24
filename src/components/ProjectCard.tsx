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
    <div className="relative group cursor-pointer p-2">
      <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="relative bg-darkBg/50 rounded-lg overflow-hidden border border-primary/20 transition-all duration-300 group-hover:scale-[1.02]">
        <div className="relative w-full h-48 xs:h-56 sm:h-64 overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full max-w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          />
          <div className="absolute inset-0 bg-darkBg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute top-0 left-0 w-full bg-darkBg/80 text-textLight text-lg xs:text-xl font-semibold text-center py-2 transform -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {title}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-darkBg/80 p-3 xs:p-4 flex flex-col items-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-secondary text-xs xs:text-sm mb-2 break-words">{description}</p>
          {/* Stack icons with label */}
          <div className="w-full flex flex-col items-center mb-2">
            <div className="text-[11px] xs:text-xs text-secondary/80 mb-1">Stack:</div>
            <div className="flex gap-2 flex-wrap justify-center">
              {techIcons.map((Icon, index) => (
                <Icon key={index} className="text-accent" size={16} />
              ))}
            </div>
          </div>

          {/* Action icons with labels and blink glow */}
          <div className="w-full flex items-center justify-center gap-6 xs:gap-8 mt-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] xs:text-xs text-secondary/80">Github:</span>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-textLight blink-glow"
                aria-label={`${title} GitHub`}
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
            {deployLink && (
              <div className="flex items-center gap-2">
                <span className="text-[11px] xs:text-xs text-secondary/80">Deploy:</span>
                <a
                  href={deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-textLight blink-glow"
                  aria-label={`${title} Deploy`}
                  title="Deploy"
                >
                  <SiVercel size={20} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
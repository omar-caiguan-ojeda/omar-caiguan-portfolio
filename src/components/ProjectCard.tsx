// // ProjectCard.tsx
// interface ProjectCardProps {
//     title: string;
//     description: string;
//     link: string;
//   }
  
//   const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
//     return (
//       <div className="p-6 bg-darkBg border border-neonBlue/20 rounded-md hover:border-neonBlue/50 transition">
//         <h3 className="text-xl font-semibold text-neonBlue">{title}</h3>
//         <p className="mt-2 text-textGray">{description}</p>
//         <a href={link} target="_blank" className="mt-4 inline-block text-neonPink hover:underline">
//           Ver en GitHub
//         </a>
//       </div>
//     );
//   };
  
//   export default ProjectCard;









// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { SiVercel, SiTypescript, SiNestjs, SiSwagger, SiTypeorm, SiPostgresql, SiNextdotjs, SiReact, SiTailwindcss, SiCloudinary, SiGooglecloud, SiChakraui, SiDocker } from "react-icons/si";
// //import { TbStripe } from "react-icons/tb";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   images: string[];
//   githubLink: string;
//   deployLink?: string;
//   techIcons: React.ElementType[];
// }

// const ProjectCard = ({ title, description, images, githubLink, deployLink, techIcons }: ProjectCardProps) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Carrusel automático
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 3000); // Cambia cada 3 segundos
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <motion.div
//       className="relative group bg-darkBg/50 rounded-lg overflow-hidden border border-primary/20 transition-all duration-300 hover:border-primary/50"
//       whileHover={{ scale: 1.03 }}
//     >
//       {/* Imagen con efecto de resplandor */}
//       <div className="relative w-full h-64 overflow-hidden">
//         <motion.img
//           src={images[currentImage]}
//           alt={title}
//           className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
//           initial={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//         />
//         <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//       </div>

//       {/* Título deslizante */}
//       <motion.div
//         className="absolute top-0 left-0 w-full bg-darkBg/80 text-textLight text-xl font-semibold text-center py-2"
//         initial={{ y: -50, opacity: 0 }}
//         whileHover={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         {title}
//       </motion.div>

//       {/* Descripción y enlaces deslizantes */}
//       <motion.div
//         className="absolute bottom-0 left-0 w-full bg-darkBg/80 p-4 flex flex-col items-center"
//         initial={{ y: 100, opacity: 0 }}
//         whileHover={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <p className="text-secondary text-sm mb-2">{description}</p>
//         <div className="flex gap-2 mb-2">
//           {techIcons.map((Icon, index) => (
//             <Icon key={index} className="text-accent" size={20} />
//           ))}
//         </div>
//         <div className="flex gap-4">
//           <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-textLight">
//             <FaGithub size={24} />
//           </a>
//           {deployLink && (
//             <a href={deployLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-textLight">
//               <SiVercel size={24} />
//             </a>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiVercel, SiTypescript, SiNestjs, SiSwagger, SiTypeorm, SiPostgresql, SiNextdotjs, SiReact, SiTailwindcss, SiCloudinary, SiGooglecloud, SiChakraui, SiDocker } from "react-icons/si";
import { FaStripe } from "react-icons/fa6";

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
    <motion.div
      className="relative group bg-darkBg/50 rounded-lg overflow-hidden border border-primary/20 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      {/* Imagen fija */}
      <div className="relative w-full h-64 overflow-hidden">
        <motion.img
          src={images[0]} // Solo la primera imagen
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        {/* Efecto de resplandor hacia afuera */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent group-hover:border-primary/50 rounded-lg"
          initial={{ boxShadow: "0 0 0 0 rgba(37, 99, 235, 0)" }}
          whileHover={{ boxShadow: "0 0 20px 4px rgba(37, 99, 235, 0.5)" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Título deslizante desde arriba */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-darkBg/80 text-textLight text-xl font-semibold text-center py-2"
        initial={{ y: -50, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.div>

      {/* Descripción y enlaces deslizantes desde abajo */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-darkBg/80 p-4 flex flex-col items-center"
        initial={{ y: 100, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
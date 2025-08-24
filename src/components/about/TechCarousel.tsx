import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import {
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiGit,
  SiCloudinary,
  SiGooglecloud,
  SiChakraui,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiTypeorm,
} from "react-icons/si";
import "../../styles/tech-carousel.css";

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

const RADIUS = 340; // distancia desde el centro
const SIZE = 260; // tamaño del contenedor
const TILT_DEG = 12; // inclinación para mejor percepción 3D

const TechCarousel: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const rotation = useRef(0);
  const speedDegPerSec = useRef(12); // grados por segundo
  const lastTs = useRef<number | null>(null);

  const icons: TechItem[] = useMemo(
    () => [
      { icon: <SiReact size={44} color="#61DAFB" />, name: "React" },
      { icon: <SiNextdotjs size={44} color="#ffffff" />, name: "Next.js" },
      { icon: <SiTypescript size={44} color="#3178C6" />, name: "TypeScript" },
      { icon: <SiNestjs size={44} color="#E0234E" />, name: "NestJS" },
      { icon: <SiExpress size={44} color="#ffffff" />, name: "Express.js" },
      { icon: <SiTypeorm size={44} color="#F3820A" />, name: "TypeORM" },
      { icon: <SiPrisma size={44} color="#2D3748" />, name: "Prisma" },
      { icon: <SiMongodb size={44} color="#47A248" />, name: "MongoDB" },
      { icon: <SiPostgresql size={44} color="#336791" />, name: "PostgreSQL" },
      { icon: <SiDocker size={44} color="#0db7ed" />, name: "Docker" },
      { icon: <SiCloudinary size={44} color="#F1C40F" />, name: "Cloudinary" },
      { icon: <SiGooglecloud size={44} color="#4285F4" />, name: "Google Cloud" },
      { icon: <SiGit size={44} color="#F05033" />, name: "Git" },
      { icon: <SiChakraui size={44} color="#61C3C8" />, name: "Chakra UI" },
      { icon: <SiTailwindcss size={44} color="#38BDF8" />, name: "Tailwind CSS" },
    ],
    []
  );

  // Animación basada en tiempo real para asegurar re-render en cada frame
  const [, force] = useState(0);
  useAnimationFrame((ts) => {
    if (paused) {
      lastTs.current = ts; // mantener referencia para delta consistente
      return;
    }
    if (lastTs.current == null) lastTs.current = ts;
    const deltaSec = (ts - lastTs.current) / 1000;
    lastTs.current = ts;
    rotation.current = (rotation.current + speedDegPerSec.current * deltaSec) % 360;
    // forzar re-render ligero
    force((n) => (n + 1) % 1000);
  });

  const angleStep = 360 / icons.length;

  return (
    <div
      className="relative w-full h-[360px] flex items-center justify-center perspective select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* tilt para dar sensación 3D más moderna */}
      <div
        className="relative preserve-3d"
        style={{ width: SIZE, height: SIZE, transform: `rotateX(${TILT_DEG}deg)` }}
      >
        {icons.map((tech, index) => {
          const baseAngle = angleStep * index;
          const currentAngle = baseAngle + rotation.current;
          const rad = (currentAngle * Math.PI) / 180;
          const depth = (Math.cos(rad) + 1) / 2; // 0 atrás, 1 adelante
          const scale = 0.85 + depth * 0.3;
          const opacity = 0.5 + depth * 0.5;
          const zIndex = Math.round(10 + depth * 100);
          const blur = 1.2 * (1 - depth); // menos blur para que se "vean todas"
          return (
            <motion.div
              key={tech.name}
              className="absolute flex items-center justify-center rounded-full bg-darkBg/80 border border-primary/20 shadow-lg shadow-black/20 group will-change-transform"
              style={{
                width: 104,
                height: 104,
                transform: `rotateY(${currentAngle}deg) translateZ(${RADIUS}px) scale(${scale})`,
                zIndex,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                filter: `blur(${blur}px)` ,
                opacity,
              }}
              whileHover={{ scale: scale * 1.08, opacity: Math.min(1, opacity + 0.15), filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              title={tech.name}
            >
              {tech.icon}
              <span className="pointer-events-none absolute -bottom-8 text-xs xs:text-sm text-textLight/90 bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCarousel;

import React, { useMemo, useRef, useState } from "react";
import type { Group } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useAnimationFrame } from "framer-motion";
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

// Ítems con React Icons renderizados como planos 3D
function IconBillboard({
  posX,
  posY,
  posZ,
  name,
  isHovered,
  onHover,
  onLeave,
  df,
  box,
  children,
}: {
  posX: number;
  posY: number;
  posZ: number;
  name: string;
  isHovered: boolean;
  onHover: (name: string) => void;
  onLeave: () => void;
  df: number;
  box: number;
  children: React.ReactNode;
}) {
  const groupRef = useRef<Group>(null!);

  // Mantener siempre de frente a la cámara
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.quaternion.copy(state.camera.quaternion);
  });

  return (
    <group ref={groupRef} position={[posX, posY, posZ]}>
      <Html transform occlude={false} distanceFactor={df}>
        <div
          onMouseEnter={() => onHover(name)}
          onMouseLeave={onLeave}
          className={
            "relative flex items-center justify-center rounded-full border transition-transform duration-200 " +
            (isHovered
              ? "scale-125 border-primary/60 shadow-[0_0_24px_6px_rgba(56,189,248,0.25)]"
              : "border-primary/20 shadow-md shadow-black/10")
          }
          style={{
            width: box,
            height: box,
            background: isHovered ? "rgba(10,20,35,0.8)" : "rgba(10,20,35,0.65)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ boxShadow: isHovered ? "0 0 28px 6px rgba(56,189,248,0.22)" : "none" }}
          />
          {children}
          {isHovered && (
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-3 -translate-y-full px-2 py-1 text-xs rounded-md bg-black/70 text-white border border-white/10 whitespace-nowrap">
              {name}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

// Efecto fila izquierda->derecha con rebote y aparición secuencial
function SlideBounceIcons({ paused = false }: { paused?: boolean }) {
  const groupRef = useRef<Group>(null!);
  const [hovered, setHovered] = useState<string | null>(null);
  const { size } = useThree();
  const w = size.width;

  const cfg = useMemo(() => {
    if (w < 420)
      return {
        iconSize: 28,
        box: 58,
        df: 11,
        xLeft: -8.0,
        xRight: 8.0,
        baseY: 0,
        amp: 0.85,
        cycles: 3.5,
        speed: 2.1,
        gapX: 1.9,
        phaseJitter: 0.3,
      };
    if (w < 1024)
      return {
        iconSize: 34,
        box: 70,
        df: 9.5,
        xLeft: -9.2,
        xRight: 9.2,
        baseY: 0,
        amp: 0.95,
        cycles: 4.0,
        speed: 2.4,
        gapX: 2.05,
        phaseJitter: 0.32,
      };
    return {
      iconSize: 40,
      box: 82,
      df: 8.5,
      xLeft: -10.8,
      xRight: 10.8,
      baseY: 0,
      amp: 1.05,
      cycles: 4.5,
      speed: 2.7,
      gapX: 2.2,
      phaseJitter: 0.35,
    };
  }, [w]);

  const baseList = useMemo(() => {
    return [
      { el: <SiReact size={cfg.iconSize} color="#61DAFB" />, name: "React" },
      { el: <SiNextdotjs size={cfg.iconSize} color="#ffffff" />, name: "Next.js" },
      { el: <SiTypescript size={cfg.iconSize} color="#3178C6" />, name: "TypeScript" },
      { el: <SiNestjs size={cfg.iconSize} color="#E0234E" />, name: "NestJS" },
      { el: <SiExpress size={cfg.iconSize} color="#ffffff" />, name: "Express.js" },
      { el: <SiTypeorm size={cfg.iconSize} color="#F3820A" />, name: "TypeORM" },
      { el: <SiPrisma size={cfg.iconSize} color="#2D3748" />, name: "Prisma" },
      { el: <SiMongodb size={cfg.iconSize} color="#47A248" />, name: "MongoDB" },
      { el: <SiPostgresql size={cfg.iconSize} color="#336791" />, name: "PostgreSQL" },
      { el: <SiDocker size={cfg.iconSize} color="#0db7ed" />, name: "Docker" },
      { el: <SiCloudinary size={cfg.iconSize} color="#F1C40F" />, name: "Cloudinary" },
      { el: <SiGooglecloud size={cfg.iconSize} color="#4285F4" />, name: "Google Cloud" },
      { el: <SiGit size={cfg.iconSize} color="#F05033" />, name: "Git" },
      { el: <SiChakraui size={cfg.iconSize} color="#61C3C8" />, name: "Chakra UI" },
      { el: <SiTailwindcss size={cfg.iconSize} color="#38BDF8" />, name: "Tailwind CSS" },
    ];
  }, [cfg.iconSize]);

  const nodes = useMemo(() => {
    return baseList.map((b, i) => ({
      name: b.name,
      el: b.el,
      y: cfg.baseY,
      z: 0,
      df: cfg.df,
      box: cfg.box,
      order: i,
    }));
  }, [baseList, cfg.baseY, cfg.df, cfg.box]);

  const headRef = useRef<number>(cfg.xLeft);
  React.useEffect(() => {
    headRef.current = cfg.xLeft;
  }, [cfg.xLeft]);

  useFrame((_, dt) => {
    const dtClamped = Math.min(dt, 1 / 30); // evita saltos si el tab estuvo inactivo
    headRef.current += cfg.speed * dtClamped;
  });

  function wrapX(x: number, left: number, right: number, cycle: number) {
    const margin = cfg.gapX * 0.5;
    const min = left - margin;
    const max = right + margin;
    while (x > max) x -= cycle;
    while (x < min) x += cycle;
    return x;
  }

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => {
        const span = cfg.xRight - cfg.xLeft;
        const cycle = cfg.gapX * nodes.length;
        const x = wrapX(headRef.current + i * cfg.gapX, cfg.xLeft, cfg.xRight, cycle);

        const phase = ((x - cfg.xLeft) / span) * Math.PI * 2 * cfg.cycles + i * cfg.phaseJitter;
        const bounce = Math.pow(Math.abs(Math.sin(phase)), 0.6);
        const y = cfg.baseY + bounce * cfg.amp;

        return (
          <IconBillboard
            key={n.name + i}
            posX={x}
            posY={y}
            posZ={n.z}
            name={n.name}
            isHovered={hovered === n.name}
            onHover={(nm) => {
              setHovered(nm);
            }}
            onLeave={() => {
              setHovered(null);
            }}
            df={n.df}
            box={n.box}
          >
            {n.el}
          </IconBillboard>
        );
      })}
    </group>
  );
}

const TechOrbit3D: React.FC = () => {
  return (
    <div
      className="w-full h-[340px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden border border-primary/10 bg-darkBg/40"
    >
      <Canvas
        frameloop="always"
        dpr={[1, 1.75]}
        gl={{ powerPreference: "high-performance" }}
        camera={{ position: [0, 3.2, 9.2], fov: 40 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} />

        <SlideBounceIcons paused={false} />
      </Canvas>
    </div>
  );
};

export default TechOrbit3D;

// --- Alternativa DOM sin WebGL: marquee derecha→izquierda con rebote ---
export const DomMarqueeBounce: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackRef2 = useRef<HTMLDivElement>(null); // segunda fila
  const trackRef3 = useRef<HTMLDivElement>(null); // tercera fila
  const [w, setW] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [repeats, setRepeats] = useState<number>(3); // cuántas veces repetimos la secuencia A para cubrir el ancho

  // flags de pausa por fila
  const paused1Ref = useRef(false);
  const paused2Ref = useRef(false);
  const paused3Ref = useRef(false);

  // breakpoints simples
  const cfg = useMemo(() => {
    // Íconos más grandes y rebote más alto
    if (w < 420) return { iconSize: 36, box: 72, gap: 22, speed: 60, amp: 14, cycles: 3.2 };
    if (w < 1024) return { iconSize: 44, box: 88, gap: 26, speed: 70, amp: 16, cycles: 3.6 };
    return { iconSize: 52, box: 104, gap: 30, speed: 80, amp: 18, cycles: 4.0 };
  }, [w]);

  React.useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const icons = useMemo(() => [
    { el: <SiReact size={cfg.iconSize} color="#61DAFB" />, name: "React" },
    { el: <SiNextdotjs size={cfg.iconSize} color="#ffffff" />, name: "Next.js" },
    { el: <SiTypescript size={cfg.iconSize} color="#3178C6" />, name: "TypeScript" },
    { el: <SiNestjs size={cfg.iconSize} color="#E0234E" />, name: "NestJS" },
    { el: <SiExpress size={cfg.iconSize} color="#ffffff" />, name: "Express.js" },
    { el: <SiTypeorm size={cfg.iconSize} color="#F3820A" />, name: "TypeORM" },
    { el: <SiPrisma size={cfg.iconSize} color="#2D3748" />, name: "Prisma" },
    { el: <SiMongodb size={cfg.iconSize} color="#47A248" />, name: "MongoDB" },
    { el: <SiPostgresql size={cfg.iconSize} color="#336791" />, name: "PostgreSQL" },
    { el: <SiDocker size={cfg.iconSize} color="#0db7ed" />, name: "Docker" },
    { el: <SiCloudinary size={cfg.iconSize} color="#F1C40F" />, name: "Cloudinary" },
    { el: <SiGooglecloud size={cfg.iconSize} color="#4285F4" />, name: "Google Cloud" },
    { el: <SiGit size={cfg.iconSize} color="#F05033" />, name: "Git" },
    { el: <SiChakraui size={cfg.iconSize} color="#61C3C8" />, name: "Chakra UI" },
    { el: <SiTailwindcss size={cfg.iconSize} color="#38BDF8" />, name: "Tailwind CSS" },
  ], [cfg.iconSize]);

  // Colores por tecnología
  const techColors: Record<string, string> = {
    React: '#61DAFB',
    'Next.js': '#FFFFFF',
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    Node: '#3C873A',
    'Node.js': '#3C873A',
    'Tailwind CSS': '#38BDF8',
    Tailwind: '#38BDF8',
    NestJS: '#E0234E',
    PostgreSQL: '#336791',
    Prisma: '#0C344B',
    MongoDB: '#47A248',
    Express: '#FFFFFF',
    Docker: '#0db7ed',
    Git: '#F05032',
    'GitHub Actions': '#2088FF',
    Vite: '#646CFF',
    Framer: '#00E5FF',
    ESLint: '#4B32C3',
    'Bootstrap Icons': '#7952B3',
    'Chakra UI': '#319795',
    'Google Cloud': '#4285F4',
    TypeORM: '#E83524',
    'TanStack Query': '#FF4154',
    'Howler.js': '#FF6B00',
    Python: '#3776AB',
    Go: '#00ADD8',
  };

  const getTechColor = (name: string) => techColors[name] || '#60A5FA'; // fallback primary-ish
  const hexToRgba = (hex: string, alpha: number) => {
    const m = hex.replace('#', '');
    const bigint = parseInt(m.length === 3 ? m.split('').map((c) => c + c).join('') : m, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const xRef = useRef(0); // desplazamiento en px
  const xRef2 = useRef(0); // desplazamiento segunda fila
  const xRef3 = useRef(0); // desplazamiento tercera fila
  const tRef = useRef(0); // tiempo en segundos
  const halfWidthRef = useRef(0);

  // medir ancho del medio track (sin duplicar)
  React.useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // mitad es la primera secuencia
    const children = Array.from(track.children).slice(0, icons.length) as HTMLElement[];
    const total = children.reduce((acc, el) => acc + el.offsetWidth, 0) + (icons.length - 1) * cfg.gap;
    halfWidthRef.current = total;
    // calcular cuántas repeticiones necesitamos para que SIEMPRE se vea lleno
    const containerW = containerRef.current?.clientWidth || w;
    const needed = Math.max(2, Math.ceil(containerW / total) + 2);
    setRepeats(needed);
    // empezar desde -L para que ya haya iconos a la izquierda y derecha
    xRef.current = -total;
    xRef2.current = 0; // segunda fila comienza alineada a la derecha
    xRef3.current = -total * 0.5; // tercera fila con desfase a mitad
  }, [icons.length, cfg.gap, w, cfg.iconSize, cfg.box]);

  useAnimationFrame((t) => {
    const dt = typeof tRef.current === 'number' && tRef.current !== 0 ? (t - tRef.current) / 1000 : 0;
    tRef.current = t;
    const speed = cfg.speed; // px/s (fila 1)
    const speed2 = cfg.speed * 0.9; // px/s (fila 2, ligeramente distinta para dinamismo)
    const speed3 = cfg.speed * 1.05; // px/s (fila 3, un poco más rápida)
    // Dirección: izquierda -> derecha (modular para evitar saltos por redondeo)
    const L = halfWidthRef.current || 1;
    if (!paused1Ref.current) {
      const x = xRef.current + speed * dt;
      xRef.current = ((x % L) + L) % L - L; // rango [-L, 0)
    }
    // aplicar transform al track
    const track = trackRef.current;
    if (track) track.style.transform = `translate3d(${xRef.current}px,0,0)`;
    // Fila 2: derecha -> izquierda
    if (!paused2Ref.current) {
      const x2 = xRef2.current - speed2 * dt;
      xRef2.current = ((x2 % L) + L) % L - L;
    }
    const track2 = trackRef2.current;
    if (track2) track2.style.transform = `translate3d(${xRef2.current}px,0,0)`;
    // Fila 3: izquierda -> derecha
    if (!paused3Ref.current) {
      const x3 = xRef3.current + speed3 * dt;
      xRef3.current = ((x3 % L) + L) % L - L;
    }
    const track3 = trackRef3.current;
    if (track3) track3.style.transform = `translate3d(${xRef3.current}px,0,0)`;
    // La animación vertical por ítem ahora se maneja con CSS (bounce-soft),
    // evitando tocar el DOM por frame para cada icono.
  });

  const itemStyle: React.CSSProperties = {
    width: cfg.box,
    height: cfg.box,
    minWidth: cfg.box,
    minHeight: cfg.box,
  };

  // helpers de hover para pausar por fila y marcar hover en el elemento
  const mkHoverHandlers = (row: 1 | 2 | 3) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget as HTMLElement;
      el.dataset.hover = '1';
      if (row === 1) paused1Ref.current = true;
      if (row === 2) paused2Ref.current = true;
      if (row === 3) paused3Ref.current = true;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget as HTMLElement;
      el.dataset.hover = '0';
      if (row === 1) paused1Ref.current = false;
      if (row === 2) paused2Ref.current = false;
      if (row === 3) paused3Ref.current = false;
    },
  });

  return (
    <div ref={containerRef} className="w-full h-[340px] sm:h-[400px] md:h-[460px] rounded-xl overflow-hidden border border-primary/10 bg-darkBg/40">
      <div className="relative w-full h-full flex items-center">
        {/* Contenedor de tres filas */}
        <div className="flex flex-col gap-4">
          {/* Fila 1: izquierda -> derecha */}
          <div
            ref={trackRef}
            className="flex items-center will-change-transform"
            style={{ gap: cfg.gap, transform: `translate3d(${xRef.current}px,0,0)` }}
          >
            {Array.from({ length: repeats }).map((_, k) => (
              <React.Fragment key={`SEQ1-${k}`}>
                {icons.map((it, i) => (
                  <div
                    key={`1-${k}-${it.name}`}
                    data-i={k * icons.length + i}
                    className="group relative flex items-center justify-center rounded-full border border-primary/20 group-hover:border-primary/60 bg-darkBg/70 shadow-md mx-0 transition-transform duration-150 ease-out overflow-visible cursor-pointer hover:scale-125 hover:z-10"
                    style={{
                      ...itemStyle,
                      color: getTechColor(it.name),
                      borderColor: hexToRgba(getTechColor(it.name), 0.25),
                    }}
                    title={it.name}
                    {...mkHoverHandlers(1)}
                  >
                    {/* glow */}
                    <span
                      className="pointer-events-none absolute inset-0 rounded-full blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      style={{ backgroundColor: hexToRgba(getTechColor(it.name), 0.22) }}
                    ></span>
                    {/* wrapper para separar scale del bounce */}
                    <div
                      className="relative z-[1] flex items-center justify-center will-change-transform"
                    >
                      <div className="bounce-soft group-hover:[animation-play-state:paused]" style={{ ['--amp' as any]: `${cfg.amp}px`, ['--period' as any]: `${cfg.cycles}s` }}>
                        {it.el}
                      </div>
                    </div>
                    {/* tooltip */}
                    <span
                      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-[11px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 border"
                      style={{
                        backgroundColor: hexToRgba(getTechColor(it.name), 0.12),
                        color: getTechColor(it.name),
                        borderColor: hexToRgba(getTechColor(it.name), 0.35),
                      }}
                    >
                      {it.name}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          {/* Fila 2: derecha -> izquierda */}
          <div
            ref={trackRef2}
            className="flex items-center will-change-transform"
            style={{ gap: cfg.gap, transform: `translate3d(${xRef2.current}px,0,0)` }}
          >
            {Array.from({ length: repeats }).map((_, k) => (
              <React.Fragment key={`SEQ2-${k}`}>
                {icons.map((it, i) => (
                  <div
                    key={`2-${k}-${it.name}`}
                    data-i={k * icons.length + i}
                    className="group relative flex items-center justify-center rounded-full border border-primary/20 group-hover:border-primary/60 bg-darkBg/70 shadow-md mx-0 transition-transform duration-150 ease-out overflow-visible cursor-pointer hover:scale-125 hover:z-10"
                    style={{
                      ...itemStyle,
                      color: getTechColor(it.name),
                      borderColor: hexToRgba(getTechColor(it.name), 0.25),
                    }}
                    title={it.name}
                    {...mkHoverHandlers(2)}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 rounded-full blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      style={{ backgroundColor: hexToRgba(getTechColor(it.name), 0.22) }}
                    ></span>
                    <div className="relative z-[1] flex items-center justify-center will-change-transform">
                      <div className="bounce-soft group-hover:[animation-play-state:paused]" style={{ ['--amp' as any]: `${cfg.amp * 0.9}px`, ['--period' as any]: `${cfg.cycles}s` }}>
                        {it.el}
                      </div>
                    </div>
                    <span
                      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-[11px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 border"
                      style={{
                        backgroundColor: hexToRgba(getTechColor(it.name), 0.12),
                        color: getTechColor(it.name),
                        borderColor: hexToRgba(getTechColor(it.name), 0.35),
                      }}
                    >
                      {it.name}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          {/* Fila 3: izquierda -> derecha */}
          <div
            ref={trackRef3}
            className="flex items-center will-change-transform"
            style={{ gap: cfg.gap, transform: `translate3d(${xRef3.current}px,0,0)` }}
          >
            {Array.from({ length: repeats }).map((_, k) => (
              <React.Fragment key={`SEQ3-${k}`}>
                {icons.map((it, i) => (
                  <div
                    key={`3-${k}-${it.name}`}
                    data-i={k * icons.length + i}
                    className="group relative flex items-center justify-center rounded-full border border-primary/20 group-hover:border-primary/60 bg-darkBg/70 shadow-md mx-0 transition-transform duration-150 ease-out overflow-visible cursor-pointer hover:scale-125 hover:z-10"
                    style={{
                      ...itemStyle,
                      color: getTechColor(it.name),
                      borderColor: hexToRgba(getTechColor(it.name), 0.25),
                    }}
                    title={it.name}
                    {...mkHoverHandlers(3)}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 rounded-full blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      style={{ backgroundColor: hexToRgba(getTechColor(it.name), 0.22) }}
                    ></span>
                    <div className="relative z-[1] flex items-center justify-center will-change-transform">
                      <div className="bounce-soft group-hover:[animation-play-state:paused]" style={{ ['--amp' as any]: `${cfg.amp * 0.95}px`, ['--period' as any]: `${(cfg.cycles * 1.05).toFixed(2)}s` }}>
                        {it.el}
                      </div>
                    </div>
                    <span
                      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-[11px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 border"
                      style={{
                        backgroundColor: hexToRgba(getTechColor(it.name), 0.12),
                        color: getTechColor(it.name),
                        borderColor: hexToRgba(getTechColor(it.name), 0.35),
                      }}
                    >
                      {it.name}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

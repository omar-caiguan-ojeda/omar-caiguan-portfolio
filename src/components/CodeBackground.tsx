import React, { useRef, useEffect } from "react";

// Utiliza el color principal de tu Tailwind (por ejemplo, azul)
const PRIMARY_COLOR = "#2563eb"; // Puedes ajustar según tu paleta
const CHARACTERS = "01<>[]{};=+-_()";

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let fontSize = 18;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(20, 22, 34, 0.25)"; // Fondo sutil, semi-transparente
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = PRIMARY_COLOR;
      for (let i = 0; i < columns; i++) {
        const text = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    }

    window.addEventListener("resize", handleResize);
    animationRef.current = window.requestAnimationFrame(function loop() {
      draw();
      animationRef.current = window.requestAnimationFrame(loop);
    });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.35,
      }}
      aria-hidden="true"
    />
  );
};

export default CodeBackground;

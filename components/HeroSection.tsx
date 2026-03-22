"use client";

import { useEffect, useRef } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Full Screen Glitch Matrix Canvas ── */
function GlitchCanvas({
  backgroundColor,
  glitchColors
}: {
  backgroundColor: string;
  glitchColors: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    const cellSize = 24; // Increased cell size for a chunkier, sparser look
    let cols = 0;
    let rows = 0;

    let grid: number[] = [];
    let lastUpdate = 0;

    // Color Palette
    const CREME = "#FDFBF7";
    const PURPLE = "#B47CFF";
    const YELLOW = "#FFEA00";
    const CYAN = "#A4EBFB";

    const resize = () => {
      // increase size slightly to cover parallax shifts when wrapped in a 120% container
      const w = window.innerWidth * 1.2;
      const h = window.innerHeight * 1.2;
      canvas.width = w;
      canvas.height = h;
      cols = Math.ceil(w / cellSize);
      rows = Math.ceil(h / cellSize);
      grid = Array(rows * cols).fill(0);

      // Initialize some random chunks
      for (let i = 0; i < grid.length; i++) {
        // Start with a very sparse matrix
        if (Math.random() < 0.01) {
          const rand = Math.random();
          grid[i] = rand < 0.85 ? 1 : rand < 0.95 ? 2 : 3;
        }
      }
      draw();
    };

    window.addEventListener("resize", resize);
    resize();

    function draw() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = backgroundColor; // Black background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const val = grid[y * cols + x];
          if (val > 0 && val <= glitchColors.length) {
            ctx.fillStyle = glitchColors[val - 1];
            ctx.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
          }
        }
      }
    }

    function update(time: number) {
      if (time - lastUpdate > 100) { // ~10fps for glitchy feel
        lastUpdate = time;
        // Mutate grid by randomly selecting block areas to glitch
        const clusterCount = Math.floor(Math.random() * 4) + 1; // Fewer concurrent clusters
        for (let c = 0; c < clusterCount; c++) {
          const startX = Math.floor(Math.random() * cols);
          const startY = Math.floor(Math.random() * rows);
          const blockW = Math.floor(Math.random() * 5) + 1; // Smaller width clusters
          const blockH = Math.floor(Math.random() * 5) + 1; // Smaller height clusters

          for (let y = startY; y < startY + blockH; y++) {
            for (let x = startX; x < startX + blockW; x++) {
              if (x < cols && y < rows) {
                const idx = y * cols + x;
                // Chance to overwrite 
                if (Math.random() < 0.08) { // Only 8% chance to spawn instead of 25%
                  const rand = Math.random();
                  grid[idx] = rand < 0.80 ? 1 : rand < 0.90 ? 2 : 3;
                } else if (Math.random() < 0.8) {
                  grid[idx] = 0; // Clear it aggressively to keep it extremely sparse
                }
              }
            }
          }
        }
        draw();
      }
      animationFrameId = requestAnimationFrame(update);
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

/* ── Letter variants ── */
const LETTER_VARIANTS = {
  hidden: { y: "115%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 0.1 + i * 0.09,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* ── Scroll indicator ── */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
      <span
        className="font-inter text-[10px] tracking-[0.25em] uppercase"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        Scroll
      </span>
      {/* Animated line */}
      <div className="relative w-px h-12 overflow-hidden bg-white/10">
        <div
          className="absolute inset-x-0 top-0 bg-white/40"
          style={{
            height: "100%",
            animation: "scrollLine 1.8s cubic-bezier(0.76, 0, 0.24, 1) infinite",
          }}
        />
      </div>
    </div>
  );
}

/* ── Main HeroSection ── */
interface HeroSectionProps {
  backgroundColor?: string;
  textColor?: string;
  glitchColors?: string[];
}

export default function HeroSection({
  backgroundColor = "#000000ff",
  textColor = "#FFFFFF",
  glitchColors = ["#B47CFF", "#FFEA00", "#FDFBF7"],
}: HeroSectionProps = {}) {
  /* ── Mouse tracking ── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 19, stiffness: 155, mass: 0.72 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  const canvasX = useTransform([springX, springY], (values: number[]) => {
    const x = values[0] ?? 0;
    const absX = Math.abs(x);
    const responsiveX = Math.sign(x) * Math.pow(absX, 0.68);
    return responsiveX * 80; // moderate parallax multiplier
  });

  const canvasY = useTransform([springX, springY], (values: number[]) => {
    const y = values[1] ?? 0;
    const absY = Math.abs(y);
    const responsiveY = Math.sign(y) * Math.pow(absY, 0.68);
    return responsiveY * 80;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      rawX.set((e.clientX - innerWidth / 2) / (innerWidth / 2));
      rawY.set((e.clientY - innerHeight / 2) / (innerHeight / 2));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  const NAME = "MOHIT";

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "100svh", minHeight: 600, backgroundColor }}
    >
      {/* ── Glitch Canvas Layer (replaces image tiles) ── */}
      <m.div
        style={{
          position: "absolute",
          left: "-10%",
          top: "-10%",
          width: "120%",
          height: "120%",
          x: canvasX,
          y: canvasY,
          zIndex: 0,
        }}
      >
        <GlitchCanvas backgroundColor={backgroundColor} glitchColors={glitchColors} />
      </m.div>

      {/* ── Radial overlay to "wrap" the glitch matrix in the background color ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at center, transparent 20%, ${backgroundColor} 100%)`,
        }}
      />

      {/* ── Hero Text ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center select-none"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="flex items-center leading-none"
          aria-label="Mohit"
          style={{ gap: "0" }}
        >
          {NAME.split("").map((letter, i) => (
            <div
              key={i}
              style={{ overflow: "hidden", display: "inline-block" }}
            >
              <m.span
                custom={i}
                variants={LETTER_VARIANTS}
                initial="hidden"
                animate="visible"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(4.5rem, 12vw, 12rem)",
                  lineHeight: 1,
                  color: textColor,
                  letterSpacing: "0.18em",
                }}
              >
                {letter}
              </m.span>
            </div>
          ))}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

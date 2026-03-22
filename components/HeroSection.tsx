"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Floating image data ── */
interface FloatingImageConfig {
  id: number;
  left: string;
  top: string;
  width: number;
  height: number;
  moveX: number;
  moveY: number;
  rotate: number;
  gradient: string;
  delay: number;
  borderRadius: number;
  initialScale?: number;
}

const FLOATING_IMAGES: FloatingImageConfig[] = [
  {
    id: 1,
    left: "-4%",
    top: "8%",
    width: 180,
    height: 230,
    moveX: 55,
    moveY: 35,
    rotate: -4,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    delay: 0.5,
    borderRadius: 6,
  },
  {
    id: 2,
    left: "68%",
    top: "4%",
    width: 230,
    height: 160,
    moveX: 70,
    moveY: 50,
    rotate: 3,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    delay: 0.65,
    borderRadius: 6,
  },
  {
    id: 3,
    left: "78%",
    top: "52%",
    width: 160,
    height: 210,
    moveX: 45,
    moveY: 60,
    rotate: 5,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    delay: 0.8,
    borderRadius: 6,
  },
  {
    id: 4,
    left: "-2%",
    top: "58%",
    width: 150,
    height: 180,
    moveX: 60,
    moveY: 40,
    rotate: -6,
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    delay: 0.7,
    borderRadius: 6,
  },
  {
    id: 5,
    left: "42%",
    top: "72%",
    width: 140,
    height: 140,
    moveX: 80,
    moveY: 30,
    rotate: 8,
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    delay: 0.9,
    borderRadius: 999,
  },
  {
    id: 6,
    left: "30%",
    top: "-3%",
    width: 120,
    height: 120,
    moveX: 40,
    moveY: 55,
    rotate: -3,
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    delay: 0.6,
    borderRadius: 999,
  },
];

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

const SUBTITLE_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const SCROLL_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 1.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ── FloatingImage sub-component ── */
function FloatingImage({
  config,
  springX,
  springY,
}: {
  config: FloatingImageConfig;
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
}) {
  const translateX = useTransform(
    springX,
    [-1, 1],
    [-config.moveX, config.moveX],
  );
  const translateY = useTransform(
    springY,
    [-1, 1],
    [-config.moveY, config.moveY],
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, rotate: config.rotate }}
      animate={{ opacity: 1, scale: 1, rotate: config.rotate }}
      transition={{
        duration: 1.1,
        delay: config.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: config.left,
        top: config.top,
        width: config.width,
        height: config.height,
        x: translateX,
        y: translateY,
        background: config.gradient,
        borderRadius: config.borderRadius,
        boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.3)",
        willChange: "transform",
        zIndex: 0,
      }}
    >
      {/* Inner gloss shine */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

/* ── Scroll indicator ── */
function ScrollIndicator() {
  return (
    <motion.div
      variants={SCROLL_VARIANTS}
      initial="hidden"
      animate="visible"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <span
        className="font-inter text-[10px] tracking-[0.25em] uppercase"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        Scroll
      </span>

      {/* Animated line */}
      <div className="relative w-px h-12 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-white/40 to-transparent"
          style={{
            height: "100%",
            animation:
              "scrollLine 1.8s cubic-bezier(0.76, 0, 0.24, 1) infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
            opacity: 1;
          }
          50% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
}

/* ── Main HeroSection ── */
export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  /* ── Mouse tracking ── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 90, mass: 1 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 … +1
      rawX.set((e.clientX - innerWidth / 2) / (innerWidth / 2));
      rawY.set((e.clientY - innerHeight / 2) / (innerHeight / 2));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  const NAME = "MOHIT";

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "100svh", minHeight: 600, background: "#000" }}
    >
      {/* ── Subtle radial glow behind text ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,255,255,0.035) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Floating Images ── */}
      {FLOATING_IMAGES.map((img) => (
        <FloatingImage
          key={img.id}
          config={img}
          springX={springX}
          springY={springY}
        />
      ))}

      {/* ── Hero Text ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center select-none"
        style={{ pointerEvents: "none" }}
      >
        {/* Small eyebrow label */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 font-inter font-light"
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
          }}
        >
          Portfolio — 2025
        </motion.div>

        {/* ── MOHIT — letter-by-letter clip reveal ── */}
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
              <motion.span
                custom={i}
                variants={LETTER_VARIANTS}
                initial="hidden"
                animate="visible"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "0.18em",
                }}
              >
                {letter}
              </motion.span>
            </div>
          ))}
        </div>

        {/* ── Subtitle ── */}
        <motion.div
          variants={SUBTITLE_VARIANTS}
          initial="hidden"
          animate="visible"
          className="mt-6 flex items-center gap-3"
        >
          {/* Left dash */}
          <span
            style={{
              display: "block",
              width: 32,
              height: 1,
              background: "rgba(255,255,255,0.25)",
              flexShrink: 0,
            }}
          />

          <p
            className="font-inter font-light tracking-widest uppercase"
            style={{
              fontSize: "clamp(10px, 1.3vw, 14px)",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.3em",
            }}
          >
            AI Fullstack Developer
          </p>

          {/* Right dash */}
          <span
            style={{
              display: "block",
              width: 32,
              height: 1,
              background: "rgba(255,255,255,0.25)",
              flexShrink: 0,
            }}
          />
        </motion.div>

        {/* ── CTA row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-center gap-4"
          style={{ pointerEvents: "all" }}
        >
          <a
            href="/projects"
            className="btn-primary"
            style={{ fontSize: 13, padding: "12px 26px" }}
          >
            View Work
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="/about"
            className="btn-outline"
            style={{ fontSize: 13, padding: "11px 25px" }}
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <ScrollIndicator />

      {/* ── Corner coordinates (decorative) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 right-8 font-inter"
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "0.1em",
        }}
        aria-hidden="true"
      >
        28.6139° N · 77.2090° E
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-8 font-inter"
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "0.1em",
        }}
        aria-hidden="true"
      >
        © 2025
      </motion.div>
    </section>
  );
}

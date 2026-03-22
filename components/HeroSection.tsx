"use client";

import { useEffect } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Infinite canvas tile data ── */
interface FloatingTileConfig {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
  gradient: string;
  delay: number;
  borderRadius: number;
}

const TILE_SIZE = 210;
const TILE_COUNT = 8;
const CANVAS_PADDING = 100;
const MAX_POSITION_ATTEMPTS = 120;
const CANVAS_WIDTH = 3000;
const CANVAS_HEIGHT = 2200;
const NO_TILE_BUFFER = 44;
const TILE_GAP_MIN = 80;
const TILE_GAP_MAX = 300;

type NoTileZone = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const NO_TILE_ZONES: NoTileZone[] = [];

const TILE_STYLES = [
  {
    rotate: 90,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: 8,
  },
  {
    rotate: 90,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    borderRadius: 8,
  },
  {
    rotate: 90,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    borderRadius: 8,
  },
  {
    rotate: 90,
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    borderRadius: 8,
  },
  {
    rotate: 90,
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    borderRadius: 8,
  },
  {
    rotate: 90,
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    borderRadius: 8,
  },
] as const;

function createSeededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function intersectsNoTileZone(x: number, y: number, size: number) {
  const left = x - NO_TILE_BUFFER;
  const top = y - NO_TILE_BUFFER;
  const right = x + size + NO_TILE_BUFFER;
  const bottom = y + size + NO_TILE_BUFFER;

  return NO_TILE_ZONES.some((zone) => {
    const zoneLeft = zone.x;
    const zoneTop = zone.y;
    const zoneRight = zone.x + zone.width;
    const zoneBottom = zone.y + zone.height;

    return !(
      right < zoneLeft ||
      left > zoneRight ||
      bottom < zoneTop ||
      top > zoneBottom
    );
  });
}

function intersectsWithGap(
  x: number,
  y: number,
  size: number,
  other: FloatingTileConfig,
  gap: number,
) {
  const halfGap = gap / 2;

  const aLeft = x - halfGap;
  const aTop = y - halfGap;
  const aRight = x + size + halfGap;
  const aBottom = y + size + halfGap;

  const bLeft = other.x - halfGap;
  const bTop = other.y - halfGap;
  const bRight = other.x + other.size + halfGap;
  const bBottom = other.y + other.size + halfGap;

  return !(aRight <= bLeft || aLeft >= bRight || aBottom <= bTop || aTop >= bBottom);
}

const INFINITE_TILES: FloatingTileConfig[] = (() => {
  const rand = createSeededRandom(20260322);
  const placedTiles: FloatingTileConfig[] = [];
  const placedTileGaps: number[] = [];

  // Spawn around hero-visible region while keeping enough spread in every direction.
  const minX = CANVAS_WIDTH / 2 - 1020;
  const maxX = CANVAS_WIDTH / 2 + 1020 - TILE_SIZE;
  const minY = CANVAS_HEIGHT / 2 - 760;
  const maxY = CANVAS_HEIGHT / 2 + 760 - TILE_SIZE;

  for (let index = 0; index < TILE_COUNT; index += 1) {
    const style = TILE_STYLES[index % TILE_STYLES.length];
    let x = CANVAS_WIDTH / 2;
    let y = CANVAS_HEIGHT / 2;
    let placed = false;

    const desiredGap = TILE_GAP_MIN + rand() * (TILE_GAP_MAX - TILE_GAP_MIN);

    for (let attempt = 0; attempt < MAX_POSITION_ATTEMPTS; attempt += 1) {
      const candidateX = minX + rand() * (maxX - minX);
      const candidateY = minY + rand() * (maxY - minY);

      const outsideProtectedZones = !intersectsNoTileZone(candidateX, candidateY, TILE_SIZE);
      if (!outsideProtectedZones) {
        continue;
      }

      const adaptiveGap = Math.max(TILE_GAP_MIN, desiredGap - attempt * 1.6);
      const hasCollision = placedTiles.some((tile, tileIndex) => {
        const pairedGap = (adaptiveGap + (placedTileGaps[tileIndex] ?? TILE_GAP_MIN)) / 2;
        return intersectsWithGap(candidateX, candidateY, TILE_SIZE, tile, pairedGap);
      });

      if (!hasCollision) {
        x = candidateX;
        y = candidateY;
        placedTileGaps.push(adaptiveGap);
        placed = true;
        break;
      }
    }

    if (!placed) {
      // Last resort: random visible placement that only respects protected zones.
      for (let attempt = 0; attempt < MAX_POSITION_ATTEMPTS; attempt += 1) {
        const fallbackX = minX + rand() * (maxX - minX);
        const fallbackY = minY + rand() * (maxY - minY);
        if (!intersectsNoTileZone(fallbackX, fallbackY, TILE_SIZE)) {
          x = fallbackX;
          y = fallbackY;
          placedTileGaps.push(TILE_GAP_MIN);
          break;
        }
      }
    }

    placedTiles.push({
      id: index + 1,
      x,
      y,
      size: TILE_SIZE,
      rotate: style.rotate,
      gradient: style.gradient,
      borderRadius: style.borderRadius,
      delay: 0.15 + rand() * 0.45,
    });
  }

  return placedTiles;
})();

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
}: {
  config: FloatingTileConfig;
}) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.75, rotate: config.rotate }}
      animate={{ opacity: 1, scale: 1, rotate: config.rotate }}
      transition={{
        duration: 1.1,
        delay: config.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: config.x,
        top: config.y,
        width: config.size,
        height: config.size,
        background: config.gradient,
        borderRadius: config.borderRadius,
        boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.3)",
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
    </m.div>
  );
}

/* ── Scroll indicator ── */
function ScrollIndicator() {
  return (
    <m.div
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
    </m.div>
  );
}

/* ── Main HeroSection ── */
export default function HeroSection() {
  /* ── Mouse tracking ── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 19, stiffness: 155, mass: 0.72 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);
  const canvasX = useTransform([springX, springY], (values: number[]) => {
    const x = values[0] ?? 0;
    const y = values[1] ?? 0;
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    const radial = Math.min(1, Math.hypot(absX, absY));

    // Distance-triggered acceleration: modest near center, fast after small travel.
    const responsiveX = Math.sign(x) * Math.pow(absX, 0.68);
    const travelBoostX = Math.max(0, (absX - 0.16) / 0.84);
    const accelerationX = Math.pow(travelBoostX, 1.6);

    // Edge + corner amplification: strongest push near corners.
    const edgeBoostX = Math.pow(absX, 1.2);
    const cornerBoost = Math.max(0, (radial - 0.55) / 0.45);
    const strength = 120 + accelerationX * 290 + edgeBoostX * 70 + cornerBoost * 140;

    return responsiveX * strength;
  });

  const canvasY = useTransform([springX, springY], (values: number[]) => {
    const x = values[0] ?? 0;
    const y = values[1] ?? 0;
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    const radial = Math.min(1, Math.hypot(absX, absY));

    const responsiveY = Math.sign(y) * Math.pow(absY, 0.68);
    const travelBoostY = Math.max(0, (absY - 0.16) / 0.84);
    const accelerationY = Math.pow(travelBoostY, 1.6);
    const edgeBoostY = Math.pow(absY, 1.2);
    const cornerBoost = Math.max(0, (radial - 0.55) / 0.45);
    const strength = 95 + accelerationY * 240 + edgeBoostY * 60 + cornerBoost * 120;

    return responsiveY * strength;
  });

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

      {/* ── Infinite Canvas Layer ── */}
      <m.div
        style={{
          position: "absolute",
          left: `calc(50% - ${CANVAS_WIDTH / 2}px)`,
          top: `calc(50% - ${CANVAS_HEIGHT / 2}px)`,
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          x: canvasX,
          y: canvasY,
          zIndex: 0,
        }}
      >
        {INFINITE_TILES.map((tile) => (
          <FloatingImage key={tile.id} config={tile} />
        ))}
      </m.div>

      {/* ── Hero Text ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center select-none"
        style={{ pointerEvents: "none" }}
      >
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
              <m.span
                custom={i}
                variants={LETTER_VARIANTS}
                initial="hidden"
                animate="visible"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(2.8rem, 6vw, 6.2rem)",
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "0.18em",
                }}
              >
                {letter}
              </m.span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

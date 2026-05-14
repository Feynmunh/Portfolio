"use client";

import { useEffect, useRef, useState } from "react";
import { m, useInView } from "framer-motion";

/* ── Skills data ── */
const SKILLS = [
  { label: "Python", category: "Backend" },
  { label: "Machine Learning", category: "AI" },
  { label: "C++", category: "Backend" },
  { label: "HTML", category: "Frontend" },
  { label: "CSS", category: "Frontend" },
  { label: "React", category: "Frontend" },
  { label: "Express", category: "Backend" },
];

const HERO_ROBOTS = [
  [
    [
      "                    ",
      "                    ",
      "    ##        ##    ",
      "   ####      ####   ",
      "    ##        ##    ",
      "      ########      ",
      "      #++++++#      ",
      "      #++++++#      ",
      "      ########      ",
      "      #      #      ",
      "     ##########     ",
      "     # ########     ",
      "     ##########     ",
      "                    ",
    ],
    [
      "                    ",
      "                    ",
      "    ##        ##    ",
      "   ## ##    ## ##   ",
      "    ##        ##    ",
      "      ########      ",
      "      #      #      ",
      "      #      #      ",
      "      ########      ",
      "      #      #      ",
      "     ##########     ",
      "     ######## #     ",
      "     ##########     ",
      "                    ",
    ],
  ],
  [
    [
      "                    ",
      "                    ",
      "      ########      ",
      "     ##########     ",
      "    ###+####+###    ",
      "    ############    ",
      "    ##        ##    ",
      "   ###        ###   ",
      "   ### ###### ###   ",
      "   ### #++++# ###   ",
      "   ### ###### ###   ",
      "       #    #       ",
      "       ##  ##       ",
      "                    ",
    ],
    [
      "                    ",
      "                    ",
      "      ########      ",
      "     ##########     ",
      "    ## #### ####    ",
      "    ############    ",
      "    ##        ##    ",
      "   ###        ###   ",
      "   ### ###### ###   ",
      "   ### #    # ###   ",
      "   ### ###### ###   ",
      "       #    #       ",
      "       ##  ##       ",
      "                    ",
    ],
  ],
  [
    [
      "                    ",
      "         ##         ",
      "         ##         ",
      "       ######       ",
      "      ########      ",
      "      ##+##+##      ",
      "      ########      ",
      "       ######       ",
      "         ##         ",
      "      ########      ",
      "      #  ##  #      ",
      "         ##         ",
      "        ####        ",
      "                    ",
    ],
    [
      "                    ",
      "         ++         ",
      "         ##         ",
      "       ######       ",
      "      ########      ",
      "      ## ## ##      ",
      "      ########      ",
      "  #    ######    #  ",
      "  ##     ##     ##  ",
      "   ##########   #   ",
      "      #  ##  #      ",
      "         ##         ",
      "        ####        ",
      "                    ",
    ],
  ],
  [
    [
      "                    ",
      "      ##    ##      ",
      "       ##  ##       ",
      "    ############    ",
      "   ##############   ",
      "   ##++######++##   ",
      "   ##############   ",
      "     ##########     ",
      "   ####      ####   ",
      "  ####  ####  ####  ",
      "   ##   ####   ##   ",
      "        #  #        ",
      "       ##  ##       ",
      "                    ",
    ],
    [
      "                    ",
      "      ++    ++      ",
      "       ##  ##       ",
      "    ############    ",
      "   ##############   ",
      "   ##  ######  ##   ",
      "   ##############   ",
      "     ##########     ",
      "  ####        ####  ",
      "   ###  ####  ###   ",
      "    ##  ####  ##    ",
      "        #  #        ",
      "       ##  ##       ",
      "                    ",
    ],
  ],
];

const ROBOT_EMPTY = 0;
const ROBOT_PURPLE = 1;
const ROBOT_YELLOW = 2;

function HeroRobot({ frames, className = "" }: { frames: string[][]; className?: string }) {
  const cols = frames[0]?.[0]?.length ?? 0;
  const rows = frames[0]?.length ?? 0;
  const [grid, setGrid] = useState<number[]>([]);

  useEffect(() => {
    let tickCount = 0;

    const intervalId = setInterval(() => {
      tickCount++;
      const frame = frames[Math.floor(tickCount / 4) % frames.length];
      const next = Array(rows * cols).fill(ROBOT_EMPTY);

      for (let index = 0; index < next.length; index++) {
        if (Math.random() < 0.08) {
          next[index] = Math.random() < 0.88 ? ROBOT_PURPLE : ROBOT_YELLOW;
        }
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const char = frame[y]?.[x];
          const index = y * cols + x;

          if (char === "#") {
            next[index] = ROBOT_PURPLE;
          } else if (char === "+" || char === "=") {
            next[index] = ROBOT_YELLOW;
          }
        }
      }

      setGrid(next);
    }, 240);

    return () => clearInterval(intervalId);
  }, [cols, frames, rows]);

  return (
    <div
      className={`hero-robot hero-robot-grid ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {grid.map((value, index) => (
        <span
          key={index}
          className={
            value === ROBOT_PURPLE
              ? "hero-robot-dot hero-robot-dot-purple"
              : value === ROBOT_YELLOW
                ? "hero-robot-dot hero-robot-dot-yellow"
                : "hero-robot-dot"
          }
        />
      ))}
    </div>
  );
}

const MATRIX_COLS = 28;
const MATRIX_ROWS = 24;
const MATRIX_EMPTY = 0;
const MATRIX_DIM = 1;
const MATRIX_BRIGHT = 2;
const MATRIX_HOT = 3;

const MATRIX_SHAPES = [
  [[0, 0]],
  [[0, 0], [0, 1], [0, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 0], [0, 1], [1, 1]],
  [[0, 0], [1, 0], [1, 1]],
  [[0, 0], [1, 0], [2, 0], [0, 1]],
  [[0, 0], [0, 1], [0, 2], [1, 0]],
  [[0, 0], [1, 0], [1, 1], [2, 1]],
];

function HeroMatrixGlitch() {
  const [grid, setGrid] = useState<number[]>([]);

  useEffect(() => {
    const renderFrame = () => {
      const next = Array(MATRIX_COLS * MATRIX_ROWS).fill(MATRIX_EMPTY);

      for (let i = 0; i < 30; i++) {
        const shape = MATRIX_SHAPES[Math.floor(Math.random() * MATRIX_SHAPES.length)];
        const originX = Math.floor(Math.random() * MATRIX_COLS);
        const originY = Math.floor(Math.random() * MATRIX_ROWS);
        const color = Math.random() > 0.82 ? MATRIX_HOT : Math.random() > 0.58 ? MATRIX_BRIGHT : MATRIX_DIM;

        for (const [offsetX, offsetY] of shape) {
          const x = originX + offsetX;
          const y = originY + offsetY;

          if (x >= 0 && x < MATRIX_COLS && y >= 0 && y < MATRIX_ROWS) {
            next[y * MATRIX_COLS + x] = color;
          }
        }
      }

      for (let i = 0; i < 6; i++) {
        next[Math.floor(Math.random() * next.length)] = MATRIX_HOT;
      }

      setGrid(next);
    };

    renderFrame();
    const intervalId = setInterval(renderFrame, 360);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="hero-matrix-glitch"
      style={{ gridTemplateColumns: `repeat(${MATRIX_COLS}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {grid.map((value, index) => (
        <span
          key={index}
          style={{ animationDelay: `${(index % 13) * 18}ms` }}
          className={
            value === MATRIX_BRIGHT
              ? "hero-matrix-dot hero-matrix-dot-bright"
              : value === MATRIX_HOT
                ? "hero-matrix-dot hero-matrix-dot-hot"
                : value === MATRIX_DIM
                  ? "hero-matrix-dot hero-matrix-dot-dim"
                  : "hero-matrix-dot"
          }
        />
      ))}
    </div>
  );
}



/* ── Reusable fade-up wrapper ── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ── Clip-reveal heading ── */
function RevealHeading({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div ref={ref} style={{ overflow: "hidden" }} className={className}>
      <m.div
        initial={{ y: "105%" }}
        animate={inView ? { y: "0%" } : { y: "105%" }}
        transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </div>
  );
}

/* ── Skill pill ── */
function SkillPill({
  label,
  index,
  inView,
}: {
  label: string;
  index: number;
  inView: boolean;
}) {
  return (
    <m.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{
        duration: 0.5,
        delay: 0.05 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="tag"
      style={{ cursor: "none" }}
    >
      {label}
    </m.span>
  );
}

/* ── Main Component ── */
export default function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsInView = useInView(skillsRef, {
    once: true,
    margin: "-60px 0px",
  });



  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden"
    >
      {/* ── Pure black hero background ── */}
      <div className="pointer-events-none absolute left-6 right-6 top-24 h-px bg-white/[0.08] md:left-10 md:right-10" />
      <div className="pointer-events-none absolute right-8 top-32 hidden h-[520px] w-[360px] lg:block" aria-hidden="true">
        <HeroMatrixGlitch />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Hero bio section ── */}
        <div className="mb-20 lg:mb-28">
          {/* ── Heading + Bio ── */}
          <div>
            {/* Large heading */}
            <div className="mb-10 md:mb-12">
              <RevealHeading delay={0.1}>
                <h2
                  className="matrix-text font-syne font-bold leading-[0.86] tracking-[-0.07em]"
                  style={{
                    fontSize: "clamp(2.8rem, 8.4vw, 8.75rem)",
                  }}
                >
                  Mohit
                </h2>
              </RevealHeading>
              <RevealHeading delay={0.18}>
                <h2
                  className="matrix-text font-syne font-bold leading-[0.86] tracking-[-0.07em]"
                  style={{
                    fontSize: "clamp(2.8rem, 8.4vw, 8.75rem)",
                  }}
                >
                  Sharma
                </h2>
              </RevealHeading>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-5 max-w-2xl">
              <FadeUp delay={0.28}>
                <p
                  className="font-inter leading-relaxed"
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 21px)",
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  I'm <span className="text-white font-medium">Mohit</span> — an
                  AI Fullstack Developer who lives at the intersection of large
                  language models and production-grade software. I don't just
                  integrate AI features; I architect systems where intelligence
                  is the foundation.
                </p>
              </FadeUp>

              <FadeUp delay={0.36}>
                <p
                  className="font-inter leading-relaxed"
                  style={{
                    fontSize: "clamp(15px, 1.45vw, 18px)",
                    color: "rgba(255,255,255,0.48)",
                  }}
                >
                  From real-time LLM streaming interfaces to RAG pipelines,
                  voice AI assistants, and full SaaS platforms — I care about
                  the entire stack. Clean APIs, thoughtful UX, and AI that
                  actually works in production.
                </p>
              </FadeUp>

              <FadeUp delay={0.42}>
                <p
                  className="font-inter leading-relaxed"
                  style={{
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  Based in New Delhi, India. Open to remote collaboration
                  worldwide.
                </p>
              </FadeUp>

              {/* CTA */}
              <FadeUp delay={0.5}>
                <div className="flex flex-wrap items-center gap-4 pt-5">
                  <a
                    href="/projects"
                    className="btn-primary"
                    style={{ fontSize: 13 }}
                  >
                    See My Work →
                  </a>
                  <a
                    href="mailto:mohit.sharma80805@gmail.com"
                    className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-300 link-underline"
                  >
                    Say hello
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <FadeUp delay={0}>
          <div className="divider mb-16 md:mb-20" />
        </FadeUp>

        {/* ── Skills ── */}
        <div ref={skillsRef}>
          <div className="flex items-baseline justify-between mb-10 gap-6">
            <FadeUp delay={0.05}>
              <h3
                className="font-syne font-bold"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Tools & Technologies
              </h3>
            </FadeUp>
            <FadeUp delay={0.12}>
              <span
                className="font-inter text-xs tracking-widest uppercase shrink-0"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {SKILLS.length} skills
              </span>
            </FadeUp>
          </div>

          {/* Pills grid */}
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((skill, i) => (
              <SkillPill
                key={skill.label}
                label={skill.label}
                index={i}
                inView={skillsInView}
              />
            ))}
          </div>
        </div>


      </div>

      {/* ── Bottom border ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
}

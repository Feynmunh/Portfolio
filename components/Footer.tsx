"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ROWS = 14;
const COLS = 20;

const BLOCK_EMPTY = 0;
const BLOCK_PURPLE = 1;
const BLOCK_YELLOW = 2;

const robotFrames = [
  // Robot 1 F0
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
  // Robot 1 F1
  [
    "                    ",
    "                    ",
    "    ##        ##    ",
    "   ##-##    ##-##   ",
    "    ##        ##    ",
    "      ########      ",
    "      #------#      ",
    "      #------#      ",
    "      ########      ",
    "      #      #      ",
    "     ##########     ",
    "     ######## #     ",
    "     ##########     ",
    "                    ",
  ],
  // Robot 2 F0
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
  // Robot 2 F1
  [
    "                    ",
    "                    ",
    "      ########      ",
    "     ##########     ",
    "    ##-####-####    ",
    "    ############    ",
    "    ##        ##    ",
    "   ###        ###   ",
    "   ### ###### ###   ",
    "   ### #----# ###   ",
    "   ### ###### ###   ",
    "       #    #       ",
    "       ##  ##       ",
    "                    ",
  ],
  // Robot 3 F0
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
  // Robot 3 F1
  [
    "                    ",
    "         ++         ",
    "         ##         ",
    "       ######       ",
    "      ########      ",
    "      ##-##-##      ",
    "      ########      ",
    "  #    ######    #  ",
    "  ##     ##     ##  ",
    "   ##########   #   ",
    "      #  ##  #      ",
    "         ##         ",
    "        ####        ",
    "                    ",
  ],
];

function GlitchMatrix() {
  const [grid, setGrid] = useState<number[]>([]);

  useEffect(() => {
    // Generate an initial random state
    const generateInitial = () => {
      const g = Array(ROWS * COLS).fill(BLOCK_EMPTY);
      for (let i = 0; i < g.length; i++) {
        if (Math.random() < 0.15) {
          g[i] = Math.random() < 0.85 ? BLOCK_PURPLE : BLOCK_YELLOW;
        }
      }
      return g;
    };

    setGrid(generateInitial());

    let tickCount = 0;

    const intervalId = setInterval(() => {
      tickCount++;

      setGrid((prev) => {
        if (prev.length === 0) return prev;
        const next = [...prev];

        // 1. Natural fade/glitch of background
        for (let i = 0; i < next.length; i++) {
          if (Math.random() < 0.25) {
            next[i] = BLOCK_EMPTY;
          }
        }

        // 2. Randomly mutate small clusters to simulate a glitch sequence
        const clusterCount = Math.floor(Math.random() * 3) + 1;

        for (let c = 0; c < clusterCount; c++) {
          const startX = Math.floor(Math.random() * COLS);
          const startY = Math.floor(Math.random() * ROWS);
          const blockW = Math.floor(Math.random() * 5) + 1;
          const blockH = Math.floor(Math.random() * 5) + 1;

          for (let y = startY; y < startY + blockH; y++) {
            for (let x = startX; x < startX + blockW; x++) {
              if (x < COLS && y < ROWS) {
                const idx = y * COLS + x;
                // Introduce noise or clear out the block
                if (Math.random() < 0.45) {
                  // 90% chance of being purple if spawned
                  next[idx] = Math.random() < 0.9 ? BLOCK_PURPLE : BLOCK_YELLOW;
                } else {
                  next[idx] = BLOCK_EMPTY;
                }
              }
            }
          }
        }

        // 3. Draw the robot on top
        // Cycle active robot every ~5 seconds (40 ticks)
        const activeRobot = Math.floor(tickCount / 40) % 3;
        // Alternate frames every 4 ticks for idle animation
        const frameSubIndex = Math.floor(tickCount / 4) % 2;

        const frameIndex = activeRobot * 2 + frameSubIndex;
        const frame = robotFrames[frameIndex];

        // Calculate an X offset to make the robot swing left and right slightly
        const xOffset = Math.round(Math.sin(tickCount / 6) * 2);

        for (let y = 0; y < ROWS; y++) {
          for (let x = 0; x < COLS; x++) {
            const char = frame[y]?.[x];
            if (!char) continue;

            const targetX = x + xOffset;

            // Only draw if targetX falls squarely within the grid bounds
            if (targetX >= 0 && targetX < COLS) {
              const idx = y * COLS + targetX;
              const isGlitch = Math.random() < 0.05;

              if (char === "#") {
                next[idx] = isGlitch ? BLOCK_YELLOW : BLOCK_PURPLE;
              } else if (char === "+") {
                next[idx] = isGlitch ? BLOCK_PURPLE : BLOCK_YELLOW;
              } else if (char === "=") {
                next[idx] = BLOCK_YELLOW;
              } else if (char === "-") {
                next[idx] = BLOCK_EMPTY;
              } else if (char === " ") {
                // force dark space occasionally to keep shape readable
                if (Math.random() < 0.7) {
                  next[idx] = BLOCK_EMPTY;
                }
              }
            }
          }
        }

        return next;
      });
    }, 120); // Fast interval for a "glitchy" feel

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="inline-flex relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          gap: "1px",
        }}
      >
        {grid.map((val, i) => (
          <div
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-colors duration-75 ${
              val === BLOCK_PURPLE
                ? "bg-[#B47CFF]"
                : val === BLOCK_YELLOW
                  ? "bg-[#FFEA00]"
                  : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-24 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Creative Glitch Matrix */}
        <div className="flex justify-center lg:justify-start">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GlitchMatrix />
          </m.div>
        </div>

        {/* Right Side: Simple Links & Brand */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-8">
          <h2 className="text-4xl md:text-6xl font-syne font-bold tracking-tighter uppercase">
            Mohit <span className="text-white/20">Sharma</span>
          </h2>

          <p className="font-inter text-white/50 text-sm md:text-base max-w-sm font-light">
            Connecting dots through code and design.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-end gap-7 md:gap-8 mt-4">
            {[
              {
                name: "X",
                Icon: (props: any) => (
                  <svg
                    width={props.size}
                    height={props.size}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "#",
              },
              { name: "GitHub", Icon: Github, href: "#" },
              { name: "LinkedIn", Icon: Linkedin, href: "#" },
              { name: "Email", Icon: Mail, href: "mailto:mohit@example.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white/40 hover:text-[#B47CFF] transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <p className="font-inter text-[10px] text-white/20 tracking-[0.2em] uppercase mt-8 lg:mt-12">
            © {new Date().getFullYear()} MOHIT SHARMA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

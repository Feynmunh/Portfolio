"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

const ROWS = 14;
const COLS = 20;

const BLOCK_EMPTY = 0;
const BLOCK_PURPLE = 1;
const BLOCK_YELLOW = 2;

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

    const intervalId = setInterval(() => {
      setGrid((prev) => {
        if (prev.length === 0) return prev;
        const next = [...prev];
        
        // Randomly mutate small clusters to simulate a glitch sequence
        const clusterCount = Math.floor(Math.random() * 4) + 1;
        
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
                  next[idx] = Math.random() < 0.90 ? BLOCK_PURPLE : BLOCK_YELLOW;
                } else {
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
          gap: "1px" 
        }}
      >
        {grid.map((val, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-colors duration-75 ${
              val === BLOCK_PURPLE ? "bg-[#B47CFF]" 
              : val === BLOCK_YELLOW ? "bg-[#FFEA00]" 
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

          <div className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-8 font-inter mt-4">
            {["Twitter", "GitHub", "LinkedIn", "Email"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-[#B47CFF] transition-colors duration-300"
              >
                {link}
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

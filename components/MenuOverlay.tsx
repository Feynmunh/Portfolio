"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { m } from "framer-motion";

interface MenuOverlayProps {
  onClose: () => void;
}

const menuItems = [
  {
    label: "About",
    href: "/about",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Who I am",
    imageAlign: "right" as const,
  },
  {
    label: "Projects",
    href: "/projects",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    description: "What I build",
    imageAlign: "left" as const,
  },
  {
    label: "Feed",
    href: "/feed",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "What I think",
    imageAlign: "right" as const,
  },
];

/* ── Animation Variants ── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.7, 0, 0.84, 0] },
  },
};

const bgPanelVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    scaleY: 0,
    originY: 1,
    transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.3 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 24,
    transition: {
      duration: 0.25,
      delay: i * 0.04,
      ease: [0.7, 0, 0.84, 0],
    },
  }),
};

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const dividerVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.6,
      delay: 0.28 + i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: { scaleX: 0, originX: 1, transition: { duration: 0.25 } },
};

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  /* ── Close on Escape ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <m.div
      ref={overlayRef}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* ── Background Panel ── */}
      <m.div
        variants={bgPanelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute inset-0 bg-black"
        style={{ transformOrigin: "top" }}
      />

      {/* ── Subtle noise texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Content ── */}
      <div className="relative flex flex-col h-full">
        {/* ── Header ── */}
        <m.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex items-center justify-between px-6 md:px-10 py-5"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={onClose}
            className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white/60 transition-colors duration-300"
            aria-label="Home"
          >
            <span className="font-syne font-bold text-white text-sm tracking-widest group-hover:scale-110 transition-transform duration-300 inline-block">
              M
            </span>
          </Link>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="relative w-11 h-11 rounded-full border border-white/25 hover:border-white/70 transition-colors duration-300 flex items-center justify-center group overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-400 origin-center" />
            <span className="relative flex flex-col items-center justify-center gap-[5px]">
              <span className="block h-px w-[18px] origin-center rotate-45 translate-y-[3px] bg-white group-hover:bg-black transition-colors duration-300" />
              <span className="block h-px w-[18px] origin-center -rotate-45 -translate-y-[4px] bg-white group-hover:bg-black transition-colors duration-300" />
            </span>
          </button>
        </m.div>

        {/* ── Top Divider ── */}
        <m.div
          variants={dividerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={0}
          className="h-px bg-white/10 mx-6 md:mx-10"
        />

        {/* ── Nav Items ── */}
        <nav
          className="flex-1 flex flex-col justify-center px-6 md:px-10 py-4"
          aria-label="Main navigation"
        >
          {menuItems.map((item, i) => (
            <div key={item.href}>
              <m.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-6 md:py-8 overflow-hidden"
                >
                  {/* Left side: image (when imageAlign is left) + label */}
                  <div
                    className={`flex items-center gap-6 ${item.imageAlign === "right" ? "flex-1" : ""}`}
                  >
                    {item.imageAlign === "left" && (
                      <CircleImage gradient={item.gradient} />
                    )}

                    {/* Nav label */}
                    <span
                      className="font-syne font-bold leading-none tracking-tight text-white/70 group-hover:text-white transition-colors duration-400"
                      style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Right side: description + image (when imageAlign is right) */}
                  <div className="flex items-center gap-6 ml-4">
                    {/* Description — hidden on mobile, visible md+ */}
                    <span className="hidden md:block font-inter text-xs tracking-widest uppercase text-white/25 group-hover:text-white/50 transition-colors duration-300 whitespace-nowrap">
                      {item.description}
                    </span>

                    {item.imageAlign === "right" && (
                      <CircleImage gradient={item.gradient} />
                    )}

                    {/* Arrow */}
                    <span
                      className="text-white/25 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-400 font-inter text-lg leading-none hidden md:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </m.div>

              {/* Divider after each item */}
              <m.div
                variants={dividerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i + 1}
                className="h-px bg-white/10"
              />
            </div>
          ))}
        </nav>

        {/* ── Footer ── */}
        <m.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 border-t border-white/[0.06]"
        >
          {/* Contact */}
          <div className="flex flex-col gap-1">
            <a
              href="mailto:mohit.sharma80805@gmail.com"
              className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-300 link-underline"
            >
              mohit.sharma80805@gmail.com
            </a>
            <span className="font-inter text-xs text-white/20 tracking-widest uppercase">
              Available for work
            </span>
          </div>

          {/* Center — tagline */}
          <p className="hidden md:block font-inter text-xs text-white/20 tracking-widest uppercase">
            AI · Fullstack · Developer
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-300 link-underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-300 link-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-300 link-underline"
            >
              X
            </a>
          </div>
        </m.div>
      </div>
    </m.div>
  );
}

/* ── Circle Image Component ── */
function CircleImage({ gradient }: { gradient: string }) {
  return (
    <div
      className="relative flex-shrink-0 w-14 h-14 md:w-[72px] md:h-[72px] rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500"
      style={{ background: gradient, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
      aria-hidden="true"
    >
      {/* Inner shine */}
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

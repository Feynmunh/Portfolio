"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Feed", href: "/feed" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock / unlock Lenis when menu opens ── */
  useEffect(() => {
    if (menuOpen) {
      window.dispatchEvent(new Event("menu:open"));
      document.body.style.overflow = "hidden";
    } else {
      window.dispatchEvent(new Event("menu:close"));
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ── Close menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <m.nav
        initial={{ y: -80, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        aria-label="Main Navigation"
        className={`absolute top-6 left-1/2 z-50 flex items-center gap-4 md:gap-6 px-3 py-1.5 w-auto rounded-full transition-all duration-500 ${
          scrolled && !menuOpen
            ? "bg-[#FDFBF7]/70 backdrop-blur-3xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent border border-transparent shadow-none"
        }`}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="group flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors duration-300"
          aria-label="Home"
        >
          <span className="font-syne font-bold text-white text-xs tracking-widest group-hover:scale-110 transition-transform duration-300 inline-block">
            M
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[14px] font-inter font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 backdrop-blur-xl text-white"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B294FF]" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Menu Button ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="relative w-9 h-9 rounded-full border border-white/20 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors duration-300 flex items-center justify-center group overflow-hidden"
        >
          {/* Hover fill */}
          <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-400 ease-expo-out origin-center" />

          {/* Hamburger / X lines */}
          <span className="relative flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`block h-px w-[18px] origin-center transition-all duration-300 ${menuOpen
                  ? "rotate-45 translate-y-[3px] bg-black group-hover:rotate-45 group-hover:translate-y-[3px]"
                  : "rotate-0 translate-y-0 bg-white group-hover:bg-black"
                }`}
            />
            <span
              className={`block h-px origin-center transition-all duration-300 ${menuOpen
                  ? "-rotate-45 -translate-y-[4px] w-[18px] bg-black group-hover:-rotate-45 group-hover:-translate-y-[4px] group-hover:w-[18px]"
                  : "rotate-0 w-[12px] bg-white group-hover:bg-black"
                }`}
            />
          </span>
        </button>
      </m.nav>

      {/* ── Menu Overlay ── */}
      <AnimatePresence mode="wait">
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

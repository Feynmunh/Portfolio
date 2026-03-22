"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
          scrolled && !menuOpen
            ? "bg-black/70 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white/60 transition-colors duration-300"
          aria-label="Home"
        >
          <span className="font-syne font-bold text-white text-sm tracking-widest group-hover:scale-110 transition-transform duration-300 inline-block">
            M
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative group text-sm font-inter tracking-wider uppercase"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/50 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-400 ease-expo-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Menu Button ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative w-11 h-11 rounded-full border border-white/25 hover:border-white/70 transition-colors duration-300 flex items-center justify-center group overflow-hidden"
        >
          {/* Hover fill */}
          <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-400 ease-expo-out origin-center" />

          {/* Hamburger / X lines */}
          <span className="relative flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`block h-px w-[18px] origin-center transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-[3px] bg-black"
                  : "rotate-0 translate-y-0 bg-white group-hover:bg-black"
              }`}
            />
            <span
              className={`block h-px origin-center transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-[4px] w-[18px] bg-black"
                  : "rotate-0 w-[12px] bg-white group-hover:bg-black"
              }`}
            />
          </span>
        </button>
      </motion.nav>

      {/* ── Menu Overlay ── */}
      <AnimatePresence mode="wait">
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

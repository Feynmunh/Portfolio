"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      autoRaf: true, // Lenis handles its own rAF — no manual loop needed
    });

    lenisRef.current = lenis;

    // Expose lenis instance globally so other components can use it
    (window as typeof window & { lenis: Lenis }).lenis = lenis;

    // Pause scroll when menu is open
    const handleMenuOpen = () => lenis.stop();
    const handleMenuClose = () => lenis.start();

    window.addEventListener("menu:open", handleMenuOpen);
    window.addEventListener("menu:close", handleMenuClose);

    return () => {
      lenis.destroy();
      window.removeEventListener("menu:open", handleMenuOpen);
      window.removeEventListener("menu:close", handleMenuClose);
    };
  }, []);

  return <>{children}</>;
}

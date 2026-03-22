"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Stable hover callbacks (no re-creation on each render)
  const onMouseEnterLink = useCallback((e: Event) => {
    dotRef.current?.classList.add("hovered");
    ringRef.current?.classList.add("hovered");
  }, []);

  const onMouseLeaveLink = useCallback((e: Event) => {
    dotRef.current?.classList.remove("hovered");
    ringRef.current?.classList.remove("hovered");
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Skip custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;
    let isMoving = false;
    let idleTimer: ReturnType<typeof setTimeout>;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      // If we were idle, restart the ring animation loop
      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(animateRing);
      }

      // Reset idle timer — pause rAF after 150ms of no movement
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
        // Do one final snap so the ring catches up
        ringX = mouseX;
        ringY = mouseY;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }, 150);
    };

    const animateRing = () => {
      if (!isMoving) return; // Stop the loop when idle

      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isMoving = false;
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // ── Track which elements already have listeners ──
    const trackedElements = new WeakSet<Element>();

    const attachLinkListeners = () => {
      const interactables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]',
      );
      interactables.forEach((el) => {
        if (trackedElements.has(el)) return; // Skip already-tracked elements
        trackedElements.add(el);
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    // ── Debounced MutationObserver ──
    let mutationTimer: ReturnType<typeof setTimeout>;
    const observer = new MutationObserver(() => {
      clearTimeout(mutationTimer);
      mutationTimer = setTimeout(attachLinkListeners, 300); // 300ms debounce
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    attachLinkListeners();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(idleTimer);
      clearTimeout(mutationTimer);
      isMoving = false;
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
    };
  }, [onMouseEnterLink, onMouseLeaveLink]);

  return (
    <>
      {/* Solid dot — snaps instantly */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
          transition:
            "width 0.2s cubic-bezier(0.16,1,0.3,1), height 0.2s cubic-bezier(0.16,1,0.3,1)",
          willChange: "transform",
        }}
      />

      {/* Trailing ring — lerps behind */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: "1.5px solid rgba(255,255,255,0.55)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          mixBlendMode: "difference",
          transition:
            "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}

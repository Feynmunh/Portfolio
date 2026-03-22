"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { projects } from "@/data/projects";

/* ── Animation Variants ── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headingVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeUpVariants = {
  hidden: { y: 32, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const cardVariants = {
  hidden: { y: 48, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      delay: i * 0.13,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ── Featured projects only ── */
const featured = projects.filter((p) => p.featured);

/* ── Project Card ── */
function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <m.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative flex flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#000000] hover:border-[#B47CFF]/50 transition-all duration-500"
    >
      {/* ── Visual Frame ── */}
      <div
        className="relative overflow-hidden border-b border-white/[0.08]"
        style={{ aspectRatio: "16 / 9" }}
      >
        {/* Strict pixel grid pattern instead of faint gradients */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Glitch block motif on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="absolute w-5 h-5 bg-[#B47CFF] transform -translate-y-8 -translate-x-12 animate-pulse" />
           <div className="absolute w-5 h-5 bg-[#FFEA00] transform translate-y-6 translate-x-10 animate-bounce" />
           <div className="absolute w-5 h-5 bg-[#FDFBF7] transform translate-y-8 -translate-x-8" style={{ animation: "pulse 1s infinite reverse" }} />
           <div className="absolute w-5 h-5 bg-[#B47CFF] transform -translate-y-6 translate-x-16" />
        </div>

        {/* Project number */}
        <div
          className="absolute top-3 left-4 font-mono text-xs tracking-wider"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          [{String(index + 1).padStart(2, "0")}]
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-4 font-mono text-[10px] tracking-widest px-2 py-0.5 border border-white/20 bg-black text-white/60">
          {project.year}
        </div>

        {/* Center Monogram (Pixel style) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-16 h-16 flex items-center justify-center text-2xl font-mono font-bold text-white/40 group-hover:text-black group-hover:bg-[#FFEA00] transition-colors duration-300 border border-white/10 group-hover:border-[#FFEA00]"
            style={{
              backdropFilter: "blur(4px)",
            }}
          >
            {project.title[0]}
          </div>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-6 gap-5 bg-[#050505]">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-syne font-bold text-white text-xl leading-tight group-hover:text-[#B47CFF] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Arrow link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#000000] hover:bg-[#FFEA00] transition-all duration-300 mt-0.5"
            style={{ fontSize: 16 }}
          >
            ↗
          </a>
        </div>

        {/* Description */}
        <p className="font-mono text-[12px] leading-relaxed flex-1 text-white/50">
          {project.description}
        </p>

        {/* Category tags */}
        <div className="flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <span key={cat} className="font-mono text-[10px] text-[#000000] bg-[#FFEA00] px-2 py-0.5 font-bold uppercase tracking-wider">
              {cat}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] text-white/30 uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </m.article>
  );
}

/* ── Main Component ── */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 px-6 md:px-10 overflow-hidden bg-black"
    >
      {/* ── Background matrix grid decoration ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ── */}
        <div ref={headingRef}>
          <m.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            custom={0}
            className="flex items-center gap-4 mb-6"
          >
            <span
              className="font-inter text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Selected Work
            </span>
            <m.span
              variants={lineVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
              className="flex-1 h-px max-w-[60px]"
              style={{ background: "rgba(255,255,255,0.12)", display: "block" }}
            />
          </m.div>

          {/* Heading with overflow-hidden clip */}
          <div style={{ overflow: "hidden" }}>
            <m.h2
              variants={headingVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
              className="font-syne font-extrabold text-white leading-none mb-4"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 7rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Projects
            </m.h2>
          </div>

          {/* Sub-heading row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <m.p
              variants={fadeUpVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
              custom={0.2}
              className="font-inter text-base max-w-md"
              style={{
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
              }}
            >
              A selection of things I've built — intelligent systems, fullstack
              products, and developer tools where AI does the heavy lifting.
            </m.p>

            <m.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
              custom={0.3}
            >
              <Link
                href="/projects"
                className="btn-outline group
 flex items-center gap-2 text-sm whitespace-nowrap"
              >
                All projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </m.div>
          </div>
        </div>

        {/* ── Project Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={gridInView}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <m.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          custom={0.5}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 font-inter text-sm group"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <span className="group-hover:text-white transition-colors duration-300">
              View all {projects.length} projects
            </span>
            <span
              className="h-px w-8 group-hover:w-16 transition-all duration-400"
              style={{
                background: "rgba(255,255,255,0.2)",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </Link>
        </m.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0a0a0a] hover:border-white/20 transition-colors duration-500"
      style={{ willChange: "transform, opacity" }}
    >
      {/* ── Colour accent bar ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          opacity: 0.6,
        }}
      />

      {/* ── Card visual ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16 / 9" }}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${project.color}22 0%, ${project.accentColor}11 100%)`,
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glowing orb
         */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{ background: project.color }}
        />

        {/* Project number */}
        <div
          className="absolute top-4 left-5 font-inter text-xs tracking-widest"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Year badge */}
        <div
          className="absolute top-4 right-5 font-inter text-xs tracking-widest px-2.5 py-1 rounded-full border"
          style={{
            color: "rgba(255,255,255,0.35)",
            borderColor: "rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          {project.year}
        </div>

        {/* Center icon placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-syne font-black opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${project.color}44, ${project.accentColor}33)`,
              border: `1px solid ${project.color}33`,
              color: project.accentColor,
              backdropFilter: "blur(8px)",
            }}
          >
            {project.title[0]}
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.color}18, transparent)`,
          }}
        />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-syne font-bold text-white text-xl leading-tight group-hover:text-white transition-colors duration-300"
            style={{ letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>

          {/* Arrow link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:text-white hover:border-white/50 transition-all duration-300 mt-0.5"
            style={{ fontSize: 14 }}
          >
            ↗
          </a>
        </div>

        {/* Description */}
        <p
          className="font-inter text-sm leading-relaxed flex-1"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {project.description}
        </p>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.category.map((cat) => (
            <span key={cat} className="tag" style={{ fontSize: 10 }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div
          className="pt-4 border-t flex flex-wrap gap-2"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-inter text-[11px]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />
    </motion.article>
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
      className="relative w-full py-28 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* ── Background grid decoration ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section heading ── */}
        <div ref={headingRef}>
          <motion.div
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
            <motion.span
              variants={lineVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
              className="flex-1 h-px max-w-[60px]"
              style={{ background: "rgba(255,255,255,0.12)", display: "block" }}
            />
          </motion.div>

          {/* Heading with overflow-hidden clip */}
          <div style={{ overflow: "hidden" }}>
            <motion.h2
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
            </motion.h2>
          </div>

          {/* Sub-heading row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.p
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
            </motion.p>

            <motion.div
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
            </motion.div>
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
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}

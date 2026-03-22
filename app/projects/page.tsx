"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";

/* ── Animation variants ── */
const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const headingReveal = {
  hidden: { y: "110%" },
  visible: (delay = 0) => ({
    y: "0%",
    transition: {
      duration: 1.0,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 16,
    transition: {
      duration: 0.25,
      ease: [0.7, 0, 0.84, 0] as [number, number, number, number],
    },
  },
};

/* ── Filter button ── */
function FilterButton({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center gap-2 px-4 py-2 rounded-full font-inter text-xs tracking-widest uppercase transition-all duration-300 overflow-hidden"
      style={{
        border: `1px solid ${active ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)"}`,
        color: active ? "#ffffff" : "rgba(255,255,255,0.4)",
        background: active ? "rgba(255,255,255,0.08)" : "transparent",
      }}
    >
      <span className="relative z-10">{label}</span>
      <span
        className="relative z-10 text-[10px] px-1.5 py-0.5 rounded-full"
        style={{
          background: active
            ? "rgba(255,255,255,0.15)"
            : "rgba(255,255,255,0.06)",
          color: active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
        }}
      >
        {count}
      </span>
      {/* hover fill */}
      <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

/* ── Project card ── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0a0a0a] hover:border-white/20 transition-colors duration-500"
      style={{ willChange: "transform, opacity" }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}99, transparent)`,
        }}
      />

      {/* Visual */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {/* bg gradient */}
        <div
          className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            background: `linear-gradient(135deg, ${project.color}1a 0%, ${project.accentColor}0d 100%)`,
          }}
        />

        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        {/* glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: project.color }}
        />

        {/* corner labels */}
        <div
          className="absolute top-4 left-5 font-inter text-[11px] tracking-[0.15em]"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <div
          className="absolute top-4 right-5 font-inter text-[11px] tracking-widest px-2.5 py-1 rounded-full border"
          style={{
            color: "rgba(255,255,255,0.3)",
            borderColor: "rgba(255,255,255,0.09)",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          {project.year}
        </div>

        {/* center monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center font-syne font-black text-2xl opacity-55 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${project.color}44, ${project.accentColor}2a)`,
              border: `1px solid ${project.color}30`,
              color: project.accentColor,
              backdropFilter: "blur(10px)",
            }}
          >
            {project.title[0]}
          </div>
        </div>

        {/* featured badge */}
        {project.featured && (
          <div
            className="absolute bottom-4 left-5 font-inter text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
            style={{
              background: `${project.color}22`,
              border: `1px solid ${project.color}44`,
              color: project.accentColor,
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-syne font-bold text-white leading-tight"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>

          <div className="flex items-center gap-2 flex-shrink-0">
            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub — ${project.title}`}
              className="w-8 h-8 rounded-full border border-white/12 flex items-center justify-center text-white/30 hover:text-white hover:border-white/50 transition-all duration-300 font-mono text-xs"
            >
              ⌥
            </a>
            {/* Live link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="w-8 h-8 rounded-full border border-white/12 flex items-center justify-center text-white/30 hover:text-white hover:border-white/50 transition-all duration-300 text-sm"
            >
              ↗
            </a>
          </div>
        </div>

        <p
          className="font-inter text-sm leading-relaxed flex-1"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          {project.description}
        </p>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="font-inter text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border"
              style={{
                color: "rgba(255,255,255,0.35)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="pt-4 border-t border-white/[0.07] flex flex-wrap gap-x-3 gap-y-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-inter text-[11px]"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />
    </motion.article>
  );
}

/* ── Main Page ── */
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.some((c) => c === activeFilter));

  /* Count per category */
  const getCategoryCount = (cat: string) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.category.some((c) => c === cat)).length;

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-28">
      {/* ── Page header ── */}
      <header
        ref={headerRef}
        className="relative max-w-7xl mx-auto px-6 md:px-10 mb-16 md:mb-20"
      >
        {/* bg grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        {/* eyebrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-8"
        >
          <Link
            href="/"
            className="font-inter text-xs tracking-widest uppercase text-white/25 hover:text-white/60 transition-colors duration-300 link-underline"
          >
            Home
          </Link>
          <span className="text-white/15 text-xs">/</span>
          <span className="font-inter text-xs tracking-widest uppercase text-white/40">
            Projects
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Heading */}
          <div>
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                custom={0.15}
                variants={headingReveal}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                className="font-syne font-extrabold text-white leading-none"
                style={{
                  fontSize: "clamp(3.5rem, 11vw, 11rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              >
                Projects
              </motion.h1>
            </div>
            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              className="font-inter mt-5 max-w-lg leading-relaxed"
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "rgba(255,255,255,0.38)",
              }}
            >
              Intelligent systems, fullstack products, and developer tools.
              Every project starts with a clear problem and ends with something
              real people use.
            </motion.p>
          </div>

          {/* Stat */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="flex-shrink-0 flex flex-col items-start md:items-end gap-1"
          >
            <span
              className="font-syne font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff" }}
            >
              {projects.length}
            </span>
            <span
              className="font-inter text-xs tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Projects built
            </span>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 h-px w-full"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
      </header>

      {/* ── Filter Bar ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10 md:mb-14">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2.5"
        >
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              active={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
              count={getCategoryCount(cat)}
            />
          ))}
        </motion.div>
      </div>

      {/* ── Project Grid ── */}
      <motion.div layout className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Results count */}
        <motion.p
          layout
          className="font-inter text-xs tracking-widest uppercase mb-8"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Showing {filtered.length} of {projects.length}
        </motion.p>

        <AnimatePresence mode="sync">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter}
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-28 gap-4"
            >
              <span
                className="font-syne font-bold text-5xl"
                style={{ color: "rgba(255,255,255,0.06)" }}
              >
                ∅
              </span>
              <p
                className="font-inter text-sm"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                No projects in this category yet.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="btn-outline mt-2"
                style={{ fontSize: 12, padding: "10px 20px" }}
              >
                View all
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Bottom CTA ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/[0.07] bg-[#0a0a0a] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="flex flex-col gap-3">
            <span
              className="font-inter text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Got a project in mind?
            </span>
            <h2
              className="font-syne font-bold text-white leading-none"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Let's build together.
            </h2>
            <p
              className="font-inter"
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                color: "rgba(255,255,255,0.38)",
                maxWidth: 420,
                lineHeight: 1.65,
              }}
            >
              I'm available for freelance projects, collaboration, or full-time
              roles. If you have an idea worth building, let's talk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="mailto:mohit@example.com"
              className="btn-primary whitespace-nowrap"
            >
              Get in touch →
            </a>
            <Link href="/feed" className="btn-outline whitespace-nowrap">
              Read the blog
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

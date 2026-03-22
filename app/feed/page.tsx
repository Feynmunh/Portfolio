"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { m, useInView, AnimatePresence } from "framer-motion";
import { feedPosts, categories, type Category } from "@/data/feed";

/* ── Category color map ── */
const CATEGORY_COLORS: Record<string, string> = {
  Development: "#6366f1",
  AI: "#10b981",
  Design: "#f59e0b",
  Thoughts: "#ec4899",
};

/* ── Animation variants ── */
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
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.09,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.97,
    transition: {
      duration: 0.22,
      ease: [0.7, 0, 0.84, 0] as [number, number, number, number],
    },
  },
};

/* ── Format date ── */
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
  const color =
    label === "All" ? "rgba(255,255,255,0.8)" : CATEGORY_COLORS[label];

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 overflow-hidden"
      style={{
        border: `1px solid ${active ? (color ?? "rgba(255,255,255,0.5)") : "rgba(255,255,255,0.1)"}`,
        color: active ? "#ffffff" : "rgba(255,255,255,0.38)",
        background: active ? "rgba(255,255,255,0.06)" : "transparent",
        fontFamily: "var(--font-inter)",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      <span className="relative z-10">{label}</span>
      <span
        className="relative z-10 text-[10px] px-1.5 py-0.5 rounded-full transition-colors duration-300"
        style={{
          background: active
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.05)",
          color: active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.22)",
        }}
      >
        {count}
      </span>
      <span className="absolute inset-0 rounded-full bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

/* ── Featured post card ── */
function FeaturedCard({ post }: { post: (typeof feedPosts)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const color = CATEGORY_COLORS[post.category] ?? "#ffffff";

  return (
    <m.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0a0a0a] hover:border-white/20 transition-colors duration-500 cursor-none"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}99, transparent)`,
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_420px]">
        {/* Left: content */}
        <div className="flex flex-col justify-between p-8 md:p-10 gap-8">
          {/* Top row */}
          <div className="flex items-center gap-4">
            <span
              className="font-inter text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: color,
                borderColor: `${color}44`,
                background: `${color}12`,
              }}
            >
              {post.category}
            </span>
            <span
              className="font-inter text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: "rgba(255,255,255,0.5)",
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Featured
            </span>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-4">
            <h2
              className="font-syne font-bold text-white leading-tight group-hover:text-white transition-colors duration-300"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {post.title}
            </h2>
            <p
              className="font-inter leading-relaxed max-w-lg"
              style={{
                fontSize: "clamp(14px, 1.4vw, 16px)",
                color: "rgba(255,255,255,0.42)",
              }}
            >
              {post.excerpt}
            </p>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <span
                className="font-inter text-xs"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {formatDate(post.date)}
              </span>
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
              <span
                className="font-inter text-xs"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {post.readTime}
              </span>
            </div>

            <span
              className="font-inter text-sm text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-400"
              aria-hidden="true"
            >
              Read →
            </span>
          </div>
        </div>

        {/* Right: visual */}
        <div
          className="relative min-h-[200px] md:min-h-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)`,
          }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Glow orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-25 group-hover:opacity-45 transition-opacity duration-600"
            style={{ background: color }}
          />

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center font-syne font-black text-4xl opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${color}44, ${color}22)`,
                border: `1px solid ${color}44`,
                color: color,
                backdropFilter: "blur(8px)",
              }}
            >
              {post.title[0]}
            </div>
          </div>

          {/* Tags in corner */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="font-inter text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </m.article>
  );
}

/* ── Regular post card ── */
function PostCard({
  post,
  index,
}: {
  post: (typeof feedPosts)[0];
  index: number;
}) {
  const color = CATEGORY_COLORS[post.category] ?? "#ffffff";

  return (
    <m.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative flex flex-col rounded-xl overflow-hidden border border-white/[0.07] bg-[#0a0a0a] hover:border-white/20 transition-colors duration-500 cursor-none"
      style={{ }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
        }}
      />

      {/* Visual area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {/* bg */}
        <div
          className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            background: `linear-gradient(135deg, ${color}14 0%, ${color}08 100%)`,
          }}
        />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />

        {/* glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: color }}
        />

        {/* center monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center font-syne font-black text-xl opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${color}44, ${color}22)`,
              border: `1px solid ${color}35`,
              color: color,
              backdropFilter: "blur(8px)",
            }}
          >
            {post.title[0]}
          </div>
        </div>

        {/* Category badge */}
        <div
          className="absolute top-4 left-5 font-inter text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border"
          style={{
            color: color,
            borderColor: `${color}44`,
            background: `${color}18`,
            backdropFilter: "blur(8px)",
          }}
        >
          {post.category}
        </div>

        {/* Read time */}
        <div
          className="absolute top-4 right-5 font-inter text-[10px] tracking-widest px-2.5 py-1 rounded-full border"
          style={{
            color: "rgba(255,255,255,0.3)",
            borderColor: "rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
          }}
        >
          {post.readTime}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Date */}
        <span
          className="font-inter text-xs"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          {formatDate(post.date)}
        </span>

        {/* Title */}
        <h3
          className="font-syne font-bold text-white leading-tight group-hover:text-white/90 transition-colors duration-300"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            letterSpacing: "-0.015em",
          }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className="font-inter text-sm leading-relaxed flex-1"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-inter text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border"
              style={{
                color: "rgba(255,255,255,0.3)",
                borderColor: "rgba(255,255,255,0.09)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <div
          className="pt-4 border-t flex items-center justify-between"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <span
            className="font-inter text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {post.readTime}
          </span>
          <span
            className="font-inter text-sm text-white/28 group-hover:text-white group-hover:translate-x-1 transition-all duration-400"
            aria-hidden="true"
          >
            Read →
          </span>
        </div>
      </div>

      {/* bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </m.article>
  );
}

/* ══════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════ */
export default function FeedPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered =
    activeFilter === "All"
      ? feedPosts
      : feedPosts.filter((p) => p.category === activeFilter);

  const featuredPosts = feedPosts.filter((p) => p.featured);
  const regularFiltered = filtered.filter(
    (p) => !p.featured || activeFilter !== "All",
  );

  const getCategoryCount = (cat: string) =>
    cat === "All"
      ? feedPosts.length
      : feedPosts.filter((p) => p.category === cat).length;

  return (
    <div className="min-h-screen bg-black text-white pb-28">
      {/* ══ HEADER ══ */}
      <header
        ref={headerRef}
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 overflow-hidden"
      >
        {/* bg radial glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <m.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="flex items-center gap-3 mb-10"
          >
            <Link
              href="/"
              className="font-inter text-xs tracking-widest uppercase text-white/22 hover:text-white/55 transition-colors duration-300 link-underline"
            >
              Home
            </Link>
            <span className="text-white/15 text-xs">/</span>
            <span className="font-inter text-xs tracking-widest uppercase text-white/38">
              Feed
            </span>
          </m.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            {/* Heading */}
            <div>
              <div style={{ overflow: "hidden" }}>
                <m.h1
                  custom={0.1}
                  variants={headingReveal}
                  initial="hidden"
                  animate={headerInView ? "visible" : "hidden"}
                  className="font-syne font-extrabold text-white leading-none"
                  style={{
                    fontSize: "clamp(4rem, 13vw, 13rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.88,
                  }}
                >
                  Feed
                </m.h1>
              </div>

              <m.p
                custom={0.28}
                variants={fadeUp}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                className="font-inter mt-6 max-w-lg leading-relaxed"
                style={{
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                Thoughts on AI development, fullstack engineering, product
                design, and whatever else I find worth writing about.
              </m.p>
            </div>

            {/* Stats */}
            <m.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              className="flex gap-10 flex-shrink-0"
            >
              <div className="flex flex-col gap-1">
                <span
                  className="font-syne font-bold"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#ffffff",
                  }}
                >
                  {feedPosts.length}
                </span>
                <span
                  className="font-inter text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Articles
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-syne font-bold"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#ffffff",
                  }}
                >
                  {categories.length - 1}
                </span>
                <span
                  className="font-inter text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Topics
                </span>
              </div>
            </m.div>
          </div>
        </div>

        {/* bottom border */}
        <div className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 h-px bg-white/[0.07]" />
      </header>

      {/* ══ FEATURED (only shown when All filter active) ══ */}
      <AnimatePresence>
        {activeFilter === "All" && featuredPosts.length > 0 && (
          <m.section
            key="featured"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-20"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <span
                className="font-inter text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Featured
              </span>
              <div
                className="flex-1 h-px max-w-[48px
]"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
            </div>

            {/* Featured cards */}
            <div className="flex flex-col gap-5">
              {featuredPosts.map((post) => (
                <FeaturedCard key={post.id} post={post} />
              ))}
            </div>
          </m.section>
        )}
      </AnimatePresence>

      {/* ══ FILTER BAR ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <div className="flex flex-col gap-6">
          {/* Label + filters */}
          <div className="flex items-center gap-4">
            <span
              className="font-inter text-[10px] tracking-[0.3em] uppercase flex-shrink-0"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {activeFilter === "All" ? "All Posts" : activeFilter}
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
          </div>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                label={cat}
                active={activeFilter === cat}
                onClick={() => setActiveFilter(cat as Category | "All")}
                count={getCategoryCount(cat)}
              />
            ))}
          </m.div>
        </div>
      </div>

      {/* ══ POSTS GRID ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Count */}
        <m.p
          className="font-inter text-xs tracking-widest uppercase mb-8"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          {filtered.length === feedPosts.length
            ? `All ${feedPosts.length} posts`
            : `${filtered.length} of ${feedPosts.length} posts`}
        </m.p>

        <AnimatePresence mode="sync">
          {filtered.length > 0 ? (
            <m.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {(activeFilter === "All"
                ? filtered.filter((p) => !p.featured)
                : filtered
              ).map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))}
            </m.div>
          ) : (
            <m.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32 gap-4"
            >
              <span
                className="font-syne font-bold text-5xl select-none"
                style={{ color: "rgba(255,255,255,0.06)" }}
                aria-hidden="true"
              >
                ∅
              </span>
              <p
                className="font-inter text-sm"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                No posts in this category yet.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="btn-outline mt-2"
                style={{ fontSize: 12, padding: "10px 20px" }}
              >
                View all posts
              </button>
            </m.div>
          )}
        </AnimatePresence>
      </div>

      {/* ══ NEWSLETTER / CTA BAND ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-24 md:mt-32">
        <m.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0a0a] p-10 md:p-14"
        >
          {/* bg decoration */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          {/* glow orbs */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: "#6366f1" }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: "#10b981" }}
          />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* Left */}
            <div className="flex flex-col gap-4 max-w-lg">
              <span
                className="font-inter text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                Stay in the loop
              </span>
              <h2
                className="font-syne font-bold text-white leading-tight"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                Ideas worth reading,
                <br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>
                  straight to your inbox.
                </span>
              </h2>
              <p
                className="font-inter text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.36)" }}
              >
                No spam. Just thoughtful writing on AI, fullstack engineering,
                and building products that matter — whenever I have something
                worth sharing.
              </p>
            </div>

            {/* Right: email form */}
            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[320px]">
              <div
                className="flex items-center gap-0 rounded-xl overflow-hidden border border-white/10 focus-within:border-white/30 transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-5 py-4 font-inter text-sm text-white placeholder-white/20 outline-none min-w-0"
                  aria-label="Email address"
                  style={{ fontSize: 14 }}
                />
                <button
                  type="button"
                  className="px-5 py-4 font-syne font-bold text-xs tracking-widest uppercase text-black bg-white hover:bg-white/88 transition-colors duration-300 whitespace-nowrap flex-shrink-0"
                  style={{ fontSize: 11 }}
                >
                  Subscribe
                </button>
              </div>
              <p
                className="font-inter text-[11px] text-center"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                Join thoughtful developers who care about AI &amp; craft.
              </p>
            </div>
          </div>
        </m.div>
      </div>

      {/* ══ BOTTOM LINKS ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="/projects"
          className="group flex items-center gap-3 font-inter text-sm"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          <span className="group-hover:text-white transition-colors duration-300">
            ← Explore Projects
          </span>
        </Link>

        <Link
          href="/about"
          className="group flex items-center gap-3 font-inter text-sm"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          <span className="group-hover:text-white transition-colors duration-300">
            About Me →
          </span>
        </Link>
      </div>
    </div>
  );
}

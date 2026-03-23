"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useInView } from "framer-motion";
import { feedItems, type FeedItem } from "@/data/feed";

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
};

/* ── Bento Feed Card ── */
function FeedCard({
  item,
  index,
}: {
  item: FeedItem;
  index: number;
}) {
  const isImageOnly = item.type === "image";
  const isLink = item.type === "link";

  return (
    <m.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`group relative flex flex-col rounded-[24px] overflow-hidden bg-[#111111] hover:brightness-110 transition-all duration-300 shadow-xl border border-white/5 ${item.bentoClass}`}
    >
      {isImageOnly ? (
        <div className="relative w-full h-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageUrl}
            alt={item.title || "Feed image"}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        </div>
      ) : (
        <div className="flex flex-col h-full p-6 md:p-8 gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <span className="text-white/40 text-xs font-bold">
                {isLink ? "↗" : "💬"}
              </span>
            </div>
            {item.title && (
              <h3 className="font-syne font-bold text-white text-xl">
                {item.title}
              </h3>
            )}
            {item.text && (
              <p className="font-inter text-sm text-white/50 leading-relaxed">
                {item.text}
              </p>
            )}
          </div>
          {isLink && item.linkUrl && (
            <a
              href={item.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto font-inter text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-300"
            >
              {item.linkText || "Visit Link"}
            </a>
          )}
        </div>
      )}
    </m.article>
  );
}

/* ══════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════ */
export default function FeedPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-black text-white pb-28">
      {/* ══ HEADER ══ */}
      <header
        ref={headerRef}
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 overflow-hidden"
      >
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
                "I can live with doubt and uncertainty and not knowing. I think it's much more interesting to live not knowing than to have answers which might be wrong." -Richard Feynman.
              </m.p>
            </div>
          </div>
        </div>

        {/* bottom border */}
        <div className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 h-px bg-white/[0.07]" />
      </header>

      {/* ══ BENTO GRID ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
          {feedItems.map((item, i) => (
            <FeedCard key={item.id} item={item} index={i} />
          ))}
        </div>
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

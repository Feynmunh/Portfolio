"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";

/* ── Skills data ── */
const SKILLS = [
  { label: "Next.js", category: "Frontend" },
  { label: "React", category: "Frontend" },
  { label: "TypeScript", category: "Frontend" },
  { label: "Tailwind CSS", category: "Frontend" },
  { label: "Framer Motion", category: "Frontend" },
  { label: "OpenAI API", category: "AI" },
  { label: "LangChain", category: "AI" },
  { label: "Pinecone", category: "AI" },
  { label: "Whisper", category: "AI" },
  { label: "Hugging Face", category: "AI" },
  { label: "Python", category: "Backend" },
  { label: "FastAPI", category: "Backend" },
  { label: "Node.js", category: "Backend" },
  { label: "PostgreSQL", category: "Backend" },
  { label: "Redis", category: "Backend" },
  { label: "Docker", category: "DevOps" },
  { label: "Vercel", category: "DevOps" },
  { label: "Git", category: "DevOps" },
];



/* ── Reusable fade-up wrapper ── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ── Clip-reveal heading ── */
function RevealHeading({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div ref={ref} style={{ overflow: "hidden" }} className={className}>
      <m.div
        initial={{ y: "105%" }}
        animate={inView ? { y: "0%" } : { y: "105%" }}
        transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </div>
  );
}

/* ── Skill pill ── */
function SkillPill({
  label,
  index,
  inView,
}: {
  label: string;
  index: number;
  inView: boolean;
}) {
  return (
    <m.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{
        duration: 0.5,
        delay: 0.05 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="tag"
      style={{ cursor: "none" }}
    >
      {label}
    </m.span>
  );
}

/* ── Main Component ── */
export default function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsInView = useInView(skillsRef, {
    once: true,
    margin: "-60px 0px",
  });



  return (
    <section
      id="about"
      className="relative w-full bg-black py-32 md:py-44 overflow-hidden"
    >
      {/* ── Subtle top border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Section label ── */}

        <FadeUp delay={0}>
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/25 block mb-12">
            01 / About
          </span>
        </FadeUp>

        {/* ── Bio section ── */}
        <div className="flex flex-col gap-16 mb-24 lg:mb-32">
          {/* ── Heading + Bio ── */}
          <div>
            {/* Large heading */}
            <div className="mb-10">
              <RevealHeading delay={0.1}>
                <h2
                  className="font-syne font-bold leading-[0.92] tracking-tight"
                  style={{
                    fontSize: "clamp(2.6rem, 7vw, 7.5rem)",
                    color: "#ffffff",
                  }}
                >
                  Building at the
                </h2>
              </RevealHeading>
              <RevealHeading delay={0.18}>
                <h2
                  className="font-syne font-bold leading-[0.92] tracking-tight"
                  style={{
                    fontSize: "clamp(2.6rem, 7vw, 7.5rem)",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  edge of AI.
                </h2>
              </RevealHeading>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-5 max-w-xl">
              <FadeUp delay={0.28}>
                <p
                  className="font-inter leading-relaxed"
                  style={{
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  I'm <span className="text-white font-medium">Mohit</span> — an
                  AI Fullstack Developer who lives at the intersection of large
                  language models and production-grade software. I don't just
                  integrate AI features; I architect systems where intelligence
                  is the foundation.
                </p>
              </FadeUp>

              <FadeUp delay={0.36}>
                <p
                  className="font-inter leading-relaxed"
                  style={{
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  From real-time LLM streaming interfaces to RAG pipelines,
                  voice AI assistants, and full SaaS platforms — I care about
                  the entire stack. Clean APIs, thoughtful UX, and AI that
                  actually works in production.
                </p>
              </FadeUp>

              <FadeUp delay={0.42}>
                <p
                  className="font-inter leading-relaxed"
                  style={{
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  Based in New Delhi, India. Open to remote collaboration
                  worldwide.
                </p>
              </FadeUp>

              {/* CTA */}
              <FadeUp delay={0.5}>
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="/projects"
                    className="btn-primary"
                    style={{ fontSize: 13 }}
                  >
                    See My Work →
                  </a>
                  <a
                    href="mailto:mohit@example.com"
                    className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-300 link-underline"
                  >
                    Say hello
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>


        </div>

        {/* ── Divider ── */}
        <FadeUp delay={0}>
          <div className="divider mb-16 md:mb-20" />
        </FadeUp>

        {/* ── Skills ── */}
        <div ref={skillsRef}>
          <div className="flex items-baseline justify-between mb-10 gap-6">
            <FadeUp delay={0.05}>
              <h3
                className="font-syne font-bold"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Tools & Technologies
              </h3>
            </FadeUp>
            <FadeUp delay={0.12}>
              <span
                className="font-inter text-xs tracking-widest uppercase shrink-0"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {SKILLS.length} skills
              </span>
            </FadeUp>
          </div>

          {/* Pills grid */}
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((skill, i) => (
              <SkillPill
                key={skill.label}
                label={skill.label}
                index={i}
                inView={skillsInView}
              />
            ))}
          </div>
        </div>

        {/* ── Availability banner ── */}
        <FadeUp delay={0.1} className="mt-20 md:mt-28">
          <div
            className="rounded-xl border border-white/[0.08] px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div className="flex items-center gap-4">
              {/* Green pulse dot */}
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <p
                className="font-inter"
                style={{
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Currently open to{" "}
                <span className="text-white font-medium">
                  freelance projects &amp; full-time roles
                </span>
              </p>
            </div>
            <a
              href="mailto:mohit@example.com"
              className="btn-outline shrink-0"
              style={{
                fontSize: 13,
                padding: "11px 22px",
                whiteSpace: "nowrap",
              }}
            >
              Get in Touch →
            </a>
          </div>
        </FadeUp>
      </div>

      {/* ── Bottom border ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
}

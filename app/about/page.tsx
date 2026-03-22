"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ── Timeline data ── */
const TIMELINE = [
  {
    year: "2024",
    role: "AI Fullstack Developer",
    company: "Freelance & Open Source",
    description:
      "Building production AI applications — LLM-powered SaaS products, RAG pipelines, real-time streaming interfaces, and developer tools. Shipped 8+ projects used by thousands of users.",
    tags: ["Next.js", "OpenAI", "LangChain", "FastAPI"],
    current: true,
  },
  {
    year: "2023",
    role: "Fullstack Developer",
    company: "Tech Startup",
    description:
      "Led frontend architecture for a B2B SaaS platform. Introduced AI-powered features including smart search, automated report generation, and an in-app assistant. Reduced user onboarding time by 40%.",
    tags: ["React", "Node.js", "PostgreSQL", "GPT-4"],
    current: false,
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Crafted high-performance web experiences for clients across e-commerce, fintech, and media. Specialised in animation-rich interfaces and Core Web Vitals optimisation.",
    tags: ["React", "TypeScript", "Tailwind", "GSAP"],
    current: false,
  },
  {
    year: "2021",
    role: "Junior Web Developer",
    company: "First Role",
    description:
      "Started professional journey building React applications, RESTful APIs, and learning the fundamentals of scalable software architecture. Fell in love with clean code and great UX.",
    tags: ["React", "Node.js", "MongoDB", "CSS"],
    current: false,
  },
];

/* ── Skill categories ── */
const SKILL_GROUPS = [
  {
    category: "Frontend",
    color: "#6366f1",
    skills: [
      { name: "Next.js", level: 98 },
      { name: "React", level: 97 },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    category: "AI / ML",
    color: "#10b981",
    skills: [
      { name: "OpenAI API", level: 96 },
      { name: "LangChain", level: 88 },
      { name: "Pinecone / RAG", level: 84 },
      { name: "Whisper / TTS", level: 80 },
      { name: "Hugging Face", level: 76 },
    ],
  },
  {
    category: "Backend",
    color: "#f59e0b",
    skills: [
      { name: "Python / FastAPI", level: 90 },
      { name: "Node.js", level: 92 },
      { name: "PostgreSQL", level: 86 },
      { name: "Redis", level: 80 },
      { name: "REST / GraphQL", level: 88 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#ec4899",
    skills: [
      { name: "Vercel / Railway", level: 92 },
      { name: "Docker", level: 78 },
      { name: "Git / GitHub", level: 95 },
      { name: "Supabase / Prisma", level: 85 },
      { name: "CI/CD Pipelines", level: 76 },
    ],
  },
];

/* ── Values ── */
const VALUES = [
  {
    icon: "⚡",
    title: "Ship Fast, Iterate Faster",
    body: "The best product is the one users can give feedback on. I prioritise getting real software in front of real people quickly, then refining relentlessly.",
  },
  {
    icon: "🧠",
    title: "AI as Infrastructure",
    body: "I don't bolt AI onto existing apps. I design systems where intelligence is foundational — from the data model to the API surface to the user experience.",
  },
  {
    icon: "✦",
    title: "Craft Matters",
    body: "Every interaction, every animation, every error message is an opportunity. I care about the 1% that most developers skip, because users feel it even when they can't name it.",
  },
  {
    icon: "🔍",
    title: "Understand the Problem First",
    body: "The worst code is code that solves the wrong problem perfectly. I invest time understanding the why before touching a keyboard.",
  },
];

/* ── Animation helpers ── */
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
  const inView = useInView(ref, { once: true, margin: "-72px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RevealText({
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
      <motion.div
        initial={{ y: "108%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── Skill bar ── */
function SkillBar({
  name,
  level,
  color,
  delay,
  inView,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span
          className="font-inter text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {name}
        </span>
        <span
          className="font-inter text-xs tabular-nums"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {level}%
        </span>
      </div>

      {/* Track */}
      <div
        className="relative w-full rounded-full overflow-hidden"
        style={{ height: 2, background: "rgba(255,255,255,0.07)" }}
      >
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1.1,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

/* ── Timeline item ── */
function TimelineItem({
  item,
  index,
  inView,
}: {
  item: (typeof TIMELINE)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.85,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Vertical line */}
      {index < TIMELINE.length - 1 && (
        <div
          className="absolute left-[11px] top-5 bottom-0 w-px"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />
      )}

      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full border flex items-center justify-center"
        style={{
          borderColor: item.current
            ? "rgba(255,255,255,0.5)"
            : "rgba(255,255,255,0.12)",
          background: item.current ? "rgba(255,255,255,0.08)" : "transparent",
        }}
      >
        {item.current && (
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        {/* Year + current badge */}
        <div className="flex items-center gap-3">
          <span
            className="font-inter text-xs tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            {item.year}
          </span>
          {item.current && (
            <span
              className="font-inter text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border"
              style={{
                color: "rgba(255,255,255,0.55)",
                borderColor: "rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Now
            </span>
          )}
        </div>

        {/* Role */}
        <h4
          className="font-syne font-bold leading-tight"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "#ffffff",
          }}
        >
          {item.role}
        </h4>

        <span
          className="font-inter text-sm"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {item.company}
        </span>

        {/* Description */}
        <p
          className="font-inter text-sm leading-relaxed mt-1 max-w-lg"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {item.tags.map((tag) => (
            <span key={tag} className="tag" style={{ fontSize: 10 }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Value card ── */
function ValueCard({
  item,
  index,
  inView,
}: {
  item: (typeof VALUES)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.11,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group p-7 rounded-xl border border-white/[0.07] hover:border-white/20 transition-colors duration-500 flex flex-col gap-4"
      style={{ background: "rgba(255,255,255,0.025)" }}
    >
      <span style={{ fontSize: 28 }} aria-hidden="true">
        {item.icon}
      </span>
      <h4
        className="font-syne font-bold text-white"
        style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
      >
        {item.title}
      </h4>
      <p
        className="font-inter text-sm leading-relaxed"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        {item.body}
      </p>
    </motion.div>
  );
}

/* ── Skill group (extracted to satisfy Rules of Hooks) ── */
function SkillGroup({
  group,
  groupIndex,
}: {
  group: (typeof SKILL_GROUPS)[0];
  groupIndex: number;
}) {
  const groupRef = useRef<HTMLDivElement>(null);
  const groupInView = useInView(groupRef, { once: true, margin: "-60px 0px" });

  return (
    <div ref={groupRef} className="flex flex-col gap-6">
      {/* Category label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={groupInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.7,
          delay: groupIndex * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex items-center gap-3"
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: group.color }}
        />
        <span
          className="font-syne font-bold"
          style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)" }}
        >
          {group.category}
        </span>
      </motion.div>

      {/* Skill bars */}
      <div className="flex flex-col gap-4">
        {group.skills.map((skill, si) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={group.color}
            delay={groupIndex * 0.08 + si * 0.07}
            inView={groupInView}
          />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════ */
export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-60px 0px",
  });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, {
    once: true,
    margin: "-60px 0px",
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ══ HERO HEADER ══ */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-10 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto">
          {/* Label */}
          <FadeUp delay={0.05}>
            <span
              className="font-inter text-[10px] tracking-[0.35em] uppercase block mb-10"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              About Me
            </span>
          </FadeUp>

          {/* Large heading */}
          <RevealText delay={0.1}>
            <h1
              className="font-syne font-extrabold leading-[0.9] tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 11rem)",
                color: "#ffffff",
              }}
            >
              Mohit
            </h1>
          </RevealText>

          {/* Subtitle row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">
            <FadeUp delay={0.25}>
              <p
                className="font-inter leading-relaxed max-w-xl"
                style={{
                  fontSize: "clamp(15px, 1.7vw, 19px)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                AI Fullstack Developer building intelligent digital experiences.
                I architect systems where{" "}
                <span className="text-white">AI is the foundation</span>, not
                the afterthought.
              </p>
            </FadeUp>

            {/* Quick facts */}
            <FadeUp delay={0.35}>
              <div
                className="flex flex-col gap-3 text-right shrink-0"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {[
                  ["📍", "New Delhi, India"],
                  ["💼", "Available for hire"],
                  ["🕐", "IST (UTC+5:30)"],
                ].map(([icon, text]) => (
                  <span
                    key={text}
                    className="font-inter text-sm flex items-center justify-end gap-2"
                  >
                    <span aria-hidden="true">{icon}</span> {text}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 h-px bg-white/[0.07]" />
      </section>

      {/* ══ AVATAR + BIO ══ */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-12 md:gap-20 items-start">
          {/* Avatar placeholder */}
          <FadeUp delay={0.1}>
            <div className="relative">
              {/* Frame */}
              <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea22 0%, #764ba244 50%, #f093fb22 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-syne font-black text-white/10 select-none"
                    style={{ fontSize: "clamp(5rem, 15vw, 9rem)" }}
                    aria-hidden="true"
                  >
                    M
                  </span>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-16 h-16"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.3), transparent)",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-24 h-24"
                  style={{
                    background:
                      "linear-gradient(315deg, rgba(240,147,251,0.2), transparent)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl border"
                style={{
                  background: "#0d0d0d",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="font-inter text-xs text-white/60 whitespace-nowrap">
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Bio text */}
          <div className="flex flex-col gap-6">
            {[
              {
                delay: 0.15,
                dim: false,
                text: "Hey — I'm Mohit. I build AI-powered fullstack applications that don't just demo well, they work in production. My focus is the entire stack: from LLM orchestration and vector databases on the backend, to streaming interfaces and delightful UX on the frontend.",
              },
              {
                delay: 0.22,
                dim: true,
                text: 'I got into AI development because I was frustrated with how clunky most "AI-powered" products felt. Beautiful demos that broke the moment a real user touched them. I decided to fix that by understanding both sides — the ML systems and the product experience — deeply.',
              },
              {
                delay: 0.29,
                dim: true,
                text: "These days I spend most of my time building RAG pipelines, real-time streaming interfaces, multi-agent systems, and AI SaaS products. I also write about what I learn — both the technical wins and the embarrassing dead ends.",
              },
              {
                delay: 0.36,
                dim: true,
                text: "When I'm not coding, I'm probably reading about systems thinking, obsessing over typography, or breaking something in Docker.",
              },
            ].map(({ delay, dim, text }, i) => (
              <FadeUp key={i} delay={delay}>
                <p
                  className="font-inter leading-relaxed"
                  style={{
                    fontSize: "clamp(14px, 1.5vw, 17px)",
                    color: dim
                      ? "rgba(255,255,255,0.42)"
                      : "rgba(255,255,255,0.75)",
                  }}
                >
                  {text}
                </p>
              </FadeUp>
            ))}

            {/* CTA */}
            <FadeUp delay={0.44}>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="mailto:mohit@example.com"
                  className="btn-primary"
                  style={{ fontSize: 13 }}
                >
                  Say Hello →
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-white/35 hover:text-white/70 transition-colors duration-300 link-underline"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-white/35 hover:text-white/70 transition-colors duration-300 link-underline"
                >
                  LinkedIn ↗
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 md:mb-20">
            <FadeUp delay={0.05}>
              <span
                className="font-inter text-[10px] tracking-[0.3em] uppercase block mb-5"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                02 / Skills
              </span>
            </FadeUp>
            <RevealText delay={0.1}>
              <h2
                className="font-syne font-extrabold leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)" }}
              >
                Stack
              </h2>
            </RevealText>
          </div>

          {/* Skill groups grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {SKILL_GROUPS.map((group, gi) => (
              <SkillGroup key={group.category} group={group} groupIndex={gi} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}

      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 md:mb-20">
            <FadeUp delay={0.05}>
              <span
                className="font-inter text-[10px] tracking-[0.3em] uppercase block mb-5"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                03 / Experience
              </span>
            </FadeUp>
            <RevealText delay={0.1}>
              <h2
                className="font-syne font-extrabold leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)" }}
              >
                Timeline
              </h2>
            </RevealText>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="max-w-2xl">
            {TIMELINE.map((item, i) => (
              <TimelineItem
                key={item.year + item.role}
                item={item}
                index={i}
                inView={timelineInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16 md:mb-20">
            <FadeUp delay={0.05}>
              <span
                className="font-inter text-[10px] tracking-[0.3em] uppercase block mb-5"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                04 / Philosophy
              </span>
            </FadeUp>
            <RevealText delay={0.1}>
              <h2
                className="font-syne font-extrabold leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)" }}
              >
                How I Work
              </h2>
            </RevealText>
          </div>

          {/* Cards grid */}
          <div
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {VALUES.map((val, i) => (
              <ValueCard
                key={val.title}
                item={val}
                index={i}
                inView={valuesInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FOOTER BAND ══ */}
      <section className="py-24 md:py-36 px-6 md:px-10 border-t border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <FadeUp delay={0.05}>
            <span
              className="font-inter text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              What's next?
            </span>
          </FadeUp>

          <RevealText delay={0.12}>
            <h2
              className="font-syne font-extrabold tracking-tight text-white"
              style={{
                fontSize: "clamp(2.4rem, 7vw, 6.5rem)",
                lineHeight: 0.92,
              }}
            >
              Let's build something remarkable.
            </h2>
          </RevealText>

          <FadeUp delay={0.28}>
            <p
              className="font-inter text-center max-w-md"
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
              }}
            >
              Whether you have a product idea, an AI integration challenge, or
              just want to talk shop — I'm always happy to chat.
            </p>
          </FadeUp>

          <FadeUp delay={0.38}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:mohit@example.com"
                className="btn-primary"
                style={{ fontSize: 14, padding: "14px 30px" }}
              >
                Get in Touch →
              </a>
              <Link
                href="/projects"
                className="btn-outline"
                style={{ fontSize: 14, padding: "13px 29px" }}
              >
                See My Work
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

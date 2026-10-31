"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ---------- Data (all taken from your resume and ebook site) ---------- */

const snapshot = [
  { value: "02", label: "Live full-stack apps" },
  { value: "01", label: "E-book published" },
  { value: "02", label: "OAuth providers integrated" },
  { value: "2027", label: "MCA, expected" },
];

const sections = [
  {
    number: "01",
    title: "Skills",
    href: "/skills",
    span: "lg:col-span-3",
    description:
      "A backend-first stack, grouped by the kind of problem each tool solves.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "Next.js"],
  },
  {
    number: "02",
    title: "Works",
    href: "/works",
    span: "lg:col-span-3",
    description:
      "Two live full-stack apps, an ebook website and a published ebook.",
    tags: ["PassWordMan", "GetMeAChai", "E-Book Website", "E-Book"],
  },
  {
    number: "03",
    title: "About",
    href: "/about",
    span: "lg:col-span-2",
    description: "Who I am, what I focus on and where I am studying.",
    tags: ["Full-stack", "Backend focus"],
  },
  {
    number: "04",
    title: "Resume",
    href: "/resume",
    span: "lg:col-span-2",
    description: "A digital resume with a PDF you can download.",
    tags: ["PDF", "Digital"],
  },
  {
    number: "05",
    title: "Contact",
    href: "/contact",
    span: "lg:col-span-2",
    description: "Tell me about your project. Your message lands in my inbox.",
    tags: ["Email", "Form"],
  },
];

const featured = [
  {
    number: "01",
    title: "PassWordMan",
    subtitle: "Password Manager Application",
    summary:
      "A full-stack credential manager with JWT auth, role-based access control, Redis caching and BullMQ background jobs.",
    tags: ["Node.js", "Express.js", "MongoDB", "React", "Redis", "Docker"],
    detail: "/works/passwordman",
    live: "https://pass-word-man.vercel.app",
    github: "https://github.com/anass125/PassWordMan",
  },
  {
    number: "02",
    title: "GetMeAChai",
    subtitle: "Crowdfunding Platform",
    summary:
      "A crowdfunding platform with creator dashboards, Google and GitHub OAuth, and end-to-end Razorpay payments.",
    tags: ["Next.js", "MongoDB", "NextAuth.js", "Razorpay", "Tailwind CSS"],
    detail: "/works/getmeachai",
    live: "https://get-me-a-chai-rose.vercel.app",
    github: "https://github.com/anass125/GetMeAChai",
  },
];

const principles = [
  {
    number: "01",
    title: "Secure by default",
    text: "JWT, role-based access control, bcrypt hashing, Helmet, CORS controls and rate limiting.",
  },
  {
    number: "02",
    title: "Clean structure",
    text: "REST APIs split into routes, controllers and services, so each part stays easy to maintain.",
  },
  {
    number: "03",
    title: "Built to be fast",
    text: "Redis caching cuts repeated database reads. BullMQ moves slow work off the request path.",
  },
  {
    number: "04",
    title: "Ready to ship",
    text: "Containerized with Docker and deployed on Vercel for consistent environments.",
  },
];

/* ---------- Helpers ---------- */

// Fades and slides content up the first time it enters the screen.
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="h-[2px] w-10 bg-[#FF704D]" />
      <span className="font-mono text-sm tracking-[0.2em] text-white/60">
        {children}
      </span>
    </div>
  );
}

const gradientTitle =
  "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent transition-all duration-500 group-hover:translate-x-2 group-hover:bg-none group-hover:text-orange-500";

const tagClass =
  "rounded-full border border-orange-500/40 px-3 py-1 font-mono text-[11px] text-orange-500 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500/10";

/* ---------- Component ---------- */

export default function PortfolioOverview() {
  return (
    <section
      aria-label="Portfolio overview"
      className="relative w-full overflow-hidden px-5 py-24 text-[#F1EEE9] sm:px-8 lg:px-[4%] lg:py-32"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* HEADER */}
        <Reveal>
          <SectionLabel>OVERVIEW</SectionLabel>
          <h2 className="max-w-[900px] bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.06em] text-transparent">
            The whole portfolio, at a glance.
          </h2>
          <p className="mt-8 max-w-[540px] text-sm leading-7 text-white/60 sm:text-base">
            A quick tour of what I build, how I build it and where to find
            more. Pick any card to go deeper.
          </p>
        </Reveal>

        {/* SNAPSHOT */}
        <Reveal delay={100} className="mt-14">
          <div className="grid grid-cols-2 overflow-hidden rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B] lg:grid-cols-4">
            {snapshot.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-8 sm:px-8 sm:py-10 ${
                  i % 2 === 1 ? "border-l border-white/[0.08]" : ""
                } ${i > 1 ? "border-t border-white/[0.08] lg:border-t-0" : ""} ${
                  i > 0 ? "lg:border-l lg:border-white/[0.08]" : ""
                }`}
              >
                <p className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-4xl font-semibold tracking-[-0.05em] text-transparent sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* EXPLORE */}
        <div className="mt-24">
          <Reveal>
            <SectionLabel>EXPLORE</SectionLabel>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-6">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className={s.span}>
                <Link
                  href={s.href}
                  className="group relative flex h-full min-h-[240px] flex-col justify-between rounded-[1.5rem] border border-white/[0.16] bg-[#0B0B0B] p-7 transition-colors duration-300 hover:bg-[#131313]"
                >
                  {/* Corner brackets */}
                  {[
                    "left-3 top-3 border-l-2 border-t-2",
                    "right-3 top-3 border-r-2 border-t-2",
                    "bottom-3 left-3 border-b-2 border-l-2",
                    "bottom-3 right-3 border-b-2 border-r-2",
                  ].map((c) => (
                    <span
                      key={c}
                      className={`pointer-events-none absolute h-3 w-3 border-[#FF704D] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${c}`}
                    />
                  ))}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-white/30">
                        {s.number}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/60 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#FF704D] group-hover:text-[#FF704D]">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </div>

                    <h3 className={`mt-6 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl ${gradientTitle}`}>
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[360px] text-sm leading-7 text-white/65">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className={tagClass}>{t}</span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="mt-24">
          <Reveal>
            <SectionLabel>FEATURED WORK</SectionLabel>
          </Reveal>

          <div className="overflow-hidden rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B]">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div
                  className={`group grid gap-8 px-6 py-10 transition-colors duration-300 hover:bg-[#131313] sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-14 lg:py-12 ${
                    i > 0 ? "border-t border-white/[0.16]" : ""
                  }`}
                >
                  <div className="flex items-start gap-5 lg:gap-8">
                    <span className="mt-3 font-mono text-[10px] text-white/30">{p.number}</span>
                    <div>
                      <Link href={p.detail}>
                        <h3 className={`text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl ${gradientTitle}`}>
                          {p.title}
                        </h3>
                      </Link>
                      <p className="mt-4 text-sm text-white/65 transition-colors duration-300 group-hover:text-[#FF704D]">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="max-w-[460px] text-sm leading-7 text-white/65">{p.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className={tagClass}>{t}</span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest">
                      <Link href={p.detail} className="text-[#F1EEE9] transition-colors duration-300 hover:text-orange-500">
                        Details ↗
                      </Link>
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors duration-300 hover:text-orange-500">
                        Live ↗
                      </a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors duration-300 hover:text-orange-500">
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* HOW I BUILD */}
        <div className="mt-24">
          <Reveal>
            <SectionLabel>HOW I BUILD</SectionLabel>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="group h-full rounded-[1.5rem] border border-white/[0.16] bg-[#0B0B0B] p-7 transition-colors duration-300 hover:border-orange-500/60 hover:bg-[#131313]">
                  <span className="font-mono text-[10px] text-white/30">{p.number}</span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#F1EEE9] transition-colors duration-300 group-hover:text-orange-500">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-24">
          <div className="flex flex-col items-start justify-between gap-7 rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B] px-6 py-12 sm:flex-row sm:items-center sm:px-10 lg:px-14 lg:py-14">
            <h2 className="max-w-[460px] text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a project in mind? Let&rsquo;s talk.
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25 sm:px-6 sm:py-3.5 sm:text-base"
              >
                Contact me ↗
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-orange-300/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300/50 hover:bg-orange-500/20 sm:px-6 sm:py-3.5 sm:text-base"
              >
                View resume
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
} 
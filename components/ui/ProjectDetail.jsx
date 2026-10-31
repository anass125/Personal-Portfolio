"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* Fades and slides content up the first time it enters the screen */
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
      <span className="font-mono text-sm tracking-[0.2em] text-white/60">{children}</span>
    </div>
  );
}

function CoverArt({ arc }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      <g transform={`rotate(${arc} 100 100)`}>
        <circle cx="100" cy="100" r="72" fill="none" stroke="#FF704D" strokeWidth="2.5"
          strokeDasharray="300 160" strokeLinecap="round" className="works-spin" />
      </g>
      <circle cx="100" cy="100" r="58" fill="none" stroke="white" strokeOpacity="0.18" />
      <circle cx="100" cy="100" r="42" fill="none" stroke="white" strokeOpacity="0.14" />
      <circle cx="100" cy="100" r="26" fill="none" stroke="white" strokeOpacity="0.12" />
      <circle cx="100" cy="100" r="3" fill="#FF704D" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="100" y1="14" x2="100" y2="20" stroke="white" strokeOpacity="0.3"
          transform={`rotate(${i * 30} 100 100)`} />
      ))}
    </svg>
  );
}

const tagClass =
  "rounded-full border border-orange-500/40 px-3 py-1 font-mono text-[11px] text-orange-500 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10";

const gradientTitle =
  "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent group-hover:bg-none group-hover:text-orange-500";

const primaryBtn =
  "inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25 sm:px-6 sm:py-3.5 sm:text-base";

const secondaryBtn =
  "inline-flex items-center justify-center rounded-full border border-orange-300/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300/50 hover:bg-orange-500/20 sm:px-6 sm:py-3.5 sm:text-base";

export default function ProjectDetail({ project, prev, next, total }) {
  const {
    number, title, subtitle, category, status, description, overview,
    tags, facts, sectionsLabel, sections, chapters, links, arc,
  } = project;

  return (
    <main className="relative w-full overflow-hidden text-[#F1EEE9]">
      <style>{`
        @keyframes works-spin { to { transform: rotate(360deg); } }
        .works-spin { transform-origin: 100px 100px; animation: works-spin 8s linear infinite; }
        @keyframes detail-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .detail-float { animation: detail-float 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .works-spin, .detail-float { animation: none; } }
      `}</style>

      {/* HERO */}
      <section className="relative px-5 sm:px-8 lg:px-[4%]">
        <div className="mx-auto max-w-[1100px] pb-16 pt-16">
          <p className="mb-14 text-sm text-white/50">
            <Link href="/" className="transition-colors hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/works" className="transition-colors hover:text-orange-500">Works</Link>
            <span className="mx-2">/</span>
            <span className="text-[#F1EEE9]">{title}</span>
          </p>

          <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-[#FF704D]" />
                <span className="font-mono text-sm tracking-[0.2em] text-white/60">
                  PROJECT {number} / {String(total).padStart(2, "0")}
                </span>
              </div>

              <h1 className="-mx-[0.1em] -mt-[0.15em] bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text px-[0.1em] pb-[0.12em] pt-[0.15em] text-[clamp(2.8rem,7.5vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.06em] text-transparent animate-fade-in-up animation-delay-400">
                {title}
              </h1>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-orange-500">
                {subtitle} <span className="mx-2 text-white/30">·</span> {category}{" "}
                <span className="mx-2 text-white/30">·</span> {status}
              </p>

              <p className="mt-8 max-w-[540px] text-sm leading-7 text-white/60 sm:text-base">
                {description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {links.map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={i === 0 ? primaryBtn : secondaryBtn}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Animated cover */}
            <div className="hidden justify-center lg:flex">
              <div className="detail-float relative h-[300px] w-[300px] rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B] p-6 pt-12">
                <span className="absolute left-5 top-5 font-mono text-[10px] tracking-widest text-white/50">
                  {number} / {String(total).padStart(2, "0")}
                </span>
                <CoverArt arc={arc} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="relative px-5 pb-20 sm:px-8 lg:px-[4%]">
        <Reveal className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/[0.16] bg-white/[0.08] lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-[#0B0B0B] px-6 py-8 transition-colors duration-300 hover:bg-[#131313] sm:px-8 sm:py-10">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">{f.label}</p>
                <p className="text-lg font-semibold tracking-tight text-[#F1EEE9] sm:text-xl">{f.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* OVERVIEW + STACK */}
      <section className="relative px-5 pb-20 sm:px-8 lg:px-[4%]">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <SectionLabel>OVERVIEW</SectionLabel>
            <div className="grid gap-12 rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B] px-6 py-10 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-14 lg:py-14">
              <p className="text-base leading-8 text-white/75">{overview}</p>
              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {category === "Publication" ? "Topics" : "Built with"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className={tagClass}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT I BUILT / WHAT YOU LEARN */}
      <section className="relative px-5 pb-20 sm:px-8 lg:px-[4%]">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <SectionLabel>{sectionsLabel}</SectionLabel>
          </Reveal>

          <div className="overflow-hidden rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B]">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div
                  className={`group grid gap-6 px-6 py-9 transition-colors duration-300 hover:bg-[#131313] sm:px-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14 lg:px-14 ${
                    i > 0 ? "border-t border-white/[0.16]" : ""
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span className="mt-2 font-mono text-[10px] text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-2xl font-semibold leading-[1.05] tracking-[-0.045em] transition-all duration-500 group-hover:translate-x-2 sm:text-3xl ${gradientTitle}`}>
                      {s.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-7 text-white/70">
                        <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS (only for the ebook) */}
      {chapters && (
        <section className="relative px-5 pb-20 sm:px-8 lg:px-[4%]">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <SectionLabel>INSIDE THE BOOK</SectionLabel>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.16] bg-white/[0.08] sm:grid-cols-2">
              {chapters.map((c, i) => (
                <Reveal key={c} delay={(i % 2) * 80} className="h-full">
                  <div className="group flex h-full items-center gap-5 bg-[#0B0B0B] px-6 py-6 transition-colors duration-300 hover:bg-[#131313] sm:px-8">
                    <span className="font-mono text-[10px] text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium text-[#F1EEE9] transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
                      {c}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PREVIOUS / NEXT */}
      <section className="relative px-5 pb-20 sm:px-8 lg:px-[4%]">
        <div className="mx-auto grid max-w-[1100px] gap-4 sm:grid-cols-2">
          {[
            { item: prev, label: "Previous project", arrow: "←" },
            { item: next, label: "Next project", arrow: "→" },
          ].map(({ item, label, arrow }) => (
            <Reveal key={label} className="h-full">
              <Link
                href={`/works/${item.slug}`}
                className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-white/[0.16] bg-[#0B0B0B] p-7 transition-colors duration-300 hover:border-orange-500/60 hover:bg-[#131313]"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {label} · {item.number}
                </p>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <h3 className={`text-2xl font-semibold leading-[1.05] tracking-[-0.045em] transition-all duration-500 sm:text-3xl ${gradientTitle}`}>
                    {item.title}
                  </h3>
                  <span className={`text-2xl text-white/60 transition-all duration-300 group-hover:text-orange-500 ${
                    arrow === "→" ? "group-hover:translate-x-2" : "group-hover:-translate-x-2"
                  }`}>
                    {arrow}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 pb-24 sm:px-8 lg:px-[4%]">
        <Reveal className="mx-auto max-w-[1100px]">
          <div className="flex flex-col items-start justify-between gap-7 rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B] px-6 py-12 sm:flex-row sm:items-center sm:px-10 lg:px-14 lg:py-14">
            <h2 className="max-w-[460px] text-2xl font-semibold tracking-tight sm:text-3xl">
              Like what you see? Let&rsquo;s talk.
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className={primaryBtn}>Contact me ↗</Link>
              <Link href="/works" className={secondaryBtn}>All projects</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
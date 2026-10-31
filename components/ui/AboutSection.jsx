"use client";

import { useState } from "react";
import Link from "next/link";

const facts = [
  { label: "NAME", value: "Anas Shaikh" },
  { label: "ROLE", value: "Junior Full-Stack Developer" },
  { label: "FOCUS", value: "Backend" },
  { label: "BASED IN", value: "Mumbai, India" },
];

const focusAreas = [
  {
    id: "apis",
    number: "01",
    title: "REST APIs & structure",
    description:
      "I structure APIs using routes, controllers and services. This keeps each part separate and the code easy to maintain.",
    tags: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "auth",
    number: "02",
    title: "Auth & access control",
    description:
      "I build secure login flows with JWT, role-based access control, bcrypt password hashing, and Google and GitHub OAuth through NextAuth.js.",
    tags: ["JWT", "RBAC", "bcrypt", "OAuth", "NextAuth.js"],
  },
  {
    id: "security",
    number: "03",
    title: "API security",
    description:
      "I harden APIs with Helmet, CORS controls, rate limiting, XSS protection and MongoDB sanitization.",
    tags: ["Helmet", "CORS", "Rate Limiting", "XSS Protection", "MongoDB Sanitization"],
  },
  {
    id: "performance",
    number: "04",
    title: "Caching & background jobs",
    description:
      "I use Redis caching to reduce repeated database reads. I use BullMQ to move non-critical work off the request path.",
    tags: ["Redis", "BullMQ"],
  },
  {
    id: "payments",
    number: "05",
    title: "Payments",
    description:
      "I integrate Razorpay with success and failure handling for end-to-end payment processing.",
    tags: ["Razorpay", "Next.js"],
  },
  {
    id: "deploy",
    number: "06",
    title: "Deployment",
    description:
      "I containerize apps with Docker for consistent environments and deploy them on Vercel.",
    tags: ["Docker", "Vercel", "Git", "GitHub"],
  },
];

const education = [
  {
    id: "mca",
    number: "01",
    title: "Master of Computer Applications",
    short: "MCA",
    status: "Expected 2027",
  },
  {
    id: "bca",
    number: "02",
    title: "Bachelor of Computer Applications",
    short: "BCA",
    status: "Completed 2024",
  },
];

const links = [
  { label: "Email", href: "mailto:anasshaikh.tech1@gmail.com", text: "anasshaikh.tech1@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anas-shaikh-946aa4372", text: "anas-shaikh-946aa4372" },
  { label: "GitHub", href: "https://github.com/anass125", text: "anass125" },
];

const titleClass = (isHovered) =>
  `text-3xl font-semibold leading-[1] tracking-[-0.045em] transition-all duration-500 sm:text-4xl lg:text-[3rem] ${
    isHovered
      ? "translate-x-3 text-orange-500"
      : "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
  }`;

export default function AboutSection() {
  const [hovered, setHovered] = useState(null);

  const hoverProps = (id) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
    onFocus: () => setHovered(id),
    onBlur: () => setHovered(null),
  });

  return (
    <main className="relative w-full overflow-hidden text-[#F1EEE9]">
      {/* HERO */}
      <section className="relative px-5 sm:px-8 lg:px-[4%]">
        <div className="flex min-h-[70vh] flex-col justify-center pb-16 pt-20">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">ABOUT</span>
          </div>

          <h1 className="max-w-[1150px] bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-[clamp(3.4rem,9.2vw,9.5rem)] font-bold leading-[0.89] tracking-[-0.075em] text-transparent animate-fade-in-up animation-delay-400">
            Full-stack.
            <br />
            Backend
            <br />
            focused.
          </h1>

          <p className="mt-10 max-w-[560px] text-sm leading-7 text-white/60 sm:text-base">
            I&apos;m Anas, a junior full-stack developer with a backend focus. I build
            secure and scalable web applications with Node.js, Express.js, React, Next.js
            and MongoDB. I care about clean architecture, maintainable code and
            production-ready applications.
          </p>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="relative border-t border-white/[0.16] bg-[#0B0B0B]">
        <div className="grid grid-cols-2 gap-8 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:px-[4%]">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                {f.label}
              </p>
              <p className="text-lg font-semibold tracking-tight text-[#F1EEE9] sm:text-xl">
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section aria-label="What I focus on">
        <div className="px-5 pb-8 pt-20 sm:px-8 lg:px-[4%]">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">WHAT I FOCUS ON</span>
          </div>
        </div>

        {focusAreas.map((a) => {
          const isHovered = hovered === a.id;
          return (
            <article
              key={a.id}
              tabIndex={0}
              {...hoverProps(a.id)}
              className={`relative border-t border-white/[0.16] transition-colors duration-300 last:border-b ${
                isHovered ? "bg-[#131313]" : "bg-[#0B0B0B]"
              }`}
            >
              <div className="grid items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-[4%] lg:py-12">
                <div className="flex items-start gap-5 lg:gap-8">
                  <span className="mt-3 font-mono text-[10px] text-white/30">{a.number}</span>
                  <h2 className={titleClass(isHovered)}>{a.title}</h2>
                </div>

                <div>
                  <p className="max-w-[460px] text-sm leading-7 text-white/65">{a.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border px-3 py-1 font-mono text-[11px] text-orange-500 transition-all duration-300 ${
                          isHovered ? "border-orange-500 bg-orange-500/10" : "border-orange-500/40"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* EDUCATION */}
      <section aria-label="Education">
        <div className="px-5 pb-8 pt-20 sm:px-8 lg:px-[4%]">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">EDUCATION</span>
          </div>
        </div>

        {education.map((e) => {
          const isHovered = hovered === e.id;
          return (
            <article
              key={e.id}
              tabIndex={0}
              {...hoverProps(e.id)}
              className={`relative border-t border-white/[0.16] transition-colors duration-300 last:border-b ${
                isHovered ? "bg-[#131313]" : "bg-[#0B0B0B]"
              }`}
            >
              <div className="flex flex-col justify-between gap-4 px-5 py-9 sm:flex-row sm:items-center sm:px-8 lg:px-[4%]">
                <div className="flex items-start gap-5 lg:gap-8">
                  <span className="mt-3 font-mono text-[10px] text-white/30">{e.number}</span>
                  <div>
                    <h2 className={titleClass(isHovered)}>{e.title}</h2>
                    <p className={`mt-3 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                      isHovered ? "text-orange-500" : "text-white/40"
                    }`}>
                      {e.short}
                    </p>
                  </div>
                </div>
                <span
                  className={`w-fit rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-orange-500 transition-all duration-300 ${
                    isHovered ? "border-orange-500 bg-orange-500/10" : "border-orange-500/40"
                  }`}
                >
                  {e.status}
                </span>
              </div>
            </article>
          );
        })}
      </section>

      {/* PUBLICATION */}
      <section aria-label="Publication">
        <div className="px-5 pb-8 pt-20 sm:px-8 lg:px-[4%]">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">PUBLICATION</span>
          </div>
        </div>

        <a
          href="https://anass125.github.io/E-Book-Publication-Website/"
          target="_blank"
          rel="noopener noreferrer"
          {...hoverProps("ebook")}
          className={`group block border-y border-white/[0.16] transition-colors duration-300 ${
            hovered === "ebook" ? "bg-[#131313]" : "bg-[#0B0B0B]"
          }`}
        >
          <div className="grid items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-[4%] lg:py-12">
            <h2 className={titleClass(hovered === "ebook")}>From Bug Report to Root Cause</h2>
            <div>
              <p className="max-w-[460px] text-sm leading-7 text-white/65">
                A practical e-book on full-stack debugging and root-cause analysis. It
                covers a structured way to investigate bugs and deliver reliable fixes.
              </p>
              <p
                className={`mt-5 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
                  hovered === "ebook" ? "translate-x-1 text-orange-500" : "text-white/40"
                }`}
              >
                Visit the ebook website ↗
              </p>
            </div>
          </div>
        </a>
      </section>

      {/* CONTACT CTA */}
      <section className="relative mt-20 flex flex-col items-start justify-between gap-7 bg-[#0B0B0B] px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:px-[4%] lg:py-28">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Want to work together?
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 font-mono text-xs text-white/60 transition-colors duration-300 hover:text-orange-500 sm:text-sm"
              >
                <span className="w-16 uppercase tracking-widest text-white/40 group-hover:text-orange-500">
                  {l.label}
                </span>
                {l.text}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25 sm:px-6 sm:py-3.5 sm:text-base"
          >
            Get in touch ↗
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center rounded-full border border-orange-300/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300/50 hover:bg-orange-500/20 sm:px-6 sm:py-3.5 sm:text-base"
          >
            View resume
          </Link>
        </div>
      </section>
    </main>
  );
}
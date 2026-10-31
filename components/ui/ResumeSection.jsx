"use client";

import Image from "next/image";
import Link from "next/link";

const contact = [
  { label: "Location", value: "Vikhroli, Mumbai, India" },
  { label: "Mobile", value: "+91 8104646116", href: "tel:+918104646116" },
  { label: "Email", value: "anasshaikh.tech1@gmail.com", href: "mailto:anasshaikh.tech1@gmail.com" },
  { label: "GitHub", value: "https://github.com/anass125", href: "https://github.com/anass125" },
  { label: "LinkedIn", value: "https://linkedin.com/in/anas-shaikh-946aa4372", href: "https://linkedin.com/in/anas-shaikh-946aa4372" },
];

const skills = [
  { label: "Languages", value: "JavaScript, Java" },
  { label: "Backend", value: "Node.js, Express.js, REST APIs, JWT, RBAC, NextAuth.js, Redis, BullMQ, Razorpay" },
  { label: "Frontend", value: "React.js, Next.js, Redux, Tailwind CSS, HTML, CSS" },
  { label: "Databases", value: "MongoDB, SQL" },
  { label: "Tools & DevOps", value: "Git, GitHub, Docker, Vercel, VS Code" },
];

const projects = [
  {
    title: "PassWordMan",
    subtitle: "Password Manager Application",
    github: "https://github.com/anass125/PassWordMan",
    live: "https://pass-word-man.vercel.app",
    tech: "Node.js, Express.js, MongoDB, React, Redis, JWT, BullMQ, Docker",
    points: [
      "Built a full-stack credential manager providing authenticated access to stored URL, username and password records, secured via JWT authentication and role-based access control (RBAC).",
      "Hashed user login credentials with bcrypt for secure authentication.",
      "Structured REST APIs using routes, controllers and services to separate concerns and improve maintainability.",
      "Added Redis caching for frequently accessed credential data to reduce repeated database reads.",
      "Introduced BullMQ background jobs to move non-critical processing off the request-response path.",
      "Hardened APIs with Helmet, CORS controls, rate limiting, XSS protection and MongoDB sanitization.",
      "Containerized the application with Docker for consistent development and deployment environments.",
    ],
  },
  {
    title: "GetMeAChai",
    subtitle: "Crowdfunding Platform",
    github: "https://github.com/anass125/GetMeAChai",
    live: "https://get-me-a-chai-rose.vercel.app",
    tech: "Next.js, MongoDB, NextAuth.js, Razorpay, Tailwind CSS",
    points: [
      "Built a full-stack crowdfunding platform with creator profiles, dashboards, authentication and payment workflows.",
      "Implemented Google and GitHub OAuth with NextAuth.js, supporting two social login providers for streamlined onboarding.",
      "Integrated Razorpay with success and failure handling for end-to-end payment processing.",
      "Developed creator dashboards and dynamic profile pages using the Next.js App Router with server-side rendering.",
      "Designed MongoDB schemas for user, creator and payment data with clear relationships and application-level validation.",
      "Built responsive UI across navigation, dashboards, payment flows and supporting pages for mobile and desktop.",
    ],
  },
];

const education = [
  { title: "Master of Computer Applications (MCA)", status: "Expected 2027" },
  { title: "Bachelor of Computer Applications (BCA)", status: "Completed 2024" },
];

function SectionHeading({ children }) {
  return (
    <div className="mb-6 mt-14 flex items-center gap-4">
      <h2 className="whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-500">
        {children}
      </h2>
      <span className="h-px flex-1 bg-white/[0.16]" />
    </div>
  );
}

const linkClass =
  "text-orange-500 underline underline-offset-4 transition-colors duration-300 hover:text-yellow-400";

export default function ResumeSection() {
  return (
    <main className="relative w-full overflow-hidden text-[#F1EEE9]">
      {/* HEADER */}
      <section className="relative px-5 sm:px-8 lg:px-[4%]">
        <div className="mx-auto max-w-[1100px] pb-12 pt-16">
          <p className="mb-10 text-sm text-white/50">
            <Link href="/" className="transition-colors hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#F1EEE9]">Resume</span>
          </p>

          <div className="mb-8 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">RESUME</span>
          </div>

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <h1 className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.06em] text-transparent animate-fade-in-up animation-delay-400">
              The digital resume.
            </h1>

            <a
              href="/Anas-Shaikh-Resume.pdf"
              download="Anas-Shaikh-Resume.pdf"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25"
            >
              Download resume PDF ↓
            </a>
          </div>
        </div>
      </section>

      {/* RESUME CARD */}
      <section className="relative px-5 pb-24 sm:px-8 lg:px-[4%]">
        <article className="mx-auto max-w-[1000px] rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          {/* Name + photo */}
          <div className="flex flex-col-reverse justify-between gap-8 sm:flex-row sm:items-start">
            <div className="min-w-0">
              <h2 className="text-4xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Anas Shaikh
              </h2>
              <p className="mt-4 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-xl font-medium text-transparent">
                Junior Full-Stack Developer
              </p>

              <dl className="mt-8 grid grid-cols-[84px_1fr] gap-x-4 gap-y-3 text-sm sm:grid-cols-[96px_1fr]">
                {contact.map((c) => (
                  <div key={c.label} className="contents">
                    <dt className="font-semibold text-[#F1EEE9]">{c.label}</dt>
                    <dd className="min-w-0 break-words text-white/70">
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {c.value}
                        </a>
                      ) : (
                        c.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative h-[140px] w-[140px] shrink-0 overflow-hidden rounded-2xl border-2 border-orange-500/60 shadow-lg shadow-orange-500/10 sm:h-[160px] sm:w-[160px]">
              <Image
                src="/anas-shaikh.png"
                alt="Portrait of Anas Shaikh"
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Summary */}
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-base leading-8 text-white/75">
            Junior Full-Stack Developer with a backend focus, experienced in building secure
            and scalable web applications using Node.js, Express.js, React, Next.js and
            MongoDB. Skilled in developing REST APIs, authentication and authorization, OAuth,
            payment integrations and API security, with a strong focus on clean architecture,
            maintainable code and production-ready applications.
          </p>

          {/* Skills */}
          <SectionHeading>Skills &amp; Tools</SectionHeading>
          <dl className="divide-y divide-white/[0.08]">
            {skills.map((s) => (
              <div key={s.label} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="font-semibold">{s.label}</dt>
                <dd className="text-sm leading-7 text-white/70">{s.value}</dd>
              </div>
            ))}
          </dl>

          {/* Projects */}
          <SectionHeading>Project Experience</SectionHeading>
          <div className="space-y-10">
            {projects.map((p) => (
              <div key={p.title}>
                <h3 className="text-xl font-semibold tracking-tight">
                  <span className="text-orange-500">{p.title}</span>
                  <span className="text-white/60"> — {p.subtitle}</span>
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
                  <span className="mx-2">|</span>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className={linkClass}>Live</a>
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-white/40">
                  Tech: <span className="text-white/70">{p.tech}</span>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-7 text-white/70">
                      <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <SectionHeading>Education</SectionHeading>
          <div className="divide-y divide-white/[0.08]">
            {education.map((e) => (
              <div key={e.title} className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center">
                <p className="font-semibold">{e.title}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-orange-500">{e.status}</p>
              </div>
            ))}
          </div>

          {/* Publications */}
          <SectionHeading>Publications</SectionHeading>
          <p className="text-sm leading-7 text-white/70">
            <a
              href="https://anass125.github.io/E-Book-Publication-Website/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              From Bug Report to Root Cause
            </a>{" "}
            — A practical e-book on full-stack debugging and root-cause analysis.
          </p>

          {/* End buttons */}
          <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-white/[0.16] pt-10">
            <a
              href="/Anas-Shaikh-Resume.pdf"
              download="Anas-Shaikh-Resume.pdf"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25 sm:px-6 sm:py-3.5 sm:text-base"
            >
              Download resume PDF ↓
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-orange-300/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300/50 hover:bg-orange-500/20 sm:px-6 sm:py-3.5 sm:text-base"
            >
              Contact me
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
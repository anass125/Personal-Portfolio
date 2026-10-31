
"use client";

import { useState } from "react";

// const skillCategories = [
//   {
//     id: "frontend",
//     number: "01",
//     title: "Core frontend",
//     description:
//       "Building responsive, accessible and interactive user interfaces.",
//     skills: [
//       "HTML5",
//       "CSS3",
//       "JavaScript",
//       "React.js",
//       "Next.js",
//       "Responsive Design",
//     ],
//   },
//   {
//     id: "styling",
//     number: "02",
//     title: "UI & styling",
//     description:
//       "Creating polished interfaces with modern styling systems and animations.",
//     skills: [
//       "Tailwind CSS",
//       "Tailwind CSS v4",
//       "shadcn/ui",
//       "Radix UI",
//       "Framer Motion",
//       "Three.js",
//       "WebGL Shaders",
//     ],
//   },
//   {
//     id: "state",
//     number: "03",
//     title: "State & data",
//     description:
//       "Managing application state and handling dynamic application data.",
//     skills: [
//       "React Hooks",
//       "Redux",
//       "Context API",
//       "Server Components",
//       "Client Components",
//     ],
//   },
//   {
//     id: "forms",
//     number: "04",
//     title: "Forms & validation",
//     description:
//       "Handling user input, validation and secure authentication workflows.",
//     skills: [
//       "Form Handling",
//       "Input Validation",
//       "JWT Authentication",
//       "NextAuth.js",
//       "bcrypt",
//       "Role-Based Access Control",
//     ],
//   },
//   {
//     id: "testing",
//     number: "05",
//     title: "Testing & quality",
//     description:
//       "Verifying application behaviour, debugging issues and testing APIs.",
//     skills: [
//       "Postman",
//       "API Testing",
//       "Manual Testing",
//       "Debugging",
//       "Error Handling",
//     ],
//   },
//   {
//     id: "integrations",
//     number: "06",
//     title: "Integrations",
//     description:
//       "Connecting applications with external services and third-party APIs.",
//     skills: [
//       "REST APIs",
//       "Google OAuth",
//       "GitHub OAuth",
//       "Razorpay",
//       "NextAuth.js",
//       "Resend",
//     ],
//   },
//   {
//     id: "backend",
//     number: "07",
//     title: "Backend",
//     description:
//       "Developing secure server-side applications and scalable API architectures.",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "Java",
//       "REST API Development",
//       "JWT",
//       "Redis",
//       "BullMQ",
//       "Rate Limiting",
//       "Security Headers",
//       "HTTP-only Cookies",
//     ],
//   },
//   {
//     id: "database",
//     number: "08",
//     title: "Databases",
//     description:
//       "Working with structured and document-oriented data storage systems.",
//     skills: [
//       "MongoDB",
//       "Mongoose",
//       "SQL",
//       "MongoDB Atlas",
//       "Database Design",
//       "CRUD Operations",
//     ],
//   },
//   {
//     id: "workflow",
//     number: "09",
//     title: "Workflow & tools",
//     description:
//       "Using modern development tools to manage, build and maintain projects.",
//     skills: [
//       "Git",
//       "GitHub",
//       "VS Code",
//       "npm",
//       "Docker Basics",
//       "Environment Variables",
//       "Vercel",
//       "Postman",
//     ],
//   },
//   {
//     id: "deployment",
//     number: "10",
//     title: "Deployment",
//     description:
//       "Preparing and deploying web applications to production environments.",
//     skills: [
//       "Vercel",
//       "Next.js Deployment",
//       "MongoDB Atlas",
//       "Environment Configuration",
//       "GitHub",
//       "Production Builds",
//     ],
//   },
// ];

const skillCategories = [
  {
    id: "backend",
    number: "01",
    title: "Backend",
    description:
      "Building secure server-side applications with clean, layered REST API structure.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Routes, Controllers & Services",
    ],
  },
  {
    id: "auth",
    number: "02",
    title: "Auth & access control",
    description:
      "Securing logins and controlling who can access what, from password hashing to social sign-in.",
    skills: [
      "JWT",
      "Role-Based Access Control",
      "bcrypt",
      "NextAuth.js",
      "Google OAuth",
      "GitHub OAuth",
    ],
  },
  {
    id: "security",
    number: "03",
    title: "API security",
    description:
      "Hardening APIs against common attacks and abuse before they reach production.",
    skills: [
      "Helmet",
      "CORS Controls",
      "Rate Limiting",
      "XSS Protection",
      "MongoDB Sanitization",
    ],
  },
  {
    id: "performance",
    number: "04",
    title: "Caching & background jobs",
    description:
      "Reducing repeated database reads and moving slow work off the request path.",
    skills: ["Redis", "BullMQ"],
  },
  {
    id: "database",
    number: "05",
    title: "Databases",
    description:
      "Designing data models with clear relationships and validating data at the application level.",
    skills: [
      "MongoDB",
      "SQL",
      "MongoDB Schema Design",
      "Application-Level Validation",
    ],
  },
  {
    id: "frontend",
    number: "06",
    title: "Frontend",
    description:
      "Building responsive interfaces for dashboards, payment flows and dynamic pages.",
    skills: [
      "React.js",
      "Next.js",
      "Next.js App Router",
      "Server-Side Rendering",
      "Redux",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },
  {
    id: "integrations",
    number: "07",
    title: "Payments & integrations",
    description:
      "Connecting apps with payment and email services, including success and failure handling.",
    skills: ["Razorpay", "Resend"],
  },
  {
    id: "languages",
    number: "08",
    title: "Languages",
    description: "The languages I write most of my code in.",
    skills: ["JavaScript", "Java"],
  },
  {
    id: "workflow",
    number: "09",
    title: "Tools & deployment",
    description:
      "Managing code, containerizing apps and shipping them to production.",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Vercel"],
  },
];


export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [pinnedCategory, setPinnedCategory] = useState(null);

  return (
    <main className="relative w-full overflow-hidden text-[#F1EEE9]">

      {/* PAGE INTRODUCTION */}

      <section className="relative px-5 sm:px-8 lg:px-[4%]">

        {/* Hero */}

        <div className="flex min-h-[75vh] flex-col justify-center pb-20 pt-20">


          {/* Section label */}

          <div className="mb-10 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">
              SKILLS
            </span>
          </div>


          {/* Main heading */}



          <h1 className="max-w-[1150px] -mt-[0.15em] pb-[0.12em] pt-[0.15em] text-[clamp(3.4rem,9.2vw,9.5rem)] font-bold leading-[0.89] tracking-[-0.075em] bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
            Not a list of
            <br />
            logos. A map of
            <br />
            what I can{" "}
            <span className="-mr-[0.12em] inline-block pb-[0.12em] pr-[0.12em] text-5xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent md:text-7xl lg:text-9xl animate-fade-in-up animation-delay-400">
              build
            </span>
            .
          </h1>


          {/* Description */}

          <p className="mt-10 max-w-[540px] text-sm leading-7 text-white/60 sm:text-base">
            20+ technologies and tools, grouped by the kind of problems
            they solve. Open a row to see what it means in practice.
            Skills are stated honestly where my experience is working
            knowledge or basic exposure.
          </p>
        </div>
      </section>

      {/* SKILL ACCORDION */}

      <section
        className="relative w-full"
        aria-label="Technical skills"
      >

        {skillCategories.map((category) => {
          const isActive =
            activeCategory === category.id || pinnedCategory === category.id;

          return (
            <article
              key={category.id}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => {
                if (pinnedCategory !== category.id) {
                  setActiveCategory(null);
                }
              }}
              onFocus={() => setActiveCategory(category.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setActiveCategory(null);
                }
              }}
              className="relative border-t border-white/[0.16] bg-[#0B0B0B] transition-colors duration-300 last:border-b"
            >

              {/* Category heading */}

              <button
                type="button"
                aria-expanded={isActive}

                onClick={() => {
                  if (pinnedCategory === category.id) {
                    setPinnedCategory(null);
                    setActiveCategory(null);
                  } else {
                    setPinnedCategory(category.id);
                    setActiveCategory(category.id);
                  }
                }}
                className="group flex min-h-[78px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-8 lg:px-[4%] lg:py-6"
              >

                <div className="flex min-w-0 items-center gap-5">

                  <span className="font-mono text-[10px] text-white/30">
                    {category.number}
                  </span>

                  <h2

                    className={`text-2xl font-semibold tracking-[-0.045em] transition-colors duration-300 sm:text-3xl lg:text-[2.5rem] ${isActive
                      ? "text-orange-500"
                      : "bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent"
                      }`}
                  >
                    {category.title}
                  </h2>

                </div>

                {/* Expand indicator */}

                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isActive
                    ? "rotate-45 border-[#FF704D] text-[#FF704D]"
                    : "border-white/30 text-white/60"
                    }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>

              </button>

              {/* Expandable content */}

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >

                <div className="overflow-hidden">

                  <div className="grid gap-8 px-5 pb-9 pt-2 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-[4%] lg:pb-12">

                    {/* Description */}

                    <div>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                        What I work with
                      </p>

                      <p className="max-w-[360px] text-sm leading-7 text-white/65">
                        {category.description}
                      </p>
                    </div>

                    {/* Skill pills */}

                    <div className="flex flex-wrap content-start gap-2">

                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/75 transition-all duration-300 hover:border-[#FF704D] hover:bg-[#FF704D]/10 hover:text-[#FF704D] sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </article>
          );
        })}

      </section>




      {/* BOTTOM CTA */}

      <section className="relative flex flex-col items-start justify-between gap-7 bg-[#0B0B0B] px-5 py-20 sm:flex-row sm:items-center sm:px-8 lg:px-[4%] lg:py-28">

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Want to see these in real projects?
        </h2>

        <div className="flex flex-wrap items-center gap-3">

          <a
            href="/works"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25 sm:px-6 sm:py-3.5 sm:text-base"
          >
            View my work ↗
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-orange-300/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300/50 hover:bg-orange-500/20 sm:px-6 sm:py-3.5 sm:text-base"
          >
            Read my experience
          </a>

        </div>

      </section>


    </main>
  );
}

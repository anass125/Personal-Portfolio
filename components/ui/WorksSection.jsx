// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const projects = [
//   {
//     slug: "passwordman",
//     number: "01",
//     title: "PassWordMan",
//     subtitle: "Password Manager Application",
//     category: "Full Stack",
//     description:
//       "A full-stack credential manager with JWT authentication, role-based access control, Redis caching, BullMQ background jobs and hardened APIs. Containerized with Docker.",
//     tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "JWT", "Docker"],
//     status: "Live",
//     arc: 0,
//   },
//   {
//     slug: "getmeachai",
//     number: "02",
//     title: "GetMeAChai",
//     subtitle: "Crowdfunding Platform",
//     category: "Full Stack",
//     description:
//       "A crowdfunding platform with creator profiles, dashboards, Google and GitHub OAuth, and end-to-end Razorpay payment handling.",
//     tags: ["Next.js", "MongoDB", "NextAuth.js", "Razorpay", "Tailwind CSS"],
//     status: "Live",
//     arc: 90,
//   },
//   {
//     slug: "ebook-publication-website",
//     number: "03",
//     title: "E-Book Publication Website",
//     subtitle: "Ebook Sales Website",
//     category: "Website",
//     description:
//       "A website I built to sell my own ebook, From Bug Report to Root Cause. It has a benefits section, chapter overview, author page and a payment link.",
//     tags: ["GitHub Pages", "Razorpay Payment Link"], // TODO: add real tech stack
//     status: "Live",
//     arc: 180,
//   },
//   {
//     slug: "bug-report-to-root-cause",
//     number: "04",
//     title: "From Bug Report to Root Cause",
//     subtitle: "Published E-Book",
//     category: "Publication",
//     description:
//       "A practical e-book on full-stack debugging and root-cause analysis. It teaches a structured way to investigate bugs and deliver reliable fixes.",
//     tags: ["E-Book", "Debugging", "Root-Cause Analysis"],
//     status: "Published",
//     arc: 270,
//   },
// ];

// const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

// function CoverArt({ arc }) {
//   return (
//     <svg viewBox="0 0 200 200" className="h-full w-full">
//       <g transform={`rotate(${arc} 100 100)`}>
//         <circle cx="100" cy="100" r="72" fill="none" stroke="#FF704D" strokeWidth="2.5"
//           strokeDasharray="300 160" strokeLinecap="round" className="works-spin" />
//       </g>
//       <circle cx="100" cy="100" r="58" fill="none" stroke="white" strokeOpacity="0.18" />
//       <circle cx="100" cy="100" r="42" fill="none" stroke="white" strokeOpacity="0.14" />
//       <circle cx="100" cy="100" r="26" fill="none" stroke="white" strokeOpacity="0.12" />
//       <circle cx="100" cy="100" r="3" fill="#FF704D" />
//       {Array.from({ length: 12 }).map((_, i) => (
//         <line key={i} x1="100" y1="14" x2="100" y2="20" stroke="white" strokeOpacity="0.3"
//           transform={`rotate(${i * 30} 100 100)`} />
//       ))}
//     </svg>
//   );
// }

// export default function WorksSection() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [hovered, setHovered] = useState(null);
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   const visible = projects.filter(
//     (p) => activeFilter === "All" || p.category === activeFilter
//   );
//   const hoveredProject = projects.find((p) => p.slug === hovered);

//   const handleMove = (e) => {
//     setPos({
//       x: Math.min(e.clientX + 28, window.innerWidth - 420),
//       y: Math.min(e.clientY + 28, window.innerHeight - 280),
//     });
//   };

//   return (
//     <main
//       className="relative w-full overflow-hidden text-[#F1EEE9]"
//       onMouseMove={handleMove}
//     >
//       <style>{`
//         @keyframes works-spin { to { transform: rotate(360deg); } }
//         .works-spin { transform-origin: 100px 100px; animation: works-spin 8s linear infinite; }
//       `}</style>

//       {/* INTRO */}
//       <section className="relative px-5 sm:px-8 lg:px-[4%]">
//         <div className="flex min-h-[70vh] flex-col justify-center pb-16 pt-20">
//           <div className="mb-10 flex items-center gap-4">
//             <span className="h-[2px] w-10 bg-[#FF704D]" />
//             <span className="font-mono text-sm tracking-[0.2em] text-white/60">WORKS</span>
//           </div>

//           <h1 className="max-w-[1150px] text-[clamp(3.4rem,9.2vw,9.5rem)] font-bold leading-[0.89] tracking-[-0.075em] animate-fade-in-up animation-delay-400">
//             <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
//               Selected
//             </span>

//             <br />

//             <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
//               work.
//             </span>

//             {/* <span className="text-[#F1EEE9]">.</span> */}
//           </h1>

//           <p className="mt-10 max-w-[540px] text-sm leading-7 text-white/60 sm:text-base">
//             A visual showcase of what I&apos;ve built. Each entry says what it
//             is, what I worked on and what it&apos;s made with. Hover a title to
//             preview its cover. Click to open the full project details.
//           </p>
//         </div>
//       </section>

//       {/* FILTERS */}
//       <section className="relative px-5 sm:px-8 lg:px-[4%]">
//         <div className="inline-flex flex-wrap rounded-lg border border-white/[0.16]">
//           {filters.map((f) => {
//             const count =
//               f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
//             const on = activeFilter === f;
//             return (
//               <button
//                 key={f}
//                 type="button"
//                 onClick={() => setActiveFilter(f)}
//                 className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 ${on ? "rounded-lg bg-white/[0.06] text-[#F1EEE9]" : "text-white/50 hover:text-[#FF704D]"
//                   }`}
//               >
//                 {f}
//                 <span className="rounded border border-white/20 px-1.5 font-mono text-[10px] text-white/60">
//                   {count}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </section>

//       {/* PROJECT LIST */}
//       <section className="relative mt-10 w-full" aria-label="Selected projects">
//         {visible.map((p) => {
//           const isHovered = hovered === p.slug;
//           return (
//             <Link
//               key={p.slug}
//               href={`/works/${p.slug}`}
//               onMouseEnter={() => setHovered(p.slug)}
//               onMouseLeave={() => setHovered(null)}
//               onFocus={() => setHovered(p.slug)}
//               onBlur={() => setHovered(null)}
//               className={`group relative block border-t border-white/[0.16] transition-colors duration-300 last:border-b ${isHovered ? "bg-[#131313]" : "bg-[#0B0B0B]"
//                 }`}
//             >
//               {/* Corner brackets */}
//               {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2",
//                 "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
//                   <span key={c}
//                     className={`pointer-events-none absolute h-3 w-3 border-[#FF704D] transition-opacity duration-300 ${c} ${isHovered ? "opacity-100" : "opacity-0"
//                       }`} />
//                 ))}

//               <div className="grid items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-[4%] lg:py-14">
//                 {/* Left */}
//                 <div className="flex items-start gap-5 lg:gap-10">
//                   <span className="mt-4 font-mono text-[10px] text-white/30">{p.number}</span>
//                   <div className="min-w-0">

//                     <h2
//                       className={`text-4xl font-semibold leading-[0.95] tracking-[-0.045em] transition-all duration-500 sm:text-5xl lg:text-[4.2rem] ${isHovered
//                         ? "translate-x-3 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
//                         : "text-[#F1EEE9]"
//                         }`}
//                     >
//                       {p.title}
//                     </h2>


//                     <p className={`mt-4 text-sm transition-colors duration-300 sm:text-base ${isHovered ? "text-[#FF704D]" : "text-white/65"
//                       }`}>
//                       {p.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Right */}
//                 <div>
//                   <p className="max-w-[460px] text-sm leading-7 text-white/65">{p.description}</p>

//                   <div className="mt-5 flex flex-wrap gap-2">
//                     {p.tags.map((t) => (
//                       <span key={t}
//                         className={`rounded-full border px-3 py-1 font-mono text-[11px] transition-all duration-300 ${isHovered
//                           ? "border-[#FF704D] bg-[#FF704D]/10 text-[#FF704D]"
//                           : "border-white/20 text-white/75"
//                           }`}>
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-white/40">
//                     {p.category} <span className="mx-2">·</span> {p.status}
//                     <span className={`ml-3 inline-block transition-all duration-300 ${isHovered ? "translate-x-1 text-[#FF704D] opacity-100" : "opacity-0"
//                       }`}>
//                       View details ↗
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </section>

//       {/* FLOATING COVER PREVIEW */}
//       <div
//         className={`pointer-events-none fixed z-50 hidden h-[255px] w-[383px] overflow-hidden rounded-2xl border border-white/[0.16] bg-[#121212] shadow-2xl shadow-black/60 transition-[opacity,transform] duration-300 lg:block ${hoveredProject ? "scale-100 opacity-100" : "scale-95 opacity-0"
//           }`}
//         style={{ left: pos.x, top: pos.y }}
//       >
//         {hoveredProject && (
//           <>
//             <span className="absolute left-5 top-5 font-mono text-[10px] tracking-widest text-white/50">
//               {hoveredProject.number} / {String(projects.length).padStart(2, "0")}
//             </span>
//             <div className="absolute right-4 top-4 h-[190px] w-[190px]">
//               <CoverArt arc={hoveredProject.arc} />
//             </div>
//             <div className="absolute bottom-5 left-5 right-5">
//               <p className="text-2xl font-semibold tracking-tight">{hoveredProject.title}</p>
//               <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#FF704D]">
//                 {hoveredProject.subtitle}
//               </p>
//             </div>
//           </>
//         )}
//       </div>

//       {/* BOTTOM CTA */}
//       <section className="relative flex items-center gap-4 bg-[#0B0B0B] px-5 py-16 sm:px-8 lg:px-[4%] lg:py-20">
//         <p className="text-sm font-semibold sm:text-base">Want the detail? Open the project archive</p>
//         <Link
//           href="/works"
//           className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/60 transition-all duration-300 hover:rotate-45 hover:border-[#FF704D] hover:text-[#FF704D]"
//           aria-label="Open project archive"
//         >
//           <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
//             <path d="M12 5v14M5 12h14" />
//           </svg>
//         </Link>
//       </section>
//     </main>
//   );
// }












"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

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

export default function WorksSection() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const visible = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );
  const hoveredProject = projects.find((p) => p.slug === hovered);

  const handleMove = (e) => {
    setPos({
      x: Math.min(e.clientX + 28, window.innerWidth - 420),
      y: Math.min(e.clientY + 28, window.innerHeight - 280),
    });
  };

  return (
    <main
      className="relative w-full overflow-hidden text-[#F1EEE9]"
      onMouseMove={handleMove}
    >
      <style>{`
        @keyframes works-spin { to { transform: rotate(360deg); } }
        .works-spin { transform-origin: 100px 100px; animation: works-spin 8s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .works-spin { animation: none; } }
      `}</style>

      {/* INTRO */}
      <section className="relative px-5 sm:px-8 lg:px-[4%]">
        <div className="flex min-h-[70vh] flex-col justify-center pb-16 pt-20">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">WORKS</span>
          </div>

          <h1 className="max-w-[1150px] text-[clamp(3.4rem,9.2vw,9.5rem)] font-bold leading-[0.89] tracking-[-0.075em] animate-fade-in-up animation-delay-400">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Selected
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
              work.
            </span>
          </h1>

          <p className="mt-10 max-w-[540px] text-sm leading-7 text-white/60 sm:text-base">
            A visual showcase of what I&apos;ve built. Each entry says what it
            is, what I worked on and what it&apos;s made with. Hover a title to
            preview its cover. Click to open the full project details.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="relative px-5 sm:px-8 lg:px-[4%]">
        <div className="inline-flex flex-wrap rounded-lg border border-white/[0.16]">
          {filters.map((f) => {
            const count =
              f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
            const on = activeFilter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 ${on ? "rounded-lg bg-white/[0.06] text-[#F1EEE9]" : "text-white/50 hover:text-[#FF704D]"
                  }`}
              >
                {f}
                <span className="rounded border border-white/20 px-1.5 font-mono text-[10px] text-white/60">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="relative mt-10 w-full" aria-label="Selected projects">
        {visible.map((p) => {
          const isHovered = hovered === p.slug;
          const href = `/works/${p.slug}`;
          return (
            <div
              key={p.slug}
              onClick={() => router.push(href)}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.slug)}
              onBlur={() => setHovered(null)}
              className={`group relative cursor-pointer border-t border-white/[0.16] transition-colors duration-300 last:border-b ${isHovered ? "bg-[#131313]" : "bg-[#0B0B0B]"
                }`}
            >
              {/* Corner brackets */}
              {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2",
                "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
                  <span key={c}
                    className={`pointer-events-none absolute h-3 w-3 border-[#FF704D] transition-opacity duration-300 ${c} ${isHovered ? "opacity-100" : "opacity-0"
                      }`} />
                ))}

              <div className="grid items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-[4%] lg:py-14">
                {/* Left */}
                <div className="flex items-start gap-5 lg:gap-10">
                  <span className="mt-4 font-mono text-[10px] text-white/30">{p.number}</span>
                  <div className="min-w-0">
                    <h2
                      className={`text-4xl font-semibold leading-[0.95] tracking-[-0.045em] transition-all duration-500 sm:text-5xl lg:text-[4.2rem] ${isHovered
                        ? "translate-x-3 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                        : "text-[#F1EEE9]"
                        }`}
                    >
                      <Link href={href} onClick={(e) => e.stopPropagation()}>
                        {p.title}
                      </Link>
                    </h2>

                    <p className={`mt-4 text-sm transition-colors duration-300 sm:text-base ${isHovered ? "text-[#FF704D]" : "text-white/65"
                      }`}>
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <p className="max-w-[460px] text-sm leading-7 text-white/65">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t}
                        className={`rounded-full border px-3 py-1 font-mono text-[11px] transition-all duration-300 ${isHovered
                          ? "border-[#FF704D] bg-[#FF704D]/10 text-[#FF704D]"
                          : "border-white/20 text-white/75"
                          }`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Meta line: type, status and real links */}
                  <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    <span>{p.category}</span>
                    {p.status !== "Live" && (
                      <>
                        <span>·</span>
                        <span>{p.status}</span>
                      </>
                    )}
                    {p.links.map((l) => (
                      <span key={l.label} className="flex items-center gap-3">
                        <span>·</span>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/70 underline-offset-4 transition-colors duration-300 hover:text-[#FF704D] hover:underline"
                        >
                          {l.label} ↗
                        </a>
                      </span>
                    ))}
                    <span className={`inline-block transition-all duration-300 ${isHovered ? "translate-x-1 text-[#FF704D] opacity-100" : "opacity-0"
                      }`}>
                      View details ↗
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* FLOATING COVER PREVIEW */}
      <div
        className={`pointer-events-none fixed z-50 hidden h-[255px] w-[383px] overflow-hidden rounded-2xl border border-white/[0.16] bg-[#121212] shadow-2xl shadow-black/60 transition-[opacity,transform] duration-300 lg:block ${hoveredProject ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        style={{ left: pos.x, top: pos.y }}
      >
        {hoveredProject && (
          <>
            <span className="absolute left-5 top-5 font-mono text-[10px] tracking-widest text-white/50">
              {hoveredProject.number} / {String(projects.length).padStart(2, "0")}
            </span>
            <div className="absolute right-4 top-4 h-[190px] w-[190px]">
              <CoverArt arc={hoveredProject.arc} />
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-2xl font-semibold tracking-tight">{hoveredProject.title}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#FF704D]">
                {hoveredProject.subtitle}
              </p>
            </div>
          </>
        )}
      </div>

      {/* BOTTOM CTA */}
      <section className="relative flex items-center gap-4 bg-[#0B0B0B] px-5 py-16 sm:px-8 lg:px-[4%] lg:py-20">
        <p className="text-sm font-semibold sm:text-base">Want the detail? Open the project archive</p>
        <Link
          href="/works"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/60 transition-all duration-300 hover:rotate-45 hover:border-[#FF704D] hover:text-[#FF704D]"
          aria-label="Open project archive"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
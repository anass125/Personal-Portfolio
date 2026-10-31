// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Skills", href: "/skills" },
//   { label: "Works", href: "/works" },
//   { label: "About", href: "/about" },
//   { label: "Resume", href: "/resume" },
//   { label: "Contact", href: "/contact" },
// ];

// const labelClass =
//   "mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-orange-500";

// const itemClass =
//   "w-fit text-base text-[#F1EEE9]/85 transition-colors duration-300 hover:text-orange-500";

// export default function Footer() {
//   const pathname = usePathname();
//   const [time, setTime] = useState(null);

//   // Live IST clock (set after mount to avoid hydration mismatch)
//   useEffect(() => {
//     const tick = () =>
//       setTime(
//         new Intl.DateTimeFormat("en-GB", {
//           hour: "2-digit",
//           minute: "2-digit",
//           hour12: false,
//           timeZone: "Asia/Kolkata",
//         }).format(new Date())
//       );
//     tick();
//     const id = setInterval(tick, 15000);
//     return () => clearInterval(id);
//   }, []);

//   const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="relative w-full overflow-hidden border-t border-white/[0.16] bg-[#0B0B0B] text-[#F1EEE9]">
//       <div className="mx-auto max-w-[1100px] px-5 pt-20 sm:px-8 lg:px-0">
//         {/* Top grid */}
//         <div className="grid gap-14 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10">
//           {/* Let's talk */}
//           <div className="min-w-0">
//             <p className={labelClass}>Let&rsquo;s talk</p>
//             <a
//               href="mailto:anasshaikh.tech1@gmail.com"
//               className="block break-words bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-2xl font-semibold tracking-[-0.04em] text-transparent transition-opacity duration-300 hover:opacity-80 sm:text-4xl"
//             >
//               anasshaikh.tech1@gmail.com
//             </a>
//             <p className="mt-6 max-w-[340px] text-sm leading-7 text-white/60">
//               Open to conversations about full-stack and backend work. The
//               quickest way to reach me is email.
//             </p>
//           </div>

//           {/* Navigate */}
//           <nav aria-label="Footer navigation">
//             <p className={labelClass}>Navigate</p>
//             <ul className="flex flex-col gap-3">
//               {navLinks.map((l) => {
//                 const active =
//                   l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
//                 return (
//                   <li key={l.href}>
//                     <Link
//                       href={l.href}
//                       aria-current={active ? "page" : undefined}
//                       className={`${itemClass} ${active ? "!text-orange-500" : ""}`}
//                     >
//                       {l.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* Elsewhere */}
//           <div>
//             <p className={labelClass}>Elsewhere</p>
//             <ul className="flex flex-col gap-3">
//               <li>
//                 <a href="https://github.com/anass125" target="_blank" rel="noopener noreferrer" className={itemClass}>
//                   GitHub ↗
//                 </a>
//               </li>
//               <li>
//                 <a href="https://linkedin.com/in/anas-shaikh-946aa4372" target="_blank" rel="noopener noreferrer" className={itemClass}>
//                   LinkedIn ↗
//                 </a>
//               </li>
//               <li>
//                 <a href="/Anas-Shaikh-Resume.pdf" download="Anas-Shaikh-Resume.pdf" className={itemClass}>
//                   Resume (PDF)
//                 </a>
//               </li>
//               <li>
//                 <a href="tel:+918104646116" className={itemClass}>
//                   +91 8104646116
//                 </a>
//               </li>
//             </ul>

//             <div className="mt-8">
//               <p className="text-base text-[#F1EEE9]/85">Vikhroli, Mumbai, India</p>
//               <p className="mt-1 font-mono text-xs text-white/50">
//                 <span className="font-bold text-[#F1EEE9]">{time ?? "--:--"}</span> IST
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Big name */}
//         <div
//           aria-hidden="true"
//           className="mt-24 select-none text-[clamp(4rem,15vw,13.5rem)] font-normal uppercase leading-[0.85] tracking-[-0.06em] text-[#F1EEE9]"
//         >
//           Anas
//           <br />
//           Shaikh
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.16] py-6 text-sm text-white/50 sm:flex-row sm:items-center">
//           <p>&copy; {new Date().getFullYear()} Anas Shaikh. All rights reserved.</p>

//           <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
//             <p>Built with Next.js and Tailwind CSS.</p>
//             <button
//               type="button"
//               onClick={backToTop}
//               className="group inline-flex items-center gap-2 font-medium text-[#F1EEE9] transition-colors duration-300 hover:text-orange-500"
//             >
//               Back to top
//               <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const labelClass =
  "mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-orange-500";

const itemClass =
  "w-fit text-base text-[#F1EEE9]/85 transition-colors duration-300 hover:text-orange-500";

export default function Footer() {
  const pathname = usePathname();
  const [time, setTime] = useState(null);
  const [year, setYear] = useState(2026);

  // Live IST clock and current year (set after mount to avoid build errors)
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    setYear(new Date().getFullYear());
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.16] bg-[#0B0B0B] text-[#F1EEE9]">
      <div className="mx-auto max-w-[1100px] px-5 pt-20 sm:px-8 lg:px-0">
        {/* Top grid */}
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10">
          {/* Let's talk */}
          <div className="min-w-0">
            <p className={labelClass}>Let&rsquo;s talk</p>
            <a
              href="mailto:anasshaikh.tech1@gmail.com"
              className="block break-words bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-2xl font-semibold tracking-[-0.04em] text-transparent transition-opacity duration-300 hover:opacity-80 sm:text-4xl"
            >
              anasshaikh.tech1@gmail.com
            </a>
            <p className="mt-6 max-w-[340px] text-sm leading-7 text-white/60">
              Open to conversations about full-stack and backend work. The
              quickest way to reach me is email.
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <p className={labelClass}>Navigate</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => {
                const active =
                  l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`${itemClass} ${active ? "!text-orange-500" : ""}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <p className={labelClass}>Elsewhere</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="https://github.com/anass125" target="_blank" rel="noopener noreferrer" className={itemClass}>
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/anas-shaikh-946aa4372" target="_blank" rel="noopener noreferrer" className={itemClass}>
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="/Anas-Shaikh-Resume.pdf" download="Anas-Shaikh-Resume.pdf" className={itemClass}>
                  Resume (PDF)
                </a>
              </li>
              <li>
                <a href="tel:+918104646116" className={itemClass}>
                  +91 8104646116
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-base text-[#F1EEE9]/85">Vikhroli, Mumbai, India</p>
              <p className="mt-1 font-mono text-xs text-white/50">
                <span className="font-bold text-[#F1EEE9]">{time ?? "--:--"}</span> IST
              </p>
            </div>
          </div>
        </div>

        {/* Big name */}
        <div
          aria-hidden="true"
          className="mt-24 select-none text-[clamp(4rem,15vw,13.5rem)] font-normal uppercase leading-[0.85] tracking-[-0.06em] text-[#F1EEE9]"
        >
          Anas
          <br />
          Shaikh
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.16] py-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>&copy; {year} Anas Shaikh. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p>Built with Next.js and Tailwind CSS.</p>
            <button
              type="button"
              onClick={backToTop}
              className="group inline-flex items-center gap-2 font-medium text-[#F1EEE9] transition-colors duration-300 hover:text-orange-500"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
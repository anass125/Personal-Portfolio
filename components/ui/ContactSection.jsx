"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const topics = [
  "Full-stack project",
  "Backend / API project",
  "Freelance work",
  "Job opportunity",
  "Other",
];

const MAX = 4000;

const inputClass =
  "w-full rounded-lg border border-white/20 bg-[#131313] px-4 py-3 text-sm text-[#F1EEE9] outline-none transition-colors duration-300 hover:border-white/40 focus:border-orange-500";

const labelClass = "mb-2 block text-sm font-semibold text-[#F1EEE9]";

function Required() {
  return <span className="text-orange-500"> *</span>;
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: topics[0],
    message: "",
    website: "", // honeypot: real users never fill this
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [time, setTime] = useState(null);

  // Live IST clock (set after mount to avoid hydration mismatch)
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
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", topic: topics[0], message: "", website: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <main className="relative w-full overflow-hidden text-[#F1EEE9]">
      {/* HERO */}
      <section className="relative px-5 sm:px-8 lg:px-[4%]">
        <div className="mx-auto max-w-[1100px] pb-16 pt-16">
          <p className="mb-16 text-sm text-white/50">
            <Link href="/" className="transition-colors hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#F1EEE9]">Contact</span>
          </p>

          <div className="mb-10 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">CONTACT</span>
          </div>


          <h1 className="max-w-[1150px] -mt-[0.15em] pb-[0.12em] pt-[0.15em] text-[clamp(3.4rem,9.2vw,9.5rem)] font-bold leading-[0.89] tracking-[-0.075em] bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
            Let&rsquo;s start a
            <br />
            conversation.
            
          </h1>

          <p className="mt-10 max-w-[540px] text-sm leading-7 text-white/60 sm:text-base">
            Tell me a little about what you&rsquo;re working on. A few lines is plenty.
          </p>
        </div>
      </section>

      {/* FORM + DETAILS, inside a box like the resume card */}
      <section className="relative px-5 pb-24 sm:px-8 lg:px-[4%]">
        <div className="mx-auto max-w-[1100px] rounded-[2rem] border border-white/[0.16] bg-[#0B0B0B] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
            {/* Form */}
            <form onSubmit={handleSubmit} className="relative min-w-0">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name<Required /></label>
                  <input id="name" name="name" type="text" required maxLength={100}
                    autoComplete="name" value={form.name} onChange={update} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email<Required /></label>
                  <input id="email" name="email" type="email" required maxLength={200}
                    autoComplete="email" value={form.email} onChange={update} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
                  <input id="phone" name="phone" type="tel" maxLength={30}
                    autoComplete="tel" value={form.phone} onChange={update} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="topic" className={labelClass}>What is this about?</label>
                  <div className="relative">
                    <select id="topic" name="topic" value={form.topic} onChange={update}
                      style={{ colorScheme: "dark" }}
                      className={`${inputClass} appearance-none pr-10`}>
                      {topics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className={labelClass}>Message<Required /></label>
                <textarea id="message" name="message" required rows={7} maxLength={MAX}
                  value={form.message} onChange={update}
                  className={`${inputClass} resize-y`} />
                <p className="mt-2 font-mono text-xs text-white/40">
                  {form.message.length}/{MAX}
                </p>
              </div>

              {/* Honeypot: hidden from real users */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off"
                value={form.website} onChange={update}
                className="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden="true" />

              <p className="mt-6 text-xs text-white/50">
                Fields marked <span className="text-orange-500">*</span> are required. I use your
                details only to reply to you.
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:text-base"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              <div aria-live="polite" className="mt-5 min-h-[24px] text-sm">
                {status === "success" && (
                  <p className="text-orange-500">
                    Message sent. I&rsquo;ll reply to you by email soon.
                  </p>
                )}
                {status === "error" && <p className="text-red-400">{errorMsg}</p>}
              </div>
            </form>

            {/* Details */}
            <aside className="space-y-10 lg:border-l lg:border-white/[0.08] lg:pl-12">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">Email</p>
                <a href="mailto:anasshaikh.tech1@gmail.com"
                  className="break-words text-lg font-semibold tracking-tight transition-colors duration-300 hover:text-orange-500">
                  anasshaikh.tech1@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">Phone</p>
                <a href="tel:+918104646116"
                  className="text-lg font-semibold tracking-tight transition-colors duration-300 hover:text-orange-500">
                  +91 8104646116
                </a>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">Based in</p>
                <p className="text-lg font-semibold tracking-tight">Vikhroli, Mumbai, India</p>
                <p className="mt-2 font-mono text-xs text-white/50">
                  <span className="font-bold text-[#F1EEE9]">{time ?? "--:--"}</span> IST
                </p>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">Elsewhere</p>
                <div className="flex flex-col gap-2 text-lg font-semibold tracking-tight">
                  <a href="https://github.com/anass125" target="_blank" rel="noopener noreferrer"
                    className="w-fit transition-colors duration-300 hover:text-orange-500">
                    GitHub ↗
                  </a>
                  <a href="https://linkedin.com/in/anas-shaikh-946aa4372" target="_blank" rel="noopener noreferrer"
                    className="w-fit transition-colors duration-300 hover:text-orange-500">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
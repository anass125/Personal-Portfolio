"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];
export default function SiteNavbar() {
  const pathname = usePathname();
  // return <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 pointer-events-none">
  return <header className="fixed inset-x-8 top-3 z-50 flex justify-end px-3 pt-3 pointer-events-none">
    <nav aria-label="Main navigation" className="pointer-events-auto flex max-w-full flex-wrap justify-center gap-1 rounded-2xl border border-white/15 bg-black/70 p-2 shadow-2xl backdrop-blur-xl">
      {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}
        className={`rounded-xl px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 ${pathname === link.href ? "bg-orange-500 text-black" : "text-white/90"}`}>
        {link.name}</Link>)}
    </nav>
  </header>;
}

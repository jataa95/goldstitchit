"use client";

import { useEffect, useState } from "react";
import { navLinks, whatsappLink } from "@/lib/site";
import { Logo, WhatsAppIcon } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line/60 bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Gold Stitch It — home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-wide text-white/90 backdrop-blur transition-colors hover:border-gold hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hi Gold Stitch It! I'd like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-gold px-3 py-1.5 text-xs uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" /> Chat
          </a>
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 rounded-md border border-white/15 bg-white/5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-white transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-white transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[32rem]" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-2xl text-white transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hi Gold Stitch It! I'd like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-gold py-3 text-sm text-ink"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

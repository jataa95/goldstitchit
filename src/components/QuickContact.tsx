"use client";

import type { FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

const field =
  "w-full rounded-md border border-line bg-charcoal px-3 py-2.5 text-sm text-white placeholder:text-mute/80 outline-none focus:border-gold";

export function QuickContact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = `Hi Gold Stitch It! My name is ${String(d.get("name")).trim()} (${String(d.get("phone")).trim()}). Please call me back.`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-2">
      <label className="sr-only" htmlFor="qc-name">Your name</label>
      <input id="qc-name" name="name" required placeholder="Your name" className={field} autoComplete="name" />
      <label className="sr-only" htmlFor="qc-phone">Phone number</label>
      <input id="qc-phone" name="phone" required type="tel" placeholder="Phone number" className={field} autoComplete="tel" />
      <button
        type="submit"
        className="mt-1 rounded-md border border-line bg-ink py-2.5 text-sm text-white transition-colors hover:border-gold hover:text-gold"
      >
        Request a call back
      </button>
    </form>
  );
}

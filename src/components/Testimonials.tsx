"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ChevronIcon, Heading, SectionLabel } from "./ui";

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * 360, behavior: "smooth" });

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>testimonials</SectionLabel>
          <div className="flex items-end justify-between gap-4">
            <Heading muted="Customers" strong="review" />
            <div className="hidden shrink-0 items-center rounded-full border border-line sm:inline-flex">
              <button type="button" onClick={() => scroll(-1)} className="px-3 py-1.5 text-white hover:text-gold" aria-label="Previous reviews">
                <ChevronIcon dir="left" />
              </button>
              <span className="h-4 w-px bg-line" />
              <button type="button" onClick={() => scroll(1)} className="px-3 py-1.5 text-white hover:text-gold" aria-label="Next reviews">
                <ChevronIcon dir="right" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 sm:px-8 xl:px-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))]"
      >
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="flex w-[82vw] max-w-[360px] shrink-0 snap-start flex-col rounded-lg border border-line bg-coal p-6"
          >
            <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
              {"★★★★★".split("").map((s, k) => (
                <span key={k}>{s}</span>
              ))}
            </div>
            <p className="mt-4 text-lg text-white">&ldquo;{t.title}&rdquo;</p>
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed">{t.quote}</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-sm text-gold">
                {t.name.charAt(0)}
              </span>
              <span className="text-sm">
                <span className="block text-white">{t.name}</span>
                <span className="text-xs">{t.location}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

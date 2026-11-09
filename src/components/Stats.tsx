"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ChevronIcon, Heading, SectionLabel } from "./ui";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1600;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = duration ? Math.min(1, (t - start) / duration) : 1;
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("en-NG")}
      {suffix}
    </span>
  );
}

export function Stats() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => track.current?.scrollBy({ left: d * 320, behavior: "smooth" });

  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>real impact</SectionLabel>
          <div className="flex items-end justify-between gap-4">
            <Heading muted="The numbers" strong="don't lie" />
            <div className="hidden shrink-0 items-center rounded-full border border-line sm:inline-flex">
              <button type="button" onClick={() => scroll(-1)} className="px-3 py-1.5 text-white hover:text-gold" aria-label="Scroll stats left">
                <ChevronIcon dir="left" />
              </button>
              <span className="h-4 w-px bg-line" />
              <button type="button" onClick={() => scroll(1)} className="px-3 py-1.5 text-white hover:text-gold" aria-label="Scroll stats right">
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
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex aspect-[4/3] w-[78vw] max-w-[320px] shrink-0 snap-start flex-col justify-between rounded-lg bg-coal p-6 sm:w-[300px]"
          >
            <p className="max-w-[16rem] text-sm leading-relaxed">{s.text}</p>
            <div className="flex items-start gap-3">
              <span className="text-5xl tracking-tight text-white sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </span>
              <span className="pt-1 text-xs text-gold">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

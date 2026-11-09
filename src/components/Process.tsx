"use client";

import Image from "next/image";
import { useState } from "react";
import { steps } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ChevronIcon, Heading } from "./ui";

export function Process() {
  const [i, setI] = useState(0);
  const total = steps.length;
  const step = steps[i];
  const next = steps[(i + 1) % total];
  const go = (d: number) => setI((v) => (v + d + total) % total);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="process" className="bg-coal py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
        <div className="flex flex-col">
          <Reveal>
            <Heading muted="Our" strong="workflow" />
          </Reveal>

          <div className="mt-10 lg:mt-auto" aria-live="polite">
            <span className="inline-block rounded bg-gold px-2 py-0.5 text-xs text-ink">
              {pad(i + 1)} / {pad(total)}
            </span>
            <h3 className="mt-3 text-2xl text-white">{step.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">{step.text}</p>

            <div className="mt-5 inline-flex items-center rounded-full border border-line">
              <button type="button" onClick={() => go(-1)} className="px-3 py-1.5 text-white transition-colors hover:text-gold" aria-label="Previous step">
                <ChevronIcon dir="left" />
              </button>
              <span className="h-4 w-px bg-line" />
              <button type="button" onClick={() => go(1)} className="px-3 py-1.5 text-white transition-colors hover:text-gold" aria-label="Next step">
                <ChevronIcon dir="right" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="group relative mt-6 block aspect-[16/10] w-full max-w-sm overflow-hidden rounded-lg text-left"
              aria-label={`Next: ${next.title}`}
            >
              <Image src={next.image} alt="" fill sizes="384px" className="object-cover brightness-75 transition duration-500 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 rounded bg-ink/70 px-2 py-1 text-xs text-white backdrop-blur">
                Next: {next.title}
              </span>
            </button>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-auto lg:min-h-[560px]">
          {steps.map((s, idx) => (
            <Image
              key={s.title}
              src={s.image}
              alt={idx === i ? s.title : ""}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute bottom-4 left-4 flex gap-1.5">
            {steps.map((s, idx) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show step ${idx + 1}: ${s.title}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-3 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

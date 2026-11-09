"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./ui";

export function Studio() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <Reveal className="grid overflow-hidden rounded-lg bg-coal lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-auto lg:min-h-[560px]">
          <video
            ref={ref}
            src="/videos/brand-story.mp4"
            poster="/images/brand-story-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            playsInline
            muted
            loop
            preload="none"
            aria-label="Behind the scenes at Gold Stitch It"
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
          />
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute bottom-5 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-gold hover:text-ink"
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 className="text-4xl tracking-tight text-white sm:text-5xl">
            <span className="heading-muted">Visit the</span> workshop
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Come in for measurements, fabric selection, fittings or to see our training classes in action.
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
            <div className="flex justify-between gap-6 py-3">
              <dt className="text-white">Address</dt>
              <dd className="text-right">
                {site.address.line1}
                <br />
                {site.address.line2}
              </dd>
            </div>
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-6 py-3">
                <dt className="text-white">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-6 py-3">
              <dt className="text-white">Phone</dt>
              <dd>
                <a href={`tel:+${site.whatsappNumber}`} className="hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-6 py-3">
              <dt className="text-white">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-fit items-center gap-3 text-sm text-gold hover:text-gold-light"
          >
            Get directions
            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

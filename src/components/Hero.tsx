"use client";

import { useEffect, useRef } from "react";
import { whatsappLink } from "@/lib/site";
import { ButtonLink } from "./ui";

const VIDEO = "/videos/hero.mp4";
const POSTER = "/images/hero-poster.jpg";

/**
 * Full-screen hero. The video plays in a centred frame and its frames are
 * mirrored onto a tiny canvas that's blurred behind everything — a moving
 * backdrop from a single download.
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!video || !canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) video.pause();

    let raf = 0;
    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 66 || video.paused) return; // ~15fps is plenty for a blur
      last = t;
      if (video.readyState >= 2) ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    };
    raf = requestAnimationFrame(draw);

    const io = new IntersectionObserver(([entry]) => {
      if (reduce) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={POSTER} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl" />
        <canvas ref={canvasRef} width={36} height={64} className="absolute inset-0 h-full w-full scale-110 blur-2xl" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light sm:text-sm">Custom Tailoring · Yaba, Lagos</p>

      <h1 className="text-center font-normal uppercase leading-none tracking-tight text-white">
        <span className="block text-5xl sm:text-7xl lg:text-8xl">Stitched</span>
        <span className="mt-3 flex flex-col items-center gap-4 sm:mt-5 sm:flex-row sm:items-start sm:gap-6">
          <span className="text-5xl sm:pt-2 sm:text-7xl lg:text-8xl">
            In<span className="text-gold sm:hidden"> Gold</span>
          </span>
          <span className="relative block aspect-[9/16] w-[190px] overflow-hidden rounded-md shadow-2xl shadow-black/60 ring-1 ring-white/15 sm:w-[220px] lg:w-[250px]">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={VIDEO}
              poster={POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Models wearing Gold Stitch It tracksuits"
            />
          </span>
          <span className="hidden text-gold sm:block sm:pt-2 sm:text-7xl lg:text-8xl">Gold</span>
        </span>
      </h1>

      <p className="mt-6 max-w-md text-center text-sm text-white/70">
        Custom outfits, bulk brand production and hands-on tailoring training — made with gold-standard care.
      </p>

      <div className="mt-6 flex w-full max-w-xs flex-col gap-2 sm:max-w-md sm:flex-row sm:justify-center">
        <ButtonLink
          href={whatsappLink("Hi Gold Stitch It! I'd like to place an order.")}
          external
          icon="whatsapp"
          className="w-full sm:w-auto"
        >
          Start Your Order
        </ButtonLink>
        <ButtonLink href="#training" variant="outline" className="w-full bg-ink/30 backdrop-blur sm:w-auto">
          Learn Tailoring
        </ButtonLink>
      </div>
    </section>
  );
}

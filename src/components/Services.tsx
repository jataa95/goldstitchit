import Image from "next/image";
import { services, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ArrowIcon, Heading, SectionLabel } from "./ui";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
      <Reveal>
        <SectionLabel>our services</SectionLabel>
        <Heading muted="Every style." strong="Every stitch." />
      </Reveal>

      <div className="mt-10 grid gap-3 lg:grid-cols-[1.1fr_2fr]">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-lg">
          <Image
            src="/images/black-print-jorts.webp"
            alt="Model wearing black Gold Stitch It jorts"
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5">
            <p className="text-2xl text-white">You dream it.</p>
            <p className="text-2xl text-gold">We stitch it.</p>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              From a single custom piece to a full brand drop — tell us what you need.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <a
                href={whatsappLink(`Hi Gold Stitch It! I'm interested in: ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg"
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover blur-[2px] brightness-[0.55] transition duration-700 group-hover:scale-105 group-hover:blur-0 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <h3 className="text-base font-medium text-white sm:text-lg">{s.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 sm:text-sm">
                    {s.blurb}
                  </p>
                </div>
                <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-gold text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowIcon className="h-3 w-3" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

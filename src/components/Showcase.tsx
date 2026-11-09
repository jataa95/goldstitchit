import Image from "next/image";
import { gallery, site } from "@/lib/site";
import { LazyVideo } from "./LazyVideo";
import { Reveal } from "./Reveal";
import { ButtonLink, Heading, SectionLabel } from "./ui";

export function Showcase() {
  return (
    <section id="works" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
      <Reveal>
        <SectionLabel>our showcase</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading muted="From fabric" strong="to fit" />
          <ButtonLink href={site.socials[0].href} external variant="outline">
            More on TikTok
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-10 columns-2 gap-3 md:columns-3">
        {gallery.map((item, i) => (
          <Reveal key={item.src} delay={(i % 3) * 80} className="mb-3 break-inside-avoid">
            <figure className="group relative overflow-hidden rounded-lg bg-coal">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1080}
                  height={i % 2 ? 1440 : 1920}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i % 2 ? "aspect-[3/4]" : "aspect-[9/14]"}`}
                />
              ) : (
                <LazyVideo
                  src={item.src}
                  poster={item.poster}
                  label={item.alt}
                  className="aspect-[3/4] w-full object-cover"
                />
              )}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/90 to-transparent p-3 text-xs text-white transition-transform duration-500 group-hover:translate-y-0">
                {item.alt}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

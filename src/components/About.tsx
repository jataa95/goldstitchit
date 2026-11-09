import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ButtonLink, Heading, SectionLabel } from "./ui";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <SectionLabel>about goldstitchit</SectionLabel>
        <Heading muted="The story" strong="behind the stitch" />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal className="flex flex-col gap-5 text-base leading-relaxed lg:max-w-md">
          <p>
            Gold Stitch It started with one sewing machine and a simple belief: everyone deserves clothes that
            fit their body and their style. Today our Yaba workshop turns ideas, screenshots and brand briefs into
            finished pieces — from one-off jorts to full production runs.
          </p>
          <p>
            We source fabric from Lagos&apos; best markets, cut every pattern by hand and finish each seam like
            it&apos;s going on our own backs. And because the craft should be shared, we train new tailors in the
            same workshop.
          </p>

          <div className="mt-2 flex items-center gap-4 rounded-lg border border-line bg-coal p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="m8.5 12 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="text-sm">
              <p className="text-white">{site.cac.label}</p>
              <p className="text-mute">Business Name Reg. No. {site.cac.regNo}</p>
            </div>
          </div>

          <ButtonLink href="#process" variant="outline" className="mt-2 w-fit">
            How we work
          </ButtonLink>
        </Reveal>

        <div className="grid grid-cols-2 gap-3">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/black-yellow-stripe-shorts.webp"
              alt="Black shorts with yellow stripes on the workshop table"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="flex aspect-[4/5] flex-col justify-between rounded-lg bg-gold p-5 text-ink">
            {/* PLACEHOLDER figure */}
            <p className="text-sm leading-snug">Crafting over 1,500 pieces with patience, precision &amp; true craftsmanship.</p>
            <p className="text-6xl tracking-tight sm:text-7xl">1.5k+</p>
          </Reveal>
          <Reveal delay={150} className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src="/images/fabrics-poster.jpg"
              alt="Checked and gingham fabrics ready to be cut"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

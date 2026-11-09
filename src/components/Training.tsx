import { courses, whatsappLink } from "@/lib/site";
import { LazyVideo } from "./LazyVideo";
import { Reveal } from "./Reveal";
import { ButtonLink, Heading, SectionLabel } from "./ui";

export function Training() {
  return (
    <section id="training" className="bg-coal py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>gold stitch academy</SectionLabel>
          <Heading muted="Learn the craft." strong="Own your craft." />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="flex flex-col gap-6">
            <p className="max-w-md leading-relaxed">
              Hands-on tailoring classes in our Yaba workshop. Small groups, real machines and real orders — so you
              leave with skills you can earn from, whether you want to sew for yourself or start your own brand.
            </p>
            <ul className="grid gap-2 text-sm text-white/90">
              {["Small class sizes", "Practical, project-based lessons", "Certificate on completion", "Flexible weekday & weekend options"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ),
              )}
            </ul>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <LazyVideo
                src="/videos/workshop.mp4"
                poster="/images/workshop-poster.jpg"
                label="Inside the Gold Stitch It workshop"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <ButtonLink
              href={whatsappLink("Hi Gold Stitch It! I'd like to know more about your tailoring training.")}
              external
              icon="whatsapp"
              className="w-fit"
            >
              Ask about training
            </ButtonLink>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-3">
            {courses.map((c, i) => {
              const featured = "featured" in c && c.featured;
              return (
                <Reveal key={c.title} delay={i * 90}>
                  <article
                    className={`flex h-full flex-col rounded-lg border p-6 ${
                      featured ? "border-gold bg-gold/[0.06]" : "border-line bg-ink"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-gold">{c.level}</span>
                      {featured && <span className="rounded bg-gold px-2 py-0.5 text-[10px] uppercase text-ink">Popular</span>}
                    </div>
                    <h3 className="mt-4 text-xl text-white">{c.title}</h3>
                    <p className="mt-1 text-sm">{c.duration}</p>
                    <p className="mt-5 text-3xl text-white">{c.price}</p>
                    <ul className="mt-5 grid gap-2 text-sm">
                      {c.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-gold">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <ButtonLink
                        href={whatsappLink(`Hi Gold Stitch It! I'd like to enrol in the ${c.title} (${c.level}) class.`)}
                        external
                        icon="whatsapp"
                        variant={featured ? "gold" : "outline"}
                        className="w-full"
                      >
                        Enrol now
                      </ButtonLink>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

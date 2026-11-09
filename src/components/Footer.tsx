import { navLinks, site, whatsappLink } from "@/lib/site";
import { QuickContact } from "./QuickContact";
import { ArrowIcon, Logo } from "./ui";

const columns = [
  { title: "Explore", links: navLinks.slice(0, 4) },
  {
    title: "Get started",
    links: [
      { label: "Place an order", href: "#order" },
      { label: "Training classes", href: "#training" },
      { label: "Bulk production", href: whatsappLink("Hi Gold Stitch It! I'd like a quote for bulk production.") },
      { label: "Visit us", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-3 pb-3 pt-12">
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {site.socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-md bg-coal px-4 py-3 text-sm text-white transition-colors hover:bg-gold hover:text-ink"
            >
              <span>
                {s.name} <span className="ml-2 text-xs opacity-60">{s.handle}</span>
              </span>
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-2 grid gap-2 lg:grid-cols-[2.2fr_1fr]">
        <div className="flex flex-col justify-between gap-12 rounded-md bg-black p-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                A Lagos workshop where ideas are cut, stitched and finished in gold — and where new tailors learn the craft.
              </p>
            </div>
            {columns.map((c) => (
              <div key={c.title}>
                <p className="text-sm text-white">{c.title}</p>
                <ul className="mt-4 grid gap-2 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="transition-colors hover:text-gold"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-xs sm:flex-row sm:justify-between">
            <p>
              © {site.year} {site.legalName}. All rights reserved.
            </p>
            <p>CAC Business Name Reg. No. {site.cac.regNo}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-md bg-black p-8">
          <p className="text-xl leading-snug text-white">
            Got an idea? Let&apos;s <span className="text-gold">stitch it</span> in gold.
          </p>
          <QuickContact />
        </div>
      </div>
    </footer>
  );
}

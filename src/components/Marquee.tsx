const words = ["Custom Outfits", "Jorts", "Tracksuits", "Bulk Production", "Brand Drops", "Embroidery", "Tailoring Training", "Made in Lagos"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-2xl text-white/80 sm:text-3xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

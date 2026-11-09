import { LazyVideo } from "./LazyVideo";
import { OrderForm } from "./OrderForm";
import { Reveal } from "./Reveal";

export function Order() {
  return (
    <section id="order">
      <div className="relative flex h-[60vh] min-h-[380px] items-center justify-center overflow-hidden">
        <LazyVideo
          src="/videos/inspiration-to-outfit.mp4"
          poster="/images/inspiration-to-outfit-poster.jpg"
          label="Inspiration pictures turned into finished Gold Stitch It tracksuits"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-md brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
        <Reveal className="relative px-5 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-light">Send a picture. Get the outfit.</p>
          <h2 className="mt-4 text-5xl tracking-tight text-white sm:text-7xl">
            Start your <span className="text-gold">order</span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto max-w-xl px-5 py-20">
        <Reveal>
          <p className="mb-6 text-white/85">
            Whether it&apos;s one custom piece or a full production run for your brand, ordering is simple. Fill this
            in and we&apos;ll continue on WhatsApp.
          </p>
          <OrderForm />
        </Reveal>
      </div>
    </section>
  );
}

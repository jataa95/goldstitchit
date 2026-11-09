import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Order } from "@/components/Order";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Stats } from "@/components/Stats";
import { Studio } from "@/components/Studio";
import { Testimonials } from "@/components/Testimonials";
import { Training } from "@/components/Training";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Stats />
        <Showcase />
        <Training />
        <Order />
        <Testimonials />
        <Studio />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi Gold Stitch It! I'd like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-lg shadow-black/40 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

const field =
  "w-full rounded-md border border-line bg-charcoal px-3 py-2.5 text-sm text-white placeholder:text-mute/80 outline-none transition-colors focus:border-gold";

/** Collects order details and opens WhatsApp with a pre-filled message. */
export function OrderForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const lines = [
      "Hi Gold Stitch It! I'd like to place an order.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Service: ${get("service") || "Not sure yet"}`,
      ...(get("quantity") ? [`Quantity: ${get("quantity")}`] : []),
      ...(get("date") ? [`Needed by: ${get("date")}`] : []),
      "",
      get("message"),
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="of-name">Your name</label>
        <input id="of-name" name="name" required placeholder="Your name*" className={field} autoComplete="name" />
        <label className="sr-only" htmlFor="of-phone">Phone number</label>
        <input id="of-phone" name="phone" required type="tel" placeholder="Phone number*" className={field} autoComplete="tel" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="of-service">Service</label>
        <select id="of-service" name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Choose service
          </option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="of-qty">Quantity</label>
        <input id="of-qty" name="quantity" type="number" min={1} placeholder="Quantity (pieces)" className={field} />
      </div>
      <label className="text-xs text-mute" htmlFor="of-date">
        Needed by (optional)
      </label>
      <input id="of-date" name="date" type="date" className={`${field} -mt-1 [color-scheme:dark]`} />
      <label className="sr-only" htmlFor="of-msg">Message</label>
      <textarea
        id="of-msg"
        name="message"
        required
        rows={5}
        placeholder="Describe what you want — style, colours, fabric, sizes…*"
        className={`${field} resize-y`}
      />
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-gold py-3 text-sm text-ink transition-colors hover:bg-gold-light"
      >
        <WhatsAppIcon /> Send order on WhatsApp
      </button>
      <p className="text-xs text-mute" role="status">
        {sent
          ? "WhatsApp should have opened with your order details — just hit send. You can attach inspiration pictures there too."
          : "Submitting opens WhatsApp with your details filled in. Attach inspiration pictures in the chat."}
      </p>
    </form>
  );
}

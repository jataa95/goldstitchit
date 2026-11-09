import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="shrink-0 text-sm text-gold">.{children}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

/** Two-tone heading: `muted` words in grey, `strong` words in white. */
export function Heading({
  muted,
  strong,
  as: Tag = "h2",
  className = "",
}: {
  muted: string;
  strong: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={`text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] ${className}`}
    >
      <span className="heading-muted">{muted}</span> {strong}
    </Tag>
  );
}

export function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronIcon({ dir, className = "h-3.5 w-3.5" }: { dir: "left" | "right"; className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d={dir === "left" ? "M13 8H3m0 0 4-4M3 8l4 4" : "M3 8h10m0 0-4-4m4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.79.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.09 11.35-11.34a11.27 11.27 0 0 0-3.32-8.02" />
    </svg>
  );
}

const buttonStyles = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  outline: "border border-line text-white hover:border-gold hover:text-gold",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
  external,
  icon = "arrow",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
  external?: boolean;
  icon?: "arrow" | "whatsapp";
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-between gap-6 rounded-md px-4 py-3 text-sm transition-colors duration-300 ${buttonStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon === "whatsapp" ? (
        <WhatsAppIcon />
      ) : (
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </a>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#1c1c1e" />
        <path d="M44 14 20 50" stroke="#d4af37" strokeWidth="4" strokeLinecap="round" />
        <path
          d="M42 17c-12 2-20 9-16 15s14 2 10 10-14 6-18 2"
          fill="none"
          stroke="#e9cf7a"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-white">
        gold<span className="text-gold">stitch</span>it
      </span>
    </span>
  );
}

import type { ReactNode } from "react";

export type Accent = "pink" | "yellow" | "mint" | "sky" | "violet" | "orange" | "dark";

// Fondo + color de texto legible para cada acento
export const accentBg: Record<Accent, string> = {
  pink: "bg-pink text-white",
  yellow: "bg-yellow text-[#241b4b]",
  mint: "bg-mint text-[#241b4b]",
  sky: "bg-sky text-[#241b4b]",
  violet: "bg-violet text-white",
  orange: "bg-orange text-[#241b4b]",
  dark: "bg-[#241b4b] text-white",
};

export const ACCENT_CYCLE: Accent[] = ["pink", "sky", "mint", "yellow", "violet", "orange"];

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  level,
  title,
  subtitle,
  accent = "pink",
}: {
  level: string;
  title: string;
  subtitle?: string;
  accent?: Accent;
}) {
  return (
    <header className="mb-10 sm:mb-12">
      <span className={`inline-block font-pixel text-[10px] px-3 py-2 border-4 border-edge ${accentBg[accent]}`}>
        {level}
      </span>
      <h2 className="mt-5 font-pixel text-2xl sm:text-4xl leading-snug text-ink">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-muted leading-relaxed">{subtitle}</p>}
    </header>
  );
}

export function Panel({
  children,
  title,
  accent = "violet",
  className = "",
  bodyClassName = "p-5 sm:p-6",
}: {
  children: ReactNode;
  title?: ReactNode;
  accent?: Accent;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`pixel-panel ${className}`}>
      {title && (
        <div className={`flex items-center justify-between gap-3 px-4 py-2.5 border-b-4 border-edge ${accentBg[accent]}`}>
          <span className="font-pixel text-[10px] leading-relaxed">{title}</span>
          <span aria-hidden className="flex gap-1">
            <i className="block w-2 h-2 bg-current opacity-80" />
            <i className="block w-2 h-2 bg-current opacity-60" />
            <i className="block w-2 h-2 bg-current opacity-40" />
          </span>
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

export function PixelButton({
  children,
  href,
  onClick,
  accent,
  external,
  download,
  type = "button",
  disabled,
  ariaLabel,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  accent?: Accent;
  external?: boolean;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const cls = `pixel-btn inline-flex items-center justify-center gap-2 px-4 py-3 text-[10px] leading-none ${
    accent ? accentBg[accent] : "bg-panel text-ink"
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        download={download || undefined}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}

export function Tag({ children, accent }: { children: ReactNode; accent?: Accent }) {
  return (
    <span
      className={`inline-block font-retro text-lg leading-none px-2 py-1 border-2 border-edge ${
        accent ? accentBg[accent] : "bg-panel2 text-ink"
      }`}
    >
      {children}
    </span>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

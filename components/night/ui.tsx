import type { ReactNode } from "react";

export function Section({
  id,
  children,
  lurker,
  decor,
  accent,
}: {
  id: string;
  children: ReactNode;
  lurker?: ReactNode;
  decor?: ReactNode;
  accent?: string;
}) {
  return (
    <section
      id={id}
      className="relative py-20 sm:py-28"
      style={accent ? ({ "--accent": accent } as React.CSSProperties) : undefined}
    >
      {/* Luz del color de la sala */}
      {accent && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[520px] pointer-events-none z-0"
          style={{ background: `radial-gradient(ellipse 60% 70% at 50% 0%, ${accent}22, transparent 70%)` }}
        />
      )}
      {/* Decoración de fiesta y personaje que aparece, detrás del contenido */}
      {decor}
      {lurker}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function RecDot({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`inline-block w-2.5 h-2.5 rounded-full bg-rec animate-rec ${className}`} />;
}

/** Encabezado de sección como rótulo de cámara: "● REC  CAM 02 · LABORATORIO" */
export function SectionHeader({
  cam,
  room,
  title,
  subtitle,
}: {
  cam: string;
  room: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-10 sm:mb-12">
      <p className="flex items-center gap-2 font-retro text-xl text-muted uppercase tracking-wider">
        <RecDot />
        <span className="text-rec">REC</span>
        <span>
          {cam} · <span style={{ color: "var(--accent, inherit)" }}>{room}</span>
        </span>
      </p>
      <h2 className="mt-2 font-retro text-5xl sm:text-7xl uppercase leading-none tracking-wide text-ink vhs-neon animate-flicker">
        {title}
      </h2>
      <span aria-hidden className="mt-3 block h-1 w-24" style={{ background: "var(--accent, #ff3b3b)", boxShadow: "0 0 12px var(--accent, #ff3b3b)" }} />
      {subtitle && <p className="mt-4 max-w-2xl text-muted leading-relaxed">{subtitle}</p>}
    </header>
  );
}

/** Panel con barra superior tipo monitor */
export function Feed({
  label,
  right,
  children,
  className = "",
  bodyClassName = "p-5 sm:p-6",
}: {
  label?: ReactNode;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`cam-frame ${className}`}>
      {label && (
        <div
          className="flex items-center justify-between gap-3 px-4 py-2 border-b border-edge bg-panel2 font-retro text-lg uppercase tracking-wider"
          style={{ boxShadow: "inset 4px 0 0 var(--accent, transparent)" }}
        >
          <span className="text-ink">{label}</span>
          <span className="flex items-center gap-2 text-muted">{right ?? <RecDot />}</span>
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

type Variant = "primary" | "ghost" | "danger";
const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg border-ink hover:bg-rec hover:border-rec hover:text-white",
  ghost: "bg-transparent text-ink hover:bg-panel2 hover:border-ink",
  danger: "bg-rec text-white border-rec hover:bg-[#d82828]",
};

export function CamButton({
  children,
  href,
  onClick,
  variant = "ghost",
  external,
  download,
  type = "button",
  disabled,
  ariaLabel,
  ariaPressed,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
  ariaPressed?: boolean;
  className?: string;
}) {
  const cls = `cam-btn inline-flex items-center justify-center gap-2 px-4 py-2 text-xl leading-none ${variants[variant]} ${className}`;
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
    <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} aria-pressed={ariaPressed} className={cls}>
      {children}
    </button>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-retro text-lg leading-none px-2 py-1 border border-edge text-muted uppercase">
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

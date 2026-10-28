import React from "react";

// Realistic Semi-transparent Washi / Masking Tape Strip in Palette Colors
export function Tape({
  className = "",
  variant = "masking", // masking, duct, scotch, warning, maroon, noir
  children,
}: {
  className?: string;
  variant?: "masking" | "duct" | "scotch" | "warning" | "maroon" | "noir";
  children?: React.ReactNode;
}) {
  const styles = {
    masking:
      "bg-[#EDEBDD]/90 text-[#1B1717] border-y border-dashed border-[#810100]/40 shadow-sm backdrop-blur-[2px]",
    duct: "bg-[#3A3333]/70 text-[#EDEBDD] border-y border-neutral-400/40 shadow-md backdrop-blur-[3px]",
    scotch: "bg-white/45 text-[#1B1717] border-y border-white/60 backdrop-blur-[4px] shadow-sm",
    warning:
      "bg-[#810100] text-[#EDEBDD] font-black font-mono tracking-widest border-2 border-[#1B1717] shadow-[3px_3px_0px_#1B1717]",
    maroon:
      "bg-[#630000] text-[#EDEBDD] font-black font-mono tracking-widest border-2 border-[#1B1717] shadow-[3px_3px_0px_#1B1717]",
    noir:
      "bg-[#1B1717] text-[#EDEBDD] font-black font-mono tracking-widest border-2 border-[#810100] shadow-[3px_3px_0px_#630000]",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center px-4 py-1.5 select-none ${styles[variant]} ${className}`}
      style={{
        clipPath:
          "polygon(0% 4px, 3px 0%, 100% 2px, calc(100% - 3px) 6px, 100% calc(100% - 3px), calc(100% - 4px) 100%, 2px calc(100% - 2px), 0% 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </div>
  );
}

// Metallic Crocodile / Paper Clip for Badges
export function Paperclip({
  className = "",
  variant = "silver",
}: {
  className?: string;
  variant?: "silver" | "brass" | "cherry";
}) {
  const fill = variant === "cherry" ? "#810100" : variant === "brass" ? "#990200" : "#64748b";
  const stroke = variant === "cherry" ? "#630000" : variant === "brass" ? "#630000" : "#334155";

  return (
    <svg
      viewBox="0 0 32 80"
      className={`w-5 h-12 drop-shadow-[2px_4px_3px_rgba(27,23,23,0.4)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 6 C24 6, 26 14, 26 24 L26 62 C26 72, 18 76, 12 76 C6 76, 4 70, 4 62 L4 20 C4 12, 10 8, 16 8 C22 8, 22 14, 22 20 L22 58 C22 62, 18 64, 15 64 C12 64, 11 61, 11 58 L11 24"
        stroke={stroke}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M16 6 C24 6, 26 14, 26 24 L26 62 C26 72, 18 76, 12 76 C6 76, 4 70, 4 62 L4 20 C4 12, 10 8, 16 8 C22 8, 22 14, 22 20 L22 58 C22 62, 18 64, 15 64 C12 64, 11 61, 11 58 L11 24"
        stroke={fill}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Metallic Badge Clip / Crocodile Clamp
export function BadgeClip({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Strap / Loop */}
      <div className="w-4 h-6 bg-[#1B1717] border-x border-neutral-500 rounded-t-sm shadow-inner" />
      {/* Metal Clamp */}
      <div className="w-8 h-4 rounded-sm bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-600 border border-neutral-700 shadow-[0_4px_6px_rgba(27,23,23,0.4)] flex items-center justify-center">
        <div className="w-3 h-1 bg-[#1B1717] rounded-full" />
      </div>
      {/* Fastener rivet */}
      <div className="w-2 h-2 rounded-full bg-[#810100] border border-neutral-400 -mt-1" />
    </div>
  );
}

// 3D Pushpin in Cherry Red / Maroon / Noir
export function Pushpin({
  className = "",
  color = "#810100",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6 drop-shadow-[2px_5px_4px_rgba(27,23,23,0.45)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Needle shadow */}
        <line x1="16" y1="18" x2="16" y2="30" stroke="#1B1717" strokeWidth="2.5" strokeLinecap="round" />
        {/* Pin base */}
        <ellipse cx="16" cy="18" rx="7" ry="3.5" fill="#1B1717" />
        {/* Pin plastic body */}
        <path
          d="M10 16 C10 10, 12 8, 14 6 L14 4 L18 4 L18 6 C20 8, 22 10, 22 16 Z"
          fill={color}
          stroke="#1B1717"
          strokeWidth="1.2"
        />
        {/* Pin cap top */}
        <ellipse cx="16" cy="4" rx="5" ry="2" fill="#ffffff" fillOpacity="0.4" />
        {/* Highlight sheen */}
        <circle cx="14" cy="12" r="2" fill="#ffffff" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

// Hand-Drawn Doodle Arrow SVG in Cherry Red
export function DoodleArrow({
  className = "",
  color = "#810100",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 70"
      className={`w-24 h-14 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15 C35 8, 75 12, 85 45 C88 52, 95 58, 108 55"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M92 48 L109 56 L104 38"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Marker Scratch / Underline SVG in Cherry Red
export function MarkerScratch({
  className = "",
  color = "#810100",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 18"
      className={`w-full h-3 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M3 9 C45 3, 115 15, 197 7 C155 12, 70 8, 12 14"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Vector Barcode for Thermal Receipts & ID Badges
export function Barcode({
  className = "",
  code = "*SEBAS-ARCH-2026*",
}: {
  className?: string;
  code?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-[2px] h-10 px-2 py-1 bg-white select-none border border-neutral-300">
        {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1, 4].map(
          (w, idx) => (
            <div
              key={idx}
              className="bg-[#1B1717] h-full"
              style={{ width: `${w}px` }}
            />
          )
        )}
      </div>
      <span className="font-mono text-[9px] tracking-widest text-[#1B1717] mt-0.5 font-bold">
        {code}
      </span>
    </div>
  );
}

// Vector QR Code Graphic
export function QRCodeGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`p-1.5 bg-white border-2 border-[#1B1717] inline-block ${className}`}>
      <svg
        viewBox="0 0 45 45"
        className="w-12 h-12"
        fill="#1B1717"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="13" height="13" />
        <rect x="4" y="4" width="9" height="9" fill="white" />
        <rect x="6" y="6" width="5" height="5" />

        <rect x="30" y="2" width="13" height="13" />
        <rect x="32" y="4" width="9" height="9" fill="white" />
        <rect x="34" y="6" width="5" height="5" />

        <rect x="2" y="30" width="13" height="13" />
        <rect x="4" y="32" width="9" height="9" fill="white" />
        <rect x="6" y="34" width="5" height="5" />

        <rect x="18" y="4" width="3" height="3" />
        <rect x="24" y="6" width="3" height="3" />
        <rect x="18" y="12" width="3" height="3" />
        <rect x="24" y="16" width="3" height="3" />
        <rect x="6" y="20" width="3" height="3" />
        <rect x="12" y="22" width="3" height="3" />
        <rect x="18" y="22" width="3" height="3" />
        <rect x="28" y="22" width="3" height="3" />
        <rect x="36" y="20" width="3" height="3" />
        <rect x="18" y="32" width="3" height="3" />
        <rect x="24" y="30" width="3" height="3" />
        <rect x="32" y="34" width="3" height="3" />
        <rect x="38" y="36" width="3" height="3" />
        <rect x="26" y="38" width="3" height="3" />
      </svg>
    </div>
  );
}

// WhatsApp Icon SVG
export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

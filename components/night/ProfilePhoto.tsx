import Image from "next/image";
import { profile } from "@/data/profile";

/** Foto del empleado en formato de cámara. Si no hay foto, muestra una silueta. */
export default function ProfilePhoto({
  alt,
  noPhotoLabel,
  className = "w-28 h-32",
  sizes = "160px",
}: {
  alt: string;
  noPhotoLabel: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`screen scanlines relative border border-edge ${className}`}>
      {profile.photo ? (
        <Image src={profile.photo} alt={alt} fill sizes={sizes} className="object-cover grayscale contrast-125" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-end">
          <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" aria-hidden>
            <circle cx="50" cy="38" r="18" fill="#1d2622" />
            <path d="M14 100c2-22 17-34 36-34s34 12 36 34Z" fill="#1d2622" />
          </svg>
          <span className="absolute top-1.5 inset-x-0 text-center font-retro text-base text-[#8c9b8f] tracking-widest">
            {noPhotoLabel}
          </span>
        </div>
      )}
    </div>
  );
}

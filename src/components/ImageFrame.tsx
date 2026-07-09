import { ImageIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

interface ImageFrameProps {
  ratio: "16/9" | "4/5" | "1/1" | "3/4" | "9/16" | "auto";
  className?: string;
  label?: string;
  children?: ReactNode;
  style?: CSSProperties;
  src?: string;
  alt?: string;
  zoom?: boolean;
  objectPosition?: string;
}

export function ImageFrame({
  ratio,
  className = "",
  label,
  children,
  style,
  src,
  alt = "",
  zoom = true,
  objectPosition = "center",
}: ImageFrameProps) {
  const aspect = ratio === "auto" ? undefined : ratio.replace("/", " / ");
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-3xl bg-cream ${className}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      {!src && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground/60">
          <ImageIcon className="h-8 w-8" strokeWidth={1} />
          {label && (
            <span className="text-[10px] font-medium uppercase tracking-[0.25em]">{label}</span>
          )}
        </div>
      )}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out ${
            zoom ? "group-hover:scale-[1.04]" : ""
          }`}
          style={{ objectPosition }}
        />
      )}
      {children}
    </div>
  );
}

import { ImageIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

interface ImageFrameProps {
  ratio: "16/9" | "4/5" | "1/1" | "3/4" | "9/16";
  className?: string;
  label?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export function ImageFrame({ ratio, className = "", label, children, style }: ImageFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl bg-cream ${className}`}
      style={{ aspectRatio: ratio.replace("/", " / "), ...style }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground/60">
        <ImageIcon className="h-8 w-8" strokeWidth={1} />
        {label && (
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">{label}</span>
        )}
      </div>
      {children}
    </div>
  );
}

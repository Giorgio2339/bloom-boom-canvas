import { useEffect } from "react";

/**
 * Global smooth scrolling (Lenis). Client-only, no visual changes.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void; scrollTo: (t: unknown, o?: unknown) => void } | null =
      null;
    let cancelled = false;

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href") || "";
      if (hash === "#") {
        event.preventDefault();
        lenis?.scrollTo(0, { offset: 0 });
        return;
      }
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      lenis?.scrollTo(target, { offset: -80 });
    };

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        // Native, non-janky scrolling on touch devices
        syncTouch: false,
        touchMultiplier: 1.5,
      }) as unknown as typeof lenis;

      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      document.addEventListener("click", onAnchorClick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return null;
}

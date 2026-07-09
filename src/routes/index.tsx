import { createFileRoute } from "@tanstack/react-router";
import { ImageFrame } from "@/components/ImageFrame";
import { Star, MapPin, Clock, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/bloom-boom-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const drinks = [
  {
    name: "Erdbeer-Matcha",
    note: "Unser Signature Drink. Frisch, cremig & wunderschön.",
    price: "3,70 €",
  },
  {
    name: "Iced Caffe Latte",
    note: "Perfekt geröstet, eiskalt serviert.",
    price: "3,70 €",
  },
  {
    name: "Hojicha Latte",
    note: "Für Momente der absoluten Ruhe.",
    price: "3,50 €",
  },
];

const gallery: Array<{ ratio: "1/1" | "4/5" | "16/9" | "3/4"; label: string }> = [
  { ratio: "4/5", label: "Flower Ceiling" },
  { ratio: "1/1", label: "Latte Art" },
  { ratio: "16/9", label: "Interior Wide" },
  { ratio: "1/1", label: "Cake Detail" },
  { ratio: "4/5", label: "Window Seat" },
  { ratio: "3/4", label: "Bouquet" },
  { ratio: "1/1", label: "Menu Card" },
  { ratio: "4/5", label: "Terrace" },
];

const quotes = [
  {
    text: "Die Atmosphäre ist unglaublich gemütlich – alles im süßen, mädchenhaften Stil gestaltet, als wäre es direkt von Pinterest inspiriert.",
    name: "Sofia S.",
  },
  {
    text: "Der beste Matcha in Chemnitz. Dazu ist der Laden auch noch extrem günstig. 10/10 Erlebnis!",
    name: "DML",
  },
  {
    text: "Wunderbar. Man kommt rein und wird von Barista Irina direkt mit einem Lächeln empfangen.",
    name: "Sophia O.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Bloom Boom"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Drinks />
      <SweetTreats />
      <Gallery />
      <Voices />
      <Visit />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[min(94%,1100px)] -translate-x-1/2 rounded-full glass px-6 py-3 md:px-8 md:py-3">
      <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:grid-cols-3">
        <a href="#" className="flex items-center" aria-label="Bloom Boom — Home">
          <Logo className="h-8 w-auto md:h-10" />
        </a>
        <ul className="hidden justify-center gap-8 text-xs uppercase tracking-[0.22em] text-foreground/70 md:flex">
          <li><a href="#drinks" className="hover:text-foreground">Drinks</a></li>
          <li><a href="#treats" className="hover:text-foreground">Treats</a></li>
          <li><a href="#gallery" className="hover:text-foreground">Vibe</a></li>
          <li><a href="#visit" className="hover:text-foreground">Visit</a></li>
        </ul>
        <div className="flex justify-end">
          <a
            href="#visit"
            className="rounded-full bg-accent px-5 py-2 text-xs uppercase tracking-[0.2em] text-accent-foreground transition hover:brightness-95"
          >
            Besuchen
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 pt-32 pb-24 md:px-8">
      <ImageFrame
        ratio="16/9"
        label="Hero — 16:9 / Fullscreen"
        className="absolute inset-0 !h-full !w-full !rounded-none"
        style={{ aspectRatio: "auto" }}
      />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center text-center">
        <div className="glass rounded-[2.5rem] px-8 py-14 md:px-16 md:py-20">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-foreground/60">
            Boutique Café · Chemnitz
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            Chemnitz' First <br />
            <em className="font-normal italic">Pinterest Café.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
            Matcha, Coffee & Art. Ein Ort, der sich anfühlt wie eine Umarmung.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#drinks"
              className="rounded-full bg-accent px-8 py-4 text-xs uppercase tracking-[0.24em] text-accent-foreground transition hover:brightness-95"
            >
              Menu entdecken
            </a>
            <a
              href="#visit"
              className="rounded-full border border-foreground/20 px-8 py-4 text-xs uppercase tracking-[0.24em] text-foreground transition hover:bg-foreground/5"
            >
              Find us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-foreground/5 bg-background px-4 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center md:flex-row md:justify-center md:gap-6">
        <div className="flex gap-1 text-matcha">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-foreground/60">
          5.0 ★ aus 67 Bewertungen – Der beste Matcha in Chemnitz.
        </p>
      </div>
    </section>
  );
}

function Drinks() {
  return (
    <section id="drinks" className="px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-6xl">
        <div className="mb-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">
            Chapter I
          </p>
          <h2 className="font-serif text-4xl italic md:text-6xl">The Art of Drinks</h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-foreground/60 md:text-base">
            Drei Signatures – gemacht mit Zeit, guten Zutaten und einer ordentlichen Portion Liebe.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {drinks.map((d, i) => (
            <article key={d.name} className="group flex flex-col">
              <ImageFrame ratio="4/5" label={`Drink ${i + 1} · 4:5`} />
              <div className="px-2 pt-8 text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/50">
                  N°0{i + 1}
                </p>
                <h3 className="mt-3 font-serif text-2xl italic md:text-3xl">{d.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-foreground/60 md:text-sm">
                  {d.note}
                </p>
                <p className="mt-6 font-serif text-lg text-foreground/80">{d.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SweetTreats() {
  return (
    <section id="treats" className="bg-cream px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12 md:items-center md:gap-24">
        <div className="md:col-span-7">
          <ImageFrame ratio="1/1" label="Sweet Treats · 1:1" />
        </div>
        <div className="md:col-span-5 md:pl-4">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">
            Chapter II
          </p>
          <h2 className="font-serif text-4xl italic leading-tight md:text-6xl">
            Handgemachte <br />Kunstwerke.
          </h2>
          <p className="mt-8 text-sm leading-relaxed text-foreground/70 md:text-base">
            Jedes Detail ist pure Liebe. Probier unser berüchtigtes{" "}
            <em className="italic">Matcha Strawberry Tiramisu</em> (3,00 €) oder frische Mochi.
            Fast zu schön, um sie zu essen.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Für einen schmalen Taler – täglich frisch.
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="px-0 py-40 md:py-56">
      <div className="mb-20 px-6 text-center md:mb-24">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">
          Chapter III
        </p>
        <h2 className="font-serif text-4xl italic md:text-6xl">Inside the bloom</h2>
      </div>
      <div className="columns-2 gap-2 px-2 md:columns-3 md:gap-3 md:px-3 lg:columns-4">
        {gallery.map((g, i) => (
          <div key={i} className="mb-2 break-inside-avoid md:mb-3">
            <ImageFrame ratio={g.ratio} label={g.label} className="!rounded-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section className="bg-cream px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">
          Chapter IV
        </p>
        <h2 className="mb-16 font-serif text-4xl italic md:text-5xl">Real voices</h2>

        <blockquote className="font-serif text-2xl italic leading-relaxed md:text-4xl md:leading-[1.35]">
          &ldquo;{q.text}&rdquo;
        </blockquote>
        <p className="mt-10 text-xs uppercase tracking-[0.35em] text-foreground/60">
          — {q.name}
        </p>

        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
            className="grid h-11 w-11 place-items-center rounded-full glass transition hover:bg-white/70"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-cocoa" : "w-1.5 bg-foreground/25"
                }`}
                aria-label={`Quote ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((i + 1) % quotes.length)}
            className="grid h-11 w-11 place-items-center rounded-full glass transition hover:bg-white/70"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">
            Come by
          </p>
          <h2 className="font-serif text-4xl italic md:text-6xl">
            Komm auf einen Matcha vorbei.
          </h2>
        </div>

        <div className="grid gap-14 rounded-[2.5rem] bg-cream p-10 md:grid-cols-2 md:p-16">
          <div className="space-y-10">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <MapPin className="h-4 w-4" strokeWidth={1.5} /> Adresse
              </div>
              <p className="font-serif text-xl italic md:text-2xl">
                Moritzstraße 20 (im TIETZ) <br /> 09111 Chemnitz
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <Clock className="h-4 w-4" strokeWidth={1.5} /> Öffnungszeiten
              </div>
              <ul className="space-y-2 font-serif text-lg italic md:text-xl">
                <li className="flex justify-between border-b border-foreground/10 pb-2">
                  <span>Mo — Fr</span><span>09:30 — 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sa</span><span>11:30 — 19:00</span>
                </li>
              </ul>
            </div>

            <a
              href="https://www.instagram.com/bloom.boom.chemnitz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cocoa px-8 py-4 text-xs uppercase tracking-[0.24em] text-primary-foreground transition hover:brightness-110"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} /> Folge uns
            </a>
          </div>

          <ImageFrame ratio="4/5" label="Café · 4:5" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-16 pt-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-foreground/10 pt-10 md:flex-row">
        <Logo className="h-8 w-auto" />
        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          © {new Date().getFullYear()} · Made with soft hands in Chemnitz
        </p>
        <a
          href="https://www.instagram.com/bloom.boom.chemnitz"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-foreground/60 hover:text-foreground"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.5} /> @bloom.boom.chemnitz
        </a>
      </div>
    </footer>
  );
}

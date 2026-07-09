import { createFileRoute } from "@tanstack/react-router";
import { ImageFrame } from "@/components/ImageFrame";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, Instagram, ChevronLeft, ChevronRight, Quote, Navigation } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/bloom-boom-logo.png.asset.json";

import matchaMenu from "@/assets/menu/matcha.jpg.asset.json";
import lemonadesMenu from "@/assets/menu/lemonades.jpg.asset.json";
import icedLattesMenu from "@/assets/menu/iced-lattes.jpg.asset.json";
import mojitoMenu from "@/assets/menu/mojito.jpg.asset.json";
import specialMenu from "@/assets/menu/special.png.asset.json";

import cupPhoto from "@/assets/photos/cup.png.asset.json";
import creamMatchaPhoto from "@/assets/photos/cream-matcha.png.asset.json";
import latteFlowersPhoto from "@/assets/photos/latte-flowers.png.asset.json";
import pinkMatchaPhoto from "@/assets/photos/pink-matcha.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Bloom+Boom+Moritzstra%C3%9Fe+20+09111+Chemnitz";

const drinks = [
  {
    name: "Erdbeer-Matcha",
    note: "Unser Signature Drink. Frisch, cremig & wunderschön.",
    price: "3,70 €",
    src: pinkMatchaPhoto.url,
  },
  {
    name: "Iced Caffe Latte",
    note: "Perfekt geröstet, eiskalt serviert.",
    price: "3,70 €",
    src: latteFlowersPhoto.url,
  },
  {
    name: "Hojicha Latte",
    note: "Für Momente der absoluten Ruhe.",
    price: "3,50 €",
    src: creamMatchaPhoto.url,
  },
];

const menuCards = [
  { src: matchaMenu.url, title: "Matcha Menu", note: "Signature Fruit Matcha" },
  { src: specialMenu.url, title: "Special Menu", note: "Earl Grey · Lavender · Ube" },
  { src: icedLattesMenu.url, title: "Iced Lattes", note: "Coffee mit Blüten-Twist" },
  { src: lemonadesMenu.url, title: "Lemonades", note: "Hausgemacht & fruchtig" },
  { src: mojitoMenu.url, title: "Mojitos", note: "Alkoholfrei · immer frisch" },
];

const gallery: Array<{ ratio: "1/1" | "4/5" | "16/9" | "3/4"; src?: string; label: string }> = [
  { ratio: "4/5", src: pinkMatchaPhoto.url, label: "Pink Matcha" },
  { ratio: "1/1", src: creamMatchaPhoto.url, label: "Cream Matcha" },
  { ratio: "4/5", src: cupPhoto.url, label: "To Go" },
  { ratio: "1/1", src: latteFlowersPhoto.url, label: "Latte & Flowers" },
  { ratio: "4/5", label: "Flower Ceiling" },
  { ratio: "3/4", label: "Bouquet" },
  { ratio: "1/1", label: "Menu Card" },
  { ratio: "4/5", label: "Terrace" },
];

const quotes = [
  {
    text: "Die Atmosphäre ist unglaublich gemütlich – alles im süßen, mädchenhaften Stil gestaltet, als wäre es direkt von Pinterest inspiriert.",
    name: "Sofia S.",
    role: "Google Review",
  },
  {
    text: "Der beste Matcha in Chemnitz. Dazu ist der Laden auch noch extrem günstig. 10/10 Erlebnis!",
    name: "DML",
    role: "Google Review",
  },
  {
    text: "Wunderbar. Man kommt rein und wird von Barista Irina direkt mit einem Lächeln empfangen.",
    name: "Sophia O.",
    role: "Google Review",
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
      <MenuSection />
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
          <li><a href="#drinks" className="transition-colors duration-300 hover:text-foreground">Drinks</a></li>
          <li><a href="#menu" className="transition-colors duration-300 hover:text-foreground">Menu</a></li>
          <li><a href="#gallery" className="transition-colors duration-300 hover:text-foreground">Vibe</a></li>
          <li><a href="#visit" className="transition-colors duration-300 hover:text-foreground">Visit</a></li>
        </ul>
        <div className="flex justify-end">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:brightness-95 hover:shadow-[0_10px_25px_-10px_rgba(110,82,75,0.25)]"
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
        ratio="auto"
        src={latteFlowersPhoto.url}
        alt="Bloom Boom Café Ambiente"
        zoom={false}
        className="absolute inset-0 !h-full !w-full !rounded-none"
        style={{ aspectRatio: "auto" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70" />
      </ImageFrame>
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center text-center">
        <Reveal className="glass rounded-[2.5rem] px-8 py-14 md:px-16 md:py-20 soft-shadow">
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
              className="rounded-full bg-accent px-8 py-4 text-xs uppercase tracking-[0.24em] text-accent-foreground transition-all duration-300 hover:brightness-95 hover:shadow-[0_15px_30px_-15px_rgba(110,82,75,0.3)]"
            >
              Menu entdecken
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-foreground/20 px-8 py-4 text-xs uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:bg-foreground/5"
            >
              Find us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["Handmade with Love", "Frische Zutaten", "Aesthetic Vibes only", "Made in Chemnitz"];
  return (
    <section className="border-y border-foreground/5 bg-background px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-8 text-[11px] uppercase tracking-[0.32em] text-foreground/55">
            {t}
            {i < items.length - 1 && <span className="text-accent">✿</span>}
          </span>
        ))}
      </div>
    </section>
  );
}

function Drinks() {
  return (
    <section id="drinks" className="px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">Chapter I</p>
          <h2 className="font-serif text-4xl italic md:text-6xl">The Art of Drinks</h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-foreground/60 md:text-base">
            Drei Signatures – gemacht mit Zeit, guten Zutaten und einer ordentlichen Portion Liebe.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {drinks.map((d, i) => (
            <Reveal key={d.name} delay={i * 120} as="article" className="group flex flex-col">
              <div className="soft-lift rounded-3xl">
                <ImageFrame
                  ratio="4/5"
                  src={d.src}
                  alt={d.name}
                  label={`Drink ${i + 1} · 4:5`}
                />
              </div>
              <div className="px-2 pt-8 text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/50">N°0{i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl italic md:text-3xl">{d.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-foreground/60 md:text-sm">{d.note}</p>
                <p className="mt-6 font-serif text-lg text-foreground/80">{d.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="bg-blush/30 px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">Chapter II</p>
          <h2 className="font-serif text-4xl italic md:text-6xl">Die ganze Speisekarte</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
            Von Signature Matcha über florale Lattes bis hin zu hausgemachten Limonaden.
            Für jeden Mood die richtige Tasse.
          </p>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-6 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-5">
          {menuCards.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 90}
              className="w-[78%] flex-shrink-0 snap-center md:w-auto"
            >
              <div className="soft-lift group rounded-[1.75rem] bg-background p-3 soft-shadow">
                <ImageFrame
                  ratio="3/4"
                  src={m.src}
                  alt={m.title}
                  className="!rounded-2xl"
                />
                <div className="px-2 pb-3 pt-5 text-center">
                  <h3 className="font-serif text-lg italic md:text-xl">{m.title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-foreground/55">
                    {m.note}
                  </p>
                </div>
              </div>
            </Reveal>
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
        <Reveal className="md:col-span-7">
          <div className="soft-lift rounded-3xl">
            <ImageFrame ratio="1/1" src={creamMatchaPhoto.url} alt="Matcha mit Sahne & Streuseln" />
          </div>
        </Reveal>
        <Reveal delay={140} className="md:col-span-5 md:pl-4">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">Chapter III</p>
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
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="px-0 py-40 md:py-56">
      <Reveal className="mb-20 px-6 text-center md:mb-24">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">Chapter IV</p>
        <h2 className="font-serif text-4xl italic md:text-6xl">Inside the bloom</h2>
      </Reveal>
      <div className="columns-2 gap-2 px-2 md:columns-3 md:gap-3 md:px-3 lg:columns-4">
        {gallery.map((g, i) => (
          <div key={i} className="mb-2 break-inside-avoid md:mb-3">
            <Reveal delay={(i % 4) * 80}>
              <ImageFrame ratio={g.ratio} src={g.src} label={g.label} className="!rounded-2xl" />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  const [i, setI] = useState(0);
  return (
    <section className="relative overflow-hidden bg-cream px-4 py-40 md:px-8 md:py-56">
      {/* soft ornamental blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-matcha/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">Chapter V</p>
          <h2 className="font-serif text-4xl italic md:text-6xl">Real voices</h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-foreground/60">
            Was unsere Gäste über Bloom Boom sagen.
          </p>
        </Reveal>

        {/* desktop: 3 cards */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {quotes.map((q, idx) => (
            <Reveal key={q.name} delay={idx * 120}>
              <article className="soft-lift group relative flex h-full flex-col rounded-[2rem] bg-background/80 p-10 backdrop-blur-sm soft-shadow">
                <Quote className="h-8 w-8 text-accent" strokeWidth={1} />
                <p className="mt-6 font-serif text-lg italic leading-relaxed text-foreground/85">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-foreground/10 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent font-serif text-sm italic text-accent-foreground">
                    {q.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-serif text-sm italic">{q.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50">{q.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* mobile: carousel */}
        <div className="md:hidden">
          <article className="soft-shadow relative flex flex-col rounded-[2rem] bg-background/80 p-8 backdrop-blur-sm">
            <Quote className="h-7 w-7 text-accent" strokeWidth={1} />
            <p className="mt-5 font-serif text-lg italic leading-relaxed text-foreground/85">
              &ldquo;{quotes[i].text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-foreground/10 pt-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-accent font-serif text-sm italic text-accent-foreground">
                {quotes[i].name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-serif text-sm italic">{quotes[i].name}</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50">{quotes[i].role}</p>
              </div>
            </div>
          </article>
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
              className="grid h-11 w-11 place-items-center rounded-full glass transition-all duration-300 hover:bg-white/70"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <div className="flex gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === i ? "w-8 bg-cocoa" : "w-1.5 bg-foreground/25"
                  }`}
                  aria-label={`Quote ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((i + 1) % quotes.length)}
              className="grid h-11 w-11 place-items-center rounded-full glass transition-all duration-300 hover:bg-white/70"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-foreground/60">Come by</p>
          <h2 className="font-serif text-4xl italic md:text-6xl">
            Komm auf einen Matcha vorbei.
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid gap-14 rounded-[2.5rem] bg-cream p-10 soft-shadow md:grid-cols-2 md:p-16">
            <div className="space-y-10">
              <div>
                <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/60">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} /> Adresse
                </div>
                <p className="font-serif text-xl italic md:text-2xl">
                  Moritzstraße 20 <br /> 09111 Chemnitz
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

              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cocoa px-7 py-4 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_15px_30px_-15px_rgba(110,82,75,0.5)]"
                >
                  <Navigation className="h-4 w-4" strokeWidth={1.5} /> Route anzeigen
                </a>
                <a
                  href="https://www.instagram.com/bloom.boom.chemnitz"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-xs uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:bg-foreground/5"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.5} /> Folge uns
                </a>
              </div>
            </div>

            <div className="soft-lift rounded-3xl">
              <ImageFrame ratio="4/5" src={cupPhoto.url} alt="Bloom Boom Coffee to go" />
            </div>
          </div>
        </Reveal>
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
          className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-foreground/60 transition-colors duration-300 hover:text-foreground"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.5} /> @bloom.boom.chemnitz
        </a>
      </div>
    </footer>
  );
}

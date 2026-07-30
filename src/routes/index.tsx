import { createFileRoute } from "@tanstack/react-router";
import { ImageFrame } from "@/components/ImageFrame";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, Instagram, ChevronLeft, ChevronRight, Quote, Navigation, X } from "lucide-react";
import { useEffect, useState } from "react";
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

import galleryTreats from "@/assets/photos/gallery-treats.png.asset.json";
import galleryMatchaHand from "@/assets/photos/gallery-matcha-hand.png.asset.json";
import galleryIcedFlowers from "@/assets/photos/gallery-iced-flowers.png.asset.json";
import galleryPinkDrink from "@/assets/photos/gallery-pink-drink.png.asset.json";
import storefront from "@/assets/photos/storefront.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Bloom+Boom+Moritzstra%C3%9Fe+20+09111+Chemnitz";
const INSTAGRAM_URL = "https://www.instagram.com/bloom.boom.chemnitz";
const TIKTOK_URL = "https://www.tiktok.com/@bloom.boom.chemnitz";

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

// Gallery — intentional mix of new hero shots + existing photos in Pinterest style
const gallery: Array<{ ratio: "1/1" | "4/5" | "16/9" | "3/4"; src?: string; label: string }> = [
  { ratio: "4/5", src: galleryPinkDrink.url, label: "Berry Matcha Layers" },
  { ratio: "1/1", src: creamMatchaPhoto.url, label: "Cream Matcha" },
  { ratio: "4/5", src: galleryMatchaHand.url, label: "Under the flower ceiling" },
  { ratio: "3/4", src: galleryTreats.url, label: "Sweet Table" },
  { ratio: "1/1", src: latteFlowersPhoto.url, label: "Latte & Flowers" },
  { ratio: "4/5", src: galleryIcedFlowers.url, label: "Iced & Blooming" },
  { ratio: "4/5", src: pinkMatchaPhoto.url, label: "Pink Matcha" },
  { ratio: "1/1", src: cupPhoto.url, label: "To Go" },
];

const quotes = [
  {
    text: "Ich war in diesem Café und war wirklich begeistert! Die Atmosphäre ist unglaublich gemütlich und wunderschön – alles ist im süßen, mädchenhaften Stil gestaltet, als wäre es direkt von Pinterest inspiriert.",
    name: "София Стефанюк",
    role: "Google Review",
  },
  {
    text: "Moderne, coole und innovative Getränke. Von Matcha, Hojicha und Kaffee bis zu leckeren Cocktails schmeckt alles sehr gut. So etwas gibt es in Chemnitz nur ein Mal. Der Ort und das Menü werden mit viel Liebe gestaltet.",
    name: "Julian Junghänel",
    role: "Google Review",
  },
  {
    text: "Sehr süßes und stilvolles Café mit liebevoller Atmosphäre. Die Getränke sind frisch, kreativ und richtig lecker – besonders der Matcha ist ein Highlight. Perfekt für eine kleine Pause. Komme gerne wieder!",
    name: "Алина Щербак",
    role: "Google Review",
  },
  {
    text: "Meiner Meinung nach der beste Matcha-Spot in Chemnitz. Preis-Leistung einfach top und sehr, sehr freundliches Personal.",
    name: "Vanessa Weiß",
    role: "Google Review",
  },
  {
    text: "Man kommt rein und wird mit einem Lächeln empfangen. Die Getränke sind super, auf Wünsche wird eingegangen. Klein, aber fein – es lohnt sich sehr.",
    name: "Sophia Oldag",
    role: "Google Review",
  },
  {
    text: "Kleiner Laden mit richtig gutem Kaffee und sehr leckerem Gebäck. Die Auswahl ist bewusst überschaubar, dafür merkt man sofort die Qualität.",
    name: "WhiteFoxy",
    role: "Google Review",
  },
  {
    text: "Ich war zunächst skeptisch, doch nach dem ersten Schluck war diese Skepsis sofort verschwunden. Wirklich tolle selbstgemachte Limonade und eine sehr positive Erfahrung.",
    name: "Mr. Mampfy",
    role: "Google Review",
  },
  {
    text: "Ich bin rundum zufrieden und komme super gerne hierher. Faire Preise für das, was man bekommt. Ich lieb's. Definitiv einen Besuch wert!",
    name: "Sophia Müller",
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

// Elegant eyebrow — replaces "Chapter I / II / III" with a soft ornamental label
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.5em] text-foreground/50">
      <span className="h-px w-8 bg-foreground/25" />
      <span>{children}</span>
      <span className="h-px w-8 bg-foreground/25" />
    </div>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
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
      <SignatureBand />
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
      {/* Storefront background — the real Bloom Boom entrance */}
      <div className="absolute inset-0">
        <img
          src={storefront.url}
          alt="Bloom Boom Storefront in Chemnitz"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Warm cream wash to blend with palette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,248,246,0.55)_0%,rgba(255,248,246,0.75)_60%,rgba(255,248,246,0.9)_100%)]" />
      </div>

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
              So findest du uns
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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center md:gap-x-8">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-5 whitespace-nowrap text-[9.5px] uppercase tracking-[0.24em] text-foreground/55 sm:text-[10px] sm:tracking-[0.28em] md:gap-8 md:text-[11px] md:tracking-[0.32em]">
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
          <Eyebrow>Signature Sips</Eyebrow>
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % menuCards.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : (i - 1 + menuCards.length) % menuCards.length));
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex]);

  return (
    <section id="menu" className="bg-blush/30 px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20 text-center">
          <Eyebrow>Die volle Karte</Eyebrow>
          <h2 className="font-serif text-4xl italic md:text-6xl">Die ganze Speisekarte</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
            Von Signature Matcha über florale Lattes bis hin zu hausgemachten Limonaden.
            Tippe eine Karte an, um sie in groß zu sehen.
          </p>
        </Reveal>

        {/* Mobile: 3 top / 2 bottom grid. Desktop: 5 in a row. */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {menuCards.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 80}
              className={
                // last odd card on mobile spans both cols to center; on sm+ normal
                i === 4 ? "col-span-2 sm:col-span-1" : ""
              }
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="soft-lift group block w-full cursor-zoom-in rounded-[1.75rem] bg-background p-3 text-left soft-shadow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-blush/30"
                aria-label={`${m.title} vergrößern`}
              >
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
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cocoa/70 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={(e) => { e.stopPropagation(); setOpenIndex(null); }}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-foreground transition-all duration-300 hover:scale-105 md:right-8 md:top-8"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Vorherige"
            onClick={(e) => { e.stopPropagation(); setOpenIndex((openIndex - 1 + menuCards.length) % menuCards.length); }}
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground transition-all duration-300 hover:scale-105 md:left-8"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Nächste"
            onClick={(e) => { e.stopPropagation(); setOpenIndex((openIndex + 1) % menuCards.length); }}
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground transition-all duration-300 hover:scale-105 md:right-8"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <div className="relative flex max-h-[88vh] w-full max-w-4xl flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={menuCards[openIndex].src}
              alt={menuCards[openIndex].title}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <p className="text-center font-serif text-lg italic text-background">
              {menuCards[openIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function SweetTreats() {
  return (
    <section id="treats" className="bg-cream px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12 md:items-center md:gap-20">
        <Reveal className="md:col-span-7">
          <div className="grid grid-cols-5 items-end gap-4 md:gap-6">
            <div className="soft-lift col-span-3 rounded-3xl">
              <ImageFrame ratio="1/1" src={creamMatchaPhoto.url} alt="Matcha mit Sahne & Streuseln" />
            </div>
            <div className="soft-lift col-span-2 rounded-3xl md:-mb-16">
              <ImageFrame ratio="3/4" src={galleryTreats.url} alt="Süße Tafel mit Gebäck" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={140} className="md:col-span-5 md:pl-2">
          <Eyebrow>Süße Kunststücke</Eyebrow>
          <h2 className="font-serif text-5xl italic leading-tight md:text-6xl">
            Handgemachte <br />Kunstwerke.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg">
            Jedes Detail ist pure Liebe. Probier unser berüchtigtes{" "}
            <em className="italic">Matcha Strawberry Tiramisu</em> (3,00 €) oder frische Mochi.
            Fast zu schön, um sie zu essen.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/60 md:text-lg">
            Alles entsteht in kleinen Chargen bei uns – gebacken am Morgen, hübsch angerichtet
            am Nachmittag, weg noch vor dem Abend.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Für einen schmalen Taler – täglich frisch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SignatureBand() {
  return (
    <section className="w-full bg-cocoa px-6 py-32 md:py-44">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-background md:text-4xl">
          &ldquo;Ein kleiner Ort zum Weichwerden – wo jeder Schluck aussieht wie ein
          Frühlingstag.&rdquo;
        </p>
      </Reveal>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="px-0 py-40 md:py-56">
      <Reveal className="mb-20 px-6 text-center md:mb-24">
        <Eyebrow>Ein Blick hinein</Eyebrow>
        <h2 className="font-serif text-4xl italic md:text-6xl">Inside the bloom</h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-foreground/60">
          Blüten an der Decke, Marmor unter dem Cup — kleine Momente aus unserem Café.
        </p>
      </Reveal>
      <div className="columns-2 gap-2 px-2 md:columns-3 md:gap-3 md:px-3 lg:columns-4">
        {gallery.map((g, i) => (
          <div key={i} className="mb-2 break-inside-avoid md:mb-3">
            <Reveal delay={(i % 4) * 80}>
              <ImageFrame ratio={g.ratio} src={g.src} label={g.label} alt={g.label} className="!rounded-2xl" />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

function Voices() {
  const [i, setI] = useState(0);
  const total = quotes.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);

  // Show 3 cards on desktop, sliding window
  const visible = [0, 1, 2].map((offset) => quotes[(i + offset) % total]);

  return (
    <section className="relative overflow-hidden bg-cream px-4 py-40 md:px-8 md:py-56">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-matcha/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <Eyebrow>Was Gäste sagen</Eyebrow>
          <h2 className="font-serif text-4xl italic md:text-6xl">Real voices</h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-foreground/60">
            Kleine Liebesbriefe aus Chemnitz — direkt von Google.
          </p>
        </Reveal>

        {/* Desktop: 3-card sliding window */}
        <div className="relative hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {visible.map((q, idx) => (
              <article
                key={`${i}-${idx}`}
                className="soft-shadow group relative flex h-full flex-col rounded-[2rem] bg-background/85 p-10 backdrop-blur-sm transition-all duration-500 animate-fade-in"
              >
                <Quote className="h-8 w-8 text-accent" strokeWidth={1} />
                <p className="mt-6 font-serif text-base italic leading-relaxed text-foreground/85">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-foreground/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-blush font-serif text-xs italic tracking-wide text-cocoa ring-1 ring-matcha/40">
                    {initials(q.name)}
                  </div>
                  <div className="text-left">
                    <p className="font-serif text-sm italic">{q.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50">{q.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden">
          <article className="soft-shadow relative flex flex-col rounded-[2rem] bg-background/85 p-8 backdrop-blur-sm animate-fade-in" key={i}>
            <Quote className="h-7 w-7 text-accent" strokeWidth={1} />
            <p className="mt-5 font-serif text-base italic leading-relaxed text-foreground/85">
              &ldquo;{quotes[i].text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-foreground/10 pt-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-blush font-serif text-xs italic tracking-wide text-cocoa ring-1 ring-matcha/40">
                {initials(quotes[i].name)}
              </div>
              <div className="text-left">
                <p className="font-serif text-sm italic">{quotes[i].name}</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/50">{quotes[i].role}</p>
              </div>
            </div>
          </article>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="grid h-12 w-12 place-items-center rounded-full bg-background/90 soft-shadow transition-all duration-300 hover:scale-105 hover:bg-background"
            aria-label="Vorherige Bewertung"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <div className="flex items-center gap-2">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === i ? "w-8 bg-cocoa" : "w-1.5 bg-foreground/25 hover:bg-foreground/40"
                }`}
                aria-label={`Bewertung ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="grid h-12 w-12 place-items-center rounded-full bg-background/90 soft-shadow transition-all duration-300 hover:scale-105 hover:bg-background"
            aria-label="Nächste Bewertung"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          {i + 1} / {total} · Alle {total} Stimmen
        </p>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="px-4 py-40 md:px-8 md:py-56">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-20 text-center">
          <Eyebrow>Komm vorbei</Eyebrow>
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
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-xs uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:bg-foreground/5"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-xs uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:bg-foreground/5"
                >
                  <TikTokIcon className="h-4 w-4" /> TikTok
                </a>
              </div>
            </div>

            <div className="soft-lift rounded-3xl">
              <ImageFrame ratio="4/5" src={storefront.url} alt="Bloom Boom Eingang mit Blüten" objectPosition="center 40%" />
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
        <div className="flex items-center gap-5 text-foreground/60">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] transition-colors duration-300 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] transition-colors duration-300 hover:text-foreground"
          >
            <TikTokIcon className="h-4 w-4" /> TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}

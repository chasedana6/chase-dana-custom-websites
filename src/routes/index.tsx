import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import chasePortrait from "@/assets/chase-portrait-v2.png.asset.json";
import logoIcon from "@/assets/logo-icon.png.asset.json";
import logoFull from "@/assets/logo-full.png.asset.json";

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chase Dana — Custom Websites" },
      {
        name: "description",
        content:
          "Boutique web studio crafting bespoke, high-performance websites for niche brands and ambitious founders.",
      },
      { property: "og:title", content: "Chase Dana — Custom Websites" },
      {
        property: "og:description",
        content:
          "Boutique web studio crafting bespoke, high-performance websites for niche brands and ambitious founders.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Visual Design",
    body:
      "Unique visual identities and interface design that feel true to your brand's core values.",
    icon: (
      <path d="M9.53 16.122l9.37-9.37M9.53 16.122l-3.182-3.182m3.182 3.182l1.591 1.591M18.9 6.752L10.5 15.152" />
    ),
  },
  {
    title: "Development",
    body:
      "Modern, accessible, and fast codebases optimized for both users and search engines.",
    icon: (
      <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    ),
  },
  {
    title: "SEO Strategy",
    body:
      "Structural optimization and content planning so your brand is found by the right people.",
    icon: (
      <path d="M10.5 6h9.75M3.75 6H7.5m3 12h9.75m-9.75 0H3.75M3.75 12H13.5m3 0h3.75" />
    ),
  },
  {
    title: "Care Plans",
    body:
      "Ongoing maintenance and support so you can focus on running your business without worry.",
    icon: (
      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
  },
];

const process = [
  {
    phase: "Phase 01",
    name: "Discovery",
    body:
      "We start by defining the goals of your site, your audience, and the unique value you bring to your clients.",
  },
  {
    phase: "Phase 02",
    name: "Creative Direction",
    body:
      "Translating strategy into visual concepts, general vibes and styles, and interactive prototypes for your review.",
  },
  {
    phase: "Phase 03",
    name: "Execution & Launch",
    body:
      "Integrating information and launching fully finished, secure sites — keeping your site fast, stable, and aligned with your goals.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img src={logoIcon.url} alt="Chase Dana" className="h-12 w-auto rounded-md" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm font-medium hover:text-accent transition-colors">
              Process
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
          </div>
          <a
            href="#contact"
            className="text-sm font-medium bg-ink text-stone px-4 py-2 rounded-full ring-1 ring-ink hover:bg-ink/90 transition-colors"
          >
            Inquire
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Chase Dana Custom Websites
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif font-medium text-5xl md:text-7xl leading-[1.05] text-balance max-w-[24ch]">
                Custom websites crafted with discipline and an eye for detail.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-[52ch]">
                An independent partner helping small businesses build professional, modern websites
                that showcase their services and strengthen their online presence.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="#services"
                  className="group inline-flex items-center bg-accent text-accent-foreground text-sm font-medium pl-4 pr-5 py-3 rounded-full ring-1 ring-accent hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View services
                  <svg
                    className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium px-5 py-3 rounded-full border border-ink/15 hover:bg-ink/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start a project
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="py-32 bg-navy text-stone">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            <Reveal>
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone/60">
                  Services
                </span>
                <h2 className="mt-6 font-serif font-medium text-4xl md:text-5xl leading-tight text-balance max-w-[22ch]">
                  Studio services built around longevity.
                </h2>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="group flex flex-col gap-4 lift">
                    <div className="size-9 rounded-full border border-stone/25 flex items-center justify-center transition-all duration-500 group-hover:border-tan group-hover:bg-tan/10 group-hover:rotate-6">
                      <svg
                        className="size-4 transition-colors duration-500 group-hover:text-tan"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <g strokeLinecap="round" strokeLinejoin="round">
                          {s.icon}
                        </g>
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl">{s.title}</h3>
                    <p className="text-sm text-stone/65 leading-relaxed text-pretty">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              The Process
            </h2>
          </Reveal>
          <div className="divide-y divide-border">
            {process.map((p, i) => (
              <Reveal key={p.phase} delay={i * 100}>
                <div className="group py-10 grid md:grid-cols-12 gap-4 items-baseline transition-colors duration-300 hover:bg-muted/40 rounded-xl px-2 -mx-2">
                  <span className="md:col-span-2 text-sm text-accent font-medium">{p.phase}</span>
                  <div className="md:col-span-4 font-serif text-2xl transition-transform duration-300 group-hover:translate-x-1">
                    {p.name}
                  </div>
                  <div className="md:col-span-6 text-sm text-muted-foreground max-w-[52ch] text-pretty leading-relaxed">
                    {p.body}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="py-32 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Examples
                </span>
                <h2 className="mt-6 font-serif font-medium text-4xl md:text-5xl leading-tight text-balance max-w-[22ch] text-navy">
                  A glimpse of what's possible.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm text-muted-foreground max-w-[34ch] text-pretty">
                A curated look at recent work. More projects in progress — check back soon.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Featured example */}
            <Reveal className="md:col-span-2">
              <a
                href="https://cd-landscaping-example-site.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl overflow-hidden ring-1 ring-ink/10 bg-navy shadow-[0_20px_60px_-25px_rgba(15,27,61,0.45)] hover:shadow-[0_40px_100px_-30px_rgba(15,27,61,0.55)] transition-all duration-700 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* Live iframe preview, scaled down for thumbnail feel */}
                  <div className="absolute inset-0 origin-top-left scale-[0.5] w-[200%] h-[200%] pointer-events-none transition-transform duration-[1400ms] ease-out group-hover:scale-[0.55]">
                    <iframe
                      src="https://cd-landscaping-example-site.lovable.app"
                      title="GreenScape Pros — landscaping site preview"
                      loading="lazy"
                      className="w-full h-full border-0"
                    />
                  </div>
                  {/* gradient veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                  {/* shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1600ms] ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col gap-3 text-stone">
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-tan">
                    Featured · Landscaping
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                    GreenScape Pros
                  </h3>
                  <p className="text-sm text-stone/70 max-w-[48ch]">
                    A full-service landscaping site with portfolio, services, and lead capture —
                    designed to convert curb-appeal seekers into clients.
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-tan mt-2 transition-transform duration-300 group-hover:translate-x-1">
                    Visit live site
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-9 9" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>

            {/* More to come */}
            <Reveal delay={120}>
              <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden ring-1 ring-ink/10 bg-gradient-to-br from-navy via-navy-deep to-navy flex flex-col items-center justify-center p-10 text-center text-stone">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,var(--tan),transparent_60%)]" aria-hidden />
                <div className="relative flex flex-col items-center gap-5">
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-tan animate-pulse" />
                    <span className="size-2 rounded-full bg-tan animate-pulse [animation-delay:200ms]" />
                    <span className="size-2 rounded-full bg-tan animate-pulse [animation-delay:400ms]" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight text-balance">
                    More projects on the way.
                  </h3>
                  <p className="text-sm text-stone/65 max-w-[28ch]">
                    New work is in the studio. Want yours featured here next?
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-tan hover:text-tan-light transition-colors"
                  >
                    Start a project
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About / Qualifications */}
      <section id="about" className="py-32 bg-muted">

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5">
              <Reveal>
                <div className="relative animate-float">
                  <div className="absolute -inset-3 rounded-full bg-tan/30 blur-2xl" aria-hidden />
                  <div className="relative aspect-square rounded-full overflow-hidden ring-1 ring-navy/10 shadow-[0_30px_60px_-20px_rgba(15,27,61,0.35)] transition-transform duration-700 hover:scale-[1.02]">
                    <img
                      src={chasePortrait.url}
                      alt="Portrait of Chase Dana"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-navy text-stone text-[10px] font-medium uppercase tracking-[0.25em] px-4 py-2 rounded-full ring-1 ring-tan/40">
                    Founder
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <Reveal delay={80}>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  Background
                </span>
              </Reveal>
              <Reveal delay={160}>
                <h2 className="font-serif font-medium text-4xl md:text-5xl leading-tight text-balance max-w-[22ch] text-navy">
                  Discipline, creativity, and an eye for detail.
                </h2>
              </Reveal>
              <Reveal delay={240}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-[58ch]">
                  I am a student web developer with a passion for technology, design, and
                  problem-solving. I have been coding since elementary school and have expanded my
                  skills through formal coursework in Video Game Design and Fundamentals of Computer
                  Science. As a high-achieving student and an accomplished musician at the district
                  and regional levels, I have developed the discipline, creativity, and attention
                  to detail needed to deliver high-quality work. My goal is to help small businesses
                  build professional, modern websites that showcase their services, attract new
                  customers, and strengthen their online presence.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="bg-muted rounded-3xl p-12 md:p-24 flex flex-col items-center text-center ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(15,27,61,0.3)]">
              <h2 className="font-serif font-medium text-4xl md:text-5xl mb-6 text-balance max-w-[22ch]">
                Ready to build something lasting?
              </h2>
              <p className="text-muted-foreground max-w-[44ch] mb-10 text-pretty">
                Now accepting a small number of new projects. Reach out for a complimentary
                discovery call — let's see if we're a fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chase.dana6@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-ink text-stone text-sm font-medium rounded-full ring-1 ring-ink hover:bg-ink/90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  chase.dana6@gmail.com
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 border border-ink/15 text-ink text-sm font-medium rounded-full hover:bg-ink/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View services
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoFull.url} alt="Chase Dana Custom Websites" className="h-44 md:h-56 w-auto mb-2" />
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.25em]">
              {new Date().getFullYear()} Chase Dana Custom Websites
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chase.dana6@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

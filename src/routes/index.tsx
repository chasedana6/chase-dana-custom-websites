import { createFileRoute } from "@tanstack/react-router";
import chasePortrait from "@/assets/chase-portrait.png.asset.json";

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
          <a href="#top" className="font-serif text-lg font-medium tracking-tight">
            Chase Dana
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
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Chase Dana Custom Websites
            </span>
            <h1 className="font-serif font-medium text-5xl md:text-7xl leading-[1.05] text-balance max-w-[24ch]">
              Custom websites crafted with discipline and an eye for detail.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-[52ch]">
              An independent partner helping small businesses build professional, modern websites
              that showcase their services and strengthen their online presence.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#services"
                className="group inline-flex items-center bg-accent text-accent-foreground text-sm font-medium pl-4 pr-5 py-3 rounded-full ring-1 ring-accent hover:opacity-90 transition-all"
              >
                View services
                <svg
                  className="size-4 ml-2 transition-transform group-hover:translate-x-1"
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
                className="inline-flex items-center text-sm font-medium px-5 py-3 rounded-full border border-ink/15 hover:bg-ink/5 transition-colors"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="py-32 bg-navy text-stone">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-stone/60">
                Services
              </span>
              <h2 className="mt-6 font-serif font-medium text-4xl md:text-5xl leading-tight text-balance max-w-[22ch]">
                Studio services built around longevity.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
              {services.map((s) => (
                <div key={s.title} className="flex flex-col gap-4">
                  <div className="size-9 rounded-full border border-stone/25 flex items-center justify-center">
                    <svg
                      className="size-4"
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            The Process
          </h2>
          <div className="divide-y divide-border">
            {process.map((p) => (
              <div key={p.phase} className="py-10 grid md:grid-cols-12 gap-4 items-baseline">
                <span className="md:col-span-2 text-sm text-muted-foreground">{p.phase}</span>
                <div className="md:col-span-4 font-serif text-2xl">{p.name}</div>
                <div className="md:col-span-6 text-sm text-muted-foreground max-w-[52ch] text-pretty leading-relaxed">
                  {p.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Qualifications */}
      <section id="about" className="py-32 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-tan/30 blur-2xl" aria-hidden />
                <div className="relative aspect-square rounded-full overflow-hidden ring-1 ring-navy/10 shadow-[0_30px_60px_-20px_rgba(15,27,61,0.35)]">
                  <img
                    src={chasePortrait.url}
                    alt="Portrait of Chase Dana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-navy text-stone text-[10px] font-medium uppercase tracking-[0.25em] px-4 py-2 rounded-full ring-1 ring-tan/40">
                  Founder
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                Background
              </span>
              <h2 className="font-serif font-medium text-4xl md:text-5xl leading-tight text-balance max-w-[22ch] text-navy">
                Discipline, creativity, and an eye for detail.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-[58ch]">
                I am a student web developer with a passion for technology, design, and
                problem-solving. I have been coding since elementary school and have expanded my
                skills through formal coursework in Video Game Design and Fundamentals of Computer
                Science. As a high-achieving student with a 5.3286 GPA and an accomplished musician
                at the district and regional levels, I have developed the discipline, creativity,
                and attention to detail needed to deliver high-quality work. My goal is to help
                small businesses build professional, modern websites that showcase their services,
                attract new customers, and strengthen their online presence.
              </p>
              <dl className="mt-4 grid grid-cols-3 gap-4 pt-6 border-t border-navy/10">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">GPA</dt>
                  <dd className="mt-2 font-serif text-3xl text-navy">5.3286</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Coding Since
                  </dt>
                  <dd className="mt-2 font-serif text-3xl text-navy">Elem.</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Music
                  </dt>
                  <dd className="mt-2 font-serif text-3xl text-navy">Regional</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-muted rounded-3xl p-12 md:p-24 flex flex-col items-center text-center ring-1 ring-ink/5">
            <h2 className="font-serif font-medium text-4xl md:text-5xl mb-6 text-balance max-w-[22ch]">
              Ready to build something lasting?
            </h2>
            <p className="text-muted-foreground max-w-[44ch] mb-10 text-pretty">
              Now accepting a small number of new projects. Reach out for a complimentary
              discovery call — let's see if we're a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:chase.dana6@gmail.com"
                className="px-8 py-3 bg-ink text-stone text-sm font-medium rounded-full ring-1 ring-ink hover:bg-ink/90 transition-colors"
              >
                chase.dana6@gmail.com
              </a>
              <a
                href="#services"
                className="px-8 py-3 border border-ink/15 text-ink text-sm font-medium rounded-full hover:bg-ink/5 transition-colors"
              >
                View services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif font-medium text-lg">Chase Dana</span>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.25em]">
              © {new Date().getFullYear()} Chase Dana Custom Websites
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="mailto:chase.dana6@gmail.com"
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

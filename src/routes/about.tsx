import { createFileRoute, Link } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/storefront/Navbar";
import { Footer } from "@/components/storefront/Footer";
import { Reveal } from "@/components/storefront/Reveal";
import aboutHeroImg from "@/assets/sections/about-hero.jpg";
import founderImg from "@/assets/sections/founder.jpg";
import tackleImg from "@/assets/sections/tackle.jpg";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deep Strike" },
      {
        name: "description",
        content:
          "Meet Nathan and the Deep Strike team — bringing the best fishing tackle to Aussie anglers, one cast at a time.",
      },
      { property: "og:title", content: "About — Deep Strike" },
      {
        property: "og:description",
        content:
          "Australian fishing tackle, personally tested on local waters by anglers who live and breathe fishing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Passion First",
    body: "Every product we curate comes from our genuine love for fishing and understanding of what works on Australian waters.",
  },
  {
    title: "Aussie Focused",
    body: "We specifically test and select tackle that performs in Australian conditions, from tropical north to temperate south.",
  },
  {
    title: "Community Driven",
    body: "Our community of passionate anglers helps us discover new products and share knowledge that benefits everyone.",
  },
  {
    title: "Quality Promise",
    body: "We stand behind every product we sell with our commitment to quality and customer satisfaction.",
  },
];

function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar solid />

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-hairline">
            <div className="px-6 pb-20 pt-32 md:px-12 md:pb-32 md:pt-48">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                <div className="md:col-span-7">
                  <Reveal>
                    <p className="eyebrow mb-6 text-[0.65rem] text-stone">About Deep Strike</p>
                  </Reveal>
                  <Reveal delay={80}>
                    <h1 className="font-display text-5xl font-semibold leading-[0.9] tracking-tight md:text-7xl lg:text-[5.5rem]">
                      Bringing the best fishing tackle to{" "}
                      <span className="font-light italic text-stone">Aussie anglers</span>, one
                      cast at a time.
                    </h1>
                  </Reveal>
                </div>
                <Reveal className="flex items-end md:col-span-5" delay={160}>
                  <p className="max-w-md text-lg leading-relaxed text-stone">
                    Deep Strike was born from a simple frustration: the difficulty of finding
                    quality fishing tackle that actually works in Australian conditions. We don't
                    just sell tackle — we live and breathe fishing.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Story image */}
          <section className="border-b border-hairline">
            <div className="relative aspect-[16/7] w-full overflow-hidden">
              <img
                src={aboutHeroImg}
                alt="Fishing tackle and lures ready for the water"
                loading="eager"
                className="h-full w-full object-cover grayscale"
              />
              <div className="pointer-events-none absolute inset-0 bg-ink/10" />
            </div>
          </section>

          {/* Founder */}
          <section className="overflow-hidden border-b border-hairline">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img
                  src={founderImg}
                  alt="Nathan fishing on the Queensland coast"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
                <Reveal>
                  <p className="eyebrow mb-6 text-[0.65rem] text-stone">Meet Nathan, Our Founder</p>
                  <h2 className="mb-8 font-display text-3xl font-medium tracking-tight md:text-5xl">
                    Growing up on the Queensland coast, casting lines since he could hold a rod.
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <div className="space-y-6 text-stone">
                    <p className="leading-relaxed">
                      After years of testing lures, trying different techniques, and learning what
                      really works in Australian waters, Nathan realized something was missing.
                    </p>
                    <p className="leading-relaxed">
                      Most tackle shops are filled with gear that might work overseas, but doesn't
                      always translate to our unique fishing conditions. Deep Strike was born from
                      the idea that every Australian angler deserves access to lures that are
                      specifically chosen for our waters, our species, and our style of fishing.
                    </p>
                    <p className="leading-relaxed">
                      Every lure in your Deep Strike box has been personally tested by Nathan and
                      our team of experienced anglers. We don't just sell tackle — we live and
                      breathe fishing.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="px-6 py-20 md:px-12 md:py-32">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
              <div className="md:col-span-4">
                <Reveal>
                  <p className="eyebrow text-[0.65rem] text-stone">Our Mission & Values</p>
                  <p className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl">
                    Four principles that guide every lure we select.
                  </p>
                </Reveal>
              </div>
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                  {values.map((value, i) => (
                    <Reveal key={value.title} delay={i * 80}>
                      <div className="border-t border-hairline pt-6">
                        <div className="mb-4 grid h-8 w-8 place-items-center rounded-full border border-hairline">
                          <Check className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <h3 className="mb-3 font-display text-xl font-medium tracking-tight">
                          {value.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-stone">{value.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* The Deep Strike Story */}
          <section className="overflow-hidden border-y border-hairline bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="order-2 flex flex-col justify-center px-6 py-16 md:order-1 md:px-12 md:py-24">
                <Reveal>
                  <p className="eyebrow mb-6 text-[0.65rem] text-stone">The Deep Strike Story</p>
                  <h2 className="mb-8 font-display text-3xl font-medium tracking-tight md:text-5xl">
                    From a small selection of proven lures to a trusted source for serious anglers.
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <div className="space-y-6 text-stone">
                    <p className="leading-relaxed">
                      Deep Strike was born from a simple frustration — the difficulty of finding
                      quality fishing tackle that actually works in Australian conditions. After
                      years of importing gear that looked great but failed on local waters, Nathan
                      decided to create something different.
                    </p>
                    <p className="leading-relaxed">
                      Starting with a small selection of proven lures and tackle, Deep Strike has
                      grown into a trusted source for serious anglers across Australia. We work
                      directly with manufacturers to ensure every product meets our strict
                      standards for quality and performance.
                    </p>
                    <p className="leading-relaxed">
                      Today, we're proud to serve thousands of anglers who trust us to deliver the
                      gear they need to make every fishing trip successful. Our monthly subscription
                      boxes and curated product selection continue to evolve based on real feedback
                      from real anglers.
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="relative order-1 aspect-[4/3] md:order-2 md:aspect-auto">
                <img
                  src={tackleImg}
                  alt="Premium fishing lures and tackle detail"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 py-20 md:px-12 md:py-32">
            <div className="flex flex-col items-start justify-between gap-8 border-y border-hairline py-12 md:flex-row md:items-center md:py-16">
              <Reveal>
                <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight md:text-5xl">
                  Ready to make every cast count?
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <Link
                  to="/shop/$category"
                  params={{ category: "new-in" }}
                  className="group inline-flex items-center gap-4 eyebrow text-[0.7rem] text-ink"
                >
                  <span>Shop Tackle</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

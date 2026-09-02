import { createFileRoute, Link } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/storefront/Navbar";
import { Footer } from "@/components/storefront/Footer";
import { Reveal } from "@/components/storefront/Reveal";
import storyImg from "@/assets/sections/story.jpg";
import materialsImg from "@/assets/sections/materials.jpg";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Deepstrike" },
      {
        name: "description",
        content:
          "Learn how Deepstrike designs considered technical apparel built to outlast the season.",
      },
      { property: "og:title", content: "About — Deepstrike" },
      {
        property: "og:description",
        content:
          "Considered technical apparel in a quiet monochrome palette, engineered to outlast the season.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Longevity first",
    body: "We design garments as systems, not seasons. Every cut, seam, and finish is judged by how it will wear in five years, not five weeks.",
  },
  {
    title: "Quiet palette",
    body: "A restrained grayscale vocabulary keeps the focus on proportion, texture, and the small technical details that define performance.",
  },
  {
    title: "Honest construction",
    body: "No hidden compromises. We name our mills, publish our specs, and build repairability into every piece from the first sketch.",
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
                  <p className="eyebrow mb-6 text-[0.65rem] text-stone">About Deepstrike</p>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="font-display text-5xl font-semibold leading-[0.9] tracking-tight md:text-7xl lg:text-[5.5rem]">
                    Technical apparel,{" "}
                    <span className="font-light italic text-stone">made quiet</span>.
                  </h1>
                </Reveal>
              </div>
              <Reveal className="flex items-end md:col-span-5" delay={160}>
                <p className="max-w-md text-lg leading-relaxed text-stone">
                  We are a small studio building garments for people who move through cities,
                  mountains, and everything in between. No logos. No noise. Just considered
                  pieces that do their job.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Story image */}
        <section className="border-b border-hairline">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <img
              src={storyImg}
              alt="Technical garment detail with sealed seams"
              loading="eager"
              className="h-full w-full object-cover grayscale"
            />
            <div className="pointer-events-none absolute inset-0 bg-ink/10" />
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow text-[0.65rem] text-stone">Our Practice</p>
                <p className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl">
                  Three principles that guide every decision.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Materials band */}
        <section className="overflow-hidden border-y border-hairline bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src={materialsImg}
                alt="Fabric texture and material detail"
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
              <Reveal>
                <p className="eyebrow mb-6 text-[0.65rem] text-stone">Materials</p>
                <h2 className="mb-8 font-display text-3xl font-medium tracking-tight md:text-5xl">
                  Fabrics chosen for function, then refined for feel.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <ul className="space-y-4 text-stone">
                  {[
                    "Recycled nylon shells with DWR finish",
                    "Merino-blend base layers for temperature regulation",
                    "Cotton-linen shirting with mechanical stretch",
                    "Sealed seams and bonded hems where it counts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:px-12 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 border-y border-hairline py-12 md:flex-row md:items-center md:py-16">
            <Reveal>
              <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight md:text-5xl">
                See the collection.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Link
                to="/shop/$category"
                params={{ category: "new-in" }}
                className="group inline-flex items-center gap-4 eyebrow text-[0.7rem] text-ink"
              >
                <span>Shop New In</span>
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

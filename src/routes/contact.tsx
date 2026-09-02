import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/storefront/Navbar";
import { Footer } from "@/components/storefront/Footer";
import { Reveal } from "@/components/storefront/Reveal";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Deepstrike" },
      {
        name: "description",
        content:
          "Get in touch with Deepstrike for support, stockist inquiries, or press requests.",
      },
      { property: "og:title", content: "Contact — Deepstrike" },
      {
        property: "og:description",
        content:
          "Get in touch with Deepstrike for support, stockist inquiries, or press requests.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@deepstrike.studio",
    href: "mailto:hello@deepstrike.studio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (503) 555-0142",
    href: "tel:+15035550142",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "Portland, Oregon",
    href: "#",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar solid />

      <main>
        {/* Hero */}
        <section className="border-b border-hairline">
          <div className="px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-48">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <Reveal>
                  <p className="eyebrow mb-6 text-[0.65rem] text-stone">Contact</p>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="font-display text-5xl font-semibold leading-[0.9] tracking-tight md:text-7xl lg:text-[5.5rem]">
                    Let&apos;s{" "}
                    <span className="font-light italic text-stone">talk</span>.
                  </h1>
                </Reveal>
              </div>
              <Reveal className="flex items-end md:col-span-5" delay={160}>
                <p className="max-w-md text-lg leading-relaxed text-stone">
                  Questions about an order, a fit, or a collaboration? Send us a note and we&apos;ll
                  get back to you within two business days.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            {/* Form */}
            <div className="md:col-span-7 lg:col-span-6">
              <Reveal>
                <h2 className="mb-8 font-display text-2xl font-medium tracking-tight">
                  Send a message
                </h2>
              </Reveal>

              {submitted ? (
                <Reveal>
                  <div className="border border-hairline bg-card p-8">
                    <p className="font-display text-xl font-medium tracking-tight">
                      Message received.
                    </p>
                    <p className="mt-3 text-stone">
                      Thanks for reaching out. We&apos;ll be in touch soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm text-ink underline underline-offset-4 hover:text-stone"
                    >
                      Send another message
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Reveal>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="eyebrow text-[0.6rem] text-stone">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full border-b border-hairline bg-transparent px-0 py-3 text-ink outline-none transition-colors placeholder:text-stone/50 focus:border-ink"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="eyebrow text-[0.6rem] text-stone">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full border-b border-hairline bg-transparent px-0 py-3 text-ink outline-none transition-colors placeholder:text-stone/50 focus:border-ink"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={80}>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="eyebrow text-[0.6rem] text-stone">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full border-b border-hairline bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-ink"
                      >
                        <option value="">Select a topic</option>
                        <option value="order">Order support</option>
                        <option value="fit">Fit & sizing</option>
                        <option value="returns">Returns & exchanges</option>
                        <option value="stockists">Stockists</option>
                        <option value="press">Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </Reveal>

                  <Reveal delay={160}>
                    <div className="space-y-2">
                      <label htmlFor="message" className="eyebrow text-[0.6rem] text-stone">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full resize-none border-b border-hairline bg-transparent px-0 py-3 text-ink outline-none transition-colors placeholder:text-stone/50 focus:border-ink"
                        placeholder="How can we help?"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={240}>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 eyebrow text-[0.7rem] text-ink"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                      <span>Send message</span>
                    </button>
                  </Reveal>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="md:col-span-5 lg:col-span-5 lg:col-start-8">
              <Reveal>
                <h2 className="mb-8 font-display text-2xl font-medium tracking-tight">
                  Other ways to reach us
                </h2>
              </Reveal>
              <div className="space-y-8">
                {contactMethods.map((method, i) => (
                  <Reveal key={method.label} delay={i * 80}>
                    <a
                      href={method.href}
                      className="group flex items-start gap-4 border-t border-hairline pt-6 transition-colors"
                    >
                      <method.icon
                        className="mt-0.5 h-5 w-5 text-stone transition-colors group-hover:text-ink"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="eyebrow text-[0.6rem] text-stone">{method.label}</p>
                        <p className="mt-1 text-ink">{method.value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={320}>
                <div className="mt-12 border-t border-hairline pt-8">
                  <p className="eyebrow mb-4 text-[0.6rem] text-stone">Hours</p>
                  <p className="text-sm leading-relaxed text-stone">
                    Monday — Friday
                    <br />
                    9:00 AM — 5:00 PM PST
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

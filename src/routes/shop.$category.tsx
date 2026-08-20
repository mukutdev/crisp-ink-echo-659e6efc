import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/storefront/AnnouncementBar";
import { Navbar } from "@/components/storefront/Navbar";
import { Footer } from "@/components/storefront/Footer";
import { ProductCard } from "@/components/storefront/ProductCard";
import { Reveal } from "@/components/storefront/Reveal";
import { archives, getArchive, getArchiveProducts } from "@/data/products";

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    const archive = getArchive(params.category);
    if (!archive) throw notFound();
    return { archive };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Archive not found — Deepstrike" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.archive.title} — Deepstrike`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.archive.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.archive.description },
        { property: "og:type", content: "website" },
      ],
    };
  },
  notFoundComponent: ArchiveNotFound,
  component: ArchivePage,
});

function ArchiveNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="eyebrow text-stone">Not found</p>
      <h1 className="font-display text-4xl font-semibold text-ink">
        This archive doesn't exist
      </h1>
      <Link
        to="/shop/$category"
        params={{ category: "new-in" }}
        className="mt-2 rounded-full bg-ink px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper"
      >
        Shop New In
      </Link>
    </div>
  );
}

function ArchivePage() {
  const { archive } = Route.useLoaderData();
  const items = getArchiveProducts(archive.slug);

  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar solid />
      <main className="px-6 pb-24 pt-14 md:px-12 md:pb-32 md:pt-20">
        <header>
          <Reveal>
            <p className="eyebrow text-[0.7rem] text-stone">
              Deepstrike — Archive
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl">
              {archive.title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <p className="max-w-md text-[0.95rem] leading-relaxed text-stone">
                {archive.description}
              </p>
              <span className="eyebrow text-[0.65rem] text-stone">
                {items.length} {items.length === 1 ? "piece" : "pieces"}
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <nav
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-6"
              aria-label="Archives"
            >
              {archives.map((a) => (
                <Link
                  key={a.slug}
                  to="/shop/$category"
                  params={{ category: a.slug }}
                  className={`eyebrow border-b-2 pb-1 text-[0.7rem] transition-colors ${
                    a.slug === archive.slug
                      ? "border-ink text-ink"
                      : "border-transparent text-stone hover:text-ink"
                  }`}
                >
                  {a.title}
                </Link>
              ))}
            </nav>
          </Reveal>
        </header>

        {items.length > 0 ? (
          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {items.map((product, i) => (
              <Reveal as="li" key={product.id} delay={(i % 4) * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="mt-16 text-stone">No pieces in this archive yet.</p>
        )}
      </main>
      <Footer />
    </CartProvider>
  );
}

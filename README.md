# Monochrome Edit

Build a premium, minimal-monochrome apparel storefront homepage — a refined, modern take on technical fashion e-commerce (reference vibe: Raide Research, but cleaner and more editorial).

Brand & aesthetic

Minimal, mono, editorial. Warm off-white paper background (#f4f2ee), near-black ink (#0d0d0c), mid-gray for secondary text. Strictly grayscale — no color accents.

Generous whitespace, calm rhythm, confident typography. Premium fashion feel, not "tech startup."

Typography: distinctive display font for headlines (e.g. Bricolage Grotesque or Archivo Expanded), clean grotesque for body (e.g. Archivo). No Inter/Roboto. Uppercase micro-labels with wide letter-spacing for section eyebrows.

Subtle motion only: staggered fade-up reveals on scroll, smooth hover transitions, one infinite marquee. Nothing flashy.

Sections, top to bottom

Slim sticky announcement bar (e.g. "Free shipping over $125 · Free returns") — dismissible.

Sticky transparent nav that turns solid on scroll: left logo, center links (New In / Women / Men / Outerwear / About), right icons (search, account, cart with live count badge). Mobile: hamburger → full-screen overlay menu.

Full-bleed hero: large editorial headline, one short line of supporting copy, two CTAs ("Shop New In" primary, "Lookbook" ghost). Use a placeholder image block with a subtle slow zoom.

Best Sellers with working category tabs (New In / Tops / Bottoms / Outerwear). Tabs filter the product grid client-side. Product cards must have: image with hover swap to a second image, a small color-swatch row, product name + price, and a "Quick Add" button that appears on hover and increments the cart badge.

"Shop by Category" — two large split tiles (Women / Men) with hover zoom and overlaid label + arrow.

Editorial brand-story band: oversized statement text on one side, supporting paragraph on the other, asymmetric layout.

Infinite horizontal marquee of a brand tagline or category words.

Newsletter / early-access block: heading, email input + submit, terms line. Clean inline form (no full-page form).

Trust badges row: free shipping, free returns, secure checkout, warranty — small check icons + short labels.

Footer: logo, quick links (Shop / About / Support), social icons, region selector, copyright.

Technical

React + Tailwind, single responsive page, mobile-first, fully accessible (semantic tags, focus states, aria labels).

Use placeholder image components (tasteful mono tiles) so layout reads cleanly without real assets.

Component-driven: ProductCard, SectionHeading, MarqueeRow, etc. — reusable and clean.

Smooth scroll, IntersectionObserver reveal animations, no layout shift.

Cart is local state only (no backend yet); structure the product data as an array so it's easy to swap in a real catalog later.

Quality bar: restrained, intentional, premium. Every spacing and type choice should feel deliberate. Avoid generic AI-template look.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://crisp-ink-echo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/566a341e-7d0b-49d4-a4ce-0387d730eb88).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

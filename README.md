# Lablab — The Goodest Boy

A website celebrating the beauty and sweetness of **Lablab**, the yellow Labrador who changed the lives of many people around him.

The site is a single scrolling page with Lablab's story, a photo gallery, and live feeds from his social accounts. Visitors can see what he's been up to lately without leaving the page.

## What's on the site

- **Hero:** a big welcome with Lablab's portrait.
- **About:** who Lablab is and why he's so loved.
- **Photo gallery:** favorite moments, from puppy days to pool floats.
- **Latest from Lablab:** embedded feeds from YouTube, Instagram, and Facebook.
- **Where to see more:** links to all of Lablab's social profiles.

## Follow Lablab

| Platform  | Link                                                          |
| --------- | ------------------------------------------------------------- |
| Instagram | [instagram.com/lablabdog](https://instagram.com/lablabdog)    |
| Facebook  | [facebook.com/lablabdog](https://facebook.com/lablabdog)      |
| YouTube   | [youtube.com/@lablabdog](https://youtube.com/@lablabdog)      |
| X         | [x.com/lablabthe](https://x.com/lablabthe)                    |

## Built with

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) components and [Lucide](https://lucide.dev) icons
- Fraunces and Inter fonts from Google Fonts
- [Vercel Analytics](https://vercel.com/analytics)
- Built with [v0](https://v0.app) and hosted on [Vercel](https://vercel.com)

## Running it locally

You'll need [Node.js](https://nodejs.org) 20 or newer and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/lablabsmom/lablab-s-website-.git
cd lablab-s-website-
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command      | What it does                          |
| ------------ | ------------------------------------- |
| `pnpm dev`   | Starts the local development server   |
| `pnpm build` | Creates a production build            |
| `pnpm start` | Serves the production build           |

## Project structure

```
app/
  layout.tsx          Page metadata, fonts, and analytics
  page.tsx            Puts all the sections together
  globals.css         Colors and theme
components/
  site-header.tsx     Top navigation
  hero.tsx            Welcome section
  about-section.tsx   Lablab's story
  photo-gallery.tsx   Photo grid
  social-feeds.tsx    YouTube, Instagram, and Facebook embeds
  social-links.tsx    Social profile links
  site-footer.tsx     Footer
public/
  photos/             All of Lablab's photos
```

## Common updates

**Add a photo:** put the image in `public/photos/`, then add it to the list in `components/photo-gallery.tsx` with a short description (the alt text) for screen readers.

**Change a social link:** edit the `links` list in `components/social-links.tsx`. The embedded feeds are set up in `components/social-feeds.tsx`.

**New posts not showing yet?** Instagram and Facebook cache their embeds, so a new post can take a while to appear on the site. Nothing needs to be redeployed.

## Deploying

The site is deployed on Vercel. Every change pushed to `main` goes live automatically, and pull requests get their own preview link.

---

Made with love for Lablab.

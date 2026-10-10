Lablab's Website 🐾
A personal website celebrating Lablab, my yellow Labrador, through photos, videos, and links to his social media accounts. This project brings his online presence together in one place while letting visitors explore the code behind the website.

Visit Lablab's Website · View on Handshake

About the Project
Lablab is more than the subject of this website—he is my baby and the inspiration behind it. I wanted to create a space that captures his personality, shares his everyday adventures, and makes it easy for people to find more of his content.

This repository contains the website's source code, offering a look at how reusable components, styling, and media come together to create a personal showcase.

Features
Photo gallery: Pictures of Lablab from puppyhood to now, arranged in a responsive layout with subtle hover effects.
Embedded social content: YouTube videos and Instagram and Facebook embeds.
Social media links: Direct links to Lablab's Instagram, X, Facebook, and YouTube accounts.
Responsive design: Layouts that adapt to different screen sizes.
Accessibility details: Descriptive image alt text, labeled sections, and embedded-media titles.
Lazy-loaded media: Gallery images and social embeds load as visitors approach them.
Social embeds depend on the platforms' availability and visitors' browser settings. Direct profile links provide another way to view Lablab's content.

Technology
Technology	Purpose
Next.js	Application framework and routing
React	Reusable interface components
TypeScript	Typed application code
Tailwind CSS	Styling and responsive layouts
Lucide React	Interface icons
pnpm	Dependency management and project commands
Vercel	Hosting the live website
Run Locally
Install Node.js and pnpm, then clone the repository:

git clone https://github.com/lablabsmom/lablab-s-website-.git
cd lablab-s-website-
pnpm install
pnpm dev
Open http://localhost:3000 in your browser.

To build and run the production version locally:

pnpm build
pnpm start
Explore the Code
File or folder	What it contains
app/page.tsx	The homepage and its sections
app/layout.tsx	Shared page layout and metadata
app/globals.css	Global styles and theme settings
components/hero.tsx	The opening introduction
components/about-section.tsx	The project's background
components/photo-gallery.tsx	Gallery images, alt text, and layout
components/social-feeds.tsx	Embedded YouTube, Instagram, and Facebook content
components/social-links.tsx	Links to Lablab's social profiles
components/site-header.tsx	Site navigation
components/site-footer.tsx	The footer
public/photos/	Lablab's photographs
Follow Lablab
Instagram — @lablabdog
X — @lablabthe
Facebook — Lablab
YouTube — @lablabdog
Creator
Created by Helen Nguyen — lablabsmom on GitHub.

Made with love for the goodest boy. 🐶💛

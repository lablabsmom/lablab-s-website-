import { ArrowUpRight } from 'lucide-react'

const links = [
  { platform: 'Instagram', handle: 'instagram.com/lablabdog', href: 'https://instagram.com/lablabdog' },
  { platform: 'X', handle: 'x.com/lablabthe', href: 'https://x.com/lablabthe' },
  { platform: 'Facebook', handle: 'facebook.com/lablabdog', href: 'https://facebook.com/lablabdog' },
  { platform: 'YouTube', handle: 'youtube.com/@lablabdog', href: 'https://youtube.com/@lablabdog' },
]

export function SocialLinks() {
  return (
    <section id="follow" aria-labelledby="follow-heading" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 id="follow-heading" className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        Where to see more
      </h2>
      <ul className="mt-12 divide-y divide-border border-y border-border">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-6 transition-colors hover:text-primary"
            >
              <span className="font-serif text-2xl md:text-3xl">{link.platform}</span>
              <span className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary">
                <span className="hidden sm:inline">{link.handle}</span>
                <ArrowUpRight
                  className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

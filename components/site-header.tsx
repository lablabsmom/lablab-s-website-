const navItems = [
  { href: '#about', label: 'About' },
  { href: '#follow', label: 'Follow' },
  { href: '#credits', label: 'Credits' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#" className="font-serif text-xl font-semibold tracking-tight">
          Lablab
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

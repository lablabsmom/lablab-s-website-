const facts = [
  {
    label: 'What it is',
    body: 'A showcase detailing the beauty and sweetness of Lablab, the yellow Labrador.',
  },
  {
    label: 'Why it matters',
    body: 'Because Lablab changed the lives of many people around him as the goodest boy.',
  },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-card">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 id="about-heading" className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          About the project
        </h2>
        <dl className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-primary/25 pt-6">
              <dt className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-4 text-pretty font-serif text-2xl leading-snug">{fact.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pb-28 md:pt-32">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        The yellow Labrador
      </p>
      <h1 className="mt-6 text-balance font-serif text-6xl font-semibold leading-none tracking-tight md:text-8xl">
        Lablab
      </h1>
      <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        A showcase detailing the beauty and sweetness of Lablab, the yellow Labrador.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#follow"
          className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Follow Lablab
        </a>
        <a
          href="#about"
          className="inline-flex items-center rounded-full border border-primary/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Why he matters
        </a>
      </div>
    </section>
  )
}

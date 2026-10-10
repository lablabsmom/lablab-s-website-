const YOUTUBE_UPLOADS_PLAYLIST = 'UUp7qbXcpUKDnva08u_ELOjw'

function FeedHeader({ platform, handle, href }: { platform: string; handle: string; href: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-serif text-2xl">{platform}</h3>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
      >
        {handle}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}

export function SocialFeeds() {
  return (
    <section id="feeds" aria-labelledby="feeds-heading" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 id="feeds-heading" className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Latest from Lablab
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-3">
            <FeedHeader platform="YouTube" handle="@lablabdog" href="https://youtube.com/@lablabdog" />
            <div className="aspect-video overflow-hidden rounded-xl bg-muted">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST}`}
                title="Lablab's YouTube videos"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            <FeedHeader platform="Instagram" handle="@lablabdog" href="https://instagram.com/lablabdog" />
            <div className="h-[440px] overflow-hidden rounded-xl bg-background">
              <iframe
                src="https://www.instagram.com/lablabdog/embed"
                title="Lablab's Instagram feed"
                loading="lazy"
                className="size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const YOUTUBE_UPLOADS_PLAYLIST = 'UUp7qbXcpUKDnva08u_ELOjw'
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/lablabdog'

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
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:col-span-2">
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
          <div className="flex flex-col gap-4">
            <FeedHeader platform="Instagram" handle="@lablabdog" href="https://instagram.com/lablabdog" />
            <div className="h-[500px] overflow-hidden rounded-xl bg-white">
              <iframe
                src="https://www.instagram.com/lablabdog/embed"
                title="Lablab's Instagram feed"
                loading="lazy"
                className="size-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <FeedHeader platform="Facebook" handle="facebook.com/lablabdog" href={FACEBOOK_PAGE_URL} />
            <div className="flex h-[500px] justify-center overflow-hidden rounded-xl bg-white">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_PAGE_URL)}&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
                title="Lablab's Facebook page"
                loading="lazy"
                allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
                className="h-full w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

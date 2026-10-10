const photos = [
  { src: '/photos/puppy-selfie.png', alt: 'Puppy Lablab in a close-up car selfie with a smiling boy' },
  { src: '/photos/sunny-smile.png', alt: 'Lablab sitting on the grass in the sun, smiling up at the camera' },
  { src: '/photos/crocs.jpeg', alt: 'Lablab lying on the floor with his front paws in a pair of camo Crocs' },
  { src: '/photos/puppy-walk.png', alt: 'Puppy Lablab trotting toward the camera with his tail up' },
  { src: '/photos/on-the-rock.jpeg', alt: 'Lablab standing proudly on a big rock at a dog park' },
  { src: '/photos/pool-float.png', alt: 'Lablab sitting inside a blue and white striped pool float' },
  { src: '/photos/nose-up.png', alt: 'Lablab looking up with his nose close to the camera' },
  { src: '/photos/city-walk.png', alt: 'Lablab sitting on a city walkway on a leash, tongue out' },
  { src: '/photos/big-nose.png', alt: 'An extreme close-up of Lablab’s nose while he lies on a bed' },
  { src: '/photos/paw-hold.png', alt: 'Lablab resting on a fluffy blanket while someone holds his paw' },
  { src: '/photos/napping.png', alt: 'Lablab curled up asleep on a grey dog bed next to a red toy' },
  { src: '/photos/succulents.jpeg', alt: 'Lablab gazing out at the lawn beside potted succulents' },
  { src: '/photos/puppy-grass.jpeg', alt: 'Puppy Lablab lying in the grass, seen from above' },
  { src: '/photos/balcony.png', alt: 'Lablab standing on a balcony at sunset' },
  { src: '/photos/tug-of-war.png', alt: 'Lablab mid tug-of-war with an orange rope toy' },
  { src: '/photos/under-desk.png', alt: 'Lablab peeking up from under a desk with soft eyes' },
  { src: '/photos/profile.png', alt: 'Lablab lying on a cushion in profile, wearing his collar' },
]

export function PhotoGallery() {
  return (
    <section id="photos" aria-labelledby="photos-heading" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 id="photos-heading" className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          The goodest boy, in photos
        </h2>
        <p className="text-sm text-muted-foreground">From puppyhood to now</p>
      </div>
      <ul className="mt-12 columns-2 gap-4 md:columns-3">
        {photos.map((photo) => (
          <li key={photo.src} className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-muted">
            <img
              src={photo.src || '/placeholder.svg'}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-500 hover:scale-[1.03]"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

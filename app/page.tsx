import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { SocialLinks } from '@/components/social-links'
import { PhotoGallery } from '@/components/photo-gallery'
import { SocialFeeds } from '@/components/social-feeds'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <PhotoGallery />
        <SocialFeeds />
        <SocialLinks />
      </main>
      <SiteFooter />
    </>
  )
}

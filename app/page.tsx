import { About } from '@/components/about'
import { Chef } from '@/components/chef'
import { Contact } from '@/components/contact'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { PrivateDining } from '@/components/private-dining'
import { Reservation } from '@/components/reservation'
import { SignatureDishes } from '@/components/signature-dishes'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TastingMenu } from '@/components/tasting-menu'
import { Testimonials } from '@/components/testimonials'
import { WineCollection } from '@/components/wine-collection'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Chef />
        <SignatureDishes />
        <TastingMenu />
        <WineCollection />
        <PrivateDining />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

import { About } from '@/components/home/About'
import { Contact } from '@/components/home/Contact'
import { Gallery } from '@/components/home/Gallery'
import { Hero } from '@/components/home/Hero'
import { News } from '@/components/home/News'
import { Promotions } from '@/components/home/Promotions'
import { Services } from '@/components/home/Services'
import { Testimonials } from '@/components/home/Testimonials'

export function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <Services />
      <Gallery />
      <About />
      <News />
      <Testimonials />
      <Contact />
    </main>
  )
}

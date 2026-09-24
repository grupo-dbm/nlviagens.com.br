import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'

import { Newsletter } from '@/components/home/Newsletter'
import { news } from '@/data/news'

const titleClass = 'max-w-3xl font-title text-[32px] leading-9 text-dark-blue'

export function News() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current!, {
      slidesPerView: 2,
      spaceBetween: 16,
      breakpoints: { 1280: { slidesPerView: 4, spaceBetween: 32 } },
    })
    return () => {
      swiper.destroy()
    }
  }, [])

  return (
    <div>
      <div className="mx-auto flex w-full min-w-full flex-col items-center justify-center overflow-hidden bg-neutral-100 px-4 py-16 xl:max-w-7xl xl:py-32">
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-4 text-center">
          <span className="font-semibold text-dark-blue">Notícias</span>
          <h2 className={titleClass}>
            As últimas notícias nacionais e internacionais no mundo do turismo
          </h2>
          <div ref={swiperRef} className="swiper w-full max-w-7xl">
            <div className="swiper-wrapper">
              {news.map((item) => (
                <div key={item.slug} className="swiper-slide w-max">
                  <Link to={`/noticias/${item.slug}`} className="w-full">
                    <img className="w-auto flex-1 overflow-hidden rounded-lg" src={item.cover} alt="" />
                    <h3 className="mt-2 text-left font-medium">{item.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link
            className="max-w-max cursor-pointer rounded-lg bg-blue px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-dark-blue"
            to="/noticias"
          >
            Veja mais notícias
          </Link>
        </div>
        <div className="mt-32 flex max-w-7xl flex-col items-center justify-center gap-4 text-center">
          <span className="font-semibold text-dark-blue">Newsletter</span>
          <h2 className={titleClass}>Receba as novidades em primeira mão assinando nossa newsletter</h2>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

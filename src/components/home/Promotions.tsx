import { Link } from 'react-router-dom'

import { featuredPromotions } from '@/data/home'
import { findPromotion } from '@/data/promotions'

export function Promotions() {
  return (
    <div className="mx-auto flex min-w-full items-center justify-center overflow-hidden bg-dark-blue px-4 py-16 xl:py-32">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-4 text-center">
        <span className="font-semibold text-[#A8CDFF]">Promoções</span>
        <h2 className="max-w-3xl font-title text-[32px] leading-9 text-white">
          Sua viagem será melhor com as ofertas que selecionamos para você
        </h2>
        <div className="grid w-full grid-cols-2 gap-4 py-10 xl:grid-cols-4 xl:gap-9">
          {featuredPromotions.map((slug) => {
            const promo = findPromotion(slug)!
            return (
              <Link key={slug} to={`/promocoes/${slug}`}>
                <img className="flex-1 overflow-hidden rounded-lg" src={promo.image} alt={promo.title} />
              </Link>
            )
          })}
        </div>
        <Link
          className="max-w-max cursor-pointer rounded-lg bg-blue px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-dark-blue"
          to="/promocoes"
        >
          Veja mais promoções
        </Link>
      </div>
    </div>
  )
}

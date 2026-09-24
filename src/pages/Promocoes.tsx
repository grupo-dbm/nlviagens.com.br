import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/PageHeader'
import { packages, type Promotion, type PromotionTag } from '@/data/promotions'

const filters: { label: string; tag?: PromotionTag }[] = [
  { label: 'Todas' },
  { label: 'Nacional', tag: 'nacional' },
  { label: 'Internacional', tag: 'internacional' },
]

function PromotionPackage({ title, promotions }: { title: string; promotions: Promotion[] }) {
  const [tag, setTag] = useState<PromotionTag>()
  const visible = promotions.filter((promo) => !tag || promo.tag === tag)

  return (
    <section>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-11">
        <h3 className="font-title text-2xl font-medium text-gray">{title}</h3>
        <div className="flex items-center gap-6">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => setTag(filter.tag)}
              className={
                filter.tag === tag ? 'border-b-2 border-blue py-1 font-bold text-blue' : 'py-1'
              }
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 py-6 xl:grid-cols-4 xl:gap-8">
        {visible.map((promo) => (
          <Link key={promo.slug} to={`/promocoes/${promo.slug}`}>
            <img className="flex-1 overflow-hidden rounded-lg" src={promo.image} alt={promo.title} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export function Promocoes() {
  return (
    <div>
      <PageHeader title="Promoções">
        Pacotes promocionais você encontra somente aqui com preços justos e sem taxas adicionais
      </PageHeader>
      <main className="mx-auto mb-10 flex w-full max-w-7xl flex-col gap-6 px-4 xl:mb-20 xl:gap-20">
        {packages.map((pkg) => (
          <PromotionPackage key={pkg.title} {...pkg} />
        ))}
      </main>
    </div>
  )
}

import { Link, useParams } from 'react-router-dom'

import { PageHeader } from '@/components/PageHeader'
import { contactHref } from '@/data/navigation'
import { findPromotion, promotions } from '@/data/promotions'
import { NaoEncontrada } from '@/pages/NaoEncontrada'

const otherPromotions = promotions.slice(0, 4)

export function Promocao() {
  const promo = findPromotion(useParams().slug)
  if (!promo) return <NaoEncontrada />

  return (
    <div>
      <PageHeader title="Promoções">
        Pacotes promocionais você encontra somente aqui com preços justos e sem taxas adicionais
      </PageHeader>
      <main className="mx-auto mb-10 flex w-full max-w-7xl flex-col gap-10 px-4 xl:mb-20 xl:flex-row xl:gap-20">
        <aside className="flex flex-col gap-4 xl:gap-8">
          <img
            width={448}
            className="overflow-hidden rounded-lg xl:min-w-[448px]"
            src={promo.image}
            alt={promo.title}
          />
        </aside>
        <article>
          <h2 className="text-2xl font-semibold text-gray">{promo.title}</h2>
          <p className="my-6">{promo.description}</p>
          {promo.article && (
            <>
              <h3 className="text-xl font-semibold text-gray">Este pacote inclui:</h3>
              <div className="rich-text" dangerouslySetInnerHTML={{ __html: promo.article }} />
            </>
          )}
          <Link
            className="mt-10 block w-auto max-w-max cursor-pointer rounded-lg bg-blue px-4 py-2 text-center font-bold text-white transition-all hover:bg-dark-blue xl:w-max xl:px-8 xl:py-4"
            to={contactHref}
          >
            Contate-nos para mais detalhes
          </Link>
        </article>
      </main>
      <section className="mx-auto mt-6 mb-12 w-full max-w-7xl px-4">
        <h3 className="text-xl font-semibold text-gray">Outros pacotes promocionais</h3>
        <div className="grid w-full grid-cols-2 gap-4 py-6 xl:grid-cols-4 xl:gap-8">
          {otherPromotions.map((other) => (
            <Link key={other.slug} to={`/promocoes/${other.slug}`}>
              {/* O antigo pedia a miniatura com 296px de largura ao CMS. */}
              <img
                width={296}
                className="flex-1 overflow-hidden rounded-lg"
                src={other.image}
                alt={other.title}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

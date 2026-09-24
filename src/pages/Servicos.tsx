import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/PageHeader'
import { contactHref } from '@/data/navigation'
import { services } from '@/data/services'

export function Servicos() {
  return (
    <div>
      <PageHeader title="Serviços">
        Nossos serviços atendem desde assessorias a seguros de viagens, isso nos dá um diferencial na
        ampla demanda de nossos clientes.
      </PageHeader>
      <main className="mx-auto mb-10 grid w-full max-w-7xl grid-cols-1 gap-4 px-4 xl:mb-20 xl:grid-cols-2 xl:gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="w-auto overflow-hidden rounded-xl border border-zinc-200 xl:w-max"
          >
            <div className="relative">
              <img className="w-auto" src={service.cover} alt={`Image from ${service.title}`} />
              <div className="absolute bottom-0 flex h-full w-full items-end justify-between gap-2 bg-black/30 p-5">
                <h2 className="text-xl font-bold text-white xl:w-64 xl:text-3xl">{service.title}</h2>
                <Link
                  className="block w-max rounded-lg bg-yellow px-3 py-2 font-bold text-darkest-blue xl:px-8 xl:py-4"
                  to={contactHref}
                >
                  Contrate
                </Link>
              </div>
            </div>
            <div className="rich-text flex max-w-[624px] p-5">
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

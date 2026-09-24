import { Link } from 'react-router-dom'

import { services } from '@/data/services'

export function Services() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 overflow-hidden px-4 py-16 xl:py-32">
      <div className="flex max-w-3xl flex-col items-center justify-center gap-4 text-center text-gray">
        <span className="font-semibold">Nossos Serviços</span>
        <h2 className="font-title text-[32px] leading-9 font-semibold">
          Qualidade e satisfação são prioridades em nossos serviços
        </h2>
        <p className="max-w-xl">
          Nossos serviços atendem desde assessorias a seguros de viagem, isso nos dá um diferencial
          na ampla demanda de nossos clientes.
        </p>
      </div>
      <ul className="grid grid-cols-1 items-stretch gap-4 xl:grid-cols-4 xl:gap-9">
        {services.map((service) => (
          <li key={service.title} className="flex-1 shrink">
            <Link to="/servicos">
              <div className="relative w-full overflow-hidden rounded-t-lg">
                <img src={service.cover} alt={service.title} />
                <div className="absolute top-0 flex h-full w-full flex-col justify-end bg-black/30 p-4 text-white">
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className="flex w-full rounded-b-lg bg-zinc-100 p-4 font-title text-sm font-bold uppercase">
                {service.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="max-w-max cursor-pointer rounded-lg bg-blue px-8 py-4 font-bold text-white transition-all"
        to="/servicos"
      >
        Veja mais detalhes
      </Link>
    </section>
  )
}

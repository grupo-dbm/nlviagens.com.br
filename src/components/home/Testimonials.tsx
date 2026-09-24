import { testimonials } from '@/data/home'

export function Testimonials() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 overflow-hidden px-4 py-16 xl:py-32">
      <div className="flex max-w-3xl flex-col gap-4 text-gray">
        <span className="font-semibold">Depoimentos</span>
        <h2 className="font-title text-[32px] leading-9 font-semibold">
          Veja o que nossos clientes pensam de nossos serviços
        </h2>
      </div>
      <ul className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-9">
        {testimonials.map((item) => (
          <li
            key={item.name}
            className="flex flex-1 flex-col justify-between gap-4 rounded-lg bg-neutral-100 p-4"
          >
            <p className="flex-1">{item.text}</p>
            <div className="flex items-center gap-4">
              {/* O site antigo não tinha foto dos clientes: fica só o círculo. */}
              <span className="h-10 w-10 shrink-0 rounded-full border-2 border-blue bg-neutral-200" />
              <span className="font-bold">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

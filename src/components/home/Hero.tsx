import { Link } from 'react-router-dom'

import { hero } from '@/data/home'

const gradient = 'linear-gradient(132deg, rgba(0, 49, 117, 0.9) 0%, rgb(254 245 44 / 50%) 100%)'

export function Hero() {
  return (
    <header
      className="relative flex min-h-[65vh] items-center justify-center overflow-hidden xl:min-h-[88vh]"
      style={{ background: gradient }}
    >
      <div className="mx-auto flex min-h-[65vh] w-full max-w-7xl items-center overflow-hidden px-4 pt-52 pb-16 xl:min-h-[88vh] xl:py-60">
        <div className="flex max-w-4xl flex-col gap-8">
          <h1 className="font-title text-5xl font-semibold text-white xl:text-7xl">{hero.title}</h1>
          <p className="max-w-xl text-xl text-white">{hero.subtitle}</p>
          <Link
            to={hero.action}
            className="max-w-max cursor-pointer rounded-lg bg-blue px-8 py-4 font-bold text-white transition-all hover:bg-dark-blue"
            title={hero.actionText}
          >
            {hero.actionText}
          </Link>
        </div>
      </div>
      {/* z-index negativo: a foto fica por baixo do degradê do header. */}
      <img
        src={hero.image}
        alt=""
        className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
      />
    </header>
  )
}

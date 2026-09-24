import { Link } from 'react-router-dom'

import { about } from '@/data/home'

export function About() {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-center overflow-hidden px-4 py-16 xl:gap-[60px] xl:py-32">
      <div className="max-w-2xl text-gray">
        <span className="font-semibold">Quem Somos</span>
        <h2 className="mt-4 mb-10 font-title text-[32px] leading-9">{about.title}</h2>
        <article className="mb-14">
          {about.paragraphs.map((text, index) => (
            <p key={index} className={index ? 'mt-5' : undefined}>
              {text}
            </p>
          ))}
        </article>
        <Link
          className="max-w-max cursor-pointer rounded-lg bg-blue px-8 py-4 font-bold text-white transition-all hover:bg-dark-blue"
          to="/a-empresa"
          title="Conheça mais"
        >
          Conheça mais
        </Link>
      </div>
      <div>
        <img src={about.image} alt="" className="hidden rounded-2xl xl:flex" />
      </div>
    </div>
  )
}

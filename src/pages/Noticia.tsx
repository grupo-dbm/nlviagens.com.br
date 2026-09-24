import { useParams } from 'react-router-dom'

import { findNews } from '@/data/news'
import { NaoEncontrada } from '@/pages/NaoEncontrada'

export function Noticia() {
  const item = findNews(useParams().slug)
  if (!item) return <NaoEncontrada />

  return (
    <div>
      <header className="mb-10 bg-darkest-blue pt-40 pb-6"></header>
      <article className="mx-auto max-w-2xl px-4">
        <h2 className="mx-auto text-center text-3xl font-semibold text-gray xl:text-4xl">{item.title}</h2>
        <img src={item.cover} alt={item.title} className="mt-5 xl:mt-10" />
        <p className="my-6">{item.article}</p>
      </article>
    </div>
  )
}

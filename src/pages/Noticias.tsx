import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/PageHeader'
import { news } from '@/data/news'

export function Noticias() {
  return (
    <div>
      <PageHeader title="Notícias">
        Acompanhe as últimas notícias nacionais e internacionais do mundo de viagens e turismo
      </PageHeader>
      <main className="mx-auto mb-10 w-full max-w-7xl px-4 xl:mb-20">
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-8">
          {news.map((item) => (
            <Link key={item.slug} to={`/noticias/${item.slug}`}>
              <img className="w-auto rounded-lg" src={item.cover} alt={`Image from ${item.title}`} />
              <h3 className="mt-2 font-bold text-gray">{item.title}</h3>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

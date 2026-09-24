import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/PageHeader'
import { albums } from '@/data/gallery'

export function Galeria() {
  return (
    <div>
      <PageHeader title="Galeria de Fotos">
        Aqui tem os momentos mais incríveis que registramos e queremos compartilhar com você!
      </PageHeader>
      <main className="mx-auto mb-10 grid w-full max-w-7xl grid-cols-1 items-stretch gap-4 px-4 md:grid-cols-2 xl:mb-20 xl:gap-8">
        {albums.map((album) => (
          <div
            key={album.slug}
            className="group w-auto flex-1 overflow-hidden rounded-xl border border-zinc-200"
          >
            <div className="relative h-full w-full">
              <img
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={album.cover}
                alt={`Image from ${album.title}`}
              />
              <div className="absolute bottom-0 flex h-full w-full items-end justify-between gap-2 bg-black/30 p-5">
                <h2 className="flex-1 text-xl font-bold text-white xl:w-64 xl:text-3xl">{album.title}</h2>
                <Link
                  className="block w-max rounded-lg bg-yellow px-3 py-2 text-center font-bold text-darkest-blue xl:px-8 xl:py-4"
                  to={`/galeria/${album.slug}`}
                >
                  Ver galeria
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

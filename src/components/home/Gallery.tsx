import { Link } from 'react-router-dom'

import { albums } from '@/data/gallery'

export function Gallery() {
  return (
    <div className="bg-neutral-100">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 overflow-hidden px-4 py-16 xl:py-32">
        <div className="flex max-w-3xl flex-col items-center justify-center gap-4 text-center text-gray">
          <h2 className="font-title text-[32px] leading-9 font-semibold">Galeria de Fotos</h2>
          <p className="max-w-xl">
            Aqui tem os momentos mais incríveis que registramos e queremos compartilhar com você!
          </p>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-4 xl:grid-cols-2 xl:gap-9">
          {albums.map((album) => (
            <li key={album.slug} className="flex-1">
              <Link to={`/galeria/${album.slug}`} className="group h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                    src={album.cover}
                    alt={album.title}
                  />
                  <div className="absolute top-0 flex h-full w-full items-end justify-between bg-black/30 p-4">
                    <span className="flex-1 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                      {album.title}
                    </span>
                    <span className="block w-max rounded-lg bg-yellow px-3 py-2 text-center font-bold text-darkest-blue xl:px-8 xl:py-4">
                      Ver galeria
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

import { Link, useParams } from 'react-router-dom'

import { findAlbum } from '@/data/gallery'
import { NaoEncontrada } from '@/pages/NaoEncontrada'

/** Página de fotos de um álbum. Como no site antigo, não tem menu nem rodapé. */
export function Album() {
  const album = findAlbum(useParams().slug)
  if (!album) return <NaoEncontrada />

  return (
    <div>
      <header className="bg-darkest-blue px-10 py-4">
        <div className="flex items-center gap-4">
          <Link
            to="/galeria"
            className="cursor-pointer rounded-lg border px-6 py-2 text-white hover:bg-white hover:text-darkest-blue"
          >
            Voltar
          </Link>
          <h1 className="text-center text-xl font-medium text-white">{album.title}</h1>
        </div>
      </header>
      <div className="flex flex-wrap gap-4 p-4">
        {album.images.map((image, index) => (
          <img key={index} className="h-full grow rounded-lg object-cover" src={image} alt="" />
        ))}
      </div>
    </div>
  )
}

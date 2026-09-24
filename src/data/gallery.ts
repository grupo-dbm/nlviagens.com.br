import aragao from '@/assets/images/noticias/aragao.jpg'
import hoteisEResorts from '@/assets/images/noticias/hoteis-e-resorts.jpeg'
import novaYork from '@/assets/images/noticias/nova-york.jpg'
import rodaGigante from '@/assets/images/noticias/roda-gigante.jpg'
import acessoria from '@/assets/images/servicos/acessoria.jpeg'
import corporativo from '@/assets/images/servicos/corporativo.jpeg'
import fretamento from '@/assets/images/servicos/fretamento.jpeg'
import passagensRodoviarias from '@/assets/images/servicos/passagens-rodoviarias.jpeg'

export type Album = {
  slug: string
  title: string
  cover: string
  images: string[]
}

export const albums: Album[] = [
  {
    slug: 'viagens-grupo-nilsara',
    title: 'Viagens Grupo Nilsara',
    cover: hoteisEResorts,
    images: [
      hoteisEResorts,
      aragao,
      rodaGigante,
      passagensRodoviarias,
      acessoria,
      fretamento,
      corporativo,
      novaYork,
    ],
  },
  {
    slug: 'individual',
    title: 'Indivídual',
    cover: acessoria,
    images: [acessoria, novaYork],
  },
]

export const findAlbum = (slug?: string) => albums.find((album) => album.slug === slug)

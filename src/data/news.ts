import aragao from '@/assets/images/noticias/aragao.jpg'
import hoteisEResorts from '@/assets/images/noticias/hoteis-e-resorts.jpeg'
import novaYork from '@/assets/images/noticias/nova-york.jpg'
import rodaGigante from '@/assets/images/noticias/roda-gigante.jpg'

export type News = {
  slug: string
  title: string
  cover: string
  article: string
}

export const news: News[] = [
  {
    slug: 'roteiro-de-uma-semana-pela-regiao-de-aragao-na-espanha-',
    title: 'Roteiro de uma semana pela região de Aragão, na Espanha ',
    cover: aragao,
    article:
      '10 motivos pelos quais você deveria incluir Aragão na sua próxima viagem. A seguir, ensino como arrematar todos aqueles povoados, cidades, monumentos e cenários naturais em um roteiro de uma semana.',
  },
  {
    slug: 'os-mais-novos-hoteis-e-resorts-do-brasil',
    title: 'Os mais novos hotéis e resorts do Brasil',
    cover: hoteisEResorts,
    article:
      'Nem mesmo a pandemia foi capaz de frear as inaugurações hoteleiras pelo Brasil em 2021 e 2022. A lista inclui desde propriedades que foram erguidas do zero até lugares que são fruto da remodelação.',
  },
  {
    slug: 'sao-paulo-tera-a-maior-roda-gigante-da-america-latina',
    title: 'São Paulo terá a maior roda-gigante da América Latina',
    cover: rodaGigante,
    article:
      'A partir do dia 9 de dezembro, a maior roda-gigante da América Latina começará a girar em São Paulo. A chamada “Roda Rico São Paulo” tem 91 metros de altura e foi construída no Parque Cândido Portinar.',
  },
  {
    slug: 'nova-york-ano-novo-na-times-square-e-roubada-veja-o-que-vale-a-pena',
    title: 'Nova York: Ano Novo na Times Square é roubada; veja o que vale a pena',
    cover: novaYork,
    article:
      'Se você está planejando passar o Réveillon em Nova York, vou trazer verdades que podem partir seu coração: a virada do ano na Big Apple deixa muito a desejar no quesito animação.',
  },
]

export const findNews = (slug?: string) => news.find((item) => item.slug === slug)

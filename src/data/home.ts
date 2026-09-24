import heroImage from '@/assets/images/home/pagina-inicial.jpg'
import aboutImage from '@/assets/images/home/quem-somos.png'

export const hero = {
  title: 'Suas férias ainda melhores com nossas promoções',
  subtitle: 'Pacotes promocionais você encontra somente aqui com preços justos e sem taxas adicionais',
  actionText: 'Clique aqui e confira',
  action: '/promocoes',
  image: heroImage,
}

/** Promoções em destaque na home (slugs de `promotions.ts`). */
export const featuredPromotions = [
  'tour-intercontinental',
  'ferias-em-familia',
  'ferias-na-franca',
  'passagens-internacionais',
]

export const about = {
  title: 'Somos referência no mercado de viagens e turismo',
  paragraphs: [
    'Somos uma empresa com mais de 25 anos no mercado de viagens e turismo, somos especialistas quando se trata de viagens nacionais, internacionais e assessoria. Temos uma equipe altamente capacitada, e consultores prontos para elaborar seu plano de viagem de modo que atenda suas necessidades e torne sua experiência única.',
    'Nossa empresa é conhecida pela qualidade, agilidade e satisfação em nossos serviços',
  ],
  image: aboutImage,
}

export const testimonials = [
  { text: 'Foi a melhor viagem da minha vida!! Já deu até saudade :(', name: 'Anjelica Matos' },
  {
    text: 'Minhas férias não teria sido melhor senão fosse essa equipe altamente qualificada!!',
    name: 'Rubens Freitas',
  },
  { text: 'O atendimento desta equipe é o melhor do ramo!', name: 'Sabrina Moreno' },
  {
    text: 'Foi a melhor viagem da minha vida!! Não vejo a hora de voltar para a estrada!',
    name: 'George Lima',
  },
]

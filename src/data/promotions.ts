import feriasEmFamilia from '@/assets/images/promocoes/ferias-em-familia.jpeg'
import feriasNaFranca from '@/assets/images/promocoes/ferias-na-franca.jpeg'
import pacotePassagens from '@/assets/images/promocoes/pacote-passagens.jpeg'
import passagensInternacionais from '@/assets/images/promocoes/passagens-internacionais.jpeg'
import rioDeJaneiro from '@/assets/images/promocoes/rio-de-janeiro.png'
import saoPaulo from '@/assets/images/promocoes/sao-paulo.jpeg'
import seguroViagem from '@/assets/images/promocoes/seguro-viagem.jpeg'
import tourIntercontinental from '@/assets/images/promocoes/tour-intercontinental.jpeg'

export type PromotionTag = 'nacional' | 'internacional'

export type Promotion = {
  slug: string
  title: string
  image: string
  tag: PromotionTag
  /** Texto de abertura (texto simples). */
  description?: string
  /** "Este pacote inclui:" — HTML vindo do antigo editor do CMS. */
  article?: string
}

/** Na ordem do CMS: "Outros pacotes promocionais" mostra as 4 primeiras. */
export const promotions: Promotion[] = [
  { slug: 'passagens-para-sao-paulo', title: 'Passagens para São Paulo', image: saoPaulo, tag: 'nacional' },
  {
    slug: 'passagens-para-rio-de-janeiro',
    title: 'Passagens para Rio de Janeiro',
    image: rioDeJaneiro,
    tag: 'nacional',
  },
  {
    slug: 'passagens-internacionais',
    title: 'Passagens Internacionais',
    image: passagensInternacionais,
    tag: 'nacional',
  },
  { slug: 'seguro-de-viagem', title: 'Seguro de Viagem', image: seguroViagem, tag: 'nacional' },
  {
    slug: 'ferias-em-familia',
    title: 'Férias em Família',
    image: feriasEmFamilia,
    tag: 'nacional',
    description:
      'Conveniência, conforto e muita diversão são as palavras de ordem neste pacote, onde cada detalhe é planejado para a felicidade e satisfação de nossos clientes.',
    article: `<h3>Hotel - Master Resort</h3>
<ul>
<li>Hospedagem por 4 noites;</li>
<li>Alimentação inclui café da manhã</li>
<li>Suite para casal + Quartos individuais (standard)</li>
</ul>
<p>&nbsp;</p>
<p><strong>As acomodações incluem:</strong></p>
<ul>
<li>Ar condicionado;</li>
<li>Frigobar;</li>
<li>TV;</li>
<li>Serviço de Quarto;</li>
<li>Micro-ondas;</li>
<li>Telefone;</li>
<li>Secador.</li>
</ul>
<p>&nbsp;</p>
<h3>Alimentação:</h3>
<p>Neste pacote a alimentação é incluída, sendo realizada no haul do Hotel Master Resort.</p>
<p>&nbsp;</p>
<p><strong>Sistema de refeições:</strong></p>
<ul>
<li>Café da Manhã: 06:00h - 09:00;</li>
<li>Amoço: 10:30h - 15:30;</li>
<li>Jantar: 19:00h - 22:00h;</li>
</ul>`,
  },
  {
    slug: 'tour-intercontinental',
    title: 'Tour Intercontinental',
    image: tourIntercontinental,
    tag: 'internacional',
  },
  {
    slug: 'pacote-de-passagens-aereas-hoteis',
    title: 'Pacote de passagens aéreas + Hotéis',
    image: pacotePassagens,
    tag: 'nacional',
  },
  { slug: 'ferias-na-franca', title: 'Férias na França', image: feriasNaFranca, tag: 'internacional' },
]

export const findPromotion = (slug?: string) => promotions.find((promo) => promo.slug === slug)

const bySlug = (slugs: string[]) => slugs.map((slug) => findPromotion(slug)!)

/** Grupos da página /promocoes. */
export const packages = [
  {
    title: 'Pacote de Férias',
    promotions: bySlug([
      'ferias-em-familia',
      'tour-intercontinental',
      'ferias-na-franca',
      'pacote-de-passagens-aereas-hoteis',
    ]),
  },
  {
    title: 'Passagens Aéreas',
    promotions: bySlug([
      'passagens-para-sao-paulo',
      'passagens-para-rio-de-janeiro',
      'passagens-internacionais',
    ]),
  },
  { title: 'Outras Promoções', promotions: bySlug(['seguro-de-viagem']) },
]

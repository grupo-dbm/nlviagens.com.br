import acessoria from '@/assets/images/servicos/acessoria.jpeg'
import corporativo from '@/assets/images/servicos/corporativo.jpeg'
import fretamento from '@/assets/images/servicos/fretamento.jpeg'

export type Service = {
  title: string
  cover: string
  items: string[]
}

export const services: Service[] = [
  { title: 'Passagens Aéreas', cover: corporativo, items: ['Nacionais', 'Internacionais'] },
  { title: 'Assessoria', cover: acessoria, items: ['Passaportes;', 'Visto Consular.'] },
  {
    title: 'Pacotes de Viagens Nacionais e Internacionais',
    cover: fretamento,
    items: ['Passagens', 'Hotel', 'Translado de chegada e saída', 'Seguro Viagem'],
  },
  { title: 'Pacote de Cruzeiros', cover: corporativo, items: ['Marítimos;', 'Fluviais;'] },
]

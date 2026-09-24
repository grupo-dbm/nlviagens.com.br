export const site = {
  name: 'NL Viagens Nilsara',
  legalName: 'Nilsara Coelho Viagens e Turismo - NL Viagens',
  cnpj: '10.979.197/0001-06',
  social: {
    facebook: 'http://www.facebook.com/nlviagensnilsara',
    instagram: 'https://instagram.com/nlviagenseturismo',
  },
  developer: 'https://marknet.com.br',
}

/** Telefones da coluna "Fale com um de nossos acessores" do rodapé. */
export const phones = [
  { phone: '(44) 9 3631-1690', label: 'Atendimento presencial com hora marcada', tel: '+5544936311690' },
  { phone: '(44) 99880-0099', label: 'Nilsara', tel: '+5544998800099' },
  { phone: '(44) 98824-9073', label: 'Ana Paula', tel: '+5544988249073' },
]

/**
 * WhatsApp que recebe os formulários de contato e de newsletter. O site antigo
 * não enviava os formulários para lugar nenhum; troque o número aqui se as
 * mensagens tiverem que ir para outro atendente.
 */
export const formWhatsApp = '5544936311690'

export function whatsappLink(text: string) {
  return `https://wa.me/${formWhatsApp}?text=${encodeURIComponent(text)}`
}

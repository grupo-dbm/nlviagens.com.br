import type { FormEvent } from 'react'

import { whatsappLink } from '@/data/site'

/**
 * O formulário antigo não enviava para lugar nenhum. Sem backend, a mensagem
 * preenchida abre no WhatsApp da agência (número em `data/site.ts`).
 */
function sendByWhatsApp(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const field = (name: string) => String(data.get(name) ?? '').trim()

  const text = [
    'Olá! Vim pelo site da NL Viagens.',
    `Nome: ${field('name')}`,
    `E-mail: ${field('email')}`,
    `Telefone/WhatsApp: ${field('phone')}`,
    `Assunto: ${field('subject')}`,
    '',
    field('message'),
  ].join('\n')
  window.open(whatsappLink(text), '_blank', 'noopener')
}

const fieldClass = 'w-full rounded-lg bg-white px-4 py-3'

export function Contact() {
  return (
    <div id="contato" className="bg-dark-blue">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 xl:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <span className="font-bold text-white">Contate-nos</span>
          <h1 className="mt-4 mb-10 text-center font-title text-[32px] leading-9 font-semibold text-white">
            Entre em contato conosco, estamos aqui para ajudar a roteirizar sua próxima viagem
          </h1>
          <form className="flex w-full flex-col gap-2 xl:px-10" onSubmit={sendByWhatsApp}>
            <input name="name" required className={fieldClass} type="text" placeholder="Seu nome completo" />
            <input name="email" className={fieldClass} type="email" placeholder="Seu melhor e-mail" />
            <input
              name="phone"
              className={fieldClass}
              type="tel"
              placeholder="Informe seu contato Telefone/WhatsApp"
            />
            <input name="subject" className={fieldClass} type="text" placeholder="Qual assunto você quer tratar" />
            <textarea name="message" required className={fieldClass} placeholder="Escreva uma mensagem" />
            <button
              type="submit"
              className="mx-auto w-max rounded-lg bg-blue px-20 py-4 font-bold text-white"
            >
              Enviar
            </button>
            <p className="text-center text-xs text-white opacity-50">
              * Ao inserir seus dados você aceita receber comunicações.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

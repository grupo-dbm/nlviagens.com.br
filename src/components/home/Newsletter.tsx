import type { FormEvent } from 'react'

import { whatsappLink } from '@/data/site'

/**
 * O site antigo não gravava a newsletter em lugar nenhum. Sem backend, o
 * pedido de inscrição segue como mensagem de WhatsApp para a agência.
 */
function subscribe(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const field = (name: string) => String(data.get(name) ?? '').trim()

  const text = [
    'Olá! Quero receber as novidades da NL Viagens.',
    `Nome: ${field('name')}`,
    `E-mail: ${field('email')}`,
  ].join('\n')
  window.open(whatsappLink(text), '_blank', 'noopener')
}

const fieldClass = 'w-full rounded-lg bg-white px-6 py-3 outline-none'

export function Newsletter() {
  return (
    <div className="mt-8 flex w-full flex-col gap-8">
      <form className="flex w-full flex-col items-center gap-3 xl:flex-row" onSubmit={subscribe}>
        <input name="name" required className={fieldClass} type="text" placeholder="Seu nome completo" />
        <input name="email" required className={fieldClass} type="email" placeholder="Seu melhor e-mail" />
        <button type="submit" className="w-full rounded-lg bg-blue px-6 py-3 text-white outline-none">
          Quero receber novidades
        </button>
      </form>
      <p className="text-sm text-gray">* Ao inserir seus dados você aceita receber comunicações.</p>
    </div>
  )
}

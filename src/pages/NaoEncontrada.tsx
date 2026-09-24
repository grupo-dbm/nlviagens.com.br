import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/PageHeader'

export function NaoEncontrada() {
  return (
    <div>
      <PageHeader title="Página não encontrada" className="mb-20">
        O endereço acessado não existe ou foi removido.
      </PageHeader>
      <main className="mx-auto mb-20 flex w-full max-w-2xl justify-center px-4">
        <Link
          className="rounded-lg bg-blue px-8 py-4 font-bold text-white transition-all hover:bg-dark-blue"
          to="/"
        >
          Voltar para a home
        </Link>
      </main>
    </div>
  )
}

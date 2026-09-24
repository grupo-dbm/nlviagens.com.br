import sobre from '@/assets/images/home/sobre-nilsara.jpg'
import { PageHeader } from '@/components/PageHeader'
import { about } from '@/data/home'

export function AEmpresa() {
  return (
    <div>
      <PageHeader title="A NL Viagens" className="mb-20">
        Conheça um pouco de nossa história
      </PageHeader>
      <main className="mx-auto mb-20 flex w-full max-w-2xl flex-col items-center gap-8 px-4 text-center text-gray">
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <img src={sobre} alt="Avião em pleno vôo" />
      </main>
    </div>
  )
}

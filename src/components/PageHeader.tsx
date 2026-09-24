import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  children: ReactNode
  className?: string
}

/** Faixa azul com o traço amarelo no topo das páginas internas. */
export function PageHeader({ title, children, className = 'mb-10 xl:mb-20' }: PageHeaderProps) {
  return (
    <header className={`bg-darkest-blue pt-40 pb-16 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4">
        <span className="mx-auto block w-20 border-t border-yellow"></span>
        <h1 className="my-6 text-center text-4xl font-medium text-white">{title}</h1>
        <p className="mx-auto max-w-lg text-center text-white">{children}</p>
      </div>
    </header>
  )
}

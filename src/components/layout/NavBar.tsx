import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logoDark from '@/assets/images/brand/logo-dark.svg'
import logo from '@/assets/images/brand/logo.svg'
import { contactHref, navigation } from '@/data/navigation'

/** Transparente sobre o topo; depois de 36px de rolagem vira uma barra branca fixa. */
export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`top-0 z-50 flex w-full items-center transition-all duration-200 ${
        scrolled ? 'fixed h-20 bg-white pt-0 shadow-lg shadow-black/5' : 'absolute h-32 bg-transparent pt-9'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <ul className="flex w-40">
          <li>
            <Link to="/">
              {scrolled ? (
                <img src={logoDark} width={64} height={70} alt="NL Viagens Nilsara" />
              ) : (
                <img src={logo} width={111} height={118} alt="NL Viagens Nilsara" />
              )}
            </Link>
          </li>
        </ul>
        <ul
          className={`hidden w-full flex-1 items-center justify-center gap-10 xl:flex ${
            scrolled ? 'border-dark-blue text-dark-blue' : 'border-white text-white'
          }`}
        >
          {navigation.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end className={({ isActive }) => (isActive ? '' : 'opacity-50')}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex w-40 justify-end">
          <li className="flex">
            <Link
              className="w-full rounded-lg bg-blue px-6 py-4 text-center font-bold text-white"
              to={contactHref}
            >
              Contate-nos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

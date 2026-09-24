import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Ao trocar de página volta ao topo (ou rola até a âncora, ex. `/#contato`) e
 * envia o PageView do Facebook Pixel, como o nuxt-facebook-pixel-module fazia.
 */
export function PageChanges() {
  const { pathname, hash, key } = useLocation()
  const lastPath = useRef<string | null>(null)

  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  useEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    window.fbq?.('track', 'PageView')
  }, [pathname])

  return null
}

/** Layout "web" do site antigo: menu, página e rodapé. */
export function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

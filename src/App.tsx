import { Route, Routes } from 'react-router-dom'

import { Layout, PageChanges } from '@/components/layout/Layout'
import { AEmpresa } from '@/pages/AEmpresa'
import { Album } from '@/pages/Album'
import { Galeria } from '@/pages/Galeria'
import { Home } from '@/pages/Home'
import { NaoEncontrada } from '@/pages/NaoEncontrada'
import { Noticia } from '@/pages/Noticia'
import { Noticias } from '@/pages/Noticias'
import { Promocao } from '@/pages/Promocao'
import { Promocoes } from '@/pages/Promocoes'
import { Servicos } from '@/pages/Servicos'

export function App() {
  return (
    <>
      <PageChanges />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/promocoes/:slug" element={<Promocao />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/a-empresa" element={<AEmpresa />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<Noticia />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
        <Route path="/galeria/:slug" element={<Album />} />
      </Routes>
    </>
  )
}

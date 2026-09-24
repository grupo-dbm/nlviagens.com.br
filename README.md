# NL Viagens — site institucional

Site da **NL Viagens Nilsara** ([www.nlviagens.com.br](https://www.nlviagens.com.br)) em
React + Vite + TypeScript + Tailwind CSS v4.

É uma réplica visual fiel do site anterior (Nuxt 2 + CMS Directus), porém **100% estática**: todo o
conteúdo mora em `src/data/` e todas as imagens e fontes são assets locais. Não depende mais do
painel `admin.nlviagens.com.br`.

---

## Como instalar, rodar e publicar

Requer Node 20+ e [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # gera dist/
pnpm preview    # serve o build para conferência
pnpm lint       # oxlint
```

O build é um SPA. O servidor precisa devolver `index.html` em qualquer rota, senão
`/promocoes/ferias-em-familia` dá 404 ao ser acessado direto.

- **Vercel**: já configurado em `vercel.json` (preset `vite`, rewrite de SPA e cache dos assets).
  O projeto no Vercel vinha configurado com `@nuxtjs/vercel-builder`, e o `vercel.json` novo substitui isso.
- **Nginx**: `try_files $uri $uri/ /index.html;`

---

## Onde alterar cada coisa

| O que quero mudar | Arquivo |
| --- | --- |
| Telefones do rodapé, Facebook, Instagram, CNPJ | `src/data/site.ts` |
| WhatsApp que recebe os formulários | `src/data/site.ts` → `formWhatsApp` |
| Itens do menu | `src/data/navigation.ts` |
| Banner, "Quem Somos", promoções em destaque e depoimentos da Home | `src/data/home.ts` |
| Promoções (Home, `/promocoes` e `/promocoes/<slug>`) | `src/data/promotions.ts` |
| Serviços (Home e `/servicos`) | `src/data/services.ts` |
| Álbuns de fotos (`/galeria` e `/galeria/<slug>`) | `src/data/gallery.ts` |
| Notícias (Home, `/noticias` e `/noticias/<slug>`) | `src/data/news.ts` |
| Cores e fontes | `src/styles/index.css` (bloco `@theme`) |
| Título da aba e Facebook Pixel | `index.html` |

### Adicionar uma promoção

1. Coloque a arte em `src/assets/images/promocoes/` (as atuais têm 450 × 552).
2. Inclua um objeto em `promotions` (`src/data/promotions.ts`) com `slug`, `title`, `image` e `tag`
   (`nacional` ou `internacional`, usada pelos filtros da página `/promocoes`). `description` e
   `article` são opcionais; `article` é HTML (`<h3>`, `<ul>`, `<p>`...), como era no painel antigo.
3. Para a promoção aparecer em `/promocoes`, acrescente o slug a um dos grupos de `packages`, no
   fim do mesmo arquivo. Na Home, os quatro destaques ficam em `featuredPromotions` (`src/data/home.ts`).

"Outros pacotes promocionais" (na página de cada promoção) mostra as 4 primeiras de `promotions`,
como o site anterior fazia.

---

## Estrutura

```
src/
  assets/
    fonts/               Inter e Montserrat, as fontes locais do site anterior
    images/
      brand/             logos (SVG do menu, PNG do rodapé) e logo da Marknet
      home/              banner principal, "Quem Somos" e foto da página A Empresa
      promocoes/         artes das promoções
      servicos/          fotos dos serviços (também usadas na galeria)
      noticias/          capas das notícias (também usadas na galeria)
  components/
    layout/              NavBar, Footer, Layout (+ volta ao topo e PageView do Pixel)
    home/                uma seção da Home por arquivo
    PageHeader           faixa azul do topo das páginas internas
  data/                  todo o conteúdo editável
  pages/                 Home, Promocoes, Promocao, Servicos, Galeria, Album, AEmpresa,
                         Noticias, Noticia, NaoEncontrada
  styles/index.css       Tailwind v4 + tema + estilo dos textos vindos do CMS
```

Rotas: `/`, `/promocoes`, `/promocoes/:slug`, `/servicos`, `/galeria`, `/galeria/:slug`,
`/a-empresa`, `/noticias` e `/noticias/:slug`. Qualquer outra mostra "Página não encontrada".
Como no site anterior, a página de um álbum (`/galeria/:slug`) não tem menu nem rodapé.

## Comportamentos

| Onde | O que faz |
| --- | --- |
| Menu | transparente sobre o topo; depois de 36px de rolagem vira uma barra branca fixa com o logo menor. No celular só aparecem o logo e o "Contate-nos", como antes |
| Notícias da Home | carrossel Swiper: 2 por vez no celular, 4 a partir de 1280px, arrastável |
| Galeria | zoom leve na foto ao passar o mouse |
| `/promocoes` | os filtros Todas / Nacional / Internacional de cada grupo funcionam (no site anterior eram links vazios que recarregavam a página). O filtro usa a `tag` de cada promoção, que veio do CMS: "Passagens Internacionais" está marcada como nacional |
| "Contate-nos", "Contrate" e "Contate-nos para mais detalhes" | levam ao formulário no fim da Home (`/#contato`). No site anterior eram links vazios |
| Facebook Pixel | o mesmo ID do site anterior; envia `PageView` a cada troca de página |

Pequenas correções em relação ao site anterior:

- Os telefones do rodapé agora são links `tel:`; dois deles apontavam para um endereço inválido.
- Os destaques de promoção da Home abrem a página da promoção (antes levavam de volta para a Home).
- Os depoimentos não tinham foto (a imagem aparecia quebrada); ficou só o círculo.

## Formulários (contato e newsletter)

Os formulários do site anterior **não enviavam nada**: não tinham ação nem nomes nos campos, e o
Directus não tinha nenhuma coleção para guardar mensagens ou inscritos. Agora eles validam os campos
obrigatórios e abrem o WhatsApp da agência com a mensagem pronta (número em
`src/data/site.ts` → `formWhatsApp`, hoje o (44) 9 3631-1690). Não depende de servidor.

Se preferir envio por e-mail ou uma lista de newsletter de verdade, troque as funções
`sendByWhatsApp` (`src/components/home/Contact.tsx`) e `subscribe`
(`src/components/home/Newsletter.tsx`) por um `fetch` para um serviço de formulários (Formspree,
Web3Forms etc.) ou uma função serverless.

## Imagens

As imagens vieram do painel Directus antigo e do repositório anterior, nos arquivos originais. O
banner principal é o recorte 1920 × 850 que o site pedia ao painel, recomprimido em JPEG q86 (PSNR
46 dB, de 543 KB para 56 KB).

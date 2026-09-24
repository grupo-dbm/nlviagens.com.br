import footerLogo from '@/assets/images/brand/footer-logo.png'
import marknetLogo from '@/assets/images/brand/marknet.svg'
import { phones, site } from '@/data/site'

export function Footer() {
  return (
    <footer className="bg-darkest-blue py-16 text-sm text-white xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch justify-between gap-10 px-4 xl:flex-row">
        <img className="h-40 w-40 xl:w-auto" src={footerLogo} alt="Footer Logo NL Viagens Nilsara" />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-4 xl:flex-row xl:gap-20">
            <div>
              <h3 className="mb-4">Fale com um de nossos acessores</h3>
              <ul className="flex flex-col gap-3 text-white/50">
                {phones.map((item) => (
                  <li key={item.tel}>
                    <a className="text-white hover:underline" href={`tel:${item.tel}`}>
                      {item.phone}
                    </a>{' '}
                    - {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Siga nossas redes</h3>
              <ul className="flex flex-col gap-3 text-white/50">
                <li>
                  <a href={site.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={site.social.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p>{`Copyright © ${new Date().getFullYear()}. ${site.legalName}. CNPJ: ${site.cnpj}.`}</p>
          <div className="mt-20 flex items-center">
            <span className="-mt-1 mr-4 text-xs text-white/50">Desenvolvido por:</span>
            <a href={site.developer} target="_blank" rel="noreferrer">
              <img src={marknetLogo} width={98} height={20} alt="Marknet" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

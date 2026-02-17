import type { Language, TranslateFn, UiText } from '../types/site'

type NavbarProps = {
  language: Language
  setLanguage: (language: Language) => void
  navSolid: boolean
  t: TranslateFn
  navText: UiText['nav']
  topLogoSrc: string
}

export function Navbar({
  language,
  setLanguage,
  navSolid,
  t,
  navText,
  topLogoSrc,
}: NavbarProps) {
  return (
    <header className={`top-nav ${navSolid ? 'solid' : ''}`}>
      <a className="brand" href="#home">
        <img src={topLogoSrc} alt="GT Auto Gallery emblem" className="brand-logo" />
        GT AUTO GALLERY
      </a>
      <div className="nav-actions">
        <nav aria-label="Main Navigation">
          <a href="#home">{t(navText.home)}</a>
          <a href="#about">{t(navText.about)}</a>
          <a href="#blog">{t(navText.blog)}</a>
          <a href="#vin-risk-check">{t(navText.vinCheck)}</a>
          <a href="#services">{t(navText.services)}</a>
          <a href="#contact">{t(navText.contact)}</a>
        </nav>
        <div className="language-switcher" role="group" aria-label="Language selector">
          <button
            type="button"
            className={`lang-btn ${language === 'am' ? 'active' : ''}`}
            onClick={() => setLanguage('am')}
            aria-pressed={language === 'am'}
          >
            AM
          </button>
          <span>|</span>
          <button
            type="button"
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}

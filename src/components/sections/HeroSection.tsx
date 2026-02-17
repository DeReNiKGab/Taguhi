import type { UiText, TranslateFn } from '../../types/site'

type HeroSectionProps = {
  t: TranslateFn
  heroText: UiText['hero']
  videoSrc: string
}

export function HeroSection({ t, heroText, videoSrc }: HeroSectionProps) {
  return (
    <section className="hero section" aria-label="Hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=2000&q=80"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="shape-grid" aria-hidden="true" />

      <div className="container hero-content reveal">
        <p className="kicker">{t(heroText.kicker)}</p>
        <div className="hero-title-wrap">
          <h1>GT AUTO GALLERY</h1>
        </div>
        <p className="subtitle">{t(heroText.subtitle)}</p>
        <div className="cta-row">
          <a href="#inventory" className="btn btn-outline">
            {t(heroText.ctaInventory)}
          </a>
          <a href="#contact" className="btn btn-amber">
            {t(heroText.ctaConsult)}
          </a>
        </div>
        <ul className="trust-bullets">
          {heroText.bullets.map((bullet) => (
            <li key={bullet.en}>{t(bullet)}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

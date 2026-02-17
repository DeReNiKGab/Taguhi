import type { TranslateFn, TrustPillar } from '../../types/site'

type TrustSectionProps = {
  pillars: TrustPillar[]
  t: TranslateFn
}

export function TrustSection({ pillars, t }: TrustSectionProps) {
  return (
    <section className="trust-strip section-xs" id="about">
      <div className="container trust-grid">
        {pillars.map((pillar) => (
          <article className="trust-card reveal" key={pillar.title.en}>
            <span className="icon-badge" aria-hidden="true">
              {pillar.icon}
            </span>
            <h3>{t(pillar.title)}</h3>
            <p>{t(pillar.text)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

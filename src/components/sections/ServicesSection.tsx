import type { Service, TranslateFn, UiText } from '../../types/site'

type ServicesSectionProps = {
  t: TranslateFn
  servicesText: UiText['services']
  services: Service[]
}

export function ServicesSection({ t, servicesText, services }: ServicesSectionProps) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading reveal">
          <p className="kicker">{t(servicesText.kicker)}</p>
          <h2>{t(servicesText.title)}</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title.en}>
              <h3>{t(service.title)}</h3>
              <p>{t(service.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

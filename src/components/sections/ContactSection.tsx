import type { FormEvent } from 'react'
import type { TranslateFn, UiText } from '../../types/site'

type ContactSectionProps = {
  t: TranslateFn
  contactText: UiText['contact']
  toast: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function ContactSection({ t, contactText, toast, onSubmit }: ContactSectionProps) {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-overlay" aria-hidden="true" />
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <p className="kicker">{t(contactText.kicker)}</p>
          <h2>{t(contactText.title)}</h2>
          <p>{t(contactText.description)}</p>

          <div className="contact-cards">
            <article className="glass-card">
              <h3>{t(contactText.callUs)}</h3>
              <a href="tel:+37477203380">+374 77 20 33 80</a>
            </article>
            <article className="glass-card">
              <h3>{t(contactText.emailUs)}</h3>
              <a href="mailto:info.gtautogallery@gmail.com">info.gtautogallery@gmail.com</a>
            </article>
          </div>
        </div>

        <form className="lead-form reveal" onSubmit={onSubmit}>
          <h3>{t(contactText.formTitle)}</h3>
          <label htmlFor="name">{t(contactText.name)}</label>
          <input id="name" name="name" type="text" required placeholder={t(contactText.namePlaceholder)} />

          <label htmlFor="phone">{t(contactText.phone)}</label>
          <input id="phone" name="phone" type="tel" required placeholder="+374" />

          <label htmlFor="car">{t(contactText.desiredCar)}</label>
          <input id="car" name="car" type="text" required placeholder={t(contactText.carPlaceholder)} />

          <label htmlFor="budget">{t(contactText.budget)}</label>
          <input id="budget" name="budget" type="text" required placeholder={t(contactText.budgetPlaceholder)} />

          <button type="submit" className="btn btn-amber full-width">
            {t(contactText.submit)}
          </button>
          <p className="urgency">{t(contactText.urgency)}</p>
        </form>
      </div>
      <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
        {t(contactText.submitted)}
      </div>
    </section>
  )
}

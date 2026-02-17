import type { Testimonial, TranslateFn, UiText } from '../../types/site'

type TestimonialsSectionProps = {
  t: TranslateFn
  testimonialsText: UiText['testimonials']
  testimonials: Testimonial[]
}

export function TestimonialsSection({
  t,
  testimonialsText,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="kicker">{t(testimonialsText.kicker)}</p>
          <h2>{t(testimonialsText.title)}</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <blockquote className="testimonial-card reveal" key={testimonial.name}>
              <p>{t(testimonial.quote)}</p>
              <cite>{testimonial.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

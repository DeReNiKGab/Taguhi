import type { Step, TranslateFn, UiText } from '../../types/site'

type TimelineSectionProps = {
  t: TranslateFn
  timelineText: UiText['timeline']
  steps: Step[]
}

export function TimelineSection({ t, timelineText, steps }: TimelineSectionProps) {
  return (
    <section className="section timeline-section" id="blog">
      <div className="container">
        <div className="section-heading reveal">
          <p className="kicker">{t(timelineText.kicker)}</p>
          <h2>{t(timelineText.title)}</h2>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <article className="timeline-step reveal" key={step.title.en}>
              <span className="step-number">0{index + 1}</span>
              <h3>{t(step.title)}</h3>
              <p>{t(step.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

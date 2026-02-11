import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type InventoryItem = {
  name: string
  year: number
  mileage: string
  source: string
  price: string
  image: string
}

const trustPillars = [
  {
    title: 'Direct Auction Access',
    text: 'Copart and IAAI sourcing with transparent bid strategy.',
    icon: 'CA',
  },
  {
    title: 'VIN Verification',
    text: 'Every lot checked with full damage and ownership history.',
    icon: 'VH',
  },
  {
    title: 'Door-to-Door Logistics',
    text: 'Shipping, customs, and inland delivery handled in one flow.',
    icon: 'DL',
  },
  {
    title: 'Trusted Advisors',
    text: 'Dedicated team from shortlist to registration handoff.',
    icon: 'TA',
  },
]

const inventory: InventoryItem[] = [
  {
    name: 'BMW M5 Competition',
    year: 2022,
    mileage: '18,300 km',
    source: 'Copart',
    price: '$76,900',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Mercedes-Benz G63 AMG',
    year: 2021,
    mileage: '24,100 km',
    source: 'IAAI',
    price: '$134,500',
    image:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Porsche 911 Carrera S',
    year: 2020,
    mileage: '21,900 km',
    source: 'Copart',
    price: '$109,200',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Audi RS7 Sportback',
    year: 2023,
    mileage: '9,600 km',
    source: 'IAAI',
    price: '$98,300',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Range Rover Autobiography',
    year: 2022,
    mileage: '16,700 km',
    source: 'Copart',
    price: '$122,800',
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Lexus LX 600 F Sport',
    year: 2024,
    mileage: '6,400 km',
    source: 'IAAI',
    price: '$114,900',
    image:
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80',
  },
]

const steps = [
  {
    title: 'Consultation & Budgeting',
    text: 'We define your target model, trim, and bid ceiling in one call.',
  },
  {
    title: 'Auction Shortlist',
    text: 'Our analysts deliver curated Copart and IAAI lots with risk notes.',
  },
  {
    title: 'Secure Purchase & Shipping',
    text: 'We execute bidding, payment, and transport with live updates.',
  },
  {
    title: 'Customs to Registration',
    text: 'Final clearance, local compliance, and ready-to-drive delivery.',
  },
]

const testimonials = [
  {
    quote:
      'Fast process, full transparency, and exactly the spec I wanted. GT Auto Gallery handled everything cleanly.',
    name: 'Aram M.',
  },
  {
    quote:
      'Նրանց թիմը ամեն քայլում բացատրեց ռիսկերը ու ծախսերը։ Առանց անակնկալների ստացա մեքենաս։',
    name: 'Mariam S.',
  },
  {
    quote:
      'Premium service from first call to registration. I refer every serious buyer to GT Auto Gallery.',
    name: 'David H.',
  },
]

function App() {
  const [navSolid, setNavSolid] = useState(false)
  const [toast, setToast] = useState(false)

  const reduceMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')

    if (reduceMotion) {
      elements.forEach((element) => {
        element.classList.add('revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [reduceMotion])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setNavSolid(y > 20)

      if (reduceMotion) return

      const heroShift = y * 0.2
      const contactShift = Math.max(y - window.innerHeight * 3.2, 0) * 0.12

      document.documentElement.style.setProperty('--hero-parallax', `${heroShift}px`)
      document.documentElement.style.setProperty('--contact-parallax', `${contactShift}px`)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [reduceMotion])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setToast(true)
    window.setTimeout(() => setToast(false), 2500)
    event.currentTarget.reset()
  }

  return (
    <div className="site-shell" id="home">
      <header className={`top-nav ${navSolid ? 'solid' : ''}`}>
        <a className="brand" href="#home">
          GT AUTO GALLERY
        </a>
        <nav aria-label="Main Navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
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
            <source src="/GT.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="shape-grid" aria-hidden="true" />

          <div className="container hero-content reveal">
            <p className="kicker">Luxury Performance Import Experts</p>
            <h1>GT AUTO GALLERY</h1>
            <p className="subtitle">
              Premium Imports from Copart &amp; IAAI. Performance. Trust.
              Excellence.
            </p>
            <div className="cta-row">
              <a href="#inventory" className="btn btn-outline">
                Browse Inventory
              </a>
              <a href="#contact" className="btn btn-amber">
                Get Consultation
              </a>
            </div>
            <ul className="trust-bullets">
              <li>Direct Copart &amp; IAAI access</li>
              <li>Verified history and condition reports</li>
              <li>Full import and registration support</li>
            </ul>
          </div>
        </section>

        <section className="trust-strip section-xs" id="about">
          <div className="container trust-grid">
            {trustPillars.map((pillar) => (
              <article className="trust-card reveal" key={pillar.title}>
                <span className="icon-badge" aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="inventory">
          <div className="container">
            <div className="section-heading reveal">
              <p className="kicker">Featured Units</p>
              <h2>Featured Inventory</h2>
            </div>

            <div className="filter-bar reveal" aria-label="Inventory filters">
              <label>
                Brand
                <select defaultValue="Any Brand">
                  <option>Any Brand</option>
                  <option>BMW</option>
                  <option>Mercedes-Benz</option>
                  <option>Porsche</option>
                </select>
              </label>
              <label>
                Year
                <select defaultValue="Any Year">
                  <option>Any Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </label>
              <label>
                Budget
                <select defaultValue="Any Budget">
                  <option>Any Budget</option>
                  <option>Under $80k</option>
                  <option>$80k - $120k</option>
                  <option>$120k+</option>
                </select>
              </label>
              <label>
                Condition
                <select defaultValue="All Conditions">
                  <option>All Conditions</option>
                  <option>Like New</option>
                  <option>Minor Repair</option>
                  <option>Rebuild Ready</option>
                </select>
              </label>
            </div>

            <div className="inventory-grid">
              {inventory.map((car) => (
                <article className="car-card reveal" key={car.name}>
                  <div className="car-image-wrap">
                    <img src={car.image} alt={car.name} loading="lazy" />
                  </div>
                  <div className="car-info">
                    <h3>{car.name}</h3>
                    <p>
                      {car.year} • {car.mileage}
                    </p>
                    <p>Source: {car.source}</p>
                    <div className="card-footer">
                      <strong>{car.price}</strong>
                      <button type="button" className="text-link">
                        View Details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline-section" id="blog">
          <div className="container">
            <div className="section-heading reveal">
              <p className="kicker">How It Works</p>
              <h2>4 Steps to Your Next Car</h2>
            </div>

            <div className="timeline">
              {steps.map((step, index) => (
                <article className="timeline-step reveal" key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading reveal">
              <p className="kicker">Premium Support</p>
              <h2>Services</h2>
            </div>

            <div className="services-grid">
              <article className="service-card reveal">
                <h3>Auction Bidding</h3>
                <p>
                  Data-backed bidding strategy to secure high-value lots without
                  overspending.
                </p>
              </article>
              <article className="service-card reveal">
                <h3>Shipping</h3>
                <p>
                  Consolidated transport with insured logistics across every leg.
                </p>
              </article>
              <article className="service-card reveal">
                <h3>Customs</h3>
                <p>
                  Accurate import documentation and customs processing support.
                </p>
              </article>
              <article className="service-card reveal">
                <h3>Registration Support</h3>
                <p>
                  End-to-end local compliance so your vehicle is road-ready fast.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section testimonials-section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="kicker">Client Feedback</p>
              <h2>Testimonials</h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <blockquote className="testimonial-card reveal" key={testimonial.name}>
                  <p>{testimonial.quote}</p>
                  <cite>{testimonial.name}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-overlay" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="contact-info reveal">
              <p className="kicker">Contact</p>
              <h2>Start Your Import Today</h2>
              <p>
                Limited auction windows and high-demand inventory move quickly.
                Talk to our team now.
              </p>

              <div className="contact-cards">
                <article className="glass-card">
                  <h3>Phone</h3>
                  <a href="tel:+37477203380">+374 77 20 33 80</a>
                </article>
                <article className="glass-card">
                  <h3>Email</h3>
                  <a href="mailto:info.gtautogallery@gmail.com">
                    info.gtautogallery@gmail.com
                  </a>
                </article>
              </div>
            </div>

            <form className="lead-form reveal" onSubmit={handleSubmit}>
              <h3>Get Consultation</h3>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />

              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" required placeholder="+374" />

              <label htmlFor="car">Desired Car</label>
              <input id="car" name="car" type="text" required placeholder="Model and year" />

              <label htmlFor="budget">Budget</label>
              <input id="budget" name="budget" type="text" required placeholder="USD" />

              <button type="submit" className="btn btn-amber full-width">
                Get Your Car Now
              </button>
              <p className="urgency">Limited auction windows - act fast.</p>
            </form>
          </div>
          <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
            Submitted
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

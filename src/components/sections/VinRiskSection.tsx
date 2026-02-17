import { useState } from 'react'
import type { FormEvent } from 'react'
import type { TranslateFn, UiText } from '../../types/site'

type VinRiskSectionProps = {
  t: TranslateFn
  vinRiskText: UiText['vinRisk']
}

type VinDecodeApiResult = {
  Make?: string
  Model?: string
  ModelYear?: string
  VehicleType?: string
  BodyClass?: string
  EngineModel?: string
  EngineCylinders?: string
  DriveType?: string
  FuelTypePrimary?: string
  PlantCountry?: string
}

const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/i

export function VinRiskSection({ t, vinRiskText }: VinRiskSectionProps) {
  const [vin, setVin] = useState('')
  const [modelYear, setModelYear] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<VinDecodeApiResult | null>(null)

  const isEmptyValue = (value?: string) => {
    if (!value) return true
    const normalized = value.trim().toLowerCase()
    return normalized === '' || normalized === 'not applicable' || normalized === '0'
  }

  const displayValue = (value?: string) =>
    isEmptyValue(value) ? t(vinRiskText.notAvailable) : value!.trim()

  const handleDecodeVin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedVin = vin.trim().toUpperCase()
    if (!VIN_PATTERN.test(normalizedVin)) {
      setError(t(vinRiskText.invalidVin))
      setResult(null)
      return
    }

    setError(null)
    setIsLoading(true)

    try {
      const params = new URLSearchParams({ format: 'json' })
      if (modelYear.trim()) {
        params.set('modelyear', modelYear.trim())
      }

      const endpoint = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${encodeURIComponent(normalizedVin)}?${params.toString()}`
      const response = await fetch(endpoint)

      if (!response.ok) {
        throw new Error('VIN decode request failed')
      }

      const payload = (await response.json()) as { Results?: VinDecodeApiResult[] }
      const decoded = payload.Results?.[0]

      if (!decoded) {
        setError(t(vinRiskText.noResult))
        setResult(null)
        return
      }

      const hasUsefulData =
        !isEmptyValue(decoded.Make) ||
        !isEmptyValue(decoded.Model) ||
        !isEmptyValue(decoded.ModelYear) ||
        !isEmptyValue(decoded.VehicleType) ||
        !isEmptyValue(decoded.BodyClass)

      if (!hasUsefulData) {
        setError(t(vinRiskText.noResult))
        setResult(null)
        return
      }

      setResult(decoded)
    } catch {
      setError(t(vinRiskText.apiError))
      setResult(null)
    } finally {
      setIsLoading(false)
    }
  }

  const engineDetails = () => {
    const parts: string[] = []
    if (!isEmptyValue(result?.EngineModel)) {
      parts.push(result!.EngineModel!.trim())
    }
    if (!isEmptyValue(result?.EngineCylinders)) {
      parts.push(`${result!.EngineCylinders!.trim()} cyl`)
    }
    return parts.length > 0 ? parts.join(', ') : t(vinRiskText.notAvailable)
  }

  return (
    <section className="section vin-risk-section" id="vin-risk-check">
      <div className="container">
        <div className="section-heading reveal">
          <p className="kicker">{t(vinRiskText.kicker)}</p>
          <h2>{t(vinRiskText.title)}</h2>
          <p className="vin-subtitle">{t(vinRiskText.subtitle)}</p>
        </div>

        <div className="vin-grid">
          <article className="vin-card reveal">
            <h3>{t(vinRiskText.freeTitle)}</h3>
            <p>{t(vinRiskText.freeDescription)}</p>
          </article>

          <article className="vin-card vin-card-paid reveal">
            <h3>{t(vinRiskText.paidTitle)}</h3>
            <p>{t(vinRiskText.paidDescription)}</p>
            <p className="vin-turnaround">{t(vinRiskText.turnaround)}</p>
            <h4>{t(vinRiskText.includesTitle)}</h4>
            <ul className="vin-features">
              {vinRiskText.features.map((feature) => (
                <li key={feature.en}>{t(feature)}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-amber">
              {t(vinRiskText.cta)}
            </a>
          </article>
        </div>

        <article className="vin-check-panel reveal">
          <h3>{t(vinRiskText.checkButton)}</h3>
          <p>{t(vinRiskText.freeDescription)}</p>

          <form className="vin-form" onSubmit={handleDecodeVin}>
            <div className="vin-input-grid">
              <label htmlFor="free-vin-input">{t(vinRiskText.vinLabel)}</label>
              <input
                id="free-vin-input"
                type="text"
                value={vin}
                onChange={(event) => setVin(event.target.value.toUpperCase())}
                placeholder={t(vinRiskText.vinPlaceholder)}
                maxLength={17}
                required
              />
            </div>

            <div className="vin-input-grid">
              <label htmlFor="free-vin-model-year">
                {t(vinRiskText.modelYearLabel)}
              </label>
              <input
                id="free-vin-model-year"
                type="text"
                value={modelYear}
                onChange={(event) =>
                  setModelYear(event.target.value.replace(/\D/g, '').slice(0, 4))
                }
                placeholder={t(vinRiskText.modelYearPlaceholder)}
                inputMode="numeric"
                maxLength={4}
              />
            </div>

            <button type="submit" className="btn btn-outline" disabled={isLoading}>
              {isLoading ? t(vinRiskText.checkingButton) : t(vinRiskText.checkButton)}
            </button>
          </form>

          {error ? <p className="vin-error">{error}</p> : null}

          {result ? (
            <div className="vin-result-box">
              <h4>{t(vinRiskText.resultTitle)}</h4>
              <dl className="vin-result-grid">
                <div>
                  <dt>{t(vinRiskText.resultLabels.make)}</dt>
                  <dd>{displayValue(result.Make)}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.model)}</dt>
                  <dd>{displayValue(result.Model)}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.modelYear)}</dt>
                  <dd>{displayValue(result.ModelYear)}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.vehicleType)}</dt>
                  <dd>{displayValue(result.VehicleType)}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.bodyClass)}</dt>
                  <dd>{displayValue(result.BodyClass)}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.engine)}</dt>
                  <dd>{engineDetails()}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.driveType)}</dt>
                  <dd>{displayValue(result.DriveType)}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.fuelType)}</dt>
                  <dd>{displayValue(result.FuelTypePrimary)}</dd>
                </div>
                <div>
                  <dt>{t(vinRiskText.resultLabels.plantCountry)}</dt>
                  <dd>{displayValue(result.PlantCountry)}</dd>
                </div>
              </dl>
              <p className="vin-source">{t(vinRiskText.sourceLabel)}</p>
            </div>
          ) : null}
        </article>
      </div>
    </section>
  )
}

export type Language = 'en' | 'am'

export type Localized = {
  en: string
  am: string
}

export type TranslateFn = (value: Localized) => string

export type InventoryItem = {
  name: string
  year: number
  mileage: string
  source: string
  price: string
  image: string
}

export type TrustPillar = {
  icon: string
  title: Localized
  text: Localized
}

export type Step = {
  title: Localized
  text: Localized
}

export type Service = {
  title: Localized
  text: Localized
}

export type Testimonial = {
  quote: Localized
  name: string
}

export type UiText = {
  nav: {
    home: Localized
    about: Localized
    blog: Localized
    vinCheck: Localized
    services: Localized
    contact: Localized
  }
  hero: {
    kicker: Localized
    subtitle: Localized
    ctaInventory: Localized
    ctaConsult: Localized
    bullets: Localized[]
  }
  inventory: {
    kicker: Localized
    title: Localized
    brand: Localized
    year: Localized
    budget: Localized
    condition: Localized
    anyBrand: Localized
    anyYear: Localized
    anyBudget: Localized
    allConditions: Localized
    likeNew: Localized
    minorRepair: Localized
    rebuildReady: Localized
    under80: Localized
    between80And120: Localized
    over120: Localized
    source: Localized
    viewDetails: Localized
  }
  timeline: {
    kicker: Localized
    title: Localized
  }
  vinRisk: {
    kicker: Localized
    title: Localized
    subtitle: Localized
    freeTitle: Localized
    freeDescription: Localized
    vinLabel: Localized
    vinPlaceholder: Localized
    modelYearLabel: Localized
    modelYearPlaceholder: Localized
    checkButton: Localized
    checkingButton: Localized
    invalidVin: Localized
    apiError: Localized
    noResult: Localized
    resultTitle: Localized
    sourceLabel: Localized
    notAvailable: Localized
    resultLabels: {
      make: Localized
      model: Localized
      modelYear: Localized
      vehicleType: Localized
      bodyClass: Localized
      engine: Localized
      driveType: Localized
      fuelType: Localized
      plantCountry: Localized
    }
    paidTitle: Localized
    paidDescription: Localized
    turnaround: Localized
    includesTitle: Localized
    features: Localized[]
    cta: Localized
  }
  services: {
    kicker: Localized
    title: Localized
  }
  testimonials: {
    kicker: Localized
    title: Localized
  }
  contact: {
    kicker: Localized
    title: Localized
    description: Localized
    callUs: Localized
    emailUs: Localized
    formTitle: Localized
    name: Localized
    phone: Localized
    desiredCar: Localized
    budget: Localized
    namePlaceholder: Localized
    carPlaceholder: Localized
    budgetPlaceholder: Localized
    submit: Localized
    urgency: Localized
    submitted: Localized
  }
}

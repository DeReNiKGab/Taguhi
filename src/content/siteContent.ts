import type {
  InventoryItem,
  Service,
  Step,
  Testimonial,
  TrustPillar,
  UiText,
} from '../types/site'

export const uiText: UiText = {
  nav: {
    home: { en: 'Home', am: 'Գլխավոր' },
    about: { en: 'About', am: 'Մեր մասին' },
    blog: { en: 'Blog', am: 'Բլոգ' },
    vinCheck: { en: 'VIN Check', am: 'VIN ստուգում' },
    services: { en: 'Services', am: 'Ծառայություններ' },
    contact: { en: 'Contact', am: 'Կապ' },
  },
  hero: {
    kicker: {
      en: 'Premium Auto Import Specialists',
      am: 'Պրեմիում ավտո ներմուծման մասնագետներ',
    },
    subtitle: {
      en: 'We source, verify and deliver cars from Copart & IAAI auctions with full transparency and support.',
      am: 'Մենք գտնում, ստուգում և հասցնում ենք մեքենաներ Copart և IAAI աճուրդներից՝ լիարժեք թափանցիկությամբ և աջակցությամբ։',
    },
    ctaInventory: { en: 'View Available Cars', am: 'Դիտել մեքենաները' },
    ctaConsult: {
      en: 'Get Free Consultation',
      am: 'Ստանալ անվճար խորհրդատվություն',
    },
    bullets: [
      {
        en: 'Direct access to official auctions',
        am: 'Ուղիղ մուտք պաշտոնական աճուրդներին',
      },
      {
        en: 'Full vehicle history & damage analysis',
        am: 'Մեքենայի ամբողջական պատմության և վնասների վերլուծություն',
      },
      {
        en: 'End-to-end delivery to Armenia',
        am: 'Լիարժեք առաքում մինչև Հայաստան',
      },
    ],
  },
  inventory: {
    kicker: { en: 'Featured Units', am: 'Առանձնացված մեքենաներ' },
    title: { en: 'Featured Inventory', am: 'Առկա մեքենաներ' },
    brand: { en: 'Brand', am: 'Բրենդ' },
    year: { en: 'Year', am: 'Տարի' },
    budget: { en: 'Budget', am: 'Բյուջե' },
    condition: { en: 'Condition', am: 'Վիճակ' },
    anyBrand: { en: 'Any Brand', am: 'Ցանկացած բրենդ' },
    anyYear: { en: 'Any Year', am: 'Ցանկացած տարի' },
    anyBudget: { en: 'Any Budget', am: 'Ցանկացած բյուջե' },
    allConditions: { en: 'All Conditions', am: 'Բոլոր վիճակները' },
    likeNew: { en: 'Like New', am: 'Գերազանց' },
    minorRepair: { en: 'Minor Repair', am: 'Փոքր վերանորոգում' },
    rebuildReady: { en: 'Rebuild Ready', am: 'Վերականգնման համար' },
    under80: { en: 'Under $80k', am: 'Մինչև $80k' },
    between80And120: { en: '$80k - $120k', am: '$80k - $120k' },
    over120: { en: '$120k+', am: '$120k+' },
    source: { en: 'Source', am: 'Աղբյուր' },
    viewDetails: { en: 'View Details', am: 'Մանրամասներ' },
  },
  timeline: {
    kicker: { en: 'How It Works', am: 'Ինչպես է աշխատում' },
    title: {
      en: '4 Steps to Your Next Car',
      am: '4 քայլ ձեր հաջորդ մեքենային',
    },
  },
  vinRisk: {
    kicker: { en: 'VIN Risk Check', am: 'VIN ռիսկի ստուգում' },
    title: {
      en: 'Check Before You Buy',
      am: 'Ստուգեք նախքան գնումը',
    },
    subtitle: {
      en: 'Use our import calculator for free. For a specific VIN check, we provide paid expert analysis.',
      am: 'Օգտվեք ներմուծման հաշվիչից անվճար։ Կոնկրետ VIN-ի ստուգման համար տրամադրում ենք վճարովի փորձագիտական վերլուծություն։',
    },
    freeTitle: {
      en: 'Import Calculator (Free)',
      am: 'Ներմուծման հաշվիչ (Անվճար)',
    },
    freeDescription: {
      en: 'Quickly estimate import expenses and compare options with no payment required.',
      am: 'Արագ հաշվարկեք ներմուծման ծախսերը և համեմատեք տարբերակները՝ առանց վճարման։',
    },
    vinLabel: {
      en: 'VIN Number',
      am: 'VIN համարը',
    },
    vinPlaceholder: {
      en: 'Enter 17-character VIN',
      am: 'Մուտքագրեք 17 նիշանոց VIN',
    },
    modelYearLabel: {
      en: 'Model Year (optional)',
      am: 'Արտադրության տարի (ոչ պարտադիր)',
    },
    modelYearPlaceholder: {
      en: 'e.g. 2020',
      am: 'օր. 2020',
    },
    checkButton: {
      en: 'Run Free VIN Check',
      am: 'Սկսել անվճար VIN ստուգում',
    },
    checkingButton: {
      en: 'Checking...',
      am: 'Ստուգվում է...',
    },
    invalidVin: {
      en: 'Please enter a valid 17-character VIN.',
      am: 'Խնդրում ենք մուտքագրել վավեր 17 նիշանոց VIN։',
    },
    apiError: {
      en: 'Unable to decode VIN right now. Please try again.',
      am: 'Այս պահին VIN-ը հնարավոր չէ ստուգել։ Խնդրում ենք փորձել կրկին։',
    },
    noResult: {
      en: 'No decoded data was found for this VIN.',
      am: 'Տվյալ VIN-ի համար վերծանված տվյալներ չեն գտնվել։',
    },
    resultTitle: {
      en: 'Free VIN Check Result',
      am: 'VIN անվճար ստուգման արդյունք',
    },
    sourceLabel: {
      en: 'Data source: NHTSA vPIC API',
      am: 'Տվյալների աղբյուր՝ NHTSA vPIC API',
    },
    notAvailable: {
      en: 'N/A',
      am: 'Չկա',
    },
    resultLabels: {
      make: { en: 'Make', am: 'Արտադրող' },
      model: { en: 'Model', am: 'Մոդել' },
      modelYear: { en: 'Model Year', am: 'Արտադրության տարի' },
      vehicleType: { en: 'Vehicle Type', am: 'Մեքենայի տիպ' },
      bodyClass: { en: 'Body Class', am: 'Թափքի տեսակ' },
      engine: { en: 'Engine', am: 'Շարժիչ' },
      driveType: { en: 'Drive Type', am: 'Քարշակի տեսակ' },
      fuelType: { en: 'Fuel Type', am: 'Վառելիքի տեսակ' },
      plantCountry: { en: 'Assembly Country', am: 'Արտադրման երկիր' },
    },
    paidTitle: {
      en: 'VIN Risk Check - 3,000 AMD',
      am: 'VIN ռիսկի ստուգում - 3,000 AMD',
    },
    paidDescription: {
      en: 'For one VIN, we run a deep check and deliver a detailed report.',
      am: 'Մեկ VIN-ի համար կատարում ենք խորքային ստուգում և տրամադրում մանրամասն հաշվետվություն։',
    },
    turnaround: {
      en: 'Delivery time: 1-2 hours after payment.',
      am: 'Տրամադրման ժամկետը՝ վճարումից հետո 1-2 ժամ։',
    },
    includesTitle: {
      en: 'What You Receive',
      am: 'Ինչ կստանաք',
    },
    features: [
      { en: 'Auction history', am: 'Աճուրդային պատմություն' },
      { en: 'Damage explanation', am: 'Վնասների բացատրություն' },
      { en: 'Estimated repair cost', am: 'Վերանորոգման մոտավոր արժեք' },
      {
        en: 'Final import cost to Armenia',
        am: 'Հայաստան ներմուծման վերջնական արժեք',
      },
      {
        en: 'Our expert recommendation (Worth it or Risky)',
        am: 'Փորձագետի գնահատում (Արժե / Ռիսկային է)',
      },
    ],
    cta: {
      en: 'Request VIN Check',
      am: 'Պատվիրել VIN ստուգում',
    },
  },
  services: {
    kicker: { en: 'Our Services', am: 'Մեր ծառայությունները' },
    title: { en: 'Services', am: 'Ծառայություններ' },
  },
  testimonials: {
    kicker: { en: 'Client Feedback', am: 'Հաճախորդների կարծիքներ' },
    title: { en: 'Testimonials', am: 'Կարծիքներ' },
  },
  contact: {
    kicker: { en: 'Contact', am: 'Կապ' },
    title: {
      en: 'Start Your Car Import Today',
      am: 'Սկսեք ձեր մեքենայի ներմուծումը այսօր',
    },
    description: {
      en: 'Auction opportunities change fast. Contact us now to secure the best option for you.',
      am: 'Աճուրդների հնարավորությունները արագ են փոխվում։ Կապվեք մեզ հետ հիմա՝ լավագույն տարբերակը ամրագրելու համար։',
    },
    callUs: { en: 'Call Us', am: 'Զանգահարեք' },
    emailUs: { en: 'Email Us', am: 'Գրեք մեզ' },
    formTitle: { en: 'Request Consultation', am: 'Պատվիրել խորհրդատվություն' },
    name: { en: 'Name', am: 'Անուն' },
    phone: { en: 'Phone', am: 'Հեռախոս' },
    desiredCar: { en: 'Desired Car', am: 'Ցանկալի մեքենա' },
    budget: { en: 'Budget', am: 'Բյուջե' },
    namePlaceholder: { en: 'Enter your name', am: 'Մուտքագրեք ձեր անունը' },
    carPlaceholder: {
      en: 'Desired car (model / year)',
      am: 'Ցանկալի մեքենա (մոդել / տարի)',
    },
    budgetPlaceholder: { en: 'Your budget', am: 'Ձեր բյուջեն' },
    submit: { en: 'Request Offer', am: 'Ստանալ առաջարկ' },
    urgency: {
      en: 'We will contact you shortly after submission.',
      am: 'Մենք կկապնվենք ձեզ հետ ուղարկելուց հետո։',
    },
    submitted: { en: 'Submitted', am: 'Ուղարկված է' },
  },
}

export const trustPillars: TrustPillar[] = [
  {
    title: {
      en: 'Direct Auction Access',
      am: 'Ուղիղ մուտք աճուրդներին',
    },
    text: {
      en: 'We work directly with Copart & IAAI auctions to secure the best deals.',
      am: 'Մենք աշխատում ենք անմիջապես Copart և IAAI աճուրդների հետ՝ լավագույն առաջարկները ստանալու համար։',
    },
    icon: 'CA',
  },
  {
    title: { en: 'VIN Verification', am: 'VIN ստուգում' },
    text: {
      en: 'Each vehicle is checked for accident history, damage, and ownership records.',
      am: 'Յուրաքանչյուր մեքենա ստուգվում է վթարների, վնասների և սեփականության ամբողջ պատմությամբ։',
    },
    icon: 'VH',
  },
  {
    title: { en: 'Door-to-Door Delivery', am: 'Դուռից-դուռ առաքում' },
    text: {
      en: 'We manage shipping, customs clearance, and delivery to your location.',
      am: 'Մենք կազմակերպում ենք առաքումը, մաքսազերծումը և հասցնում մեքենան ձեր նշած հասցեին։',
    },
    icon: 'DL',
  },
  {
    title: { en: 'Expert Support', am: 'Մասնագիտական աջակցություն' },
    text: {
      en: 'Our team supports you from selection to final registration.',
      am: 'Մեր թիմը աջակցում է ձեզ մեքենայի ընտրությունից մինչև վերջնական գրանցում։',
    },
    icon: 'TA',
  },
]

export const inventory: InventoryItem[] = [
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

export const steps: Step[] = [
  {
    title: { en: 'Consultation & Budget', am: 'Խորհրդատվություն և բյուջե' },
    text: {
      en: 'We discuss your preferred model and budget and calculate the estimated total cost.',
      am: 'Քննարկում ենք ձեր ուզած մոդելը և բյուջեն ու հաշվում մոտավոր ամբողջ արժեքը։',
    },
  },
  {
    title: { en: 'Shortlist & Selection', am: 'Տարբերակների ընտրություն' },
    text: {
      en: 'We send you the best auction options (Copart/IAAI) with risk notes and recommendations.',
      am: 'Ուղարկում ենք լավագույն աճուրդային տարբերակները (Copart/IAAI)՝ ռիսկերի նշումներով և խորհուրդներով։',
    },
  },
  {
    title: { en: 'Purchase & Shipping', am: 'Գնում և տեղափոխում' },
    text: {
      en: 'We bid, purchase, and organize shipping - you get updates at each stage.',
      am: 'Մասնակցում ենք bid-ին, գնում ենք մեքենան և կազմակերպում տեղափոխումը՝ ամեն փուլում տալով թարմացումներ։',
    },
  },
  {
    title: { en: 'Customs & Handoff', am: 'Մաքսազերծում և հանձնում' },
    text: {
      en: 'We handle customs clearance and paperwork and hand you the car ready to use.',
      am: 'Կազմակերպում ենք մաքսազերծումն ու փաստաթղթերը և հանձնում մեքենան պատրաստ օգտագործման։',
    },
  },
]

export const services: Service[] = [
  {
    title: { en: 'Auction Bidding', am: 'Աճուրդի մասնակցություն' },
    text: {
      en: 'We analyze lots and bid strategically to win the best vehicles at the right price.',
      am: 'Մենք վերլուծում ենք լոթերը և bid անում ճիշտ ռազմավարությամբ՝ լավագույն մեքենաները շահելու համար։',
    },
  },
  {
    title: { en: 'Shipping & Delivery', am: 'Առաքում և տեղափոխում' },
    text: {
      en: 'We organize safe and insured transportation from auction to Armenia.',
      am: 'Կազմակերպում ենք անվտանգ և ապահովագրված տեղափոխում աճուրդից մինչև Հայաստան։',
    },
  },
  {
    title: { en: 'Customs Clearance', am: 'Մաքսազերծում' },
    text: {
      en: 'We handle all customs paperwork and import procedures for you.',
      am: 'Մենք կազմակերպում ենք բոլոր մաքսային փաստաթղթերն ու ներմուծման գործընթացը ձեր փոխարեն։',
    },
  },
  {
    title: { en: 'Registration Assistance', am: 'Գրանցման աջակցություն' },
    text: {
      en: 'We complete local registration so your car is ready to drive.',
      am: 'Կազմակերպում ենք տեղական գրանցումը, որպեսզի մեքենան պատրաստ լինի շահագործման։',
    },
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: 'Fast process, full transparency, and exactly the spec I wanted. GT Auto Gallery handled everything cleanly.',
      am: 'Արագ գործընթաց, լիարժեք թափանցիկություն, և հենց այն մեքենան, ինչ ուզում էի։ GT Auto Gallery-ը ամեն ինչ կազմակերպեց հստակ։',
    },
    name: 'Aram M.',
  },
  {
    quote: {
      en: 'Their team explained every risk and cost step-by-step. I got my car with no surprises.',
      am: 'Նրանց թիմը ամեն քայլում բացատրեց ռիսկերը ու ծախսերը։ Առանց անակնկալների ստացա մեքենաս։',
    },
    name: 'Mariam S.',
  },
  {
    quote: {
      en: 'Premium service from first call to registration. I refer every serious buyer to GT Auto Gallery.',
      am: 'Պրեմիում սպասարկում առաջին զանգից մինչև գրանցում։ Յուրաքանչյուր լուրջ գնորդի խորհուրդ եմ տալիս GT Auto Gallery։',
    },
    name: 'David H.',
  },
]

export type LandingLanguage = 'en' | 'pt'

export type LandingCopy = {
  languageName: string
  nav: readonly string[]
  cta: string
  secondaryCta: string
  hero: {
    eyebrow: string
    title: string
    accent: string
    description: string
    stats: readonly {
      value: string
      label: string
    }[]
  }
  mission: {
    eyebrow: string
    title: string
    body: string
  }
  platform: {
    eyebrow: string
    title: string
    body: string
    features: readonly {
      title: string
      description: string
    }[]
    flowTitle: string
    flowSteps: readonly {
      step: string
      title: string
      description: string
    }[]
  }
  useCases: {
    eyebrow: string
    title: string
    body: string
    items: readonly {
      icon: string
      type: string
      name: string
      description: string
      tags: readonly string[]
    }[]
  }
  howItWorks: {
    eyebrow: string
    title: string
    body: string
    steps: readonly {
      number: string
      title: string
      description: string
      pill: string
    }[]
  }
  pricing: {
    eyebrow: string
    title: string
    intro: string
    note: string
    calculatorTitle: string
    countryLabel: string
    amountLabel: string
    beneficiariesLabel: string
    averageLabel: string
    estimatedFeeLabel: string
    totalDisbursedLabel: string
    beneficiariesResultLabel: string
    processingRateLabel: string
    platformFeeLabel: string
    quoteCta: string
    footnote: string
    tiers: readonly {
      badge: string
      name: string
      range: string[]
      fee: string
      description: string
      includes: readonly string[]
      cta: string
    }[]
    calculatorNotes: readonly string[]
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    blocks: readonly {
      label: string
      value: string
      href: string
    }[]
    form: {
      name: string
      email: string
      organization: string
      organizationType: string
      message: string
      submit: string
      options: readonly string[]
    }
  }
  footerGroups: readonly {
    title: string
    links: readonly (readonly [string, string])[]
  }[]
  footerText: string
}

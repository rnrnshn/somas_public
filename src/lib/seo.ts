export const siteSeo = {
  name: 'SOMAS',
  title: 'SOMAS | Social Mass Payments & Savings Platform',
  description:
    'SOMAS helps governments, NGOs, and implementation partners manage social payment campaigns, beneficiaries, savings, field verification, and audit-ready reporting.',
  image: '/logo512.png',
  locale: 'en_US',
  themeColor: '#2c5f4f',
}

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SOMAS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: ['en', 'pt'],
  description: siteSeo.description,
  featureList: [
    'Campaign management',
    'Beneficiary management',
    'Mass disbursement monitoring',
    'Savings program tracking',
    'Field verification workflows',
    'Audit and compliance records',
    'Multi-region reporting',
  ],
  audience: {
    '@type': 'Audience',
    audienceType:
      'Governments, NGOs, implementation partners, and social protection program teams',
  },
}

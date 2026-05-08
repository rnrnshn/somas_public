import type { LandingCopy } from './landing-copy-types'

export const landingCopyEn: LandingCopy = {
  languageName: 'English',
  nav: ['Mission', 'Platform', 'Use Cases', 'Pricing', 'Contact'],
  cta: 'Request a Demo',
  secondaryCta: 'See How It Works',
  hero: {
    eyebrow: 'Intelligent Mass Disbursement',
    title: 'Cash where it matters,',
    accent: 'instantly.',
    description:
      'SOMAS is the operating layer for governments, NGOs, and institutions that need to disburse funds at scale with full traceability, real-time monitoring, and zero dependency on a single payment provider.',
    stats: [
      { value: '$20M+', label: 'Disbursed in Mozambique' },
      { value: '32,000+', label: 'Beneficiaries Reached' },
      { value: '95%+', label: 'Delivery Success Rate' },
      { value: '5', label: 'Programs Implemented' },
    ],
  },
  mission: {
    eyebrow: 'Our Mission',
    title: 'Deliver cash with speed, trust, and dignity.',
    body:
      "The challenge in social transfers is no longer raising funds. It's delivering them reliably to the last mile. SOMAS exists to close that gap with a national-scale, software-driven financial delivery system that is automated, inclusive, and fully auditable.",
  },
  platform: {
    eyebrow: 'The Platform',
    title: 'What is SOMAS?',
    body:
      'A unified backoffice platform that connects beneficiary management, campaign operations, mass disbursements, field verification, and compliance reporting into one controlled workflow.',
    features: [
      {
        title: 'Campaign Management',
        description:
          'Plan, segment, and monitor programs by region, payment channel, timeline, and beneficiary cohort.',
      },
      {
        title: 'Beneficiary Operations',
        description:
          'Maintain complete records including identification, wallet validation, disbursement history, and savings participation.',
      },
      {
        title: 'Mass Disbursements',
        description:
          'Bulk transfers via M-Pesa, e-Mola, and mKesh with real-time confirmation and fallback handling for failed transfers.',
      },
      {
        title: 'Field Verification',
        description:
          'Mobile-first workflows for field agents to search, confirm, and sync beneficiary data, even in low-connectivity areas.',
      },
      {
        title: 'Audit & Compliance',
        description:
          'Role-based permissions, activity logs, and transaction records built for donor-grade transparency.',
      },
    ],
    flowTitle: 'How a disbursement flows',
    flowSteps: [
      {
        step: '1',
        title: 'Onboarding',
        description: 'Beneficiaries registered and wallets pre-validated by field agents.',
      },
      {
        step: '2',
        title: 'Funding & Allocation',
        description: 'Program managers define amounts, frequency, and disbursement rules.',
      },
      {
        step: '3',
        title: 'Disbursement',
        description:
          'Bulk transfers executed via multi-wallet integration with real-time SMS confirmation.',
      },
      {
        step: '4',
        title: 'Tracking & Reporting',
        description:
          'Live dashboards track every metical from allocation to delivery and export reports for donors.',
      },
    ],
  },
  useCases: {
    eyebrow: 'Use Cases',
    title: 'Built for institutions delivering at scale.',
    body:
      'Whether you manage emergency cash programs, government social transfers, or corporate CSR disbursements, SOMAS adapts to your operational structure.',
    items: [
      {
        icon: '🌍',
        type: 'Sector',
        name: 'NGOs & Humanitarian Organizations',
        description:
          'Run emergency response programs, climate-shock transfers, and long-term development payments with full accountability to donors and stakeholders.',
        tags: ['Emergency Response', 'Climate Adaptation', 'Food Security'],
      },
      {
        icon: '🏛️',
        type: 'Sector',
        name: 'Governments & Public Programs',
        description:
          'Deliver social protection payments, agricultural subsidies, and youth employment stipends at national scale with full audit trails for compliance.',
        tags: ['Social Protection', 'Agricultural Support', 'Youth Programs'],
      },
      {
        icon: '🏢',
        type: 'Sector',
        name: 'Corporates & CSR Programs',
        description:
          'Execute community investment programs, employee benefits, and supplier payments with measurable impact reporting and transparent fund tracking.',
        tags: ['Community Investment', 'Supplier Payments', 'Impact Reporting'],
      },
    ],
  },
  howItWorks: {
    eyebrow: 'How It Works',
    title: 'One platform. Every step covered.',
    body:
      'SOMAS handles the full operational lifecycle from beneficiary onboarding to post-disbursement reporting within a single auditable system.',
    steps: [
      {
        number: '01',
        title: 'Register Beneficiaries',
        description:
          'Field agents onboard beneficiaries, capture ID and wallet data, and segment by program criteria online or offline.',
        pill: 'Field App',
      },
      {
        number: '02',
        title: 'Configure Campaigns',
        description:
          'Define disbursement amounts, frequency, eligible cohorts, and regional scope. Prepare bulk payment lists in minutes.',
        pill: 'Backoffice',
      },
      {
        number: '03',
        title: 'Execute Transfers',
        description:
          'Bulk disbursements go directly to M-Pesa, e-Mola, or mKesh wallets. Failed transfers are flagged instantly with fallback options.',
        pill: 'Multi-Wallet',
      },
      {
        number: '04',
        title: 'Monitor & Report',
        description:
          'Live dashboards track success rates, beneficiary reach, and fund traceability. Export audit-ready reports for donors at any time.',
        pill: 'Real-Time',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple, volume-based pricing.',
    intro:
      'A processing fee on the funds you disburse. No setup costs, no seat licenses, and no hidden charges. As your program scales, your rate goes down.',
    note:
      'The tier applied is determined by whichever threshold, total amount or total beneficiaries, is reached first within a disbursement cycle.',
    calculatorTitle: 'Fee Calculator',
    countryLabel: 'Select Country / Currency',
    amountLabel: 'Total Disbursement Amount',
    beneficiariesLabel: 'Number of Beneficiaries',
    averageLabel: 'Avg. Transfer per Beneficiary',
    estimatedFeeLabel: 'Estimated Platform Fee',
    totalDisbursedLabel: 'Total disbursed',
    beneficiariesResultLabel: 'Beneficiaries',
    processingRateLabel: 'Processing rate',
    platformFeeLabel: 'Platform fee',
    quoteCta: 'Get a Formal Quote',
    footnote:
      'Estimates are indicative and use approximate exchange rates versus USD. Tiers are assessed in USD-equivalent and each disbursement cycle is assessed independently. Contact us for annual volume arrangements.',
    tiers: [
      {
        badge: 'Starter',
        name: 'Entry Level',
        range: ['Up to $500,000 disbursed', 'Up to 5,000 beneficiaries'],
        fee: '12%',
        description: 'of total disbursed amount',
        includes: [
          'Full platform access for all user roles',
          'M-Pesa, e-Mola & mKesh integration',
          'Real-time transaction monitoring',
          'Field operations mobile app',
          'Audit logs & compliance records',
          'Technical support, under 24h resolution',
        ],
        cta: 'Get Started',
      },
      {
        badge: 'Most Common',
        name: 'Growth',
        range: ['$500K - $5M disbursed', '5,000 - 50,000 beneficiaries'],
        fee: '10%',
        description: 'of total disbursed amount',
        includes: [
          'Everything in Starter',
          'Multi-region campaign management',
          'Savings program tracking',
          'Donor-ready export reports',
          'Priority support queue',
          'Dedicated onboarding session',
        ],
        cta: 'Request a Demo',
      },
      {
        badge: 'Enterprise',
        name: 'National Scale',
        range: ['$5M+ disbursed', '50,000+ beneficiaries'],
        fee: '8%',
        description: 'of total disbursed amount',
        includes: [
          'Everything in Growth',
          'Annual volume pricing available',
          'Custom implementation support',
          'Advanced reporting workflows',
          'Operational design collaboration',
          'Dedicated account management',
        ],
        cta: 'Talk to the Team',
      },
    ],
    calculatorNotes: [
      'Starter tier - 12% fee applies.',
      'Growth tier - 10% fee applies.',
      'Enterprise tier - 8% fee applies.',
    ],
  },
  contact: {
    eyebrow: 'Get in Touch',
    title: 'Ready to scale your program?',
    body:
      "Whether you're planning your first cash transfer program or scaling an existing one, we'd like to understand your context and show you what SOMAS can do.",
    blocks: [
      { label: 'General Inquiries', value: 'info@somas.app', href: 'mailto:info@somas.app' },
      {
        label: 'Partnerships',
        value: 'partnerships@somas.app',
        href: 'mailto:partnerships@somas.app',
      },
      { label: 'Phone', value: '+258 846 239 715', href: 'tel:+258846239715' },
    ],
    form: {
      name: 'Your name',
      email: 'Work email',
      organization: 'Organization',
      organizationType: 'Organization type',
      message: 'Tell us about your program - size, geography, timeline...',
      submit: 'Send Message',
      options: [
        'NGO / Humanitarian',
        'Government / Public Sector',
        'Corporate / CSR',
        'Implementation Partner',
        'Other',
      ],
    },
  },
  footerGroups: [
    {
      title: 'About',
      links: [
        ['Mission', '#mission'],
        ['Platform', '#platform'],
      ],
    },
    {
      title: 'Use Cases',
      links: [
        ['Institutional sectors', '#use-cases'],
        ['How it works', '#how-it-works'],
      ],
    },
    {
      title: 'Commercial',
      links: [
        ['Pricing', '#pricing'],
        ['Request a demo', '#contact'],
      ],
    },
    {
      title: 'Contact',
      links: [
        ['Get in touch', '#contact'],
        ['Talk to the team', '#contact'],
      ],
    },
  ],
  footerText:
    'SOMAS is the operating layer for large-scale disbursement programs, connecting beneficiary operations, campaign execution, field verification, and audit-ready reporting for institutions, NGOs, and governments.',
}

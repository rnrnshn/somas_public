export type LandingLanguage = 'en' | 'pt'

export const landingCopy = {
  en: {
    languageName: 'English',
    topBanner: "We just shipped new features in Q1. See what's new",
    nav: ['Overview', 'How it works', 'Solution', 'Capabilities', 'Pricing', 'Contact'],
    cta: 'Request a demo',
    heroEyebrow: 'Social transfer infrastructure for institutions',
    heroTitle: ['Cash where it matters,', 'instantly.'],
    heroAccent: '',
    heroDescription:
      'SOMAS is the operating layer for governments, NGOs, and institutions that need to disburse funds at scale — with full traceability, real-time monitoring, and zero dependency on a single payment provider.',
    secondaryCta: 'See how it works',
    trustTitle:
      'Built for structured programs, multi-region operations, and accountable payment delivery.',
    metrics: ['$20M+', '32,000+', '95%+', '5'],
    metricLabels: ['Disbursed in Mozambique', 'Beneficiaries Reached', 'Delivery Success Rate', 'Programs Implemented'],
    mission: {
      eyebrow: 'Our Mission',
      title: 'Deliver cash with speed, trust, and dignity.',
      body: "The challenge in social transfers is no longer raising funds — it's delivering them reliably to the last mile. SOMAS exists to close that gap: a national-scale, software-driven financial delivery system that is automated, inclusive, and fully auditable.",
    },
    problem: {
      eyebrow: 'How It Works',
      title: 'One platform.',
      muted: 'Every step covered.',
      body: 'SOMAS handles the full operational lifecycle — from beneficiary onboarding to post-disbursement reporting — within a single auditable system.',
      cards: [
        { title: 'Register Beneficiaries', label: 'Field App', text: 'Field agents onboard beneficiaries, capture ID and wallet data, and segment by program criteria — online or offline.' },
        { title: 'Configure Campaigns', label: 'Backoffice', text: 'Define disbursement amounts, frequency, eligible cohorts, and regional scope. Prepare bulk payment lists in minutes.' },
        { title: 'Execute Transfers', label: 'Multi-Wallet', text: 'Bulk disbursements go directly to M-Pesa, e-Mola, or mKesh wallets. Failed transfers are flagged instantly with fallback options.' },
        { title: 'Monitor & Report', label: 'Real-Time', text: 'Live dashboards track success rates, beneficiary reach, and fund traceability. Export audit-ready reports for donors at any time.' },
      ],
    },
    solution: {
      eyebrow: 'The Platform',
      title: 'What is SOMAS?',
      body: 'A unified backoffice platform that connects beneficiary management, campaign operations, mass disbursements, field verification, and compliance reporting into one controlled workflow.',
      features: [
        ['Campaign Management', 'Plan, segment, and monitor programs by region, payment channel, timeline, and beneficiary cohort.'],
        ['Beneficiary Operations', 'Maintain complete records — identification, wallet validation, disbursement history, and savings participation.'],
        ['Mass Disbursements', 'Bulk transfers via M-Pesa, e-Mola, and mKesh — with real-time confirmation and fallback handling for failed transfers.'],
        ['Field Verification', 'Mobile-first workflows for field agents to search, confirm, and sync beneficiary data — even in low-connectivity areas.'],
        ['Audit & Compliance', 'Role-based permissions, activity logs, and transaction records — built for donor-grade transparency.'],
      ],
    },
    stacked: {
      eyebrow: 'Core Capabilities',
      title: 'Infrastructure for accountable social transfers',
      explore: 'Explore the suite',
      cards: [
        {
          pill: 'Multi-Tenant',
          headline: 'Designed for multiple organizations, programs, and regions.',
          body: 'SOMAS supports multi-tenant operations, allowing each institution or program owner to manage its own campaigns, beneficiaries, branding, metrics, and users within a separated operating environment.',
          links: ['Separate workspaces', 'Tenant-level dashboards', 'Specific users & permissions', 'Campaign isolation'],
        },
        {
          pill: 'Metrics',
          headline: 'Turn program activity into operational intelligence.',
          body: 'SOMAS gives teams a clear view of what is happening across campaigns, regions, beneficiaries, and payment flows.',
          links: ['Active campaigns', 'Successful & pending transactions', 'Savings participation', 'Field verification progress'],
        },
        {
          pill: 'Field Operations',
          headline: 'Field teams get the tools they need to verify beneficiaries faster.',
          body: 'The field operations experience is built for enumerators and inquirers working directly with communities. It keeps workflows focused, mobile-first, and practical for real operating conditions.',
          links: ['Search beneficiaries', 'Review profiles', 'Confirm presence', 'Sync activity'],
        },
        {
          pill: 'Scale Confidently',
          headline: 'For teams responsible for accountable social payments.',
          body: 'SOMAS is built for institutions and partners that need to deliver funds, monitor execution, and prove accountability across large beneficiary populations.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Use Cases',
      title: 'Built for institutions delivering at scale.',
      body: 'Whether you manage emergency cash programs, government social transfers, or corporate CSR disbursements, SOMAS adapts to your operational structure.',
      cta: 'Learn more',
      items: [
        {
          sector: 'NGOs & Humanitarian Organizations',
          description: 'Run emergency response programs, climate-shock transfers, and long-term development payments with full accountability to donors and stakeholders.',
          tags: ['Emergency Response', 'Climate Adaptation', 'Food Security'],
        },
        {
          sector: 'Governments & Public Programs',
          description: 'Deliver social protection payments, agricultural subsidies, and youth employment stipends at national scale with full audit trails for compliance.',
          tags: ['Social Protection', 'Agricultural Support', 'Youth Programs'],
        },
        {
          sector: 'Corporates & CSR Programs',
          description: 'Execute community investment programs, employee benefits, and supplier payments with measurable impact reporting and transparent fund tracking.',
          tags: ['Community Investment', 'Supplier Payments', 'Impact Reporting'],
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
      quoteCta: 'Get a formal quote',
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
            'M-Pesa, e-Mola and mKesh integration',
            'Real-time transaction monitoring',
            'Field operations mobile app',
            'Audit logs and compliance records',
            'Technical support, under 24h resolution',
          ],
          cta: 'Get started',
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
          cta: 'Request a demo',
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
          cta: 'Talk to the team',
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
      body: "Whether you're planning your first cash transfer program or scaling an existing one, we'd like to understand your context and show you what SOMAS can do.",
      general: 'General Inquiries',
      generalEmail: 'info@somas.app',
      partnerships: 'Partnerships',
      partnershipsEmail: 'partnerships@somas.app',
      phoneLabel: 'Phone',
      phone: '+258 846 239 715',
      form: {
        name: 'Your name',
        email: 'Work email',
        organization: 'Organization',
        orgType: 'Organization type',
        message: 'Tell us about your program — size, geography, timeline...',
        submit: 'Send Message',
      },
    },
    footerGroups: [
      {
        title: 'Platform',
        links: [
          ['Overview', '#overview'],
          ['How it works', '#how-it-works'],
          ['Solution', '#solution'],
          ['Pricing', '#pricing'],
        ],
      },
      {
        title: 'Capabilities',
        links: [
          ['Campaign management', '#capabilities'],
          ['Field operations', '#capabilities'],
          ['Savings programs', '#capabilities'],
        ],
      },
      {
        title: 'Trust',
        links: [
          ['Compliance', '#compliance'],
          ['Audit workflows', '#compliance'],
          ['Role governance', '#compliance'],
        ],
      },
      {
        title: 'Contact',
        links: [
          ['Request a demo', '#contact'],
          ['Talk to the team', '#contact'],
        ],
      },
    ],
    footerText:
      'SOMAS is a platform built for secure social transfers, providing infrastructure for large-scale beneficiary payments, field verification, and savings operations. SOMAS supports audit-ready workflows designed for institutions, NGOs, and governments.',
  },
  pt: {
    languageName: 'Português',
    topBanner: 'Lançámos novas funcionalidades no Q1. Veja as novidades',
    nav: ['Visão geral', 'Como funciona', 'Solução', 'Capacidades', 'Preçário', 'Contacto'],
    cta: 'Solicitar demonstração',
    heroEyebrow: 'Infraestrutura para transferências sociais institucionais',
    heroTitle: ['Gerencie pagamentos sociais,', 'beneficiários e poupança'],
    heroAccent: 'numa única plataforma segura.',
    heroDescription:
      'O SOMAS ajuda governos, ONGs e parceiros de implementação a executar programas de transferências sociais em larga escala com clareza operacional, monitoria em tempo real e controlos prontos para auditoria.',
    secondaryCta: 'Ver como funciona',
    trustTitle:
      'Criado para programas estruturados, operações multi-regionais e entrega responsável de pagamentos.',
    metrics: ['$20M+', '32.000+', '95%+', '5'],
    metricLabels: ['Desembolsado em Moçambique', 'Beneficiários Alcançados', 'Taxa de Sucesso de Entrega', 'Programas Implementados'],
    mission: {
      eyebrow: 'A Nossa Missão',
      title: 'Entregar dinheiro com velocidade, confiança e dignidade.',
      body: 'O desafio nas transferências sociais já não é angariar fundos — é entregá-los de forma fiável até ao último quilómetro. O SOMAS existe para fechar essa lacuna: um sistema nacional de entrega financeira baseado em software, automatizado, inclusivo e totalmente auditável.',
    },
    problem: {
      eyebrow: 'Como Funciona',
      title: 'Uma plataforma.',
      muted: 'Cada passo coberto.',
      body: 'O SOMAS gere todo o ciclo de vida operacional — desde o registo de beneficiários até aos relatórios pós-desembolso — num único sistema auditável.',
      cards: [
        { title: 'Registar Beneficiários', label: 'Aplicação de Campo', text: 'Agentes de campo registam beneficiários, capturam dados de identificação e carteira, e segmentam por critérios do programa — online ou offline.' },
        { title: 'Configurar Campanhas', label: 'Backoffice', text: 'Defina montantes de desembolso, frequência, grupos elegíveis e âmbito regional. Prepare listas de pagamento em massa em minutos.' },
        { title: 'Executar Transferências', label: 'Multi-Carteira', text: 'Desembolsos em massa vão diretamente para carteiras M-Pesa, e-Mola ou mKesh. Transferências falhadas são sinalizadas instantaneamente com opções de contingência.' },
        { title: 'Monitorizar e Reportar', label: 'Tempo Real', text: 'Dashboards em tempo real acompanham taxas de sucesso, alcance de beneficiários e rastreabilidade de fundos. Exporte relatórios prontos para auditoria para doadores a qualquer momento.' },
      ],
    },
    solution: {
      eyebrow: 'A Plataforma',
      title: 'O que é o SOMAS?',
      body: 'Uma plataforma de backoffice unificada que conecta a gestão de beneficiários, operações de campanha, desembolsos em massa, verificação em campo e relatórios de conformidade num fluxo de trabalho controlado.',
      features: [
        ['Gestão de Campanhas', 'Planeie, segmente e acompanhe programas por região, canal de pagamento, calendário e grupo de beneficiários.'],
        ['Operações com Beneficiários', 'Mantenha registos completos — identificação, validação de carteira, histórico de desembolsos e participação em poupança.'],
        ['Desembolsos em Massa', 'Transferências em massa via M-Pesa, e-Mola e mKesh — com confirmação em tempo real e gestão de contingência para transferências falhadas.'],
        ['Verificação em Campo', 'Fluxos mobile-first para agentes de campo pesquisarem, confirmarem e sincronizarem dados de beneficiários — mesmo em áreas de baixa conectividade.'],
        ['Auditoria e Conformidade', 'Permissões baseadas em funções, registos de atividade e registos de transações — construídos para transparência de nível de doador.'],
      ],
    },
    stacked: {
      eyebrow: 'Capacidades Principais',
      title: 'Infraestrutura para transferências sociais transparentes',
      explore: 'Explorar a plataforma',
      cards: [
        {
          pill: 'Multi-Tenant',
          headline: 'Preparado para múltiplas organizações, programas e regiões.',
          body: 'O SOMAS suporta operações multi-tenant, permitindo que cada instituição ou dono de programa gerencie as suas campanhas, beneficiários, identidade visual, métricas e utilizadores num ambiente operacional separado.',
          links: ['Ambientes separados', 'Dashboards por tenant', 'Utilizadores e permissões', 'Separação de campanhas'],
        },
        {
          pill: 'Métricas',
          headline: 'Transforme atividade programática em inteligência operacional.',
          body: 'O SOMAS oferece às equipas uma visão clara do que acontece entre campanhas, regiões, beneficiários e fluxos de pagamento.',
          links: ['Campanhas ativas', 'Transações bem-sucedidas e pendentes', 'Participação em poupança', 'Progresso da verificação em campo'],
        },
        {
          pill: 'Operações de Campo',
          headline: 'Equipas de campo têm as ferramentas certas para verificar beneficiários com mais rapidez.',
          body: 'A experiência de operações de campo é criada para inquiridores e agentes que trabalham diretamente com comunidades. Os fluxos são focados, mobile-first e práticos para condições reais de operação.',
          links: ['Pesquisar beneficiários', 'Consultar perfis', 'Confirmar presença', 'Sincronizar atividade'],
        },
        {
          pill: 'Escalar com Confiança',
          headline: 'Para equipas responsáveis por pagamentos sociais transparentes.',
          body: 'O SOMAS foi criado para instituições e parceiros que precisam entregar fundos, monitorar a execução e demonstrar responsabilidade perante grandes populações de beneficiários.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Casos de Uso',
      title: 'Construído para instituições que entregam em escala.',
      body: 'Quer gere programas de emergência, transferências sociais governamentais ou desembolsos de RSE corporativa, o SOMAS adapta-se à sua estrutura operacional.',
      cta: 'Saber mais',
      items: [
        {
          sector: 'ONGs e Organizações Humanitárias',
          description: 'Execute programas de resposta de emergência, transferências por choque climático e pagamentos de desenvolvimento de longo prazo com total responsabilidade perante doadores e partes interessadas.',
          tags: ['Resposta de Emergência', 'Adaptação Climática', 'Segurança Alimentar'],
        },
        {
          sector: 'Governos e Programas Públicos',
          description: 'Entregue pagamentos de proteção social, subsídios agrícolas e estipêndios de emprego juvenil em escala nacional com trilhas de auditoria completas para conformidade.',
          tags: ['Proteção Social', 'Apoio Agrícola', 'Programas Juvenis'],
        },
        {
          sector: 'Empresas e Programas de RSE',
          description: 'Execute programas de investimento comunitário, benefícios para funcionários e pagamentos a fornecedores com relatórios de impacto mensuráveis e rastreabilidade transparente de fundos.',
          tags: ['Investimento Comunitário', 'Pagamentos a Fornecedores', 'Relatórios de Impacto'],
        },
      ],
    },
    pricing: {
      eyebrow: 'Preçário',
      title: 'Preços simples, baseados em volume.',
      intro:
        'Uma taxa de processamento sobre os fundos desembolsados. Sem custos de configuração, sem licenças por utilizador e sem taxas escondidas. À medida que o programa cresce, a taxa diminui.',
      note:
        'O escalão aplicado é determinado pelo primeiro limite atingido dentro de um ciclo de desembolso: montante total ou número total de beneficiários.',
      calculatorTitle: 'Calculadora de Taxa',
      countryLabel: 'Selecione País / Moeda',
      amountLabel: 'Montante Total de Desembolso',
      beneficiariesLabel: 'Número de Beneficiários',
      averageLabel: 'Média por Beneficiário',
      estimatedFeeLabel: 'Taxa Estimada da Plataforma',
      totalDisbursedLabel: 'Total desembolsado',
      beneficiariesResultLabel: 'Beneficiários',
      processingRateLabel: 'Taxa de processamento',
      platformFeeLabel: 'Taxa da plataforma',
      quoteCta: 'Solicitar cotação formal',
      footnote:
        'As estimativas são indicativas e usam taxas de câmbio aproximadas face ao USD. Os escalões são avaliados em equivalente USD e cada ciclo de desembolso é analisado de forma independente. Contacte-nos para volumes anuais.',
      tiers: [
        {
          badge: 'Starter',
          name: 'Entrada',
          range: ['Até $500.000 desembolsados', 'Até 5.000 beneficiários'],
          fee: '12%',
          description: 'do montante total desembolsado',
          includes: [
            'Acesso completo à plataforma para todos os perfis',
            'Integração com M-Pesa, e-Mola e mKesh',
            'Monitoria transacional em tempo real',
            'Aplicação móvel para operações de campo',
            'Logs de auditoria e registos de conformidade',
            'Suporte técnico com resolução inferior a 24h',
          ],
          cta: 'Começar',
        },
        {
          badge: 'Mais Comum',
          name: 'Growth',
          range: ['$500K - $5M desembolsados', '5.000 - 50.000 beneficiários'],
          fee: '10%',
          description: 'do montante total desembolsado',
          includes: [
            'Tudo no Starter',
            'Gestão de campanhas multi-região',
            'Acompanhamento de programas de poupança',
            'Relatórios prontos para doadores',
            'Fila prioritária de suporte',
            'Sessão dedicada de onboarding',
          ],
          cta: 'Solicitar demonstração',
        },
        {
          badge: 'Enterprise',
          name: 'Escala Nacional',
          range: ['$5M+ desembolsados', '50.000+ beneficiários'],
          fee: '8%',
          description: 'do montante total desembolsado',
          includes: [
            'Tudo no Growth',
            'Preços anuais por volume disponíveis',
            'Suporte de implementação personalizado',
            'Fluxos avançados de reporting',
            'Colaboração no desenho operacional',
            'Gestão de conta dedicada',
          ],
          cta: 'Falar com a equipa',
        },
      ],
      calculatorNotes: [
        'Escalão Starter - aplica-se taxa de 12%.',
        'Escalão Growth - aplica-se taxa de 10%.',
        'Escalão Enterprise - aplica-se taxa de 8%.',
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Pronto para escalar o seu programa?',
      body: 'Quer esteja a planear o seu primeiro programa de transferência de dinheiro ou a escalar um existente, gostaríamos de compreender o seu contexto e mostrar-lhe o que o SOMAS pode fazer.',
      general: 'Contacto Geral',
      generalEmail: 'info@somas.app',
      partnerships: 'Parcerias',
      partnershipsEmail: 'partnerships@somas.app',
      phoneLabel: 'Telefone',
      phone: '+258 846 239 715',
      form: {
        name: 'O seu nome',
        email: 'Email profissional',
        organization: 'Organização',
        orgType: 'Tipo de organização',
        message: 'Conte-nos sobre o seu programa — dimensão, geografia, cronograma...',
        submit: 'Enviar Mensagem',
      },
    },
    footerGroups: [
      {
        title: 'Plataforma',
        links: [
          ['Visão geral', '#overview'],
          ['Como funciona', '#how-it-works'],
          ['Solução', '#solution'],
        ],
      },
      {
        title: 'Capacidades',
        links: [
          ['Gestão de campanhas', '#capabilities'],
          ['Operações de campo', '#capabilities'],
          ['Programas de poupança', '#capabilities'],
        ],
      },
      {
        title: 'Confiança',
        links: [
          ['Conformidade', '#compliance'],
          ['Fluxos de auditoria', '#compliance'],
          ['Gestão de permissões', '#compliance'],
        ],
      },
      {
        title: 'Contacto',
        links: [
          ['Solicitar demonstração', '#contact'],
          ['Falar com a equipa', '#contact'],
        ],
      },
    ],
    footerText:
      'O SOMAS é uma plataforma criada para transferências sociais seguras, oferecendo infraestrutura para pagamentos em larga escala a beneficiários, verificação em campo e operações de poupança. O SOMAS apoia fluxos prontos para auditoria desenhados para instituições, ONGs e governos.',
  },
} as const

export type LandingCopy = (typeof landingCopy)[LandingLanguage]

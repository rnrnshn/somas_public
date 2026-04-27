export type LandingLanguage = 'en' | 'pt'

export const landingCopy = {
  en: {
    languageName: 'English',
    topBanner: "We just shipped new features in Q1. See what's new",
    nav: ['Overview', 'Problem', 'Solution', 'Capabilities', 'Compliance'],
    cta: 'Request a demo',
    heroEyebrow: 'Social transfer infrastructure for institutions',
    heroTitle: ['Manage social payments,', 'beneficiaries, and savings'],
    heroAccent: 'in one secure platform.',
    heroDescription:
      'SOMAS helps governments, NGOs, and implementation partners run large-scale social transfer programs with operational clarity, real-time monitoring, and audit-ready controls.',
    secondaryCta: 'See how it works',
    trustTitle:
      'Built for structured programs, multi-region operations, and accountable payment delivery.',
    metrics: ['$ Millions', '1M+', '100+'],
    metricLabels: ['Total disbursed amount', 'Total beneficiaries', 'Active campaigns'],
    problem: {
      eyebrow: 'The Problem',
      title: 'Social payments need connected operations.',
      muted: 'Fragmented workflows slow delivery.',
      body: 'Large-scale transfer programs involve beneficiaries, campaigns, field teams, payment channels, regional reporting, and compliance requirements. SOMAS gives teams one connected operating layer for visibility, accountability, and speed.',
      cards: [
        'Beneficiary data becomes difficult to validate and update.',
        'Campaign progress is hard to monitor across regions.',
        'Payment exceptions are discovered too late.',
        'Field verification is disconnected from backoffice decisions.',
        'Audit evidence is scattered across multiple systems.',
      ],
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'SOMAS brings the full social transfer operation into one controlled workflow.',
      body: 'From campaign setup to payment monitoring, SOMAS gives teams a single operating layer for planning, executing, verifying, and reporting social payment programs.',
      features: [
        ['Campaign Management', 'Plan and monitor programs by region, payment channel, timeline, status, and beneficiary coverage.'],
        ['Beneficiary Operations', 'Maintain beneficiary records, campaign associations, verification status, disbursement history, and savings participation.'],
        ['Mass Disbursements', 'Track transactions from initiation to confirmation, including pending, successful, failed, and retried payments.'],
        ['Field Verification', 'Give field teams simple workflows to search, confirm, and verify beneficiaries on site.'],
        ['Savings Programs', 'Monitor savings participation, beneficiary savings totals, and campaign-level savings performance.'],
        ['Audit & Compliance', 'Keep a clear record of user activity, data changes, permissions, and operational events.'],
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
    compliance: {
      eyebrow: 'Compliance',
      title: 'Accountability is built into the workflow.',
      body: 'Social transfer operations require more than payment execution. They require evidence, control, and traceability. SOMAS supports audit-ready operations through role-based permissions, activity monitoring, transaction history, verification records, and system event logs.',
      cta: 'Learn more',
      items: [
        'Know who accessed or changed critical data.',
        'Monitor payment status and operational exceptions.',
        'Keep verification connected to beneficiary records.',
      ],
    },
    finalCta: {
      eyebrow: 'Get Started',
      title: 'Run social transfer programs with clarity, control, and confidence.',
    },
    footerGroups: [
      {
        title: 'Platform',
        links: [
          ['Overview', '#overview'],
          ['Problem', '#problem'],
          ['Solution', '#solution'],
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
    nav: ['Visão geral', 'Problema', 'Solução', 'Capacidades', 'Conformidade'],
    cta: 'Solicitar demonstração',
    heroEyebrow: 'Infraestrutura para transferências sociais institucionais',
    heroTitle: ['Gerencie pagamentos sociais,', 'beneficiários e poupança'],
    heroAccent: 'numa única plataforma segura.',
    heroDescription:
      'O SOMAS ajuda governos, ONGs e parceiros de implementação a executar programas de transferências sociais em larga escala com clareza operacional, monitoria em tempo real e controlos prontos para auditoria.',
    secondaryCta: 'Ver como funciona',
    trustTitle:
      'Criado para programas estruturados, operações multi-regionais e entrega responsável de pagamentos.',
    metrics: ['Milhões $', '1M+', '100+'],
    metricLabels: ['Valor total desembolsado', 'Total de beneficiários', 'Campanhas ativas'],
    problem: {
      eyebrow: 'O Problema',
      title: 'Pagamentos sociais exigem operações conectadas.',
      muted: 'Fluxos dispersos atrasam entregas.',
      body: 'Programas de transferência em larga escala envolvem beneficiários, campanhas, equipas de campo, canais de pagamento, relatórios regionais e requisitos de conformidade. O SOMAS oferece uma camada operacional conectada para visibilidade, responsabilidade e velocidade.',
      cards: [
        'Os dados dos beneficiários tornam-se difíceis de validar e atualizar.',
        'O progresso das campanhas é difícil de acompanhar entre regiões.',
        'Exceções de pagamento são identificadas tarde demais.',
        'A verificação em campo fica desligada das decisões do backoffice.',
        'Evidências de auditoria ficam dispersas em vários sistemas.',
      ],
    },
    solution: {
      eyebrow: 'A Solução',
      title: 'O SOMAS reúne toda a operação de transferências sociais num fluxo controlado.',
      body: 'Desde a configuração da campanha até à monitoria dos pagamentos, o SOMAS oferece uma camada operacional única para planear, executar, verificar e reportar programas de pagamentos sociais.',
      features: [
        ['Gestão de Campanhas', 'Planeie e acompanhe programas por região, canal de pagamento, calendário, estado e cobertura de beneficiários.'],
        ['Operações com Beneficiários', 'Mantenha registos de beneficiários, associações a campanhas, estado de verificação, histórico de desembolsos e participação em poupança.'],
        ['Desembolsos em Massa', 'Acompanhe transações desde a iniciação até à confirmação, incluindo pagamentos pendentes, bem-sucedidos, falhados e reprocessados.'],
        ['Verificação em Campo', 'Disponibilize fluxos simples para equipas de campo pesquisarem, confirmarem e verificarem beneficiários no terreno.'],
        ['Programas de Poupança', 'Monitore participação em poupança, totais por beneficiário e desempenho de poupança por campanha.'],
        ['Auditoria e Conformidade', 'Mantenha um registo claro de atividade dos utilizadores, alterações de dados, permissões e eventos operacionais.'],
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
    compliance: {
      eyebrow: 'Conformidade',
      title: 'A responsabilização faz parte do fluxo de trabalho.',
      body: 'Operações de transferências sociais exigem mais do que execução de pagamentos. Exigem evidência, controlo e rastreabilidade. O SOMAS apoia operações prontas para auditoria através de permissões por função, monitoria de atividade, histórico de transações, registos de verificação e logs de eventos do sistema.',
      cta: 'Saber mais',
      items: [
        'Saiba quem acedeu ou alterou dados críticos.',
        'Monitore o estado dos pagamentos e exceções operacionais.',
        'Mantenha a verificação ligada ao registo do beneficiário.',
      ],
    },
    finalCta: {
      eyebrow: 'Começar',
      title: 'Execute programas de transferências sociais com clareza, controlo e confiança.',
    },
    footerGroups: [
      {
        title: 'Plataforma',
        links: [
          ['Visão geral', '#overview'],
          ['Problema', '#problem'],
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

import type { LandingCopy } from './landing-copy-types'

export const landingCopyPt: LandingCopy = {
  languageName: 'Português',
  nav: ['Missão', 'Plataforma', 'Casos de Uso', 'Preçário', 'Contacto'],
  cta: 'Solicitar demonstração',
  secondaryCta: 'Ver como funciona',
  hero: {
    eyebrow: 'Desembolsos em massa inteligentes',
    title: 'Dinheiro onde faz diferença,',
    accent: 'instantaneamente.',
    description:
      'O SOMAS é a camada operacional para governos, ONGs e instituições que precisam desembolsar fundos em escala com rastreabilidade total, monitoria em tempo real e sem dependência de um único provedor de pagamentos.',
    stats: [
      { value: '$20M+', label: 'Desembolsados em Moçambique' },
      { value: '32.000+', label: 'Beneficiários alcançados' },
      { value: '95%+', label: 'Taxa de sucesso na entrega' },
      { value: '5', label: 'Programas implementados' },
    ],
  },
  mission: {
    eyebrow: 'A Nossa Missão',
    title: 'Entregar dinheiro com rapidez, confiança e dignidade.',
    body:
      'O desafio nas transferências sociais já não é apenas mobilizar fundos. É entregá-los com fiabilidade até à última milha. O SOMAS existe para fechar essa lacuna com um sistema nacional, orientado por software, automatizado, inclusivo e totalmente auditável.',
  },
  platform: {
    eyebrow: 'A Plataforma',
    title: 'O que é o SOMAS?',
    body:
      'Uma plataforma unificada de backoffice que liga gestão de beneficiários, operações de campanhas, desembolsos em massa, verificação em campo e relatórios de conformidade num único fluxo controlado.',
    features: [
      {
        title: 'Gestão de Campanhas',
        description:
          'Planeie, segmente e monitore programas por região, canal de pagamento, calendário e grupo de beneficiários.',
      },
      {
        title: 'Operações com Beneficiários',
        description:
          'Mantenha registos completos com identificação, validação de carteira, histórico de desembolsos e participação em poupança.',
      },
      {
        title: 'Desembolsos em Massa',
        description:
          'Transferências em lote via M-Pesa, e-Mola e mKesh com confirmação em tempo real e tratamento de falhas.',
      },
      {
        title: 'Verificação em Campo',
        description:
          'Fluxos mobile-first para agentes de campo pesquisarem, confirmarem e sincronizarem dados de beneficiários, mesmo com baixa conectividade.',
      },
      {
        title: 'Auditoria e Conformidade',
        description:
          'Permissões por função, logs de atividade e registos transacionais preparados para transparência ao nível de doadores.',
      },
    ],
    flowTitle: 'Como um desembolso acontece',
    flowSteps: [
      {
        step: '1',
        title: 'Onboarding',
        description: 'Beneficiários registados e carteiras pré-validadas por agentes de campo.',
      },
      {
        step: '2',
        title: 'Financiamento e Alocação',
        description: 'Gestores definem montantes, frequência e regras de desembolso.',
      },
      {
        step: '3',
        title: 'Desembolso',
        description:
          'Transferências em lote executadas por integração multi-carteira com confirmação por SMS em tempo real.',
      },
      {
        step: '4',
        title: 'Monitoria e Relato',
        description:
          'Dashboards acompanham cada metical desde a alocação até à entrega e exportam relatórios para doadores.',
      },
    ],
  },
  useCases: {
    eyebrow: 'Casos de Uso',
    title: 'Construído para instituições que entregam em escala.',
    body:
      'Quer esteja a gerir programas de resposta a emergências, transferências sociais do governo ou desembolsos de CSR, o SOMAS adapta-se à sua estrutura operacional.',
    items: [
      {
        icon: '🌍',
        type: 'Setor',
        name: 'ONGs e Organizações Humanitárias',
        description:
          'Execute programas de resposta a emergências, transferências ligadas a choques climáticos e pagamentos de desenvolvimento de longo prazo com total responsabilização perante doadores e parceiros.',
        tags: ['Resposta a Emergências', 'Adaptação Climática', 'Segurança Alimentar'],
      },
      {
        icon: '🏛️',
        type: 'Setor',
        name: 'Governos e Programas Públicos',
        description:
          'Entregue pagamentos de proteção social, subsídios agrícolas e bolsas de emprego juvenil em escala nacional com trilhas completas para conformidade.',
        tags: ['Proteção Social', 'Apoio Agrícola', 'Programas Juvenis'],
      },
      {
        icon: '🏢',
        type: 'Setor',
        name: 'Empresas e Programas de CSR',
        description:
          'Execute programas de investimento comunitário, benefícios a colaboradores e pagamentos a fornecedores com relatórios de impacto e rastreio transparente dos fundos.',
        tags: ['Investimento Comunitário', 'Pagamentos a Fornecedores', 'Relato de Impacto'],
      },
    ],
  },
  howItWorks: {
    eyebrow: 'Como Funciona',
    title: 'Uma plataforma. Todas as etapas cobertas.',
    body:
      'O SOMAS cobre todo o ciclo operacional, desde o registo de beneficiários até ao relatório pós-desembolso, num único sistema auditável.',
    steps: [
      {
        number: '01',
        title: 'Registar Beneficiários',
        description:
          'Agentes de campo registam beneficiários, capturam dados de identidade e carteira e segmentam por critérios do programa online ou offline.',
        pill: 'Aplicação de Campo',
      },
      {
        number: '02',
        title: 'Configurar Campanhas',
        description:
          'Defina montantes, frequência, grupos elegíveis e abrangência regional. Prepare listas de pagamento em minutos.',
        pill: 'Backoffice',
      },
      {
        number: '03',
        title: 'Executar Transferências',
        description:
          'Os desembolsos seguem diretamente para carteiras M-Pesa, e-Mola ou mKesh. Falhas são sinalizadas de imediato com opções de contingência.',
        pill: 'Multi-Carteira',
      },
      {
        number: '04',
        title: 'Monitorar e Reportar',
        description:
          'Dashboards acompanham taxas de sucesso, alcance de beneficiários e rastreabilidade dos fundos. Exporte relatórios prontos para auditoria a qualquer momento.',
        pill: 'Tempo Real',
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
    eyebrow: 'Entre em Contacto',
    title: 'Pronto para escalar o seu programa?',
    body:
      'Quer esteja a planear o seu primeiro programa de transferências monetárias ou a escalar uma operação existente, queremos perceber o seu contexto e mostrar o que o SOMAS pode fazer.',
    blocks: [
      { label: 'Informações Gerais', value: 'info@somas.app', href: 'mailto:info@somas.app' },
      {
        label: 'Parcerias',
        value: 'partnerships@somas.app',
        href: 'mailto:partnerships@somas.app',
      },
      { label: 'Telefone', value: '+258 846 239 715', href: 'tel:+258846239715' },
    ],
    form: {
      name: 'Seu nome',
      email: 'Email profissional',
      organization: 'Organização',
      organizationType: 'Tipo de organização',
      message: 'Fale-nos do seu programa - dimensão, geografia, cronograma...',
      submit: 'Enviar mensagem',
      options: [
        'ONG / Humanitária',
        'Governo / Setor Público',
        'Empresa / CSR',
        'Parceiro de Implementação',
        'Outro',
      ],
    },
  },
  footerGroups: [
    {
      title: 'Sobre',
      links: [
        ['Missão', '#mission'],
        ['Plataforma', '#platform'],
      ],
    },
    {
      title: 'Uso',
      links: [
        ['Casos de uso', '#use-cases'],
        ['Como funciona', '#how-it-works'],
      ],
    },
    {
      title: 'Comercial',
      links: [
        ['Preçário', '#pricing'],
        ['Solicitar demonstração', '#contact'],
      ],
    },
    {
      title: 'Contacto',
      links: [
        ['Entre em contacto', '#contact'],
        ['Falar com a equipa', '#contact'],
      ],
    },
  ],
  footerText:
    'O SOMAS é a camada operacional para programas de desembolso em larga escala, ligando operações com beneficiários, execução de campanhas, verificação em campo e reporting pronto para auditoria para instituições, ONGs e governos.',
}

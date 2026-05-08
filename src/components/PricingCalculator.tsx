import { useMemo, useState } from 'react'

type CurrencyCode = 'MZ' | 'KE' | 'UG' | 'RW' | 'MW' | 'CD' | 'LR' | 'BD' | 'US'

type Props = {
  copy: {
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
    calculatorNotes: readonly string[]
  }
}

const currencies = {
  MZ: { label: 'Mozambique', currency: 'MZN', symbol: 'MZN ', rate: 64.1, flag: '🇲🇿', minAmount: 640000, maxAmount: 1920000000, stepAmount: 640000, minAvg: 640, maxAvg: 64100, stepAvg: 320 },
  KE: { label: 'Kenya', currency: 'KES', symbol: 'KSh ', rate: 129.5, flag: '🇰🇪', minAmount: 1295000, maxAmount: 3885000000, stepAmount: 1295000, minAvg: 1295, maxAvg: 129500, stepAvg: 650 },
  UG: { label: 'Uganda', currency: 'UGX', symbol: 'USh ', rate: 3720, flag: '🇺🇬', minAmount: 37200000, maxAmount: 111600000000, stepAmount: 3720000, minAvg: 37200, maxAvg: 3720000, stepAvg: 18600 },
  RW: { label: 'Rwanda', currency: 'RWF', symbol: 'RF ', rate: 1320, flag: '🇷🇼', minAmount: 13200000, maxAmount: 39600000000, stepAmount: 1320000, minAvg: 13200, maxAvg: 1320000, stepAvg: 6600 },
  MW: { label: 'Malawi', currency: 'MWK', symbol: 'MK ', rate: 1730, flag: '🇲🇼', minAmount: 17300000, maxAmount: 51900000000, stepAmount: 1730000, minAvg: 17300, maxAvg: 1730000, stepAvg: 8650 },
  CD: { label: 'DRC', currency: 'CDF', symbol: 'FC ', rate: 2800, flag: '🇨🇩', minAmount: 28000000, maxAmount: 84000000000, stepAmount: 2800000, minAvg: 28000, maxAvg: 2800000, stepAvg: 14000 },
  LR: { label: 'Liberia', currency: 'LRD', symbol: 'L$ ', rate: 193, flag: '🇱🇷', minAmount: 1930000, maxAmount: 5790000000, stepAmount: 193000, minAvg: 1930, maxAvg: 193000, stepAvg: 965 },
  BD: { label: 'Bangladesh', currency: 'BDT', symbol: '৳', rate: 110, flag: '🇧🇩', minAmount: 1100000, maxAmount: 3300000000, stepAmount: 110000, minAvg: 1100, maxAvg: 110000, stepAvg: 550 },
  US: { label: 'United States', currency: 'USD', symbol: '$', rate: 1, flag: '🇺🇸', minAmount: 10000, maxAmount: 30000000, stepAmount: 10000, minAvg: 10, maxAvg: 1000, stepAvg: 5 },
} as const

function formatMoney(value: number, symbol: string) {
  return `${symbol}${Math.round(value).toLocaleString()}`
}

function tierFor(amountUsd: number, beneficiaries: number) {
  if (amountUsd >= 5000000 || beneficiaries >= 50000) return { label: 'Enterprise', rate: 0.08, index: 2 }
  if (amountUsd >= 500000 || beneficiaries >= 5000) return { label: 'Growth', rate: 0.1, index: 1 }
  return { label: 'Starter', rate: 0.12, index: 0 }
}

export function PricingCalculator({ copy }: Props) {
  const [country, setCountry] = useState<CurrencyCode>('US')
  const current = currencies[country]
  const [amount, setAmount] = useState(current.minAmount * 25)
  const [beneficiaries, setBeneficiaries] = useState(2500)
  const [average, setAverage] = useState(current.minAvg * 10)

  const view = useMemo(() => {
    const amountUsd = amount / current.rate
    const tier = tierFor(amountUsd, beneficiaries)
    const fee = amount * tier.rate
    return { amountUsd, tier, fee }
  }, [amount, beneficiaries, current.rate])

  const selectCountry = (code: CurrencyCode) => {
    const next = currencies[code]
    setCountry(code)
    setAmount(next.minAmount * 25)
    setAverage(next.minAvg * 10)
  }

  return (
    <div className="rounded-[36px] border border-[#d4e9df] bg-white p-6 text-[#0f2419] shadow-[0_20px_70px_rgba(44,95,79,0.08)] md:p-8">
      <h3 className="text-2xl font-bold tracking-tight">{copy.calculatorTitle}</h3>
      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-[#2c5f4f]">{copy.countryLabel}</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => selectCountry(code)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm transition-colors ${
              code === country
                ? 'border-[#2c5f4f]/30 bg-[#f0f7f4] text-[#0f2419]'
                : 'border-[#d4e9df] bg-white text-gray-700 hover:bg-[#f5faf7]'
            }`}
          >
            {currencies[code].flag} {currencies[code].label} <span className="text-gray-400">{currencies[code].currency}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <label className="block">
            <div className="mb-2 flex justify-between gap-4 text-sm text-gray-600">
              <span>{copy.amountLabel}</span>
              <span className="font-semibold text-[#0f2419]">{formatMoney(amount, current.symbol)}</span>
            </div>
            <input type="range" min={current.minAmount} max={current.maxAmount} step={current.stepAmount} value={amount} onChange={(event) => setAmount(Number(event.target.value))} className="w-full accent-[#2c5f4f]" />
          </label>
          <label className="block">
            <div className="mb-2 flex justify-between gap-4 text-sm text-gray-600">
              <span>{copy.beneficiariesLabel}</span>
              <span className="font-semibold text-[#0f2419]">{beneficiaries.toLocaleString()}</span>
            </div>
            <input type="range" min={100} max={200000} step={100} value={beneficiaries} onChange={(event) => setBeneficiaries(Number(event.target.value))} className="w-full accent-[#2c5f4f]" />
          </label>
          <label className="block">
            <div className="mb-2 flex justify-between gap-4 text-sm text-gray-600">
              <span>{copy.averageLabel}</span>
              <span className="font-semibold text-[#0f2419]">{formatMoney(average, current.symbol)}</span>
            </div>
            <input type="range" min={current.minAvg} max={current.maxAvg} step={current.stepAvg} value={average} onChange={(event) => setAverage(Number(event.target.value))} className="w-full accent-[#2c5f4f]" />
          </label>
        </div>

        <div className="rounded-[28px] border border-[#d4e9df] bg-[#f5faf7] p-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2c5f4f]">{view.tier.label}</div>
          <div className="mt-3 text-sm text-gray-500">{copy.estimatedFeeLabel}</div>
          <div className="mt-2 text-4xl font-semibold tracking-tight">{formatMoney(view.fee, current.symbol)}</div>
          {country !== 'US' ? (
            <div className="mt-2 text-sm text-gray-500">USD equiv. ${Math.round(view.amountUsd).toLocaleString()}</div>
          ) : null}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4"><span className="text-gray-500">{copy.totalDisbursedLabel}</span><span>{formatMoney(amount, current.symbol)}</span></div>
            <div className="flex justify-between gap-4"><span className="text-gray-500">{copy.beneficiariesResultLabel}</span><span>{beneficiaries.toLocaleString()}</span></div>
            <div className="flex justify-between gap-4"><span className="text-gray-500">{copy.processingRateLabel}</span><span>{Math.round(view.tier.rate * 100)}%</span></div>
            <div className="flex justify-between gap-4 border-t border-[#d4e9df] pt-3 font-semibold"><span>{copy.platformFeeLabel}</span><span>{formatMoney(view.fee, current.symbol)}</span></div>
          </div>
          <p className="mt-5 text-sm text-gray-500">{copy.calculatorNotes[view.tier.index]}</p>
          <a href="#contact" className="mt-6 flex items-center justify-center rounded-full bg-[#2c5f4f] px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#1e4a3c]">
            {copy.quoteCta}
          </a>
        </div>
      </div>
    </div>
  )
}

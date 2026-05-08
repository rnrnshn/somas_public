import { PricingCalculator } from './PricingCalculator'
import { FadeUp } from './FadeUp'
import { Check, ArrowRight } from 'lucide-react'

type Props = {
  copy: {
    eyebrow: string
    title: string
    intro: string
    note: string
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

export function PricingSection({ copy }: Props) {
  return (
    <section id="pricing" className="scroll-mt-24 bg-[#f5faf7] px-6 py-24 md:py-28 text-[#0f2419]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <FadeUp>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#c8e0d5] bg-white/70 px-5 py-1.5 text-[13px] font-medium tracking-wide text-[#2c5f4f] shadow-[0_2px_10px_rgba(44,95,79,0.04)]">
                {copy.eyebrow}
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
                {copy.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-gray-600">{copy.intro}</p>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <p className="rounded-[24px] border border-[#d4e9df] bg-white/70 p-6 text-sm leading-relaxed text-gray-500 shadow-sm">
              {copy.note}
            </p>
          </FadeUp>
        </div>

        <div className="grid overflow-hidden rounded-[32px] border border-[#d4e9df] bg-white shadow-[0_20px_70px_rgba(44,95,79,0.08)] lg:grid-cols-3">
          {copy.tiers.map((tier, index) => {
            const featured = index === 1
            return (
              <div
                key={tier.name}
                className={`flex min-h-full flex-col p-7 md:p-9 ${
                  featured
                    ? 'bg-[#2c5f4f] text-white'
                    : 'border-[#d4e9df] bg-white text-[#0f2419] lg:border-r last:border-r-0'
                }`}
              >
                <div className={`text-[11px] font-bold uppercase tracking-[0.22em] ${featured ? 'text-white/70' : 'text-[#2c5f4f]'}`}>{tier.badge}</div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{tier.name}</h3>
                <div className={`mt-2 space-y-1 text-sm ${featured ? 'text-white/72' : 'text-gray-500'}`}>
                  {tier.range.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
                <div className="mt-9 flex items-end gap-2">
                  <div className="text-6xl font-bold leading-none tracking-tight md:text-7xl">{tier.fee.replace('%', '')}</div>
                  <div className={`pb-3 text-xs font-semibold leading-tight ${featured ? 'text-white/70' : 'text-gray-500'}`}>%<br />fee</div>
                </div>
                <p className={`mt-3 text-sm ${featured ? 'text-white/70' : 'text-gray-500'}`}>{tier.description}</p>
                <div className={`my-7 h-px ${featured ? 'bg-white/18' : 'bg-[#d4e9df]'}`} />
                <ul className={`space-y-3 text-sm ${featured ? 'text-white/88' : 'text-gray-700'}`}>
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <Check className={`mt-1 h-3.5 w-3.5 shrink-0 ${featured ? 'text-white' : 'text-[#2c5f4f]'}`} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`group mt-auto flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                    featured
                      ? 'border-white bg-white !text-[#2c5f4f] hover:bg-[#f0f7f4]'
                      : 'border-[#c8e0d5] bg-white !text-[#0f2419] hover:border-[#2c5f4f]/30 hover:bg-[#f5faf7]'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <PricingCalculator copy={copy} />
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-gray-500">{copy.footnote}</p>
      </div>
    </section>
  )
}

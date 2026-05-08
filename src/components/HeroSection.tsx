import { ArrowRight } from 'lucide-react'

type Props = {
  copy: {
    eyebrow: string
    title: string
    accent: string
    description: string
    stats: readonly {
      value: string
      label: string
    }[]
  }
  cta: string
  secondaryCta: string
}

export function HeroSection({ copy, cta, secondaryCta }: Props) {
  return (
    <>
      <main id="overview" className="scroll-mt-28 px-6 pb-20 pt-24">
        <div className="mx-auto flex max-w-[1040px] flex-col items-center text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-gray-300/80 px-4 py-1.5 text-[13px] font-medium text-gray-800">
            {copy.eyebrow} <ArrowRight className="h-3.5 w-3.5" />
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.02] tracking-tight text-[#0f2419] md:text-7xl">
            {copy.title}
            <br />
            <span className="text-[#2c5f4f]">{copy.accent}</span>
          </h1>
          <p className="mb-10 max-w-[820px] text-base leading-relaxed text-gray-600 md:text-lg">
            {copy.description}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#2c5f4f] px-7 py-3.5 text-[15px] font-medium !text-white transition-colors hover:bg-[#1e4a3c] sm:w-auto"
            >
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-[160ms] group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium text-gray-700 transition-colors hover:bg-gray-100 sm:w-auto"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </main>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[40px] bg-[#f0f7f4] p-8 md:p-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.stats.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-white/60 bg-white/50 p-8 shadow-sm backdrop-blur-md">
                <div className="mb-3 text-4xl font-medium tracking-tight text-[#2c5f4f] md:text-[2.75rem]">
                  {item.value}
                </div>
                <div className="text-[15px] font-medium text-gray-800">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

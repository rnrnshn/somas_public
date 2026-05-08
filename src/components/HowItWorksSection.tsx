import { FadeUp } from './FadeUp'

type Props = {
  copy: {
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
}

export function HowItWorksSection({ copy }: Props) {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-[#f7fbf9] px-6 py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <FadeUp>
            <div className="mb-8 inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-[13px] font-medium tracking-wide text-gray-800">
              {copy.eyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-3xl font-bold tracking-tight text-[#0f2419] md:text-5xl">{copy.title}</h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">{copy.body}</p>
          </FadeUp>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {copy.steps.map((step) => (
            <div key={step.number} className="rounded-[32px] border border-[#d4e9df] bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold tracking-[0.18em] text-[#2c5f4f]">{step.number}</div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#0f2419]">{step.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
              <div className="mt-6 inline-flex rounded-full bg-[#f0f7f4] px-3 py-1 text-sm font-medium text-[#2c5f4f]">
                {step.pill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

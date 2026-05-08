import { ArrowRightLeft, MapPin, Settings, ShieldCheck, Users } from 'lucide-react'
import { FadeUp } from './FadeUp'

const icons = [Settings, Users, ArrowRightLeft, MapPin, ShieldCheck]

type Props = {
  copy: {
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
}

export function PlatformSection({ copy }: Props) {
  return (
    <section id="platform" className="scroll-mt-24 bg-white px-6 py-28">
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

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[36px] border border-[#d4e9df] bg-[#f7fbf9] p-6 md:p-8">
            <div className="grid gap-4">
              {copy.features.map((feature, index) => {
                const Icon = icons[index]
                return (
                  <div key={feature.title} className="flex gap-4 rounded-[28px] border border-white bg-white/90 p-5 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2c5f4f]/10 text-[#2c5f4f]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0f2419]">{feature.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[36px] bg-[#111c15] p-6 text-white shadow-[0_20px_60px_rgba(15,36,25,0.18)] md:p-8" data-theme="dark">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#8cc6aa]">{copy.flowTitle}</p>
            <div className="space-y-5">
              {copy.flowSteps.map((step) => (
                <div key={step.step} className="flex gap-4 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2c5f4f] text-sm font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/72">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

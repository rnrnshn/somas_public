import { FadeUp } from './FadeUp'

export function MissionSection({ copy }: { copy: { eyebrow: string; title: string; body: string } }) {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        <FadeUp>
          <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium tracking-wide mb-8 text-gray-800">
            {copy.eyebrow}
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="text-3xl md:text-5xl leading-[1.1] font-bold text-[#0f2419] tracking-tight mb-8">
            {copy.title}
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[700px] mx-auto">
            {copy.body}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react';
import { FadeUp } from './FadeUp';

const useCaseIcons = [
  (
    <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  (
    <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
];

type UseCaseItem = {
  sector: string
  description: string
  tags: readonly string[]
}

type Props = {
  copy: {
    eyebrow: string
    title: string
    body: string
    cta: string
    items: readonly UseCaseItem[]
  }
}

export function SecuritySection({ copy }: Props) {
  return (
    <section data-theme="dark" className="bg-[#0a1f14] text-white flex justify-center py-20 overflow-hidden relative">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d2c1a] via-[#0a1f14] to-[#0a1f14] opacity-50"></div>

      <div className="max-w-[1000px] w-full border-x border-white/10 flex flex-col relative z-10">

        {/* Top Half */}
        <div className="p-16 md:p-24 flex flex-col items-center text-center border-b border-white/10 relative">

          <div className="absolute bottom-[-1px] left-[-100vw] right-[-100vw] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <FadeUp>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide mb-8">
              {copy.eyebrow}
            </div>
          </FadeUp>

          <FadeUp delay={0.07}>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 max-w-2xl leading-[1.1]">
              {copy.title}
            </h2>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="text-[17px] text-white/70 max-w-2xl mb-10 leading-relaxed">
              {copy.body}
            </p>
          </FadeUp>

          <FadeUp delay={0.21}>
            <button className="group px-6 py-3 rounded-full bg-white text-[#0a1f14] text-[15px] font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              {copy.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
            </button>
          </FadeUp>
        </div>

        {/* Bottom Half — staggered icon columns */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {copy.items.map((item, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.08}>
              <div
                className={`p-10 flex flex-col items-center text-center transition-all duration-200 cursor-default
                  @media (hover: hover) { hover:-translate-y-1 }
                  ${i < 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                <div className="w-[90px] h-[90px] rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5 transition-all duration-200 hover:bg-white/10 hover:border-white/40">
                  {useCaseIcons[i]}
                </div>
                <h3 className="text-[18px] font-bold leading-snug text-white mb-3">
                  {item.sector}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

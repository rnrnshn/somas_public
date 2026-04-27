import { ArrowRight } from 'lucide-react';
import { FadeUp } from './FadeUp';

const avatarIds = [47, 33, 12, 44, 22];

type Props = {
  copy: {
    eyebrow: string
    title: string
  }
  cta: string
}

export function CtaSection({ copy, cta }: Props) {
  return (
    <section className="bg-white py-32 px-4 md:px-6 flex flex-col items-center text-center border-t border-gray-100">
      <div className="max-w-4xl w-full flex flex-col items-center">
        
        <FadeUp>
          <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium tracking-wide mb-8 text-[#0f2419]">
            {copy.eyebrow}
          </div>
        </FadeUp>
        
        <FadeUp delay={0.08}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2419] tracking-tight mb-12 leading-[1.05] max-w-3xl">
            {copy.title}
          </h2>
        </FadeUp>

        <div className="flex items-center justify-center mb-12">
          <div className="flex">
            {avatarIds.map((imgId, index) => (
              <div
                key={imgId}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden -ml-5 first:ml-0 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                style={{ zIndex: 10 - index }}
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${imgId}`}
                  alt="Team member"
                  className="w-full h-full object-cover filter contrast-125"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button with pulse ring */}
        <FadeUp delay={0.3}>
          <div className="relative inline-flex">
            <span className="stable-button-pulse absolute inset-0 rounded-full bg-[#2c5f4f]/25" />
            <button className="group relative px-8 py-4 rounded-full bg-[#2c5f4f] !text-white text-[16px] font-semibold hover:bg-[#1e4a3c] transition-colors flex items-center gap-2 shadow-[0_4px_14px_0_rgba(44,95,79,0.4)] hover:shadow-[0_6px_20px_rgba(44,95,79,0.25)]">
              {cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
            </button>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

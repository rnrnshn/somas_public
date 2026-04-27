import { ArrowRight } from 'lucide-react';
import { FadeUp } from './FadeUp';

const complianceItems = [
  {
    label: 'Know who accessed or changed critical data.',
    svg: (
      <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: 'Monitor payment status and operational exceptions.',
    svg: (
      <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Keep verification connected to beneficiary records.',
    svg: (
      <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export function SecuritySection() {
  return (
    <section data-theme="dark" className="bg-[#0a1f14] text-white flex justify-center py-20 overflow-hidden relative">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d2c1a] via-[#0a1f14] to-[#0a1f14] opacity-50"></div>

      <div className="max-w-[1000px] w-full border-x border-white/10 flex flex-col relative z-10">
        
        {/* Top Half */}
        <div className="p-16 md:p-24 flex flex-col items-center text-center border-b border-white/10 relative">
          
          <div className="absolute bottom-[-1px] left-[-100vw] right-[-100vw] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <FadeUp>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide mb-8">
              Compliance
            </div>
          </FadeUp>
          
          <FadeUp delay={0.07}>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 max-w-2xl leading-[1.1]">
              Accountability is built into the workflow.
            </h2>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="text-[17px] text-white/70 max-w-2xl mb-10 leading-relaxed">
              Social transfer operations require more than payment execution. They require evidence, control, and traceability. SOMAS supports audit-ready operations through role-based permissions, activity monitoring, transaction history, verification records, and system event logs.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.21}>
            <button className="group px-6 py-3 rounded-full bg-white text-[#0a1f14] text-[15px] font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
            </button>
          </FadeUp>
        </div>

        {/* Bottom Half — staggered icon columns */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {complianceItems.map((item, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.08}>
              <div
                className={`p-10 flex flex-col items-center text-center transition-all duration-200 cursor-default
                  @media (hover: hover) { hover:-translate-y-1 }
                  ${i < 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                <div className="w-[90px] h-[90px] rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5 transition-all duration-200 hover:bg-white/10 hover:border-white/40">
                  {item.svg}
                </div>
                <p className="text-[16px] font-medium leading-relaxed text-white/90">
                  {item.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

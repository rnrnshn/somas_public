import { ArrowRight } from 'lucide-react';

export function SecuritySection() {
  return (
    <section data-theme="dark" className="bg-[#1c0c08] text-white flex justify-center py-20 overflow-hidden relative">
      
      {/* Background radial gradient to give a subtle glow like the reference */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a130d] via-[#1c0c08] to-[#1c0c08] opacity-50"></div>

      <div className="max-w-[1000px] w-full border-x border-white/10 flex flex-col relative z-10">
        
        {/* Top Half */}
        <div className="p-16 md:p-24 flex flex-col items-center text-center border-b border-white/10 relative">
          
          {/* Extended fading horizontal line */}
          <div className="absolute bottom-[-1px] left-[-100vw] right-[-100vw] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide mb-8">
            Compliance
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 max-w-2xl leading-[1.1]">
            Accountability is built into the workflow.
          </h2>

          <p className="text-[17px] text-white/70 max-w-2xl mb-10 leading-relaxed">
            Social transfer operations require more than payment execution. They require evidence, control, and traceability. SOMAS supports audit-ready operations through role-based permissions, activity monitoring, transaction history, verification records, and system event logs.
          </p>
          
          <button className="px-6 py-3 rounded-full bg-white text-[#1c0c08] text-[15px] font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Half */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* Col 1 */}
          <div className="p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="w-[90px] h-[90px] rounded-full border border-white/20 flex items-center justify-center mb-6 relative bg-white/5">
              <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-[16px] font-medium leading-relaxed text-white/90">
              Know who accessed or changed critical data.
            </p>
          </div>

          {/* Col 2 */}
          <div className="p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="w-[90px] h-[90px] rounded-full border border-white/20 flex items-center justify-center mb-6 relative bg-white/5">
              <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-[16px] font-medium leading-relaxed text-white/90">
              Monitor payment status and operational exceptions.
            </p>
          </div>

          {/* Col 3 */}
          <div className="p-10 flex flex-col items-center text-center">
            <div className="w-[90px] h-[90px] rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5">
               <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-[16px] font-medium leading-relaxed text-white/90">
              Keep verification connected to beneficiary records.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

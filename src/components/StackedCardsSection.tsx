import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const cards = [
  {
    pill: "Multi-Tenant",
    headline: "Designed for multiple organizations, programs, and regions.",
    body: "SOMAS supports multi-tenant operations, allowing each institution or program owner to manage its own campaigns, beneficiaries, branding, metrics, and users within a separated operating environment.",
    links: ["Separate workspaces", "Tenant-level dashboards", "Specific users & permissions", "Campaign isolation"],
    theme: "light",
    topOffset: "top-[100px]",
    visual: (
      <div className="w-full h-full bg-[#fcf9f7] rounded-[32px] p-8 relative overflow-hidden flex items-center justify-center border border-[#f5e3d7]">
        {/* Abstract representation of multiple workspaces */}
        <div className="relative w-full max-w-[300px] aspect-square">
          <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col p-4 opacity-50 translate-x-4 -translate-y-4">
             <div className="w-1/2 h-3 bg-gray-200 rounded-full mb-4"></div>
             <div className="w-full flex-1 bg-gray-100 rounded-lg"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col p-4 z-10">
             <div className="w-1/2 h-3 bg-[#ff6b4a]/30 rounded-full mb-4"></div>
             <div className="w-full h-12 bg-gray-50 rounded-lg mb-2 flex items-center px-3 gap-2">
               <div className="w-6 h-6 rounded-full bg-blue-100"></div>
               <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
             </div>
             <div className="w-full h-12 bg-gray-50 rounded-lg flex items-center px-3 gap-2">
               <div className="w-6 h-6 rounded-full bg-green-100"></div>
               <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    pill: "Metrics",
    headline: "Turn program activity into operational intelligence.",
    body: "SOMAS gives teams a clear view of what is happening across campaigns, regions, beneficiaries, and payment flows.",
    links: ["Active campaigns", "Successful & pending transactions", "Savings participation", "Field verification progress"],
    theme: "light",
    topOffset: "top-[140px]",
    visual: (
      <div className="w-full h-full bg-[#fcf9f7] rounded-[32px] p-8 relative overflow-hidden flex items-center justify-center border border-[#f5e3d7]">
        <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col overflow-hidden p-5 gap-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex flex-col gap-1">
              <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
              <div className="text-2xl font-bold text-gray-800 tracking-tight">$42M</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex items-end gap-2 h-24 pt-4">
            {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-gray-100 rounded-t-sm relative group transition-all">
                <div 
                  className="absolute bottom-0 w-full rounded-t-sm transition-all duration-500"
                  style={{ height: `${h}%`, backgroundColor: i === 5 ? '#ff6b4a' : '#cbd5e1' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    pill: "Field Operations",
    headline: "Field teams get the tools they need to verify beneficiaries faster.",
    body: "The field operations experience is built for enumerators and inquirers working directly with communities. It keeps workflows focused, mobile-first, and practical for real operating conditions.",
    links: ["Search beneficiaries", "Review profiles", "Confirm presence", "Sync activity"],
    theme: "light",
    topOffset: "top-[180px]",
    visual: (
      <div className="w-full h-full bg-[#fcf9f7] rounded-[32px] p-8 relative overflow-hidden flex items-center justify-center border border-[#f5e3d7]">
        {/* Mobile App Representation */}
        <div className="w-[200px] h-[400px] bg-white rounded-[32px] shadow-2xl border-4 border-gray-800 flex flex-col overflow-hidden relative z-10">
          <div className="h-6 w-full flex justify-center pt-2">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
          </div>
          <div className="p-4 flex flex-col gap-4 mt-2">
            <div className="w-3/4 h-6 bg-gray-800 rounded-lg"></div>
            <div className="w-full h-32 bg-gray-100 rounded-xl mt-2 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-[#ff6b4a] rounded-full"></div>
              </div>
            </div>
            <div className="w-full h-10 bg-[#ff6b4a] rounded-xl mt-auto"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    pill: "Scale Confidently",
    headline: "For teams responsible for accountable social payments.",
    body: "SOMAS is built for institutions and partners that need to deliver funds, monitor execution, and prove accountability across large beneficiary populations.",
    theme: "dark",
    topOffset: "top-[220px]",
    visual: (
      <div className="w-full h-full bg-[#1e2025] rounded-[32px] p-8 relative overflow-hidden flex items-center justify-center border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b4a]/10 to-transparent"></div>
        <div className="relative z-10 w-full max-w-[300px] aspect-video border border-white/10 rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-sm">
          <div className="flex gap-4 items-end h-1/2">
            <div className="w-8 bg-[#ff6b4a]/60 rounded-t-sm h-[40%]"></div>
            <div className="w-8 bg-[#ff6b4a]/80 rounded-t-sm h-[70%]"></div>
            <div className="w-8 bg-[#ff6b4a] rounded-t-sm h-full relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white font-bold text-sm">↑</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export function StackedCardsSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-white relative">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Intro */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium tracking-wide mb-6 text-gray-800">
            Core Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2b1411] max-w-3xl mx-auto tracking-tight">
            Infrastructure for accountable social transfers
          </h2>
        </div>

        {/* Stacked Cards Container */}
        {/* Using a bottom padding so the last card has room to scroll */}
        <div className="relative pb-[20vh] flex flex-col gap-4">
          {cards.map((card, index) => {
            const isDark = card.theme === 'dark';
            return (
              <div 
                key={index}
                className={cn(
                  "sticky w-full rounded-[40px] p-10 md:p-16 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border transition-colors duration-300",
                  card.topOffset,
                  isDark ? "bg-[#181a1f] border-gray-800" : "bg-white border-[#f5e3d7]"
                )}
                data-theme={card.theme === 'dark' ? 'dark' : 'light'}
                style={{
                  zIndex: index + 10
                }}
              >
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 h-full">
                  
                  {/* Left Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className={cn(
                      "inline-flex items-center px-4 py-1 rounded-full border text-[12px] font-medium tracking-wide mb-8 w-fit",
                      isDark ? "border-white/20 text-white/80" : "border-gray-300 text-gray-800"
                    )}>
                      {card.pill}
                    </div>
                    
                    <h3 className={cn(
                      "text-3xl leading-[1.1] font-bold mb-6 tracking-tight",
                      isDark ? "text-white" : "text-[#2b1411]"
                    )}>
                      {card.headline}
                    </h3>
                    
                    <p className={cn(
                      "text-[17px] leading-relaxed mb-10 max-w-lg",
                      isDark ? "text-white/70" : "text-gray-600"
                    )}>
                      {card.body}
                    </p>

                    {card.links && (
                      <div>
                        <p className={cn(
                          "text-[15px] font-semibold mb-4",
                          isDark ? "text-white/90" : "text-[#2b1411]"
                        )}>
                          Explore the suite
                        </p>
                        <ul className="flex flex-col gap-3">
                          {card.links.map((link, i) => (
                            <li key={i}>
                              <a href="#" className="inline-flex items-center gap-2 text-[#ff6b4a] font-medium text-[15px] hover:text-[#f05c3c] transition-colors">
                                {link} <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!card.links && isDark && (
                      <div className="mt-4">
                        <button className="px-6 py-3 rounded-full bg-[#ab90f2] text-[#1e1335] text-[15px] font-semibold hover:bg-[#9a7dec] transition-colors flex items-center gap-2">
                          Request a demo <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Right Graphic */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[300px]">
                    {card.visual}
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

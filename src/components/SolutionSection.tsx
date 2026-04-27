import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Settings, Users, ArrowRightLeft, MapPin, PiggyBank, ShieldCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeUp } from './FadeUp';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const features = [
  {
    title: "Campaign Management",
    description: "Plan and monitor programs by region, payment channel, timeline, status, and beneficiary coverage.",
    icon: Settings
  },
  {
    title: "Beneficiary Operations",
    description: "Maintain beneficiary records, campaign associations, verification status, disbursement history, and savings participation.",
    icon: Users
  },
  {
    title: "Mass Disbursements",
    description: "Track transactions from initiation to confirmation, including pending, successful, failed, and retried payments.",
    icon: ArrowRightLeft
  },
  {
    title: "Field Verification",
    description: "Give field teams simple workflows to search, confirm, and verify beneficiaries on site.",
    icon: MapPin
  },
  {
    title: "Savings Programs",
    description: "Monitor savings participation, beneficiary savings totals, and campaign-level savings performance.",
    icon: PiggyBank
  },
  {
    title: "Audit & Compliance",
    description: "Keep a clear record of user activity, data changes, permissions, and operational events.",
    icon: ShieldCheck
  }
];

export function SolutionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeUp>
            <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium tracking-wide mb-8 text-gray-800">
              The Solution
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-4xl md:text-5xl leading-[1.1] font-bold text-[#0f2419] max-w-[900px] mx-auto tracking-tight">
              SOMAS brings the full social transfer operation into one controlled workflow.
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              From campaign setup to payment monitoring, SOMAS gives teams a single operating layer for planning, executing, verifying, and reporting social payment programs.
            </p>
          </FadeUp>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Tabs */}
          <div className="w-full lg:w-5/12 relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-gray-100"></div>

            <div className="flex flex-col gap-8 relative">
              {features.map((feature, index) => {
                const isActive = index === activeTab;
                return (
                  <div 
                    key={index} 
                    className="relative cursor-pointer group"
                    onClick={() => setActiveTab(index)}
                  >
                    {/* Active Line & Dot */}
                    <div 
                      className={cn(
                        "absolute -left-[33px] w-[2px] bg-[#2c5f4f] transition-all duration-300 z-10",
                        isActive ? "h-full top-0 opacity-100" : "h-0 top-4 opacity-0"
                      )}
                    >
                      <div className={cn(
                        "absolute -left-[5px] top-3 w-3 h-3 rounded-full border-2 border-white bg-[#2c5f4f] transition-transform duration-300",
                        isActive ? "scale-100" : "scale-0"
                      )}></div>
                      {/* Outline ring for the dot like the reference image */}
                      <div className={cn(
                        "absolute -left-[9px] top-[8px] w-5 h-5 rounded-full border border-[#2c5f4f]/30 transition-transform duration-300",
                        isActive ? "scale-100" : "scale-0"
                      )}></div>
                    </div>

                    <h3 
                      className={cn(
                        "text-2xl md:text-3xl font-bold transition-colors duration-300 py-1",
                        isActive ? "text-[#0f2419]" : "text-gray-400 group-hover:text-gray-600"
                      )}
                    >
                      {feature.title}
                    </h3>
                    
                    <div 
                      className={cn(
                        "grid transition-all duration-300",
                        isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      )}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
                    >
                      <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.p
                              key={index}
                              className="text-[17px] text-gray-600 leading-relaxed pr-8"
                              initial={{ opacity: 0, transform: 'translateY(6px)' }}
                              animate={{ opacity: 1, transform: 'translateY(0px)' }}
                              exit={{ opacity: 0, transform: 'translateY(-4px)' }}
                              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                            >
                              {feature.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Graphic Visualizer */}
          <div className="w-full lg:w-7/12 sticky top-32">
            <div className="aspect-[4/3] w-full rounded-[40px] bg-[#f5faf7] border border-[#d4e9df] relative flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(44,95,79,0.08)]">
              
              {/* Dynamic Abstract Graphic based on activeTab */}
              <div className="relative w-full h-full flex items-center justify-center p-12">
                {/* Connecting lines background (similar to reference) */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full stroke-[#2c5f4f]" fill="none" strokeWidth="1">
                    <path d="M0 20% L30% 20% L30% 50% L70% 50% L70% 80% L100% 80%" />
                    <path d="M0 40% L40% 40% L40% 50%" />
                    <path d="M100 30% L60% 30% L60% 50%" />
                    <path d="M0 70% L20% 70% L20% 50%" />
                    <path d="M100 60% L80% 60% L80% 50%" />
                  </svg>
                </div>

                {/* Central Hub */}
                <div className="relative z-10 w-48 h-48 bg-white rounded-3xl border-2 border-[#2c5f4f]/20 shadow-xl flex items-center justify-center transition-all duration-500">
                  <div className="w-20 h-20 bg-[#fff5f2] rounded-2xl flex items-center justify-center border border-[#2c5f4f]/10">
                     {(() => {
                        const Icon = features[activeTab].icon;
                        return <Icon className="w-10 h-10 text-[#2c5f4f]" strokeWidth={1.5} />;
                     })()}
                  </div>
                  
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-3xl border border-[#2c5f4f] animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                </div>

                {/* Floating "Nodes" representing integrations/modules */}
                <div className={cn(
                  "absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-100",
                  activeTab % 2 === 0 ? "translate-y-4" : "-translate-y-4"
                )}>
                   <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                
                <div className={cn(
                  "absolute bottom-1/4 left-1/3 w-14 h-14 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-200",
                  activeTab % 3 === 0 ? "-translate-x-6" : "translate-x-2"
                )}>
                   <div className="w-5 h-5 rounded bg-green-500"></div>
                </div>

                <div className={cn(
                  "absolute top-1/3 right-1/4 w-10 h-10 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-300",
                  activeTab % 2 !== 0 ? "translate-y-6" : "-translate-y-2"
                )}>
                   <div className="w-3 h-3 rounded-sm bg-purple-500"></div>
                </div>

                <div className={cn(
                  "absolute bottom-1/3 right-1/3 w-16 h-16 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-150",
                  activeTab === 2 || activeTab === 4 ? "scale-110" : "scale-90"
                )}>
                   <div className="w-6 h-6 rounded-full border-2 border-yellow-500"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

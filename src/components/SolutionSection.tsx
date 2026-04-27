import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Settings, Users, ArrowRightLeft, MapPin, PiggyBank, ShieldCheck } from 'lucide-react';
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

type Props = {
  copy: {
    eyebrow: string
    title: string
    body: string
    features: readonly (readonly [string, string])[]
  }
}

function SolutionVisual({ activeTab }: { activeTab: number }) {
  return (
    <div className="aspect-[4/3] w-full rounded-[32px] md:rounded-[40px] bg-[#f5faf7] border border-[#d4e9df] relative flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(44,95,79,0.08)]">
      <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full stroke-[#2c5f4f]" fill="none" strokeWidth="1">
            <path d="M0 20% L30% 20% L30% 50% L70% 50% L70% 80% L100% 80%" />
            <path d="M0 40% L40% 40% L40% 50%" />
            <path d="M100 30% L60% 30% L60% 50%" />
            <path d="M0 70% L20% 70% L20% 50%" />
            <path d="M100 60% L80% 60% L80% 50%" />
          </svg>
        </div>

        <div className="relative z-10 w-36 h-36 md:w-48 md:h-48 bg-white rounded-3xl border-2 border-[#2c5f4f]/20 shadow-xl flex items-center justify-center transition-all duration-500">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#fff5f2] rounded-2xl flex items-center justify-center border border-[#2c5f4f]/10">
             {(() => {
                const Icon = features[activeTab].icon;
                return <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#2c5f4f]" strokeWidth={1.5} />;
             })()}
          </div>
          <div className="stable-pulse-ring absolute inset-0 rounded-3xl border border-[#2c5f4f]/20"></div>
        </div>

        <div className={cn(
          "absolute top-1/4 left-1/4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-100",
          activeTab % 2 === 0 ? "translate-y-4" : "-translate-y-4"
        )}>
           <div className="w-4 h-4 rounded-full bg-blue-500"></div>
        </div>
        
        <div className={cn(
          "absolute bottom-1/4 left-1/3 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-200",
          activeTab % 3 === 0 ? "-translate-x-6" : "translate-x-2"
        )}>
           <div className="w-5 h-5 rounded bg-green-500"></div>
        </div>

        <div className={cn(
          "absolute top-1/3 right-1/4 w-9 h-9 md:w-10 md:h-10 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-300",
          activeTab % 2 !== 0 ? "translate-y-6" : "-translate-y-2"
        )}>
           <div className="w-3 h-3 rounded-sm bg-purple-500"></div>
        </div>

        <div className={cn(
          "absolute bottom-1/3 right-1/3 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center transition-all duration-700 delay-150",
          activeTab === 2 || activeTab === 4 ? "scale-110" : "scale-90"
        )}>
           <div className="w-6 h-6 rounded-full border-2 border-yellow-500"></div>
        </div>
      </div>
    </div>
  )
}

export function SolutionSection({ copy }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeUp>
            <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium tracking-wide mb-8 text-gray-800">
              {copy.eyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-3xl md:text-5xl leading-[1.1] font-bold text-[#0f2419] max-w-[900px] mx-auto tracking-tight">
              {copy.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {copy.body}
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
                      {copy.features[index]?.[0] ?? feature.title}
                    </h3>
                    
                    <div 
                      className={cn(
                        "grid transition-all duration-300",
                        isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      )}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
                    >
                      <div className="overflow-hidden">
                        {isActive && (
                          <div className="pr-0 md:pr-8">
                            <p className="text-[17px] text-gray-600 leading-relaxed">
                              {copy.features[index]?.[1] ?? feature.description}
                            </p>
                            <div className="mt-6 block lg:hidden">
                              <SolutionVisual activeTab={index} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Graphic Visualizer */}
          <div className="hidden lg:block w-full lg:w-7/12 sticky top-32">
            <SolutionVisual activeTab={activeTab} />
          </div>

        </div>
      </div>
    </section>
  );
}

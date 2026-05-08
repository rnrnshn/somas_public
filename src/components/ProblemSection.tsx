import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const cards = [
  {
    title: "Register Beneficiaries",
    label: "Field App",
    text: "Field agents onboard beneficiaries, capture ID and wallet data, and segment by program criteria — online or offline.",
    visual: (
      <div className="flex items-center justify-center h-full w-full opacity-80">
        <div className="relative w-20 h-24 bg-white/5 rounded-xl border border-white/15 p-3 flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
            <svg className="w-5 h-5 text-white/40" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-full space-y-1.5">
            <div className="h-1 bg-white/20 rounded w-full"></div>
            <div className="h-1 bg-white/10 rounded w-3/4"></div>
            <div className="h-1 bg-white/10 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Configure Campaigns",
    label: "Backoffice",
    text: "Define disbursement amounts, frequency, eligible cohorts, and regional scope. Prepare bulk payment lists in minutes.",
    visual: (
      <div className="flex flex-col items-center justify-center h-full w-full opacity-80 gap-3 px-6">
        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="w-full max-w-[120px] space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[var(--problem-accent)]"></div>
            <div className="flex-1 h-0.5 bg-white/20 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[var(--problem-accent)]"></div>
            <div className="flex-1 h-0.5 bg-white/20 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm border border-white/20"></div>
            <div className="flex-1 h-0.5 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Execute Transfers",
    label: "Multi-Wallet",
    text: "Bulk disbursements go directly to M-Pesa, e-Mola, or mKesh wallets. Failed transfers are flagged instantly with fallback options.",
    visual: (
      <div className="flex items-center justify-center h-full w-full opacity-80 gap-3 px-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
          <div className="w-6 h-4 rounded-sm bg-white/20"></div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-0.5 bg-[var(--problem-accent)]"></div>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[var(--problem-accent)]"></div>
        </div>
        <div className="w-12 h-12 rounded-xl bg-[var(--problem-accent)]/20 border border-[var(--problem-accent)]/30 flex items-center justify-center">
          <div className="w-6 h-4 rounded-sm bg-[var(--problem-accent)]/40"></div>
        </div>
      </div>
    )
  },
  {
    title: "Monitor & Report",
    label: "Real-Time",
    text: "Live dashboards track success rates, beneficiary reach, and fund traceability. Export audit-ready reports for donors at any time.",
    visual: (
      <div className="flex items-end justify-center h-full w-full opacity-80 pb-4 px-6 gap-2">
        <div className="w-3 bg-white/20 rounded-t-sm h-[30%]"></div>
        <div className="w-3 bg-white/30 rounded-t-sm h-[50%]"></div>
        <div className="w-3 bg-[var(--problem-accent)] rounded-t-sm h-[80%]"></div>
        <div className="w-3 bg-white/20 rounded-t-sm h-[60%]"></div>
        <div className="w-3 bg-white/30 rounded-t-sm h-[45%]"></div>
      </div>
    )
  }
];

const bgColors = [
  "bg-[#111e18]", // Dark Green
  "bg-[#0f1a2e]", // Dark Blue
  "bg-[#1e1811]", // Dark Amber
  "bg-[#0f2a2a]"  // Dark Teal
];

const accentColors = [
  '#2c5f4f',
  '#3b82f6',
  '#f59e0b',
  '#14b8a6',
];

const accentGlowColors = [
  'rgba(44,95,79,0.5)',
  'rgba(59,130,246,0.5)',
  'rgba(245,158,11,0.5)',
  'rgba(20,184,166,0.5)',
];

type StepCard = {
  title: string
  label: string
  text: string
}

type Props = {
  copy: {
    eyebrow: string
    title: string
    muted: string
    body: string
    cards: readonly StepCard[]
  }
}

export function ProblemSection({ copy }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (window.matchMedia('(max-width: 767px)').matches) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const maxScroll = height - windowHeight;
      // When top is 0, progress is 0.
      // When top is -maxScroll, progress is 1.
      let currentProgress = -top / maxScroll;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      
      setScrollProgress(currentProgress);
      setActiveIndex(Math.min(cards.length - 1, Math.floor(currentProgress * cards.length)));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderCard = (card: (typeof cards)[number], index: number, className = '') => {
    const cardData = copy.cards[index] ?? card;
    return (
      <div
        key={index}
        className={cn(
          "rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden bg-[#182118] border border-white/5",
          className
        )}
        style={{
          '--problem-accent': accentColors[index],
          '--problem-accent-soft': `${accentColors[index]}4d`,
          '--problem-accent-glow': accentGlowColors[index],
        } as CSSProperties}
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="flex-1 relative mb-4 md:mb-6 rounded-xl bg-white/5 p-4 flex items-center justify-center">
          {card.visual}
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-white/30 text-sm font-mono font-medium">0{index + 1}</span>
            <span className="text-white font-semibold text-base">{cardData.title}</span>
          </div>
          <p className="text-white/70 text-[15px] leading-relaxed">
            {cardData.text}
          </p>
          <div className="mt-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/10 text-white/50 text-xs font-medium">
              {cardData.label}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const goToPreviousMobileCard = () => {
    setMobileActiveIndex((index) => (index === 0 ? cards.length - 1 : index - 1));
  };

  const goToNextMobileCard = () => {
    setMobileActiveIndex((index) => (index === cards.length - 1 ? 0 : index + 1));
  };

  return (
    <div 
      ref={containerRef} 
      // 400vh ensures a long scroll area for the 4 cards
      className="relative w-full md:h-[400vh]"
    >
      <div
        className={cn(
          "block md:hidden min-h-[100dvh] text-white px-6 pt-28 pb-[calc(5.5rem+env(safe-area-inset-bottom))] transition-colors duration-500",
          bgColors[mobileActiveIndex] || bgColors[0]
        )}
        data-theme="dark"
      >
        <div className="inline-block px-5 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide mb-8">
          {copy.eyebrow}
        </div>
        <h2 className="text-2xl leading-[1.05] font-medium mb-6 tracking-tight">
          {copy.title}
          <br />
          <span className="text-white/80">{copy.muted}</span>
        </h2>
        <p className="text-white/60 text-[16px] leading-relaxed max-w-lg mb-10">
          {copy.body}
        </p>

        <div className="w-full max-w-[360px]">
          {renderCard(
            cards[mobileActiveIndex],
            mobileActiveIndex,
            'relative w-full aspect-[4/3]'
          )}

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goToPreviousMobileCard}
              className="h-11 w-11 rounded-full border border-white/20 text-xl text-white transition-colors hover:bg-white/10"
              aria-label="Previous step"
            >
              ←
            </button>

            <div className="flex items-center gap-2" aria-label="Steps">
              {cards.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMobileActiveIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    index === mobileActiveIndex ? "w-8 bg-white" : "w-2.5 bg-white/30"
                  )}
                  aria-label={`Show step ${index + 1}`}
                  aria-current={index === mobileActiveIndex ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNextMobileCard}
              className="h-11 w-11 rounded-full border border-white/20 text-xl text-white transition-colors hover:bg-white/10"
              aria-label="Next step"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div 
        className={cn(
          "hidden md:block sticky top-0 h-screen w-full overflow-hidden transition-colors duration-1000 ease-in-out",
          bgColors[activeIndex] || bgColors[0]
        )}
        data-theme="dark"
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 pr-0 md:pr-16 z-10 text-white pt-28 md:pt-0">
            <div className="inline-block px-5 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide mb-8">
              {copy.eyebrow}
            </div>
            
            <h2 className="text-2xl md:text-5xl lg:text-[3.5rem] leading-[1.05] md:leading-[1.1] font-medium mb-6 md:mb-8 tracking-tight">
              {copy.title}
              <br />
              <span className="text-white/80">{copy.muted}</span>
            </h2>
            
            <p className="text-white/60 text-[16px] md:text-[17px] leading-relaxed max-w-lg">
              {copy.body}
            </p>
          </div>

          {/* Right Side: Cards Animation */}
          <div className="w-full md:w-1/2 h-[44vh] md:h-full relative flex items-start md:items-center justify-start md:justify-center perspective-[1000px] mt-8 md:mt-0 overflow-visible">
            {cards.map((card, index) => {
              // Continuous progress value (0 to 4)
              const progressVal = scrollProgress * (cards.length - 1);
              
              // offset is the distance from the currently active index
              const offset = index - progressVal;
              
              const translateY = offset * 450;
              const translateX = Math.abs(offset) * 80;
              const rotateZ = offset * 12;
              
              const opacity = Math.max(0, 1 - Math.abs(offset) * 0.7);
              const scale = Math.max(0.8, 1 - Math.abs(offset) * 0.1);
              const zIndex = 10 - Math.round(Math.abs(offset));

              const cardData = copy.cards[index] ?? card;
              return (
                <div
                  key={index}
                  className="absolute w-[90%] max-w-[420px] aspect-[4/3] rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden bg-[#182118] border border-white/5"
                  style={{
                    '--problem-accent': accentColors[index],
                    '--problem-accent-soft': `${accentColors[index]}4d`,
                    '--problem-accent-glow': accentGlowColors[index],
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) rotateZ(${rotateZ}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    willChange: 'transform, opacity',
                  } as CSSProperties}
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="flex-1 relative mb-4 rounded-xl bg-white/5 p-4 flex items-center justify-center">
                    {card.visual}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-white/30 text-sm font-mono font-medium">0{index + 1}</span>
                      <span className="text-white font-semibold text-base">{cardData.title}</span>
                    </div>
                    <p className="text-white/70 text-[15px] leading-relaxed">
                      {cardData.text}
                    </p>
                    <div className="mt-2.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/10 text-white/50 text-xs font-medium">
                        {cardData.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

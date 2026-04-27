import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const cards = [
  {
    text: "Beneficiary data becomes difficult to validate and update.",
    visual: (
      <div className="flex gap-3 items-end h-full w-full pb-6 opacity-80 px-4">
        <div className="problem-bar w-1/4 bg-white/20 rounded-t-md [--bar-height:30%] [--bar-delay:0ms]"></div>
        <div className="problem-bar w-1/4 bg-white/40 rounded-t-md [--bar-height:50%] [--bar-delay:140ms]"></div>
        <div className="problem-bar w-1/4 bg-[var(--problem-accent)] rounded-t-md relative [--bar-height:80%] [--bar-delay:280ms]">
          <div className="problem-arrow absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[var(--problem-accent)]"></div>
        </div>
        <div className="problem-bar w-1/4 bg-white/20 rounded-t-md [--bar-height:60%] [--bar-delay:420ms]"></div>
      </div>
    )
  },
  {
    text: "Campaign progress is hard to monitor across regions.",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center opacity-80">
        <svg viewBox="0 0 100 50" className="w-full h-auto fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round">
          <path className="problem-line stroke-[var(--problem-accent)]" pathLength="1" d="M5,40 Q20,10 35,30 T65,20 T95,10" />
          <path className="problem-line problem-line-muted stroke-white/30" pathLength="1" d="M5,45 Q25,20 40,35 T70,25 T95,5" />
        </svg>
      </div>
    )
  },
  {
    text: "Payment exceptions are discovered too late.",
    visual: (
      <div className="relative h-full w-full flex items-center justify-center opacity-80">
        <div className="w-20 h-20 border-4 border-[color:var(--problem-accent-soft)] rounded-full flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[var(--problem-accent)] rounded-full border-t-transparent animate-spin flex items-center justify-center">
             <span className="text-[var(--problem-accent)] font-bold text-xl animate-none">!</span>
          </div>
        </div>
      </div>
    )
  },
  {
    text: "Field verification is disconnected from backoffice decisions.",
    visual: (
      <div className="flex items-center justify-between h-full w-full opacity-80 px-8">
        <div className="problem-node w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
          <div className="w-6 h-6 rounded-sm bg-white/40"></div>
        </div>
        <div className="problem-dash flex-1 h-0.5 border-t-2 border-dashed border-white/20 mx-4"></div>
        <div className="problem-node problem-node-delay w-12 h-12 rounded-full bg-[var(--problem-accent)] flex items-center justify-center shadow-[0_0_15px_var(--problem-accent-glow)]">
           <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
      </div>
    )
  },
  {
    text: "Audit evidence is scattered across multiple systems.",
    visual: (
      <div className="grid grid-cols-4 gap-2 h-full w-full content-center opacity-80 px-4">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "problem-tile h-8 rounded-sm", 
              [2, 5, 8, 10].includes(i) ? "bg-[var(--problem-accent)]" : "bg-white/10",
              [1, 4, 9].includes(i) ? "bg-white/30" : ""
            )}
            style={{ animationDelay: `${i * 90}ms` }}
          ></div>
        ))}
      </div>
    )
  }
];

const bgColors = [
  "bg-[#111e18]", // Dark Greenish
  "bg-[#2a1310]", // Maroon
  "bg-[#191124]", // Dark Purple
  "bg-[#211815]", // Dark Brown
  "bg-[#0f172a]"  // Slate
];

const accentColors = [
  '#2c5f4f',
  '#ef6f61',
  '#8b5cf6',
  '#d08a4d',
  '#38bdf8',
];

const accentGlowColors = [
  'rgba(44,95,79,0.5)',
  'rgba(239,111,97,0.5)',
  'rgba(139,92,246,0.5)',
  'rgba(208,138,77,0.5)',
  'rgba(56,189,248,0.5)',
];

type Props = {
  copy: {
    eyebrow: string
    title: string
    muted: string
    body: string
    cards: readonly string[]
  }
}

export function ProblemSection({ copy }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
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
    
    handleResize();
    mediaQuery.addEventListener('change', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      // 500vh ensures a long scroll area for the 5 cards
      className="relative h-[500vh] w-full"
    >
      <div 
        className={cn(
          "sticky top-0 h-screen w-full overflow-hidden transition-colors duration-1000 ease-in-out",
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
              
              const translateY = isMobile ? 0 : offset * 450;
              const translateX = isMobile ? offset * 340 : Math.abs(offset) * 80;
              const rotateZ = isMobile ? 0 : offset * 12;
              
              const opacity = isMobile
                ? Math.max(0, 1 - Math.abs(offset) * 0.45)
                : Math.max(0, 1 - Math.abs(offset) * 0.7);
              const scale = isMobile
                ? Math.max(0.88, 1 - Math.abs(offset) * 0.06)
                : Math.max(0.8, 1 - Math.abs(offset) * 0.1);
              const zIndex = isMobile ? index + 10 : 10 - Math.round(Math.abs(offset));

              return (
                <div 
                  key={index}
                  className="absolute left-0 md:left-auto w-[82vw] md:w-[90%] max-w-[420px] aspect-[4/3] rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden bg-[#182118] border border-white/5"
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
                  {/* Glassy reflection top edge */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  {/* Decorative visual area */}
                  <div className="flex-1 relative mb-4 md:mb-6 rounded-xl bg-white/5 p-4 flex items-center justify-center">
                    {card.visual}
                  </div>
                  
                  <p className="text-white/90 text-[17px] md:text-[19px] font-medium leading-[1.25] md:leading-[1.3] relative z-10">
                    {copy.cards[index] ?? card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

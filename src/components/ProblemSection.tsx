import { useEffect, useRef, useState } from 'react';
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
        <div className="w-1/4 h-[30%] bg-white/20 rounded-t-md"></div>
        <div className="w-1/4 h-[50%] bg-white/40 rounded-t-md"></div>
        <div className="w-1/4 h-[80%] bg-[#ff6b4a] rounded-t-md relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#ff6b4a]"></div>
        </div>
        <div className="w-1/4 h-[60%] bg-white/20 rounded-t-md"></div>
      </div>
    )
  },
  {
    text: "Campaign progress is hard to monitor across regions.",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center opacity-80">
        <svg viewBox="0 0 100 50" className="w-full h-auto stroke-[#ff6b4a] stroke-[2] fill-none stroke-linecap-round stroke-linejoin-round">
          <path d="M5,40 Q20,10 35,30 T65,20 T95,10" />
          <path d="M5,45 Q25,20 40,35 T70,25 T95,5" className="stroke-white/30" />
        </svg>
      </div>
    )
  },
  {
    text: "Payment exceptions are discovered too late.",
    visual: (
      <div className="relative h-full w-full flex items-center justify-center opacity-80">
        <div className="w-20 h-20 border-4 border-[#ff6b4a]/30 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#ff6b4a] rounded-full border-t-transparent animate-spin flex items-center justify-center">
             <span className="text-[#ff6b4a] font-bold text-xl animate-none">!</span>
          </div>
        </div>
      </div>
    )
  },
  {
    text: "Field verification is disconnected from backoffice decisions.",
    visual: (
      <div className="flex items-center justify-between h-full w-full opacity-80 px-8">
        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
          <div className="w-6 h-6 rounded-sm bg-white/40"></div>
        </div>
        <div className="flex-1 h-0.5 border-t-2 border-dashed border-white/20 mx-4"></div>
        <div className="w-12 h-12 rounded-full bg-[#ff6b4a] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,74,0.5)]">
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
              "h-8 rounded-sm", 
              [2, 5, 8, 10].includes(i) ? "bg-[#ff6b4a]" : "bg-white/10",
              [1, 4, 9].includes(i) ? "bg-white/30" : ""
            )}
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

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="max-w-[1200px] mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 pr-0 md:pr-16 z-10 text-white pt-24 md:pt-0">
            <div className="inline-block px-5 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide mb-8">
              The Problem
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium mb-8 tracking-tight">
              Businesses only move as fast as their money.
              <br />
              <span className="text-white/80">But today, money moves in silos.</span>
            </h2>
            
            <p className="text-white/60 text-[17px] leading-relaxed max-w-lg">
              Payments are fragmented. Teams speak different languages. SOMAS is the foundation that connects it all, giving you the freedom to expand faster, streamline operations, and capture new opportunities.
            </p>
          </div>

          {/* Right Side: Cards Animation */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center perspective-[1000px]">
            {cards.map((card, index) => {
              // Continuous progress value (0 to 4)
              const progressVal = scrollProgress * (cards.length - 1);
              
              // offset is the distance from the currently active index
              const offset = index - progressVal;
              
              // Calculate circular arc animation values
              const translateY = offset * 450; // Increased to add gap between cards
              const translateX = Math.abs(offset) * 80; // Pushes outwards to create an arc
              const rotateZ = offset * 12; // Tilts the card
              
              // Fade out and shrink cards as they move away from center
              const opacity = Math.max(0, 1 - Math.abs(offset) * 0.7);
              const scale = Math.max(0.8, 1 - Math.abs(offset) * 0.1);
              const zIndex = 10 - Math.round(Math.abs(offset));

              return (
                <div 
                  key={index}
                  className="absolute w-[90%] max-w-[420px] aspect-[4/3] rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden bg-[#24252a] border border-white/5"
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) rotateZ(${rotateZ}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    willChange: 'transform, opacity',
                  }}
                >
                  {/* Glassy reflection top edge */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  {/* Decorative visual area */}
                  <div className="flex-1 relative mb-6 rounded-xl bg-white/5 p-4 flex items-center justify-center">
                    {card.visual}
                  </div>
                  
                  <p className="text-white/90 text-[19px] font-medium leading-[1.3] relative z-10">
                    {card.text}
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

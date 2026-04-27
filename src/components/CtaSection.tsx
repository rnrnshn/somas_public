import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-white py-32 px-4 md:px-6 flex flex-col items-center text-center border-t border-gray-100">
      <div className="max-w-4xl w-full flex flex-col items-center">
        
        {/* Pill */}
        <div className="inline-flex items-center px-5 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium tracking-wide mb-8 text-[#2b1411]">
          Get Started
        </div>
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#2b1411] tracking-tight mb-12 leading-[1.05] max-w-3xl">
          Run social transfer programs with clarity, control, and confidence.
        </h2>

        {/* Overlapping Avatars */}
        <div className="flex items-center justify-center mb-12">
          {/* Using UI faces placeholders for the demo to match the screenshot's human element */}
          <div className="flex">
            {[47, 33, 12, 44, 22].map((imgId, index) => (
              <div 
                key={imgId} 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden -ml-5 first:ml-0 shadow-sm transition-transform hover:-translate-y-1 hover:z-50"
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

        {/* Button */}
        <button className="px-8 py-4 rounded-full bg-[#ff6b4a] text-[#2b1411] text-[16px] font-semibold hover:bg-[#f05c3c] transition-all flex items-center gap-2 shadow-[0_4px_14px_0_rgba(255,107,74,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,74,0.23)] hover:-translate-y-0.5">
          Request a demo <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
}

import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { ProblemSection } from '../components/ProblemSection'
import { SolutionSection } from '../components/SolutionSection'
import { StackedCardsSection } from '../components/StackedCardsSection'
import { SecuritySection } from '../components/SecuritySection'
import { CtaSection } from '../components/CtaSection'
import { Footer } from '../components/Footer'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const handleScroll = () => {
      const darkElements = document.querySelectorAll('[data-theme="dark"]');
      let isOverDark = false;
      // The header is at top-4 (16px) with a height of 64px.
      // We check the middle of the header: 16 + 32 = 48px from top of viewport.
      const headerMid = 48;
      
      darkElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerMid && rect.bottom >= headerMid) {
          isOverDark = true;
        }
      });
      
      setHeaderTheme(isOverDark ? 'dark' : 'light');
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#ff6b4a]/20">
      {/* Top Banner */}
      <div className="bg-[#FAF2ED] text-xs font-medium py-3 flex justify-center items-center gap-1 cursor-pointer hover:underline text-gray-800">
        We just shipped new features in Q1. See what's new <ChevronRight className="w-3 h-3 ml-0.5" />
      </div>

      {/* Navigation */}
      <header className="sticky top-4 z-50 px-4 md:px-6 transition-all duration-300">
        <div 
          id="main-header"
          className={`max-w-[1200px] mx-auto h-[64px] rounded-full border px-4 md:px-6 flex items-center justify-between transition-all duration-300 backdrop-blur-2xl ${
            headerTheme === 'dark'
              ? 'bg-[#2b1411]/80 border-white/10 shadow-lg text-white'
              : 'bg-white/70 border-[#eedad0]/50 shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-[#2b1411]'
          }`}
        >
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="w-7 h-7 bg-[#ff6b4a] rounded flex flex-col justify-center items-center gap-0.5 shadow-sm">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-[#2b1411] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#2b1411] rounded-full"></div>
              </div>
              <div className="w-1.5 h-1.5 bg-[#2b1411] rounded-full self-start ml-[3px]"></div>
            </div>
            <span className={`font-semibold text-xl tracking-tight ml-1 transition-colors ${
              headerTheme === 'dark' ? 'text-white' : 'text-[#2b1411]'
            }`}>SOMAS</span>
          </div>
          
          <nav className={`hidden md:flex items-center gap-7 text-[15px] font-medium transition-colors ${
            headerTheme === 'dark' ? 'text-white/90' : 'text-[#2b1411]'
          }`}>
            <a href="#" className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#ff6b4a]'}`}>Product</a>
            <a href="#" className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#ff6b4a]'}`}>Modules</a>
            <a href="#" className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#ff6b4a]'}`}>Field Operations</a>
            <a href="#" className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#ff6b4a]'}`}>Compliance</a>
            <a href="#" className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#ff6b4a]'}`}>Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full bg-[#ff6b4a] text-[#2b1411] text-[14px] font-semibold hover:bg-[#f05c3c] transition-colors flex items-center gap-2">
              Request a demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300/80 text-[13px] font-medium text-gray-800 mb-10 hover:border-gray-400 transition-colors cursor-pointer">
            Social transfer infrastructure for institutions <ArrowRight className="w-3.5 h-3.5" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2b1411] leading-[1.05] mb-6">
            Manage social payments,
            <br />
            beneficiaries, and savings
            <br />
            <span className="text-[#ff6b4a]">in one secure platform.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-gray-600 max-w-[800px] mx-auto leading-relaxed mb-10">
            SOMAS helps governments, NGOs, and implementation partners run large-scale social transfer programs with operational clarity, real-time monitoring, and audit-ready controls.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <button className="px-7 py-3.5 rounded-full bg-[#ff6b4a] text-white text-[15px] font-medium hover:bg-[#f05c3c] transition-colors flex items-center gap-2">
              Request a demo <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-7 py-3.5 rounded-full text-gray-700 text-[15px] font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              See how it works
            </button>
          </div>

        </div>
      </main>

      {/* Trust / Metrics Section */}
      <section className="px-6 pb-24">
        <div className="max-w-[1200px] mx-auto bg-[#FAF2ED] rounded-[40px] p-10 md:p-16 relative overflow-hidden">
          {/* Decorative Sphere using CSS Radial Gradient */}
          <div 
            className="absolute -right-[20%] -bottom-[50%] w-[800px] h-[800px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fcdfcb 0%, #fab691 40%, #ed976b 80%, #d97f51 100%)',
              filter: 'blur(10px)'
            }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl leading-tight font-bold text-center text-[#2b1411] mb-12 max-w-[800px] mx-auto tracking-tight">
              Built for structured programs, multi-region operations, and accountable payment delivery.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white/40 border border-white/60 rounded-[24px] p-8 backdrop-blur-md shadow-sm">
                <div className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#ff6b4a] mb-3">$ Millions</div>
                <div className="text-[15px] font-medium text-gray-800">Total disbursed amount</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/40 border border-white/60 rounded-[24px] p-8 backdrop-blur-md shadow-sm">
                <div className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#ff6b4a] mb-3">1M+</div>
                <div className="text-[15px] font-medium text-gray-800">Total beneficiaries</div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/40 border border-white/60 rounded-[24px] p-8 backdrop-blur-md shadow-sm">
                <div className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#ff6b4a] mb-3">100+</div>
                <div className="text-[15px] font-medium text-gray-800">Active campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProblemSection />
      <SolutionSection />
      <StackedCardsSection />
      <SecuritySection />
      <CtaSection />
      <Footer />
    </div>
  )
}

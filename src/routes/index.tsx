import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { ProblemSection } from '../components/ProblemSection'
import { SolutionSection } from '../components/SolutionSection'
import { StackedCardsSection } from '../components/StackedCardsSection'
import { SecuritySection } from '../components/SecuritySection'
import { CtaSection } from '../components/CtaSection'
import { Footer } from '../components/Footer'
import { FadeUp } from '../components/FadeUp'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { siteSeo } from '../lib/seo'
import { landingCopy, type LandingLanguage } from '../lib/landing-copy'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: siteSeo.title },
      { name: 'description', content: siteSeo.description },
      { property: 'og:title', content: siteSeo.title },
      { property: 'og:description', content: siteSeo.description },
      { property: 'og:image', content: siteSeo.image },
      { name: 'twitter:title', content: siteSeo.title },
      { name: 'twitter:description', content: siteSeo.description },
      { name: 'twitter:image', content: siteSeo.image },
    ],
  }),
  component: Home,
})

// Staggered hero entry — only plays on mount, not on scroll
function HeroItem({ children, delay }: { children: React.ReactNode; delay: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(28px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState<LandingLanguage>('en')
  const copy = landingCopy[language]

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
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#2c5f4f]/20">
      <LanguageSwitcher language={language} onChange={setLanguage} />

      {/* Top Banner */}
      <div className="bg-[#f0f7f4] text-xs font-medium py-3 flex justify-center items-center gap-1 cursor-pointer hover:underline text-gray-800">
        {copy.topBanner} <ChevronRight className="w-3 h-3 ml-0.5" />
      </div>

      {/* Navigation */}
      <header className="sticky top-4 z-50 px-4 md:px-6 transition-all duration-300">
        <div 
          id="main-header"
          className={`max-w-[1200px] mx-auto h-[64px] rounded-full border px-4 md:px-6 flex items-center justify-between transition-all duration-300 backdrop-blur-2xl ${
            headerTheme === 'dark'
              ? 'bg-[#0f2419]/80 border-white/10 shadow-lg text-white'
              : 'bg-white/70 border-[#c8e0d5]/50 shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-[#0f2419]'
          }`}
        >
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="w-7 h-7 bg-[#2c5f4f] rounded flex flex-col justify-center items-center gap-0.5 shadow-sm">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div className="w-1.5 h-1.5 bg-white rounded-full self-start ml-[3px]"></div>
            </div>
            <span className={`font-semibold text-xl tracking-tight ml-1 transition-colors ${
              headerTheme === 'dark' ? 'text-white' : 'text-[#0f2419]'
            }`}>SOMAS</span>
          </div>
          
          <nav className={`hidden md:flex items-center gap-7 text-[15px] font-medium transition-colors ${
            headerTheme === 'dark' ? 'text-white/90' : 'text-[#0f2419]'
          }`}>
            {copy.nav.map((item) => (
              <a key={item} href="#" className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#2c5f4f]'}`}>{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="group px-5 py-2.5 rounded-full bg-[#2c5f4f] text-white text-[14px] font-semibold hover:bg-[#1e4a3c] transition-colors flex items-center gap-2">
              {copy.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <HeroItem delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300/80 text-[13px] font-medium text-gray-800 mb-10 hover:border-gray-400 transition-colors cursor-pointer">
              {copy.heroEyebrow} <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </HeroItem>

          {/* Headline */}
          <HeroItem delay={0.12}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0f2419] leading-[1.05] mb-6">
              {copy.heroTitle[0]}
              <br />
              {copy.heroTitle[1]}
              <br />
              <span className="text-[#2c5f4f]">{copy.heroAccent}</span>
            </h1>
          </HeroItem>

          {/* Subheadline */}
          <HeroItem delay={0.22}>
            <p className="text-base md:text-lg text-gray-600 max-w-[800px] mx-auto leading-relaxed mb-10">
              {copy.heroDescription}
            </p>
          </HeroItem>

          {/* CTAs */}
          <HeroItem delay={0.32}>
            <div className="flex items-center gap-4">
              <button className="group px-7 py-3.5 rounded-full bg-[#2c5f4f] text-white text-[15px] font-medium hover:bg-[#1e4a3c] transition-colors flex items-center gap-2">
                {copy.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
              </button>
              <button className="px-7 py-3.5 rounded-full text-gray-700 text-[15px] font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                {copy.secondaryCta}
              </button>
            </div>
          </HeroItem>

        </div>
      </main>

      {/* Trust / Metrics Section */}
      <section className="px-6 pb-24">
        <div className="max-w-[1200px] mx-auto bg-[#f0f7f4] rounded-[40px] p-10 md:p-16 relative overflow-hidden">
          {/* Decorative Sphere */}
          <div 
            className="absolute -right-[20%] -bottom-[50%] w-[800px] h-[800px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #b8ddc8 0%, #7fbe9e 40%, #4d9a72 80%, #2c7a52 100%)',
              filter: 'blur(10px)'
            }}
          ></div>

          <div className="relative z-10">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl leading-tight font-bold text-center text-[#0f2419] mb-12 max-w-[800px] mx-auto tracking-tight">
                {copy.trustTitle}
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeUp delay={0.06}>
                <div className="bg-white/40 border border-white/60 rounded-[24px] p-8 backdrop-blur-md shadow-sm">
                  <div className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#2c5f4f] mb-3">{copy.metrics[0]}</div>
                  <div className="text-[15px] font-medium text-gray-800">{copy.metricLabels[0]}</div>
                </div>
              </FadeUp>

              <FadeUp delay={0.12}>
                <div className="bg-white/40 border border-white/60 rounded-[24px] p-8 backdrop-blur-md shadow-sm">
                  <div className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#2c5f4f] mb-3">{copy.metrics[1]}</div>
                  <div className="text-[15px] font-medium text-gray-800">{copy.metricLabels[1]}</div>
                </div>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div className="bg-white/40 border border-white/60 rounded-[24px] p-8 backdrop-blur-md shadow-sm">
                  <div className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#2c5f4f] mb-3">{copy.metrics[2]}</div>
                  <div className="text-[15px] font-medium text-gray-800">{copy.metricLabels[2]}</div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <ProblemSection copy={copy.problem} />
      <SolutionSection copy={copy.solution} />
      <StackedCardsSection copy={copy.stacked} cta={copy.cta} />
      <SecuritySection copy={copy.compliance} />
      <CtaSection copy={copy.finalCta} cta={copy.cta} />
      <Footer copy={copy} />
    </div>
  )
}

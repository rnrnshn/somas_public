import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Menu, X } from 'lucide-react'
import { ProblemSection } from '../components/ProblemSection'
import { SolutionSection } from '../components/SolutionSection'
import { StackedCardsSection } from '../components/StackedCardsSection'
import { SecuritySection } from '../components/SecuritySection'
import { CtaSection } from '../components/CtaSection'
import { Footer } from '../components/Footer'
import { FadeUp } from '../components/FadeUp'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { SmoothScroll } from '../components/SmoothScroll'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { siteSeo } from '../lib/seo'
import { landingCopy, type LandingLanguage } from '../lib/landing-copy'

const navTargets = ['#overview', '#problem', '#solution', '#capabilities', '#compliance']

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isMobile || shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(28px)' }}
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#2c5f4f]/20">
      <SmoothScroll disabled={mobileMenuOpen} />
      {!mobileMenuOpen && <LanguageSwitcher language={language} onChange={setLanguage} />}

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
            {copy.nav.map((item, index) => (
              <a key={item} href={navTargets[index]} className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#2c5f4f]'}`}>{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="group hidden md:flex px-5 py-2.5 rounded-full bg-[#2c5f4f] !text-white text-[14px] font-semibold hover:bg-[#1e4a3c] transition-colors items-center gap-2">
              {copy.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className={`md:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                headerTheme === 'dark'
                  ? 'bg-white/10 text-white hover:bg-white/15'
                  : 'bg-[#2c5f4f] text-white hover:bg-[#1e4a3c]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 min-h-[100dvh] w-screen max-w-full overflow-hidden overscroll-contain bg-[#0f2419] text-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              className="flex min-h-[100dvh] w-full max-w-full flex-col overflow-hidden px-6 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[calc(7rem+env(safe-area-inset-top))]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, delay: 0.04, ease: [0.23, 1, 0.32, 1] }}
            >
              <nav className="flex max-w-full flex-col gap-2 overflow-hidden text-3xl font-semibold tracking-tight">
                {copy.nav.map((item, index) => (
                  <a
                    key={item}
                    href={navTargets[index]}
                    onClick={() => setMobileMenuOpen(false)}
                    className="max-w-full rounded-2xl px-4 py-4 transition-colors hover:bg-white/10"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold !text-[#0f2419] transition-colors hover:bg-[#f0f7f4]"
                >
                  {copy.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main id="overview" className="scroll-mt-28 pt-24 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <HeroItem delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300/80 text-[13px] font-medium text-gray-800 mb-10 hover:border-gray-400 transition-colors cursor-pointer">
              {copy.heroEyebrow} <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </HeroItem>

          {/* Headline */}
          <HeroItem delay={0.12}>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-[#0f2419] leading-[1.05] mb-6">
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
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#contact" className="group w-full sm:w-auto justify-center px-7 py-3.5 rounded-full bg-[#2c5f4f] !text-white text-[15px] font-medium hover:bg-[#1e4a3c] transition-colors flex items-center gap-2">
                {copy.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
              </a>
              <a href="#solution" className="w-full sm:w-auto justify-center px-7 py-3.5 rounded-full text-gray-700 text-[15px] font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                {copy.secondaryCta}
              </a>
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
              <h2 className="text-2xl md:text-4xl leading-tight font-bold text-center text-[#0f2419] mb-12 max-w-[800px] mx-auto tracking-tight">
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

      <div id="problem" className="scroll-mt-24">
        <ProblemSection copy={copy.problem} />
      </div>
      <div id="solution" className="scroll-mt-24">
        <SolutionSection copy={copy.solution} />
      </div>
      <div id="capabilities" className="scroll-mt-24">
        <StackedCardsSection copy={copy.stacked} cta={copy.cta} />
      </div>
      <div id="compliance" className="scroll-mt-24">
        <SecuritySection copy={copy.compliance} />
      </div>
      <div id="contact" className="scroll-mt-24">
        <CtaSection copy={copy.finalCta} cta={copy.cta} />
      </div>
      <Footer copy={copy} />
    </div>
  )
}

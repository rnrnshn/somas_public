import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

type Props = {
  nav: readonly string[]
  cta: string
}

const navTargets = ['#mission', '#platform', '#use-cases', '#pricing', '#contact']

export function SiteHeader({ nav, cta }: Props) {
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const darkElements = document.querySelectorAll('[data-theme="dark"]')
      const headerMid = 48
      let isOverDark = false

      darkElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top <= headerMid && rect.bottom >= headerMid) isOverDark = true
      })

      setHeaderTheme(isOverDark ? 'dark' : 'light')
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
    <>
      <header className="sticky top-4 z-50 px-4 md:px-6 transition-all duration-300">
        <div
          className={`mx-auto flex h-[64px] max-w-[1200px] items-center justify-between rounded-full border px-4 backdrop-blur-2xl transition-all duration-300 md:px-6 ${
            headerTheme === 'dark'
              ? 'border-white/10 bg-[#0f2419]/80 text-white shadow-lg'
              : 'border-[#c8e0d5]/50 bg-white/70 text-[#0f2419] shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
          }`}
        >
          <a href="#overview" className="flex items-center gap-2">
            <div className="flex h-7 w-7 flex-col items-center justify-center gap-0.5 rounded bg-[#2c5f4f] shadow-sm">
              <div className="flex gap-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
              <div className="ml-[3px] h-1.5 w-1.5 self-start rounded-full bg-white" />
            </div>
            <span className="ml-1 text-xl font-semibold tracking-tight">SOMAS</span>
          </a>

          <nav className="hidden items-center gap-7 text-[15px] font-medium md:flex">
            {nav.map((item, index) => (
              <a
                key={item}
                href={navTargets[index]}
                className={headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-[#2c5f4f]'}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-[#2c5f4f] px-5 py-2.5 text-[14px] font-semibold !text-white transition-colors hover:bg-[#1e4a3c] md:flex"
            >
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-[160ms] group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden ${
                headerTheme === 'dark'
                  ? 'bg-white/10 text-white hover:bg-white/15'
                  : 'bg-[#2c5f4f] text-white hover:bg-[#1e4a3c]'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-40 min-h-[100dvh] bg-[#0f2419] px-6 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-[calc(7rem+env(safe-area-inset-top))] text-white md:hidden">
          <nav className="flex flex-col gap-2 text-3xl font-semibold tracking-tight">
            {nav.map((item, index) => (
              <a
                key={item}
                href={navTargets[index]}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-4 transition-colors hover:bg-white/10"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold !text-[#0f2419] transition-colors hover:bg-[#f0f7f4]"
            >
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-[160ms] group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      ) : null}
    </>
  )
}

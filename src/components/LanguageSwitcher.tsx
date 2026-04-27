import type { LandingLanguage } from '../lib/landing-copy'

type Props = {
  language: LandingLanguage
  onChange: (language: LandingLanguage) => void
}

const languages: Array<{ code: LandingLanguage; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
]

export function LanguageSwitcher({ language, onChange }: Props) {
  return (
    <div className="fixed right-[max(1rem,env(safe-area-inset-right))] top-[calc(5.5rem+env(safe-area-inset-top))] z-[60] rounded-full border border-[#c8e0d5] bg-white/90 p-1 shadow-lg backdrop-blur-xl md:bottom-5 md:right-5 md:top-auto">
      <div className="flex items-center gap-1" aria-label="Select language">
        {languages.map((item) => {
          const isActive = item.code === language
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => onChange(item.code)}
              aria-pressed={isActive}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors active:scale-100 ${
                isActive
                  ? 'bg-[#2c5f4f] text-white'
                  : 'text-[#0f2419] hover:bg-[#f0f7f4]'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

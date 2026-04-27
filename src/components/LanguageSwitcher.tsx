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
    <div className="fixed bottom-5 right-5 z-[60] rounded-full border border-[#c8e0d5] bg-white/90 p-1 shadow-lg backdrop-blur-xl">
      <div className="flex items-center gap-1" aria-label="Select language">
        {languages.map((item) => {
          const isActive = item.code === language
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => onChange(item.code)}
              aria-pressed={isActive}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
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

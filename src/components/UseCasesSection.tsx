import { FadeUp } from './FadeUp'

type Props = {
  copy: {
    eyebrow: string
    title: string
    body: string
    items: readonly {
      icon: string
      type: string
      name: string
      description: string
      tags: readonly string[]
    }[]
  }
}

export function UseCasesSection({ copy }: Props) {
  return (
    <section id="use-cases" className="scroll-mt-24 px-6 py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <FadeUp>
            <div className="mb-8 inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-[13px] font-medium tracking-wide text-gray-800">
              {copy.eyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-3xl font-bold tracking-tight text-[#0f2419] md:text-5xl">{copy.title}</h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">{copy.body}</p>
          </FadeUp>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {copy.items.map((item) => (
            <div key={item.name} className="rounded-[32px] border border-[#d4e9df] bg-white p-8 shadow-[0_18px_45px_rgba(44,95,79,0.06)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0f7f4] text-2xl">
                {item.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2c5f4f]/70">{item.type}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#0f2419]">{item.name}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#d4e9df] bg-[#f7fbf9] px-3 py-1 text-sm text-[#2c5f4f]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

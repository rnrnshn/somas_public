import { FadeUp } from './FadeUp'

type Props = {
  copy: {
    eyebrow: string
    title: string
    body: string
    blocks: readonly {
      label: string
      value: string
      href: string
    }[]
    form: {
      name: string
      email: string
      organization: string
      organizationType: string
      message: string
      submit: string
      options: readonly string[]
    }
  }
}

export function ContactSection({ copy }: Props) {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#111c15] px-6 py-28 text-white" data-theme="dark">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14">
          <FadeUp>
            <div className="mb-8 inline-flex items-center rounded-full border border-white/15 px-5 py-1.5 text-[13px] font-medium tracking-wide text-[#d3eadf]">
              {copy.eyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{copy.title}</h2>
          </FadeUp>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="max-w-[42ch] text-lg leading-relaxed text-white/68">{copy.body}</p>
            <div className="mt-10 space-y-8">
              {copy.blocks.map((block) => (
                <div key={block.label}>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8cc6aa]">{block.label}</div>
                  <a href={block.href} className="mt-2 block text-2xl font-medium text-white transition-colors hover:text-[#8cc6aa]">
                    {block.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35" placeholder={copy.form.name} />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35" placeholder={copy.form.email} type="email" />
            </div>
            <input className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35" placeholder={copy.form.organization} />
            <select defaultValue="" className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
              <option value="" disabled className="text-[#0f2419]">
                {copy.form.organizationType}
              </option>
              {copy.form.options.map((option) => (
                <option key={option} className="text-[#0f2419]">
                  {option}
                </option>
              ))}
            </select>
            <textarea className="mt-4 min-h-[160px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35" placeholder={copy.form.message} />
            <button type="submit" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#0f2419] transition-colors hover:bg-[#f0f7f4]">
              {copy.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

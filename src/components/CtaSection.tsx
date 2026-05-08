import { ArrowRight, Mail, Phone, Users } from 'lucide-react';
import { FadeUp } from './FadeUp';

export function CtaSection({ copy }: {
  copy: {
    eyebrow: string
    title: string
    body: string
    general: string
    generalEmail: string
    partnerships: string
    partnershipsEmail: string
    phoneLabel: string
    phone: string
    form: {
      name: string
      email: string
      organization: string
      orgType: string
      message: string
      submit: string
    }
  }
}) {
  return (
    <section className="bg-white py-20 md:py-28 px-6 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div>
            <FadeUp>
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#2c5f4f] mb-6 block">
                {copy.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 className="text-4xl md:text-[3.5rem] leading-[1.05] font-bold text-[#0f2419] tracking-tight mb-8">
                {copy.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-lg text-gray-600 leading-relaxed mb-14 max-w-md">
                {copy.body}
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="space-y-8">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">
                    {copy.general}
                  </span>
                  <a href={`mailto:${copy.generalEmail}`} className="text-[15px] font-semibold text-[#0f2419] hover:text-[#2c5f4f] transition-colors">
                    {copy.generalEmail}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">
                    {copy.partnerships}
                  </span>
                  <a href={`mailto:${copy.partnershipsEmail}`} className="text-[15px] font-semibold text-[#0f2419] hover:text-[#2c5f4f] transition-colors">
                    {copy.partnershipsEmail}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">
                    {copy.phoneLabel}
                  </span>
                  <a href={`tel:${copy.phone.replace(/\s/g, '')}`} className="text-[15px] font-semibold text-[#0f2419] hover:text-[#2c5f4f] transition-colors">
                    {copy.phone}
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column — Form */}
          <FadeUp delay={0.1}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={copy.form.name}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[15px] text-[#0f2419] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c5f4f]/20 focus:border-[#2c5f4f]/30 transition-all"
                />
                <input
                  type="email"
                  placeholder={copy.form.email}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[15px] text-[#0f2419] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c5f4f]/20 focus:border-[#2c5f4f]/30 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder={copy.form.organization}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[15px] text-[#0f2419] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c5f4f]/20 focus:border-[#2c5f4f]/30 transition-all"
              />
              <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[15px] text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c5f4f]/20 focus:border-[#2c5f4f]/30 transition-all appearance-none cursor-pointer">
                <option value="">{copy.form.orgType}</option>
                <option value="ngo">NGO / Humanitarian</option>
                <option value="government">Government</option>
                <option value="corporate">Corporate / CSR</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder={copy.form.message}
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-[15px] text-[#0f2419] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c5f4f]/20 focus:border-[#2c5f4f]/30 transition-all resize-none"
              />
              <button
                type="submit"
                className="group px-8 py-4 rounded-full bg-[#2c5f4f] text-white text-[15px] font-semibold hover:bg-[#1e4a3c] transition-colors flex items-center gap-2 shadow-[0_4px_14px_0_rgba(44,95,79,0.3)] hover:shadow-[0_6px_20px_rgba(44,95,79,0.2)]"
              >
                {copy.form.submit}
                <ArrowRight className="w-4 h-4 transition-transform duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

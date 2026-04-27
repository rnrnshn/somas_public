import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      ['Overview', '#overview'],
      ['Problem', '#problem'],
      ['Solution', '#solution'],
    ],
  },
  {
    title: 'Capabilities',
    links: [
      ['Campaign management', '#capabilities'],
      ['Field operations', '#capabilities'],
      ['Savings programs', '#capabilities'],
    ],
  },
  {
    title: 'Trust',
    links: [
      ['Compliance', '#compliance'],
      ['Audit workflows', '#compliance'],
      ['Role governance', '#compliance'],
    ],
  },
  {
    title: 'Contact',
    links: [
      ['Request a demo', '#contact'],
      ['Talk to the team', '#contact'],
    ],
  },
];

type Props = {
  copy: {
    footerText: string
  }
}

export function Footer({ copy }: Props) {
  return (
    <footer className="bg-[#f0f7f4] text-[#0f2419] pt-20 pb-12 px-4 md:px-6 border-t border-[#c8e0d5]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2c5f4f] rounded flex flex-col justify-center items-center gap-0.5 shadow-sm">
              <div className="flex gap-[3px]">
                <div className="w-1.5 h-1.5 bg-[#0f2419] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#0f2419] rounded-full"></div>
              </div>
              <div className="w-1.5 h-1.5 bg-[#0f2419] rounded-full self-start ml-[5px]"></div>
            </div>
            <span className="font-bold text-3xl tracking-tight text-[#0f2419] ml-1">SOMAS</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="w-10 h-10 rounded-full bg-[#0f2419] !text-[#f0f7f4] flex items-center justify-center hover:bg-[#2c5f4f] transition-colors">
              <Facebook className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0f2419] !text-[#f0f7f4] flex items-center justify-center hover:bg-[#2c5f4f] transition-colors">
              {/* Custom X Logo since Lucide's Twitter is the bird */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0f2419] !text-[#f0f7f4] flex items-center justify-center hover:bg-[#2c5f4f] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0f2419] !text-[#f0f7f4] flex items-center justify-center hover:bg-[#2c5f4f] transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0f2419] !text-[#f0f7f4] flex items-center justify-center hover:bg-[#2c5f4f] transition-colors">
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0f2419]/50">
                {group.title}
              </p>
              <div className="flex flex-col gap-3">
                {group.links.map(([label, href]) => (
                  <a key={label} href={href} className="text-[#0f2419] text-[15px] font-medium hover:text-[#2c5f4f] transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal Text */}
        <div className="flex flex-col gap-4 pt-16 mt-8 border-t border-[#c8e0d5]/50 text-sm text-[#0f2419]/80">
          <p className="font-semibold">© SOMAS 2026</p>
          <p className="leading-relaxed">
            {copy.footerText}
          </p>
        </div>

      </div>
    </footer>
  );
}

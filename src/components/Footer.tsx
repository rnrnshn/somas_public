import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#FAF2ED] text-[#2b1411] pt-20 pb-12 px-4 md:px-6 border-t border-[#eedad0]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff6b4a] rounded flex flex-col justify-center items-center gap-0.5 shadow-sm">
              <div className="flex gap-[3px]">
                <div className="w-1.5 h-1.5 bg-[#2b1411] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#2b1411] rounded-full"></div>
              </div>
              <div className="w-1.5 h-1.5 bg-[#2b1411] rounded-full self-start ml-[5px]"></div>
            </div>
            <span className="font-bold text-3xl tracking-tight text-[#2b1411] ml-1">SOMAS</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="w-10 h-10 rounded-full bg-[#2b1411] !text-[#FAF2ED] flex items-center justify-center hover:bg-[#ff6b4a] transition-colors">
              <Facebook className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2b1411] !text-[#FAF2ED] flex items-center justify-center hover:bg-[#ff6b4a] transition-colors">
              {/* Custom X Logo since Lucide's Twitter is the bird */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2b1411] !text-[#FAF2ED] flex items-center justify-center hover:bg-[#ff6b4a] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2b1411] !text-[#FAF2ED] flex items-center justify-center hover:bg-[#ff6b4a] transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2b1411] !text-[#FAF2ED] flex items-center justify-center hover:bg-[#ff6b4a] transition-colors">
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          <div className="flex flex-col gap-5">
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Legal</a>
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Complaints</a>
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Intellectual property</a>
          </div>

          <div className="flex flex-col gap-5">
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Privacy policy</a>
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Country site map</a>
          </div>

          <div className="flex flex-col gap-5">
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Cookie policy</a>
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Modern slavery statement</a>
          </div>

          <div className="flex flex-col gap-5">
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Research privacy policy</a>
            <a href="#" className="text-[#2b1411] text-[15px] font-medium hover:text-[#ff6b4a] transition-colors">Accessibility</a>
          </div>

        </div>

        {/* Bottom Section: Legal Text */}
        <div className="flex flex-col gap-4 pt-16 mt-8 border-t border-[#eedad0]/50 text-sm text-[#2b1411]/80">
          <p className="font-semibold">© SOMAS 2026</p>
          <p className="leading-relaxed">
            SOMAS is a platform built for secure social transfers, providing infrastructure for large-scale beneficiary payments, field verification, and savings operations. SOMAS supports audit-ready workflows designed for institutions, NGOs, and governments.
          </p>
        </div>

      </div>
    </footer>
  );
}

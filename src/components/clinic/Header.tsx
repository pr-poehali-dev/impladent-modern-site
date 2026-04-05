import Icon from "@/components/ui/icon";
import { CLINIC_PHONE, CLINIC_PHONE_RAW, navLinks } from "./constants";

interface HeaderProps {
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function Header({ scrolled, mobileOpen, setMobileOpen, scrollTo }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/97 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-[#1a2e4a] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Cormorant', serif" }}>И</span>
            </div>
            <div>
              <div className="font-bold text-xl text-[#1a2e4a] leading-tight tracking-wide" style={{ fontFamily: "'Cormorant', serif" }}>ИмплаДент</div>
              <div className="text-[10px] text-[#6b7f93] tracking-widest uppercase leading-tight">Стоматологическая клиника</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${CLINIC_PHONE_RAW}`} className="flex items-center gap-2 text-[#1a2e4a] font-semibold hover:text-[#c9963a] transition-colors">
              <Icon name="Phone" size={16} className="text-[#c9963a]" />
              {CLINIC_PHONE}
            </a>
          </div>

          <button className="lg:hidden p-2 text-[#1a2e4a]" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 mb-5">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="nav-link text-base">
                {l.label}
              </a>
            ))}
          </nav>
          <a href={`tel:${CLINIC_PHONE_RAW}`} className="flex items-center gap-2 text-[#1a2e4a] font-semibold">
            <Icon name="Phone" size={16} className="text-[#c9963a]" />
            {CLINIC_PHONE}
          </a>
        </div>
      )}
    </header>
  );
}

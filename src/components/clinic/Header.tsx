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
            className="flex items-center"
          >
            <img
              src="https://cdn.poehali.dev/files/5816825e-2a51-42e5-882e-861318d12866.png"
              alt="ИмплаДент"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${CLINIC_PHONE_RAW}`} className="flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#5ba3c9] transition-colors">
              <Icon name="Phone" size={16} className="text-[#5ba3c9]" />
              {CLINIC_PHONE}
            </a>
          </div>

          <button className="lg:hidden p-2 text-[#1e3a5f]" onClick={() => setMobileOpen(!mobileOpen)}>
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
          <a href={`tel:${CLINIC_PHONE_RAW}`} className="flex items-center gap-2 text-[#1e3a5f] font-semibold">
            <Icon name="Phone" size={16} className="text-[#5ba3c9]" />
            {CLINIC_PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
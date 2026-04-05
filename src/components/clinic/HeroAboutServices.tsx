import { RefObject } from "react";
import Icon from "@/components/ui/icon";
import { CLINIC_PHONE, CLINIC_PHONE_RAW, HERO_IMG, services } from "./constants";

interface HeroAboutServicesProps {
  scrollTo: (href: string) => void;
  aboutRef: RefObject<HTMLDivElement>;
  servicesRef: RefObject<HTMLDivElement>;
}

export default function HeroAboutServices({ scrollTo, aboutRef, servicesRef }: HeroAboutServicesProps) {
  return (
    <>
      {/* ─── HERO ─── */}
      <section id="home" className="pt-16 lg:pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Клиника ИмплаДент" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/92 via-[#1e3a5f]/72 to-[#1e3a5f]/25" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#5ba3c9]" />
              <span className="text-white/90 text-xs tracking-widest uppercase font-medium">Стоматологическая клиника</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
              Имплантация
              <br />
              <span className="text-[#7ec4e0] italic">под ключ</span>
              <br />
              за 1 день
            </h1>

            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="h-px bg-[#5ba3c9] w-10" />
              <p className="text-white/80 text-lg">
                Гарантия <strong className="text-white">10 лет</strong> на имплантаты
              </p>
            </div>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed">
              Более 5 000 успешных имплантаций. Швейцарские и немецкие системы.
              Собственная зуботехническая лаборатория прямо в клинике.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacts"
                onClick={(e) => { e.preventDefault(); scrollTo("#contacts"); }}
                className="inline-flex items-center justify-center gap-2 bg-[#4a90b8] hover:bg-[#3a7fa6] text-white font-semibold px-8 py-4 transition-colors duration-200"
              >
                <Icon name="Calendar" size={18} />
                Записаться на консультацию
              </a>
              <a
                href={`tel:${CLINIC_PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-4 transition-colors duration-200"
              >
                <Icon name="Phone" size={18} />
                {CLINIC_PHONE}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              {[
                { num: "17+", label: "лет опыта" },
                { num: "5 000+", label: "имплантаций" },
                { num: "10 лет", label: "гарантия" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-[#7ec4e0]" style={{ fontFamily: "'Cormorant', serif" }}>{s.num}</div>
                  <div className="text-white/60 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 lg:py-28 bg-[#f5f7fa]">
        <div ref={aboutRef} className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="reveal gold-line">
                <span className="text-xs tracking-widest uppercase text-[#6b7f93] font-medium">О клинике</span>
              </div>
              <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-2 mb-6 leading-tight" style={{ fontFamily: "'Cormorant', serif" }}>
                Лучшее оборудование.<br />
                <span className="italic text-[#4a90b8]">Опытные руки.</span>
              </h2>
              <p className="reveal reveal-delay-2 text-[#6b8fa8] text-base lg:text-lg leading-relaxed mb-5">
                ИмплаДент — клиника нового поколения, где высокие технологии встречаются с многолетним опытом.
                Наши хирурги работают в имплантологии от 10 до 18 лет, прошли стажировки в Германии, Израиле и Швейцарии.
              </p>
              <p className="reveal reveal-delay-3 text-[#6b8fa8] text-base lg:text-lg leading-relaxed">
                Собственная зуботехническая лаборатория позволяет изготавливать коронки прямо в клинике —
                без посредников, быстрее и точнее. Цифровой 3D-сканер, томограф, CAD/CAM-фрезеровка
                обеспечивают идеальную точность каждой работы.
              </p>

              <div className="reveal reveal-delay-4 grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "Award", text: "Опыт врачей от 10 лет" },
                  { icon: "Cpu", text: "Современное оборудование" },
                  { icon: "Building2", text: "Собственная лаборатория" },
                  { icon: "ShieldCheck", text: "Гарантия 10 лет" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 bg-white border border-gray-200 flex items-center justify-center mt-0.5">
                      <Icon name={item.icon} size={16} className="text-[#4a90b8]" />
                    </div>
                    <span className="text-[#1e3a5f] text-sm font-medium leading-snug pt-1">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2 relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={HERO_IMG} alt="Клиника" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#4a90b8] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div ref={servicesRef} className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <div className="reveal inline-block gold-line">
              <span className="text-xs tracking-widest uppercase text-[#6b7f93] font-medium">Наши услуги</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-2" style={{ fontFamily: "'Cormorant', serif" }}>
              Всё для вашей улыбки
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i + 1} group border border-gray-200 p-6 lg:p-8 hover:border-[#4a90b8] hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className="w-12 h-12 bg-[#eef5fa] group-hover:bg-[#4a90b8] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon name={s.icon} size={22} className="text-[#4a90b8] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 leading-tight" style={{ fontFamily: "'Cormorant', serif" }}>{s.title}</h3>
                <p className="text-[#6b8fa8] text-sm leading-relaxed flex-1 mb-4">{s.desc}</p>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="font-bold text-[#1e3a5f] text-base">{s.price}</span>
                  <button className="text-xs font-semibold text-[#4a90b8] hover:text-[#1e3a5f] transition-colors uppercase tracking-wide">
                    Подробнее →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
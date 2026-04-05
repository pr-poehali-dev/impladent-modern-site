import { RefObject, useState } from "react";
import Icon from "@/components/ui/icon";
import {
  CLINIC_PHONE, CLINIC_PHONE_RAW, CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_HOURS,
  navLinks, doctors, reviews,
} from "./constants";

interface DoctorsReviewsFooterProps {
  scrollTo: (href: string) => void;
  doctorsRef: RefObject<HTMLDivElement>;
  reviewsRef: RefObject<HTMLDivElement>;
  contactsRef: RefObject<HTMLDivElement>;
}

export default function DoctorsReviewsFooter({ scrollTo, doctorsRef, reviewsRef, contactsRef }: DoctorsReviewsFooterProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  return (
    <>
      <div className="section-divider" />

      {/* ─── DOCTORS ─── */}
      <section id="doctors" className="py-20 lg:py-28 bg-[#f5f7fa]">
        <div ref={doctorsRef} className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <div className="reveal inline-block gold-line">
              <span className="text-xs tracking-widest uppercase text-[#6b7f93] font-medium">Специалисты</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-2" style={{ fontFamily: "'Cormorant', serif" }}>
              Наши врачи
            </h2>
            <p className="reveal reveal-delay-2 text-[#6b8fa8] mt-3 max-w-xl mx-auto">
              Команда сертифицированных специалистов с опытом работы от 10 лет
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {doctors.map((d, i) => (
              <div
                key={d.name}
                className={`reveal reveal-delay-${i + 1} group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1e3a5f] text-base leading-tight mb-1" style={{ fontFamily: "'Cormorant', serif" }}>{d.name}</h3>
                  <div className="text-[#4a90b8] text-xs font-semibold uppercase tracking-wide mb-2">{d.spec}</div>
                  <p className="text-[#6b8fa8] text-xs leading-relaxed">{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="py-20 lg:py-28 bg-white">
        <div ref={reviewsRef} className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <div className="reveal inline-block gold-line">
              <span className="text-xs tracking-widest uppercase text-[#6b7f93] font-medium">Отзывы пациентов</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-2" style={{ fontFamily: "'Cormorant', serif" }}>
              Что говорят о нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`reveal reveal-delay-${i + 1} border p-6 hover:shadow-md transition-shadow duration-300 ${
                  r.handwritten ? "border-[#4a90b8] bg-[#eef5fa]" : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[#f5a623] text-lg tracking-widest">★★★★★</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-1 ${
                    r.handwritten ? "bg-[#4a90b8] text-white" : "bg-[#eef5fa] text-[#6b8fa8]"
                  }`}>
                    {r.source}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    r.handwritten ? "text-[#1e3a5f] text-base" : "text-[#6b8fa8]"
                  }`}
                  style={r.handwritten ? { fontFamily: "'Caveat', cursive" } : {}}
                >
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e3a5f] text-sm">{r.name}</div>
                    <div className="text-[#6b8fa8] text-xs">{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section id="contacts" className="py-20 lg:py-28 bg-[#1e3a5f]">
        <div ref={contactsRef} className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="reveal flex justify-center mb-4">
              <div className="w-12 h-0.5 bg-[#5ba3c9]" />
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
              Запишитесь на<br />
              <span className="italic text-[#7ec4e0]">бесплатную консультацию</span>
            </h2>
            <p className="reveal reveal-delay-2 text-white/60 mb-10">
              Оставьте номер — перезвоним в течение 15 минут и подберём удобное время
            </p>

            <form
              className="reveal reveal-delay-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Спасибо! Мы перезвоним вам в течение 15 минут.");
                setFormData({ name: "", phone: "" });
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-4 focus:outline-none focus:border-[#5ba3c9] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-4 focus:outline-none focus:border-[#5ba3c9] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#4a90b8] hover:bg-[#3a7fa6] text-white font-semibold px-8 py-4 transition-colors duration-200 whitespace-nowrap"
                >
                  Записаться
                </button>
              </div>
              <p className="text-white/30 text-xs mt-4">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── MAP & FOOTER ─── */}
      <footer id="map" className="bg-[#0f2035]">
        <div className="w-full h-64 bg-[#1e3a5f] flex items-center justify-center relative overflow-hidden cursor-pointer group">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="text-center z-10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-[#4a90b8] flex items-center justify-center mx-auto mb-3">
              <Icon name="MapPin" size={28} className="text-white" />
            </div>
            <div className="text-white font-bold text-xl" style={{ fontFamily: "'Cormorant', serif" }}>{CLINIC_ADDRESS}</div>
            <div className="text-white/50 text-sm mt-1">Нажмите, чтобы открыть маршрут</div>
          </div>
          <a
            href="https://yandex.ru/maps/?text=Зубная+8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <div className="mb-4">
                <img
                  src="https://cdn.poehali.dev/files/5816825e-2a51-42e5-882e-861318d12866.png"
                  alt="ИмплаДент"
                  className="h-10 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Имплантация зубов под ключ. Гарантия 10 лет. Опытные врачи. Современное оборудование.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/impladent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 hover:border-[#5ba3c9] flex items-center justify-center text-white/60 hover:text-[#5ba3c9] transition-colors"
                  aria-label="Telegram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.12 14.051 4.16 13.14c-.65-.204-.663-.65.136-.962l10.879-4.192c.538-.194 1.01.131.387.262z"/>
                  </svg>
                </a>
                <a
                  href="https://vk.com/impladent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 hover:border-[#5ba3c9] flex items-center justify-center text-white/60 hover:text-[#5ba3c9] transition-colors"
                  aria-label="ВКонтакте"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.585-1.496c.598-.19 1.365 1.26 2.179 1.818.615.422 1.083.33 1.083.33l2.175-.03s1.137-.071.598-1.611c-.044-.12-.314-.66-1.614-1.866-1.36-1.26-1.178-1.057.46-3.238.999-1.329 1.399-2.142 1.274-2.49-.12-.332-.85-.244-.85-.244l-2.45.015s-.182-.025-.317.056c-.132.08-.217.267-.217.267s-.386 1.028-.903 1.903c-1.088 1.848-1.524 1.946-1.703 1.831-.414-.267-.31-1.073-.31-1.646 0-1.79.271-2.535-.528-2.727-.265-.064-.46-.106-1.137-.113-.869-.01-1.605.002-2.02.206-.277.136-.49.44-.36.457.161.02.527.099.721.363.25.343.241 1.112.241 1.112s.144 2.108-.336 2.369c-.33.178-.783-.185-1.755-1.846-.498-.861-.875-1.814-.875-1.814s-.072-.181-.202-.278c-.157-.117-.377-.154-.377-.154l-2.327.015s-.35.01-.478.162c-.114.135-.009.415-.009.415s1.826 4.27 3.891 6.423c1.896 1.975 4.048 1.845 4.048 1.845h.975z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant', serif" }}>Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} className="text-[#5ba3c9] mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{CLINIC_ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Phone" size={16} className="text-[#5ba3c9] flex-shrink-0" />
                  <a href={`tel:${CLINIC_PHONE_RAW}`} className="text-white/60 text-sm hover:text-[#5ba3c9] transition-colors">{CLINIC_PHONE}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" size={16} className="text-[#5ba3c9] flex-shrink-0" />
                  <a href={`mailto:${CLINIC_EMAIL}`} className="text-white/60 text-sm hover:text-[#5ba3c9] transition-colors">{CLINIC_EMAIL}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Clock" size={16} className="text-[#5ba3c9] flex-shrink-0" />
                  <span className="text-white/60 text-sm">{CLINIC_HOURS}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-5" style={{ fontFamily: "'Cormorant', serif" }}>Навигация</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                      className="text-white/50 text-sm hover:text-[#5ba3c9] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-white/30 text-xs">© 2025 ИмплаДент. Все права защищены.</span>
            <span className="text-white/20 text-xs">Лицензия Министерства здравоохранения № ЛО-00-01-XXXXX</span>
          </div>
        </div>
      </footer>
    </>
  );
}
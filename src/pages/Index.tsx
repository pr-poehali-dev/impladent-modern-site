import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const CLINIC_PHONE = "+7 (845) 999-99-99";
const CLINIC_PHONE_RAW = "+78459999999";
const CLINIC_ADDRESS = "ул. Зубная, 8 (вход со стороны двора)";
const CLINIC_EMAIL = "impladent@mail.ru";
const CLINIC_HOURS = "Ежедневно с 9:00 до 21:00";

const HERO_IMG = "https://cdn.poehali.dev/projects/b843fd86-486b-46cf-bdcb-e269adbcce1c/files/28f69fc2-a9a2-4426-a7fd-b450459a3482.jpg";
const DOCTOR_MALE = "https://cdn.poehali.dev/projects/b843fd86-486b-46cf-bdcb-e269adbcce1c/files/fc9942cf-8e23-4bc8-a18b-6fe0d880f7d2.jpg";
const DOCTOR_FEMALE = "https://cdn.poehali.dev/projects/b843fd86-486b-46cf-bdcb-e269adbcce1c/files/8b782d93-f1f1-4154-918c-ce1272bcac60.jpg";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О клинике", href: "#about" },
  { label: "Врачи", href: "#doctors" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
  { label: "Как добраться", href: "#map" },
];

const services = [
  {
    icon: "Zap",
    title: "Классическая имплантация",
    desc: "Восстановление одного или нескольких зубов с помощью титановых имплантатов. Натуральный результат на десятилетия.",
    price: "от 35 000 ₽",
  },
  {
    icon: "Star",
    title: "All-on-4",
    desc: "Полное восстановление челюсти всего на 4 имплантатах за один день. Уйдёте из клиники с красивой улыбкой.",
    price: "от 180 000 ₽",
  },
  {
    icon: "Shield",
    title: "Металлокерамические коронки",
    desc: "Надёжные и долговечные коронки на металлической основе с керамическим покрытием. Оптимальное соотношение цены и качества.",
    price: "от 8 000 ₽",
  },
  {
    icon: "Gem",
    title: "Коронки из диоксида циркония",
    desc: "Премиальные коронки без металла — прочные, гипоаллергенные, неотличимые от натурального зуба.",
    price: "от 18 000 ₽",
  },
];

const doctors = [
  {
    img: DOCTOR_MALE,
    name: "Андрей Сергеевич Морозов",
    spec: "Хирург-имплантолог",
    bio: "Опыт работы 17 лет. Специализация — сложные имплантации и костная пластика. Стажировки в Германии и Израиле. Более 3 000 успешных операций.",
  },
  {
    img: DOCTOR_FEMALE,
    name: "Елена Викторовна Соколова",
    spec: "Ортопед-протезист",
    bio: "14 лет в профессии. Эксперт в области протезирования на имплантатах и реставрации зубов с применением материалов премиум-класса.",
  },
  {
    img: DOCTOR_MALE,
    name: "Дмитрий Олегович Краснов",
    spec: "Хирург-имплантолог",
    bio: "12 лет практики. Владеет методикой All-on-4 и All-on-6. Сертифицированный специалист Nobel Biocare и Straumann.",
  },
  {
    img: DOCTOR_FEMALE,
    name: "Наталья Игоревна Белова",
    spec: "Стоматолог-ортопед",
    bio: "10 лет опыта. Специализируется на эстетическом протезировании и восстановлении улыбки с помощью циркониевых коронок и виниров.",
  },
  {
    img: DOCTOR_MALE,
    name: "Игорь Павлович Зайцев",
    spec: "Челюстно-лицевой хирург",
    bio: "18 лет практики. Ведущий специалист клиники. Выполняет сложные операции при дефиците костной ткани, синус-лифтинг, костную пластику.",
  },
];

const reviews = [
  {
    name: "Ольга Петрова",
    source: "Яндекс Карты",
    text: "Делала имплантацию верхнего ряда по методике All-on-4. Уже на следующий день вышла на работу с красивой улыбкой! Врач Морозов — профессионал высшего класса. Боли практически не было. Спасибо!",
    date: "15 марта 2025",
    handwritten: false,
  },
  {
    name: "Виктор Семёнов",
    source: "Google",
    text: "Сделал 3 имплантата. Всё прошло чисто и профессионально. Особенно понравилась диагностика — 3D-томография, всё объяснили на компьютере. Через 4 месяца поставили циркониевые коронки. Отличный результат.",
    date: "2 февраля 2025",
    handwritten: false,
  },
  {
    name: "Марина Козлова",
    source: "Яндекс Карты",
    text: "Долго боялась имплантации, но здесь меня убедили — бесплатная консультация, план без навязывания. Операция прошла быстро, почти безболезненно. Теперь улыбаюсь во весь рот!",
    date: "28 января 2025",
    handwritten: false,
  },
  {
    name: "Алексей Новиков",
    source: "Google",
    text: "Приехал по рекомендации. Заменил 4 металлокерамических коронки на циркониевые. Разница колоссальная — выглядит абсолютно естественно. Клиника современная, персонал вежливый.",
    date: "10 декабря 2024",
    handwritten: false,
  },
  {
    name: "Татьяна Орлова",
    source: "Яндекс Карты",
    text: "Была в нескольких клиниках, только здесь предложили оптимальное решение за разумные деньги. Врач Соколова очень внимательная. Уже через год после имплантации — полный комфорт.",
    date: "5 ноября 2024",
    handwritten: false,
  },
  {
    name: "Иван Громов",
    source: "Рукописный отзыв",
    text: "Огромное спасибо всему коллективу клиники ИмплаДент! Наконец-то нашёл место, где делают по-настоящему качественно. Имплант прижился отлично, коронка как родная. Буду рекомендовать всем знакомым!",
    date: "Декабрь 2024",
    handwritten: true,
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const items = el.querySelectorAll(".reveal");
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const aboutRef = useReveal();
  const servicesRef = useReveal();
  const doctorsRef = useReveal();
  const reviewsRef = useReveal();
  const contactsRef = useReveal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* ─── HEADER ─── */}
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

      {/* ─── HERO ─── */}
      <section id="home" className="pt-16 lg:pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Клиника ИмплаДент" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e4a]/92 via-[#1a2e4a]/72 to-[#1a2e4a]/25" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#c9963a]" />
              <span className="text-white/90 text-xs tracking-widest uppercase font-medium">Стоматологическая клиника</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
              Имплантация
              <br />
              <span className="text-[#c9963a] italic">под ключ</span>
              <br />
              за 1 день
            </h1>

            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="h-px bg-[#c9963a] w-10" />
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
                className="inline-flex items-center justify-center gap-2 bg-[#c9963a] hover:bg-[#b8852e] text-white font-semibold px-8 py-4 transition-colors duration-200"
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
                  <div className="text-3xl font-bold text-[#c9963a]" style={{ fontFamily: "'Cormorant', serif" }}>{s.num}</div>
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
              <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1a2e4a] mt-2 mb-6 leading-tight" style={{ fontFamily: "'Cormorant', serif" }}>
                Лучшее оборудование.<br />
                <span className="italic text-[#c9963a]">Опытные руки.</span>
              </h2>
              <p className="reveal reveal-delay-2 text-[#6b7f93] text-base lg:text-lg leading-relaxed mb-5">
                ИмплаДент — клиника нового поколения, где высокие технологии встречаются с многолетним опытом.
                Наши хирурги работают в имплантологии от 10 до 18 лет, прошли стажировки в Германии, Израиле и Швейцарии.
              </p>
              <p className="reveal reveal-delay-3 text-[#6b7f93] text-base lg:text-lg leading-relaxed">
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
                      <Icon name={item.icon} size={16} className="text-[#c9963a]" />
                    </div>
                    <span className="text-[#1a2e4a] text-sm font-medium leading-snug pt-1">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2 relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={HERO_IMG} alt="Клиника" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c9963a] -z-10" />
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
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1a2e4a] mt-2" style={{ fontFamily: "'Cormorant', serif" }}>
              Всё для вашей улыбки
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i + 1} group border border-gray-200 p-6 lg:p-8 hover:border-[#c9963a] hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className="w-12 h-12 bg-[#f5f7fa] group-hover:bg-[#c9963a] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon name={s.icon} size={22} className="text-[#c9963a] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2e4a] mb-2 leading-tight" style={{ fontFamily: "'Cormorant', serif" }}>{s.title}</h3>
                <p className="text-[#6b7f93] text-sm leading-relaxed flex-1 mb-4">{s.desc}</p>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="font-bold text-[#1a2e4a] text-base">{s.price}</span>
                  <button className="text-xs font-semibold text-[#c9963a] hover:text-[#1a2e4a] transition-colors uppercase tracking-wide">
                    Подробнее →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── DOCTORS ─── */}
      <section id="doctors" className="py-20 lg:py-28 bg-[#f5f7fa]">
        <div ref={doctorsRef} className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <div className="reveal inline-block gold-line">
              <span className="text-xs tracking-widest uppercase text-[#6b7f93] font-medium">Специалисты</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1a2e4a] mt-2" style={{ fontFamily: "'Cormorant', serif" }}>
              Наши врачи
            </h2>
            <p className="reveal reveal-delay-2 text-[#6b7f93] mt-3 max-w-xl mx-auto">
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
                  <h3 className="font-bold text-[#1a2e4a] text-base leading-tight mb-1" style={{ fontFamily: "'Cormorant', serif" }}>{d.name}</h3>
                  <div className="text-[#c9963a] text-xs font-semibold uppercase tracking-wide mb-2">{d.spec}</div>
                  <p className="text-[#6b7f93] text-xs leading-relaxed">{d.bio}</p>
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
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-[#1a2e4a] mt-2" style={{ fontFamily: "'Cormorant', serif" }}>
              Что говорят о нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`reveal reveal-delay-${i + 1} border p-6 hover:shadow-md transition-shadow duration-300 ${
                  r.handwritten ? "border-[#c9963a] bg-[#fdf9f2]" : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[#f5a623] text-lg tracking-widest">★★★★★</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-1 ${
                    r.handwritten ? "bg-[#c9963a] text-white" : "bg-[#f5f7fa] text-[#6b7f93]"
                  }`}>
                    {r.source}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    r.handwritten ? "text-[#1a2e4a] text-base" : "text-[#6b7f93]"
                  }`}
                  style={r.handwritten ? { fontFamily: "'Caveat', cursive" } : {}}
                >
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 bg-[#1a2e4a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a2e4a] text-sm">{r.name}</div>
                    <div className="text-[#6b7f93] text-xs">{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section id="contacts" className="py-20 lg:py-28 bg-[#1a2e4a]">
        <div ref={contactsRef} className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="reveal flex justify-center mb-4">
              <div className="w-12 h-0.5 bg-[#c9963a]" />
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
              Запишитесь на<br />
              <span className="italic text-[#c9963a]">бесплатную консультацию</span>
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
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-4 focus:outline-none focus:border-[#c9963a] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-4 focus:outline-none focus:border-[#c9963a] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#c9963a] hover:bg-[#b8852e] text-white font-semibold px-8 py-4 transition-colors duration-200 whitespace-nowrap"
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
      <footer id="map" className="bg-[#111d2b]">
        <div className="w-full h-64 bg-[#1a2e4a] flex items-center justify-center relative overflow-hidden cursor-pointer group">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="text-center z-10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-[#c9963a] flex items-center justify-center mx-auto mb-3">
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#c9963a] flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Cormorant', serif" }}>И</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-white" style={{ fontFamily: "'Cormorant', serif" }}>ИмплаДент</div>
                  <div className="text-[10px] text-white/40 tracking-widest uppercase">Стоматологическая клиника</div>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Имплантация зубов под ключ. Гарантия 10 лет. Опытные врачи. Современное оборудование.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/impladent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 hover:border-[#c9963a] flex items-center justify-center text-white/60 hover:text-[#c9963a] transition-colors"
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
                  className="w-10 h-10 border border-white/20 hover:border-[#c9963a] flex items-center justify-center text-white/60 hover:text-[#c9963a] transition-colors"
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
                  <Icon name="MapPin" size={16} className="text-[#c9963a] mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{CLINIC_ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Phone" size={16} className="text-[#c9963a] flex-shrink-0" />
                  <a href={`tel:${CLINIC_PHONE_RAW}`} className="text-white/60 text-sm hover:text-[#c9963a] transition-colors">{CLINIC_PHONE}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" size={16} className="text-[#c9963a] flex-shrink-0" />
                  <a href={`mailto:${CLINIC_EMAIL}`} className="text-white/60 text-sm hover:text-[#c9963a] transition-colors">{CLINIC_EMAIL}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Clock" size={16} className="text-[#c9963a] flex-shrink-0" />
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
                      className="text-white/50 text-sm hover:text-[#c9963a] transition-colors"
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

      {/* Floating phone button */}
      <a
        href={`tel:${CLINIC_PHONE_RAW}`}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#c9963a] hover:bg-[#b8852e] flex items-center justify-center shadow-2xl transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Icon name="Phone" size={22} className="text-white" />
      </a>
    </div>
  );
}

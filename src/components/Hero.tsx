interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "Body Therapy & Psychology",
    subtitle: "Working with codependency and inner grounding",
    description: "A safe space where you reconnect with your body, find your inner support, and build healthy relationships",
    cta: "Book a Consultation",
    price: "Consultation — 3,000 ₽",
  },
  de: {
    title: "Körpertherapie & Psychologie",
    subtitle: "Arbeit mit Koabhängigkeit und innerer Verankerung",
    description: "Ein sicherer Raum, in dem Sie sich mit Ihrem Körper verbinden und gesunde Beziehungen aufbauen",
    cta: "Beratung buchen",
    price: "Beratung — 3.000 ₽",
  },
  ru: {
    title: "Телесная терапия",
    subtitle: "Работа с созависимостью и опорой в себе",
    description: "Безопасное пространство, где вы заново встречаетесь с собой, находите внутреннюю опору и выстраиваете здоровые отношения",
    cta: "Записаться на консультацию",
    price: "Консультация — 3 000 ₽",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/d91b2ad5-c443-4d26-931c-a3d6914ae157/files/517cca37-347e-4a49-9d70-01f8b2dc31a1.jpg"
          alt="Therapy room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 animate-fade-in-up">{t.title}</h1>
          <h3 className="text-white font-light mb-8 animate-fade-in-up animation-delay-100">{t.subtitle}</h3>
          <div className="line-accent mb-10 animate-fade-in-up animation-delay-200"></div>
          <p className="text-white font-light max-w-2xl mb-8 animate-fade-in-up animation-delay-300">{t.description}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="bg-gold text-charcoal px-8 py-3 font-medium hover:bg-gold/90 transition-colors duration-300"
            >
              {t.cta}
            </a>
            <span className="text-white/80 text-sm">{t.price}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

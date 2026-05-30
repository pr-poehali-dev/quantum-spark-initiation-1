interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "How I Work",
    learnMore: "Learn More",
    price: "3,000 ₽",
    duration: "60 min",
    format: "Format",
    cost: "Cost",
    bookBtn: "Book Now",
  },
  de: {
    heading: "Wie ich arbeite",
    learnMore: "Mehr erfahren",
    price: "3.000 ₽",
    duration: "60 Min.",
    format: "Format",
    cost: "Kosten",
    bookBtn: "Jetzt buchen",
  },
  ru: {
    heading: "Как я работаю",
    learnMore: "Подробнее",
    price: "3 000 ₽",
    duration: "60 мин",
    format: "Формат",
    cost: "Стоимость",
    bookBtn: "Записаться",
  },
}

const services = {
  en: [
    {
      title: "Individual Consultation",
      description: "One-on-one session focused on your request — codependency, boundaries, inner grounding, or relationships",
      format: "Online / In person",
      duration: "60 min",
      price: "3,000 ₽",
    },
    {
      title: "Body-Awareness Session",
      description: "Working with the body: locating tension, emotions, and resources through gentle somatic practices",
      format: "Online / In person",
      duration: "60 min",
      price: "3,000 ₽",
    },
    {
      title: "Codependency Work",
      description: "A series of sessions to explore and transform codependent patterns in relationships",
      format: "Online / In person",
      duration: "60 min",
      price: "3,000 ₽",
    },
  ],
  de: [
    {
      title: "Einzelberatung",
      description: "Einzelsitzung, die sich auf Ihren Bedarf konzentriert — Koabhängigkeit, Grenzen oder innere Verankerung",
      format: "Online / Persönlich",
      duration: "60 Min.",
      price: "3.000 ₽",
    },
    {
      title: "Körperbewusstseinssitzung",
      description: "Arbeit mit dem Körper: Spannungen, Emotionen und Ressourcen durch sanfte somatische Praktiken",
      format: "Online / Persönlich",
      duration: "60 Min.",
      price: "3.000 ₽",
    },
    {
      title: "Koabhängigkeitsarbeit",
      description: "Eine Reihe von Sitzungen zur Erkundung und Transformation koabhängiger Muster",
      format: "Online / Persönlich",
      duration: "60 Min.",
      price: "3.000 ₽",
    },
  ],
  ru: [
    {
      title: "Индивидуальная консультация",
      description: "Личная встреча, сфокусированная на вашем запросе — созависимость, границы, опора в себе или отношения",
      format: "Онлайн / Очно",
      duration: "60 мин",
      price: "3 000 ₽",
    },
    {
      title: "Сессия телесного осознавания",
      description: "Работа с телом: обнаружение напряжений, эмоций и ресурсов через мягкие соматические практики",
      format: "Онлайн / Очно",
      duration: "60 мин",
      price: "3 000 ₽",
    },
    {
      title: "Работа с созависимостью",
      description: "Серия сессий для исследования и трансформации созависимых паттернов в отношениях",
      format: "Онлайн / Очно",
      duration: "60 мин",
      price: "3 000 ₽",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const serviceList = services[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <small className="text-taupe uppercase tracking-wider text-xs mb-2 block">{t.cost}</small>
                  <h3 className="text-charcoal mb-1">{service.price}</h3>
                  <small className="text-taupe">{service.duration}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-2">{service.title}</h3>
                  <p className="text-charcoal/70 mb-1">{service.description}</p>
                  <small className="text-taupe">{service.format}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <a href="#contact" className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.bookBtn} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

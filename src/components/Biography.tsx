interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Anastasia Mitaeva",
    subheading: "Body Therapist & Psychologist",
    paragraphs: [
      "I am a psychologist specializing in body-oriented therapy. My work focuses on two key areas: codependency and finding your inner ground — that stable sense of self that helps you navigate life with confidence.",
      "Body therapy is based on the understanding that our emotions, fears, and patterns of behavior live not only in our minds but also in our bodies. Through gentle body-awareness practices, we learn to hear the signals our body sends us and transform them into a resource.",
      "Codependency often manifests as an excessive focus on others — their moods, needs, and approval — at the expense of losing yourself. Together we explore these patterns, understand their roots, and gradually build a new way of relating: first to yourself, then to the world.",
      "Finding your inner ground is the ability to rely on yourself even in difficult moments. This is not about isolation, but about having a stable inner core from which genuine closeness with others becomes possible.",
      "I work with adults individually. Each session is a confidential space where you can be honest with yourself and explore what has long needed attention.",
    ],
  },
  de: {
    heading: "Anastasia Mitaeva",
    subheading: "Körpertherapeutin & Psychologin",
    paragraphs: [
      "Ich bin Psychologin und spezialisiert auf körperorientierte Therapie. Meine Arbeit konzentriert sich auf zwei Schlüsselbereiche: Koabhängigkeit und das Finden der inneren Verankerung.",
      "Körpertherapie basiert auf dem Verständnis, dass unsere Emotionen, Ängste und Verhaltensmuster nicht nur in unserem Geist, sondern auch in unserem Körper leben.",
      "Koabhängigkeit manifestiert sich oft als übermässiger Fokus auf andere — ihre Stimmungen, Bedürfnisse und Zustimmung — auf Kosten des Verlusts von sich selbst.",
      "Die innere Verankerung zu finden bedeutet, sich auch in schwierigen Momenten auf sich selbst verlassen zu können. Das ist nicht Isolation, sondern ein stabiler innerer Kern.",
      "Ich arbeite individuell mit Erwachsenen. Jede Sitzung ist ein vertraulicher Raum, in dem Sie ehrlich mit sich selbst sein können.",
    ],
  },
  ru: {
    heading: "Митаева Анастасия",
    subheading: "Телесный терапевт · Психолог",
    paragraphs: [
      "Я — психолог, специализирующийся на телесной терапии. Сама прошла путь выхода из созависимых отношений и знаю изнутри, как это — когда теряешь себя рядом с другим человеком. Сегодня я воспитываю дочь и опираюсь на себя — и именно этому помогаю своим клиентам.",
      "Моя работа сосредоточена в двух ключевых направлениях: созависимость и поиск опоры в себе — того устойчивого ощущения себя, которое помогает уверенно идти по жизни.",
      "Телесная терапия основана на понимании, что наши эмоции, страхи и поведенческие паттерны живут не только в уме, но и в теле. Через мягкие практики телесного осознавания мы учимся слышать сигналы, которые подаёт нам тело, и превращать их в ресурс.",
      "Созависимость часто проявляется как чрезмерная сосредоточенность на другом человеке — его настроении, потребностях, одобрении — в ущерб потере себя. Вместе мы исследуем эти паттерны, понимаем их корни и постепенно выстраиваем новый способ быть: сначала с собой, затем с миром.",
      "Я работаю со взрослыми индивидуально. Каждая сессия — это конфиденциальное пространство, где можно быть честным с собой и исследовать то, что давно просит внимания.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Photo */}
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/d91b2ad5-c443-4d26-931c-a3d6914ae157/bucket/9693913a-4089-4d3d-87c1-9532e82beed0.jpeg"
              alt="Митаева Анастасия"
              className="w-full object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-charcoal mb-2">{t.heading}</h2>
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-10">{t.subheading}</p>
            <div className="line-accent mb-10"></div>
            <div className="space-y-6">
              {t.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-charcoal/90 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
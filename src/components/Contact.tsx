import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Contact",
    subheading: "Book a consultation or ask a question",
    email: "Email",
    phone: "Phone",
    message: "Your request",
    send: "Send Message",
    location: "Session format",
    name: "Your name",
    successMessage: "Your message has been sent! I will get back to you soon.",
    locationValue: "Online / In person",
    phoneValue: "+7 (000) 000-00-00",
    messagePlaceholder: "Tell me briefly about what brought you here and what you'd like to work on",
  },
  de: {
    heading: "Kontakt",
    subheading: "Buchen Sie eine Beratung oder stellen Sie eine Frage",
    email: "E-Mail",
    phone: "Telefon",
    message: "Ihr Anliegen",
    send: "Nachricht senden",
    location: "Sitzungsformat",
    name: "Ihr Name",
    successMessage: "Ihre Nachricht wurde gesendet! Ich melde mich bald bei Ihnen.",
    locationValue: "Online / Persönlich",
    phoneValue: "+7 (000) 000-00-00",
    messagePlaceholder: "Erzählen Sie mir kurz, was Sie hierher geführt hat",
  },
  ru: {
    heading: "Запись",
    subheading: "Запишитесь на консультацию или задайте вопрос",
    email: "Эл. почта",
    phone: "Телефон",
    message: "Ваш запрос",
    send: "Отправить",
    location: "Формат работы",
    name: "Ваше имя",
    successMessage: "Сообщение отправлено! Я свяжусь с вами в ближайшее время.",
    locationValue: "Онлайн / Очно",
    phoneValue: "+7 (000) 000-00-00",
    messagePlaceholder: "Расскажите кратко, что привело вас сюда и с чем хотите поработать",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:hello@example.com?subject=${encodeURIComponent(`Запись на консультацию от ${formData.name}`)}&body=${encodeURIComponent(`От: ${formData.email}\n\nЗапрос:\n${formData.message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.email}</small>
              <p className="text-charcoal">hello@example.com</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.phone}</small>
              <p className="text-charcoal">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
            </div>
            <div className="pt-4 border-t border-taupe/20">
              <p className="text-charcoal font-medium text-lg">3 000 ₽</p>
              <small className="text-taupe">за консультацию · 60 минут</small>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            {submitted && (
              <div className="p-4 bg-gold/10 border border-gold/20 text-charcoal rounded text-sm">
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder={t.messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-warm-white py-3 font-medium hover:bg-charcoal/90 transition-colors duration-300"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

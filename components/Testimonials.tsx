// File: components/Testimonials.tsx

import { useEffect, useState } from 'react'

const quotesList = [
  "“Fantastic job! My lawn has never looked better.” — Michelle T.",
  "“They’re always on time and treat my yard like their own.” — Jason R.",
  "“Highly professional and very friendly crew.” — Laura G.",
  "“Affordable and reliable—can't ask for more.” — Darnell F.",
  "“I recommend them to all my neighbors.” — Rachel C.",
]

export default function Testimonials() {
  const [visibleQuotes, setVisibleQuotes] = useState<string[]>([])

  useEffect(() => {
    const showQuotes = () => {
      const count = Math.floor(Math.random() * 2) + 2
      const shuffled = [...quotesList].sort(() => 0.5 - Math.random())
      setVisibleQuotes(shuffled.slice(0, count))
    }

    showQuotes()
    const interval = setInterval(showQuotes, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="bg-dark text-accent py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-6 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 relative z-10">
          {visibleQuotes.map((quote, index) => (
            <blockquote key={index} className="bg-card p-6 rounded shadow text-left testimonial-quote animate-fade-in">
              <p className="text-lg text-muted">{quote}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

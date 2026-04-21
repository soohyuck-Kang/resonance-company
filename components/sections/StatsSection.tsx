'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 49383, suffix: '+', label: 'Influencer DB' },
  { value: 34, suffix: '%', label: 'Avg. Response Rate' },
  { value: 9.1, suffix: 'M', label: 'Max Campaign Reach' },
  { value: 24, suffix: 'h', label: 'Reply Guaranteed' },
]

function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const isFloat = target % 1 !== 0
    const startTime = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(isFloat ? +(target * eased).toFixed(1) : Math.floor(target * eased))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [start, target, duration])
  return count
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setTriggered(true)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
        }
      }),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-black px-6 md:px-16 lg:px-24 py-32 border-t border-gray-900" id="stats">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-24 reveal" data-reveal>
          <span className="w-6 h-px bg-neon-green" />
          <span className="text-neon-green text-xs tracking-[0.35em] uppercase">Numbers</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => {
            const count = useCounter(s.value, 1800, triggered)
            return (
              <div
                key={s.label}
                className="border-t border-gray-800 pt-8 pr-8 pb-8 reveal"
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-display font-black text-5xl md:text-6xl text-neon-green leading-none mb-3">
                  {count}{s.suffix}
                </p>
                <p className="text-gray-500 text-sm tracking-wide">{s.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-24 pt-16 border-t border-gray-900 reveal" data-reveal>
          <p className="text-gray-700 text-xs tracking-[0.35em] uppercase mb-8">Markets</p>
          <div className="flex gap-6 flex-wrap">
            {['🇺🇸 United States', '🇦🇺 Australia'].map((m) => (
              <span key={m} className="text-white/60 text-sm border border-gray-800 px-5 py-2.5 hover:border-neon-green hover:text-white transition-all duration-300">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

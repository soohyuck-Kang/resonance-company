'use client'

import { useEffect, useRef } from 'react'

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
          e.target.querySelectorAll('.reveal-line').forEach((el) => el.classList.add('visible'))
        }
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-black border-t border-gray-900" id="contact">

      {/* Contact */}
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-28">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-24 reveal" data-reveal>
            <span className="w-6 h-px bg-neon-green" />
            <span className="text-neon-green text-xs tracking-[0.35em] uppercase">Contact</span>
          </div>

          <div className="mb-16 reveal" data-reveal>
            <h2 className="font-display font-black leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 9vw, 11rem)' }}>
              Let's work<br />
              <span className="text-neon-green">together.</span>
            </h2>
          </div>

          <p className="text-white/30 text-lg font-light mb-6 max-w-sm reveal" data-reveal>
            Share your brand, product, and target market. We'll send a curated sample list — free, within 24 hours.
          </p>

          <div className="mb-20 reveal" data-reveal>
            <div className="h-px bg-neon-green reveal-line" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-24 reveal" data-reveal>
            <a
              href="mailto:contact@rsnc.co.kr?subject=Sample List Request&body=Brand:%0D%0AProduct:%0D%0ATarget Market:%0D%0ACategory:"
              className="btn-primary text-base px-10 py-5"
            >
              Request Free Sample
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="mailto:contact@rsnc.co.kr?subject=Inquiry" className="btn-secondary text-base px-10 py-5">
              General Inquiry
            </a>
          </div>

          <div className="flex flex-wrap gap-8 reveal" data-reveal>
            {['Reply within 24h', 'Free sample list', 'No commitment'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-neon-green">✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="font-display font-black text-xl tracking-tight">team resonance</span>
          <a href="mailto:contact@rsnc.co.kr" className="text-gray-700 text-sm hover:text-neon-green transition-colors">
            contact@rsnc.co.kr
          </a>
          <p className="text-gray-800 text-xs">© 2026 team resonance.</p>
        </div>
      </div>
    </section>
  )
}

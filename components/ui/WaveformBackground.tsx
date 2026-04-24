'use client'

interface WaveformBackgroundProps {
  mousePosition: { x: number; y: number }
}

export default function WaveformBackground({ mousePosition: _ }: WaveformBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.85, filter: 'saturate(1.4) brightness(1.05)' }}
        src="/hero-bright.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* 가장자리 페이드 */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(255,255,255,0.4) 100%)' }}
      />
      {/* 상하 페이드 */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/30 via-transparent to-white/60" />
    </div>
  )
}
